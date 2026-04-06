import { supabase } from "../supabase";
import { NotFoundError } from '../utils/errors';

export type CardSearchFilters = {
  name?: string;
  description?: string;
  attribute?: string;     // LIGHT, DARK, SPELL, ETC.
  race?: string;          // DRAGON, WARRIOR, SPELLCASTER, ETC. (for monsters)
  level?: number;         // Level, Link, Rank #
  atk?: number;
  def?: number;
  summonType?: string;    // NORMAL, FUSION, SYNCHRO, ETC.
  monsterType?: string;   // FLIP, TUNER, TOON, ETC.
}

export class CardsService {
  static readonly CARD_TABLE = "cards";
  static readonly CARD_MONSTER_TYPES_TABLE = "card_monster_types";
  static readonly MONSTER_TYPES_TABLE = "monster_types";

  // Get all cards
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
      .single();

    if (error || !data) {
      throw new NotFoundError(`Card with id ${id} not found`);
    }

    return data;
  }

  // Search cards
  async searchCards(filters: CardSearchFilters) {

    let select = "*";

    if (filters.monsterType) {
      select += `, card_monster_types!inner(monster_types!inner(name))`;
    } else {
      select += `, card_monster_types(monster_types(name))`;
    }

    let query = supabase
      .from(CardsService.CARD_TABLE)
      .select(select);

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

    const { data, error } = await query;

    if (error) {
      throw new Error(error.message);
    }

    return data;
  }
}
export const cardsService = new CardsService();
