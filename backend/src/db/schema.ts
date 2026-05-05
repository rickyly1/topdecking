import {
  pgTable,
  serial,
  text,
  integer,
  boolean,
  timestamp,
  varchar,
  pgEnum,
} from "drizzle-orm/pg-core";

// ENUMS
export const attributeEnum = pgEnum("attribute", [
  "LIGHT",
  "DARK",
  "FIRE",
  "WATER",
  "EARTH",
  "WIND",
  "DIVINE",
  "SPELL",
  "TRAP",
]);

export const summonTypeEnum = pgEnum("summon_type", [
  "NORMAL",
  "FUSION",
  "SYNCHRO",
  "XYZ",
  "LINK",
  "RITUAL",
]);

export const deckZoneEnum = pgEnum("deck_zone", [
  "MAIN",
  "SIDE",
  "EXTRA",
]);

// USERS (Supabase Auth)
export const users = pgTable("users", {
  id: varchar("id", { length: 255 }).primaryKey(), // matches auth.uid()
  email: text("email").notNull(),
  username: text("username").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// CARDS
export const cards = pgTable("cards", {
  id: serial("id").primaryKey(),
  name: text("name").notNull().unique(),
  attribute: attributeEnum("attribute").notNull(), // enum: Light, Dark, Spell, etc.
  race: text("race"), // Dragon, Warrior, etc.
  summonType: summonTypeEnum("summon_type"), // enum: Normal, Fusion, Synchro, etc.
  level: integer("level"), // Rank and Link also stored here
  atk: integer("atk"), // Monsters only, "0" for "?"
  def: integer("def"), // Monsters only,"0" for link monsters and "?"
  description: text("description").notNull(),
  restriction: integer("restriction").notNull(), // 3, 2, 1, 0
  imageURL: text("image_url"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// MONSTER TYPE LOOKUP TABLE
export const monsterTypes = pgTable("monster_types", {
  id: serial("id").primaryKey(),
  name: text("name").notNull().unique(), // Flip, Tuner, Toon, etc.
});

// CARD ↔ MONSTER TYPE JOIN TABLE
export const cardMonsterTypes = pgTable("card_monster_types", {
  id: serial("id").primaryKey(),

  cardId: integer("card_id")
    .notNull()
    .references(() => cards.id, { onDelete: "cascade" }),

  monsterTypeId: integer("monster_type_id")
    .notNull()
    .references(() => monsterTypes.id, { onDelete: "cascade" }),
});

// USER INVENTORY
export const inventoryItems = pgTable("inventory_items", {
  id: serial("id").primaryKey(),

  userId: varchar("user_id", { length: 255 }) // foreign key to users.id
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),

  cardId: integer("card_id")
    .notNull()
    .references(() => cards.id, { onDelete: "cascade" }),

  quantity: integer("quantity").notNull().default(1),
});

// DECKS
export const decks = pgTable("decks", {
  id: serial("id").primaryKey(),
  userId: varchar("user_id", { length: 255 }) // foreign key to users.id
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  name: text("name").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// DECK CARDS
export const deckCards = pgTable("deck_cards", {
  id: serial("id").primaryKey(),

  deckId: integer("deck_id") // foreign key to decks.id
    .notNull()
    .references(() => decks.id, { onDelete: "cascade" }),

  cardId: integer("card_id") // foreign key to cards.id
    .notNull()
    .references(() => cards.id, { onDelete: "cascade" }),

  quantity: integer("quantity").notNull().default(1),

  zone: deckZoneEnum("zone").notNull().default("MAIN"),
});

// USERS
export type InsertUser = typeof users.$inferInsert;
export type SelectUser = typeof users.$inferSelect;

// CARDS
export type InsertCard = typeof cards.$inferInsert;
export type SelectCard = typeof cards.$inferSelect;

// MONSTER TYPES
export type InsertMonsterType = typeof monsterTypes.$inferInsert;
export type SelectMonsterType = typeof monsterTypes.$inferSelect;

// CARD ↔ MONSTER TYPE JOIN TABLE
export type InsertCardMonsterType = typeof cardMonsterTypes.$inferInsert;
export type SelectCardMonsterType = typeof cardMonsterTypes.$inferSelect;

// INVENTORY ITEMS
export type InsertInventoryItem = typeof inventoryItems.$inferInsert;
export type SelectInventoryItem = typeof inventoryItems.$inferSelect;

// DECKS
export type InsertDeck = typeof decks.$inferInsert;
export type SelectDeck = typeof decks.$inferSelect;

// DECK CARDS
export type InsertDeckCard = typeof deckCards.$inferInsert;
export type SelectDeckCard = typeof deckCards.$inferSelect;