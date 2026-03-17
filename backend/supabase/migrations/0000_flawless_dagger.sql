CREATE TYPE "public"."attribute" AS ENUM('LIGHT', 'DARK', 'FIRE', 'WATER', 'EARTH', 'WIND', 'DIVINE', 'SPELL', 'TRAP');--> statement-breakpoint
CREATE TYPE "public"."deck_zone" AS ENUM('MAIN', 'SIDE', 'EXTRA');--> statement-breakpoint
CREATE TYPE "public"."summon_type" AS ENUM('NORMAL', 'FUSION', 'SYNCHRO', 'XYZ', 'LINK', 'RITUAL');--> statement-breakpoint
CREATE TABLE "card_monster_types" (
	"id" serial PRIMARY KEY NOT NULL,
	"card_id" integer NOT NULL,
	"monster_type_id" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE "cards" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"attribute" "attribute" NOT NULL,
	"race" text,
	"summon_type" "summon_type",
	"level" integer,
	"atk" integer,
	"def" integer,
	"description" text NOT NULL,
	"restriction" integer NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "cards_name_unique" UNIQUE("name")
);
--> statement-breakpoint
CREATE TABLE "deck_cards" (
	"id" serial PRIMARY KEY NOT NULL,
	"deck_id" integer NOT NULL,
	"card_id" integer NOT NULL,
	"quantity" integer DEFAULT 1 NOT NULL,
	"zone" "deck_zone" DEFAULT 'MAIN' NOT NULL
);
--> statement-breakpoint
CREATE TABLE "decks" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" varchar(255) NOT NULL,
	"name" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "inventory_items" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" varchar(255) NOT NULL,
	"card_id" integer NOT NULL,
	"quantity" integer DEFAULT 1 NOT NULL
);
--> statement-breakpoint
CREATE TABLE "monster_types" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	CONSTRAINT "monster_types_name_unique" UNIQUE("name")
);
--> statement-breakpoint
CREATE TABLE "users" (
	"id" varchar(255) PRIMARY KEY NOT NULL,
	"email" text NOT NULL,
	"username" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "card_monster_types" ADD CONSTRAINT "card_monster_types_card_id_cards_id_fk" FOREIGN KEY ("card_id") REFERENCES "public"."cards"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "card_monster_types" ADD CONSTRAINT "card_monster_types_monster_type_id_monster_types_id_fk" FOREIGN KEY ("monster_type_id") REFERENCES "public"."monster_types"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "deck_cards" ADD CONSTRAINT "deck_cards_deck_id_decks_id_fk" FOREIGN KEY ("deck_id") REFERENCES "public"."decks"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "deck_cards" ADD CONSTRAINT "deck_cards_card_id_cards_id_fk" FOREIGN KEY ("card_id") REFERENCES "public"."cards"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "decks" ADD CONSTRAINT "decks_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "inventory_items" ADD CONSTRAINT "inventory_items_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "inventory_items" ADD CONSTRAINT "inventory_items_card_id_cards_id_fk" FOREIGN KEY ("card_id") REFERENCES "public"."cards"("id") ON DELETE cascade ON UPDATE no action;