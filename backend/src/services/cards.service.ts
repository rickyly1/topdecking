import { db } from '../db/index';
import { cards, cardMonsterTypes, monsterTypes } from '../db/schema';
import { eq, ilike, and, SQL } from 'drizzle-orm';
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
    return await db.select().from(cards);
  }

  // Get card by ID
  async getCardById(id: string) {
    const result = await db
      .select()
      .from(cards)
      .leftJoin(cardMonsterTypes, eq(cards.id, cardMonsterTypes.cardId))
      .leftJoin(monsterTypes, eq(cardMonsterTypes.monsterTypeId, monsterTypes.id))
      .where(eq(cards.id, Number(id)));
      
    if (!result.length) throw new NotFoundError(`Card with id ${id} not found`);

    const cardData = result[0].cards;
    const monsterTypeNames = result
      .filter(r => r.monster_types?.name)
      .map(r => r.monster_types!.name);

    return { ...cardData, monsterTypes: monsterTypeNames };
  }

  // Search cards
  async searchCards(
    filters: CardSearchFilters, // Search filters
    options?: { // Pagination parameters
      limit?: number; 
      offset?: number; 
  }) {
    const conditions: SQL[] = [];
    if (filters.name) conditions.push(ilike(cards.name, `%${filters.name}%`));
    if (filters.description) conditions.push(ilike(cards.description, `%${filters.description}%`));
    if (filters.attribute) conditions.push(eq(cards.attribute, filters.attribute as any));
    if (filters.race) conditions.push(eq(cards.race, filters.race));
    if (filters.level !== undefined) conditions.push(eq(cards.level, filters.level));
    if (filters.atk !== undefined) conditions.push(eq(cards.atk, filters.atk));
    if (filters.def !== undefined) conditions.push(eq(cards.def, filters.def));
    if (filters.summonType) conditions.push(eq(cards.summonType, filters.summonType as any));
    if (filters.monsterType) conditions.push(eq(monsterTypes.name, filters.monsterType));

    let query = db
      .select()
      .from(cards)
      .leftJoin(cardMonsterTypes, eq(cards.id, cardMonsterTypes.cardId))
      .leftJoin(monsterTypes, eq(cardMonsterTypes.monsterTypeId, monsterTypes.id))
      .where(conditions.length ? and(...conditions) : undefined)
      .orderBy(cards.name)
      .$dynamic();

    if (options?.limit) query = query.limit(options.limit);
    if (options?.offset) query = query.offset(options.offset);

    const rows = await query;
    
    // Group rows by card ID since joins produce one row per monster type
    const grouped = new Map<number, any>();
    for (const row of rows) {
      const card = row.cards;
      if (!grouped.has(card.id)) {
        grouped.set(card.id, { ...card, monsterTypes: [] });
      }
      if (row.monster_types?.name) {
        grouped.get(card.id).monsterTypes.push(row.monster_types.name);
      }
    }

    const data = Array.from(grouped.values());
    return { data, count: data.length };
  }
}

export const cardsService = new CardsService();
