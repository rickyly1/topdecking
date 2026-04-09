import { supabase } from "../supabase";
import { NotFoundError } from '../utils/errors';

export type CardSearchFilters = {
  name?: string;
  description?: string;
  attribute?: string;     // LIGHT, DARK, SPELL, ETC.
  race?: string;          // DRAGON, WARRIOR, SPELLCASTER, ETC. (for monsters)
  level?: number;         // Level, Link, Rank #
  atk?: number;           // Set to 0 for "?"
  def?: number;           // Set to 0 for "?" and for Link Monsters
  summonType?: string;    // NORMAL, FUSION, SYNCHRO, ETC.
  monsterType?: string;   // FLIP, TUNER, TOON, ETC.
}

export class CardsService {
  // Table names as constants
  static readonly CARD_TABLE = "cards";
  static readonly CARD_MONSTER_TYPES_TABLE = "card_monster_types";
  static readonly MONSTER_TYPES_TABLE = "monster_types";

  // Get all cards (no filters or pagination)
  async getAllCards() {
    const { data, error } = await supabase
      .from(CardsService.CARD_TABLE)
      .select();

    if (error) {
      throw new Error(error.message);
    }

    return data;
  }

  // Get card by ID
  async getCardById(id: string) {
    const { data, error } = await supabase
      .from(CardsService.CARD_TABLE)
      .select()
      .eq("id", id)
      .single(); // Expect a single result

    if (error || !data) {
      throw new NotFoundError(`Card with id ${id} not found`);
    }

    return this.flattenMonsterTypes(data);
  }

  // Helper function flattens monsterType field
  private flattenMonsterTypes(card: any) {
    const { card_monster_types = [], ...rest } = card;

    const monsterTypes = card_monster_types.map(
      (entry: any) => entry.monster_types.name
    );

    return {
      ...rest,
      monsterTypes,
    };
  }

  // Search cards
  async searchCards(
    filters: CardSearchFilters, // Search filters
    options?: { // Pagination parameters
      limit?: number; 
      offset?: number; 
  }) {

    let select = "*";

    if (filters.monsterType) {
      select += `, card_monster_types!inner(monster_types!inner(name))`; // INNER JOIN when filtering with monster type
    } else {
      select += `, card_monster_types(monster_types(name))`; // LEFT JOIN when not filtering with monster type; still returns monster types if available
    }

    let query = supabase
      .from(CardsService.CARD_TABLE)
      .select(select, { count: "exact" }); // return set of cards with "select" and total count for pagination purposes

    // Apply filters to query, undefined parameters are ignored
    if (filters.name) {
      query = query.ilike("name", `%${filters.name}%`);
    }

    if (filters.description) {
      query = query.ilike("description", `%${filters.description}%`);
    }

    if (filters.attribute) {
      query = query.eq("attribute", filters.attribute);
    }

    if (filters.race) {
      query = query.eq("race", filters.race);
    }

    if (filters.level !== undefined) {
      query = query.eq("level", filters.level);
    }

    if (filters.atk !== undefined) {
      query = query.eq("atk", filters.atk);
    }

    if (filters.def !== undefined) {
      query = query.eq("def", filters.def);
    }

    if (filters.summonType) {
      query = query.eq("summon_type", filters.summonType);
    }

    if (filters.monsterType) {
      query = query.eq("monster_types.name", filters.monsterType);
    }

    // Sort query results alphabetically ascending
    query = query.order("name", { ascending: true });

    // Apply limit (number of rows per page)
    if (options?.limit !== undefined) {
      query = query.limit(options.limit);
    }

    // Apply offset (number of rows to skip, derived from the page number)
    if (options?.offset !== undefined) {
      const from = options.offset;
      const to = options.limit
        ? options.offset + options.limit - 1
        : options.offset + 19; // default 20 rows if limit missing

      query = query.range(from, to);
    }

    const { data, error, count } = await query;

    if (error) {
      throw new Error(error.message);
    }

    return { data: data.map((card: any) => this.flattenMonsterTypes(card)), count };
  }
}

export const cardsService = new CardsService();
