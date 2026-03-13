
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Card
 * 
 */
export type Card = $Result.DefaultSelection<Prisma.$CardPayload>
/**
 * Model CardMonsterType
 * 
 */
export type CardMonsterType = $Result.DefaultSelection<Prisma.$CardMonsterTypePayload>
/**
 * Model MonsterType
 * 
 */
export type MonsterType = $Result.DefaultSelection<Prisma.$MonsterTypePayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model InventoryItem
 * 
 */
export type InventoryItem = $Result.DefaultSelection<Prisma.$InventoryItemPayload>
/**
 * Model Deck
 * 
 */
export type Deck = $Result.DefaultSelection<Prisma.$DeckPayload>
/**
 * Model DeckCard
 * 
 */
export type DeckCard = $Result.DefaultSelection<Prisma.$DeckCardPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Attribute: {
  LIGHT: 'LIGHT',
  DARK: 'DARK',
  FIRE: 'FIRE',
  WATER: 'WATER',
  EARTH: 'EARTH',
  WIND: 'WIND',
  DIVINE: 'DIVINE',
  SPELL: 'SPELL',
  TRAP: 'TRAP'
};

export type Attribute = (typeof Attribute)[keyof typeof Attribute]


export const SummonType: {
  NORMAL: 'NORMAL',
  FUSION: 'FUSION',
  SYNCHRO: 'SYNCHRO',
  XYZ: 'XYZ',
  LINK: 'LINK',
  RITUAL: 'RITUAL'
};

export type SummonType = (typeof SummonType)[keyof typeof SummonType]


export const DeckZone: {
  MAIN: 'MAIN',
  SIDE: 'SIDE',
  EXTRA: 'EXTRA'
};

export type DeckZone = (typeof DeckZone)[keyof typeof DeckZone]

}

export type Attribute = $Enums.Attribute

export const Attribute: typeof $Enums.Attribute

export type SummonType = $Enums.SummonType

export const SummonType: typeof $Enums.SummonType

export type DeckZone = $Enums.DeckZone

export const DeckZone: typeof $Enums.DeckZone

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Cards
 * const cards = await prisma.card.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Cards
   * const cards = await prisma.card.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.card`: Exposes CRUD operations for the **Card** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cards
    * const cards = await prisma.card.findMany()
    * ```
    */
  get card(): Prisma.CardDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cardMonsterType`: Exposes CRUD operations for the **CardMonsterType** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CardMonsterTypes
    * const cardMonsterTypes = await prisma.cardMonsterType.findMany()
    * ```
    */
  get cardMonsterType(): Prisma.CardMonsterTypeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.monsterType`: Exposes CRUD operations for the **MonsterType** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MonsterTypes
    * const monsterTypes = await prisma.monsterType.findMany()
    * ```
    */
  get monsterType(): Prisma.MonsterTypeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.inventoryItem`: Exposes CRUD operations for the **InventoryItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more InventoryItems
    * const inventoryItems = await prisma.inventoryItem.findMany()
    * ```
    */
  get inventoryItem(): Prisma.InventoryItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.deck`: Exposes CRUD operations for the **Deck** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Decks
    * const decks = await prisma.deck.findMany()
    * ```
    */
  get deck(): Prisma.DeckDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.deckCard`: Exposes CRUD operations for the **DeckCard** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DeckCards
    * const deckCards = await prisma.deckCard.findMany()
    * ```
    */
  get deckCard(): Prisma.DeckCardDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.4.0
   * Query Engine version: ab56fe763f921d033a6c195e7ddeb3e255bdbb57
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Card: 'Card',
    CardMonsterType: 'CardMonsterType',
    MonsterType: 'MonsterType',
    User: 'User',
    InventoryItem: 'InventoryItem',
    Deck: 'Deck',
    DeckCard: 'DeckCard'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "card" | "cardMonsterType" | "monsterType" | "user" | "inventoryItem" | "deck" | "deckCard"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Card: {
        payload: Prisma.$CardPayload<ExtArgs>
        fields: Prisma.CardFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CardFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CardFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPayload>
          }
          findFirst: {
            args: Prisma.CardFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CardFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPayload>
          }
          findMany: {
            args: Prisma.CardFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPayload>[]
          }
          create: {
            args: Prisma.CardCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPayload>
          }
          createMany: {
            args: Prisma.CardCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CardCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPayload>[]
          }
          delete: {
            args: Prisma.CardDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPayload>
          }
          update: {
            args: Prisma.CardUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPayload>
          }
          deleteMany: {
            args: Prisma.CardDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CardUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CardUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPayload>[]
          }
          upsert: {
            args: Prisma.CardUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPayload>
          }
          aggregate: {
            args: Prisma.CardAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCard>
          }
          groupBy: {
            args: Prisma.CardGroupByArgs<ExtArgs>
            result: $Utils.Optional<CardGroupByOutputType>[]
          }
          count: {
            args: Prisma.CardCountArgs<ExtArgs>
            result: $Utils.Optional<CardCountAggregateOutputType> | number
          }
        }
      }
      CardMonsterType: {
        payload: Prisma.$CardMonsterTypePayload<ExtArgs>
        fields: Prisma.CardMonsterTypeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CardMonsterTypeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardMonsterTypePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CardMonsterTypeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardMonsterTypePayload>
          }
          findFirst: {
            args: Prisma.CardMonsterTypeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardMonsterTypePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CardMonsterTypeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardMonsterTypePayload>
          }
          findMany: {
            args: Prisma.CardMonsterTypeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardMonsterTypePayload>[]
          }
          create: {
            args: Prisma.CardMonsterTypeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardMonsterTypePayload>
          }
          createMany: {
            args: Prisma.CardMonsterTypeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CardMonsterTypeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardMonsterTypePayload>[]
          }
          delete: {
            args: Prisma.CardMonsterTypeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardMonsterTypePayload>
          }
          update: {
            args: Prisma.CardMonsterTypeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardMonsterTypePayload>
          }
          deleteMany: {
            args: Prisma.CardMonsterTypeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CardMonsterTypeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CardMonsterTypeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardMonsterTypePayload>[]
          }
          upsert: {
            args: Prisma.CardMonsterTypeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardMonsterTypePayload>
          }
          aggregate: {
            args: Prisma.CardMonsterTypeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCardMonsterType>
          }
          groupBy: {
            args: Prisma.CardMonsterTypeGroupByArgs<ExtArgs>
            result: $Utils.Optional<CardMonsterTypeGroupByOutputType>[]
          }
          count: {
            args: Prisma.CardMonsterTypeCountArgs<ExtArgs>
            result: $Utils.Optional<CardMonsterTypeCountAggregateOutputType> | number
          }
        }
      }
      MonsterType: {
        payload: Prisma.$MonsterTypePayload<ExtArgs>
        fields: Prisma.MonsterTypeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MonsterTypeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonsterTypePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MonsterTypeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonsterTypePayload>
          }
          findFirst: {
            args: Prisma.MonsterTypeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonsterTypePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MonsterTypeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonsterTypePayload>
          }
          findMany: {
            args: Prisma.MonsterTypeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonsterTypePayload>[]
          }
          create: {
            args: Prisma.MonsterTypeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonsterTypePayload>
          }
          createMany: {
            args: Prisma.MonsterTypeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MonsterTypeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonsterTypePayload>[]
          }
          delete: {
            args: Prisma.MonsterTypeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonsterTypePayload>
          }
          update: {
            args: Prisma.MonsterTypeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonsterTypePayload>
          }
          deleteMany: {
            args: Prisma.MonsterTypeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MonsterTypeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MonsterTypeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonsterTypePayload>[]
          }
          upsert: {
            args: Prisma.MonsterTypeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonsterTypePayload>
          }
          aggregate: {
            args: Prisma.MonsterTypeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMonsterType>
          }
          groupBy: {
            args: Prisma.MonsterTypeGroupByArgs<ExtArgs>
            result: $Utils.Optional<MonsterTypeGroupByOutputType>[]
          }
          count: {
            args: Prisma.MonsterTypeCountArgs<ExtArgs>
            result: $Utils.Optional<MonsterTypeCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      InventoryItem: {
        payload: Prisma.$InventoryItemPayload<ExtArgs>
        fields: Prisma.InventoryItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InventoryItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InventoryItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryItemPayload>
          }
          findFirst: {
            args: Prisma.InventoryItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InventoryItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryItemPayload>
          }
          findMany: {
            args: Prisma.InventoryItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryItemPayload>[]
          }
          create: {
            args: Prisma.InventoryItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryItemPayload>
          }
          createMany: {
            args: Prisma.InventoryItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InventoryItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryItemPayload>[]
          }
          delete: {
            args: Prisma.InventoryItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryItemPayload>
          }
          update: {
            args: Prisma.InventoryItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryItemPayload>
          }
          deleteMany: {
            args: Prisma.InventoryItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InventoryItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InventoryItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryItemPayload>[]
          }
          upsert: {
            args: Prisma.InventoryItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryItemPayload>
          }
          aggregate: {
            args: Prisma.InventoryItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInventoryItem>
          }
          groupBy: {
            args: Prisma.InventoryItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<InventoryItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.InventoryItemCountArgs<ExtArgs>
            result: $Utils.Optional<InventoryItemCountAggregateOutputType> | number
          }
        }
      }
      Deck: {
        payload: Prisma.$DeckPayload<ExtArgs>
        fields: Prisma.DeckFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DeckFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeckPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DeckFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeckPayload>
          }
          findFirst: {
            args: Prisma.DeckFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeckPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DeckFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeckPayload>
          }
          findMany: {
            args: Prisma.DeckFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeckPayload>[]
          }
          create: {
            args: Prisma.DeckCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeckPayload>
          }
          createMany: {
            args: Prisma.DeckCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DeckCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeckPayload>[]
          }
          delete: {
            args: Prisma.DeckDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeckPayload>
          }
          update: {
            args: Prisma.DeckUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeckPayload>
          }
          deleteMany: {
            args: Prisma.DeckDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DeckUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DeckUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeckPayload>[]
          }
          upsert: {
            args: Prisma.DeckUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeckPayload>
          }
          aggregate: {
            args: Prisma.DeckAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDeck>
          }
          groupBy: {
            args: Prisma.DeckGroupByArgs<ExtArgs>
            result: $Utils.Optional<DeckGroupByOutputType>[]
          }
          count: {
            args: Prisma.DeckCountArgs<ExtArgs>
            result: $Utils.Optional<DeckCountAggregateOutputType> | number
          }
        }
      }
      DeckCard: {
        payload: Prisma.$DeckCardPayload<ExtArgs>
        fields: Prisma.DeckCardFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DeckCardFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeckCardPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DeckCardFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeckCardPayload>
          }
          findFirst: {
            args: Prisma.DeckCardFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeckCardPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DeckCardFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeckCardPayload>
          }
          findMany: {
            args: Prisma.DeckCardFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeckCardPayload>[]
          }
          create: {
            args: Prisma.DeckCardCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeckCardPayload>
          }
          createMany: {
            args: Prisma.DeckCardCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DeckCardCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeckCardPayload>[]
          }
          delete: {
            args: Prisma.DeckCardDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeckCardPayload>
          }
          update: {
            args: Prisma.DeckCardUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeckCardPayload>
          }
          deleteMany: {
            args: Prisma.DeckCardDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DeckCardUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DeckCardUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeckCardPayload>[]
          }
          upsert: {
            args: Prisma.DeckCardUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeckCardPayload>
          }
          aggregate: {
            args: Prisma.DeckCardAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDeckCard>
          }
          groupBy: {
            args: Prisma.DeckCardGroupByArgs<ExtArgs>
            result: $Utils.Optional<DeckCardGroupByOutputType>[]
          }
          count: {
            args: Prisma.DeckCardCountArgs<ExtArgs>
            result: $Utils.Optional<DeckCardCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    card?: CardOmit
    cardMonsterType?: CardMonsterTypeOmit
    monsterType?: MonsterTypeOmit
    user?: UserOmit
    inventoryItem?: InventoryItemOmit
    deck?: DeckOmit
    deckCard?: DeckCardOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CardCountOutputType
   */

  export type CardCountOutputType = {
    monsterTypes: number
    inventoryItems: number
    deckCards: number
  }

  export type CardCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    monsterTypes?: boolean | CardCountOutputTypeCountMonsterTypesArgs
    inventoryItems?: boolean | CardCountOutputTypeCountInventoryItemsArgs
    deckCards?: boolean | CardCountOutputTypeCountDeckCardsArgs
  }

  // Custom InputTypes
  /**
   * CardCountOutputType without action
   */
  export type CardCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardCountOutputType
     */
    select?: CardCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CardCountOutputType without action
   */
  export type CardCountOutputTypeCountMonsterTypesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CardMonsterTypeWhereInput
  }

  /**
   * CardCountOutputType without action
   */
  export type CardCountOutputTypeCountInventoryItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InventoryItemWhereInput
  }

  /**
   * CardCountOutputType without action
   */
  export type CardCountOutputTypeCountDeckCardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeckCardWhereInput
  }


  /**
   * Count Type MonsterTypeCountOutputType
   */

  export type MonsterTypeCountOutputType = {
    cards: number
  }

  export type MonsterTypeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cards?: boolean | MonsterTypeCountOutputTypeCountCardsArgs
  }

  // Custom InputTypes
  /**
   * MonsterTypeCountOutputType without action
   */
  export type MonsterTypeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonsterTypeCountOutputType
     */
    select?: MonsterTypeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MonsterTypeCountOutputType without action
   */
  export type MonsterTypeCountOutputTypeCountCardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CardMonsterTypeWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    inventory: number
    decks: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inventory?: boolean | UserCountOutputTypeCountInventoryArgs
    decks?: boolean | UserCountOutputTypeCountDecksArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountInventoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InventoryItemWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDecksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeckWhereInput
  }


  /**
   * Count Type DeckCountOutputType
   */

  export type DeckCountOutputType = {
    cards: number
  }

  export type DeckCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cards?: boolean | DeckCountOutputTypeCountCardsArgs
  }

  // Custom InputTypes
  /**
   * DeckCountOutputType without action
   */
  export type DeckCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeckCountOutputType
     */
    select?: DeckCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DeckCountOutputType without action
   */
  export type DeckCountOutputTypeCountCardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeckCardWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Card
   */

  export type AggregateCard = {
    _count: CardCountAggregateOutputType | null
    _avg: CardAvgAggregateOutputType | null
    _sum: CardSumAggregateOutputType | null
    _min: CardMinAggregateOutputType | null
    _max: CardMaxAggregateOutputType | null
  }

  export type CardAvgAggregateOutputType = {
    id: number | null
    level: number | null
    atk: number | null
    def: number | null
    restriction: number | null
  }

  export type CardSumAggregateOutputType = {
    id: number | null
    level: number | null
    atk: number | null
    def: number | null
    restriction: number | null
  }

  export type CardMinAggregateOutputType = {
    id: number | null
    name: string | null
    attribute: $Enums.Attribute | null
    race: string | null
    summonType: $Enums.SummonType | null
    level: number | null
    atk: number | null
    def: number | null
    description: string | null
    restriction: number | null
  }

  export type CardMaxAggregateOutputType = {
    id: number | null
    name: string | null
    attribute: $Enums.Attribute | null
    race: string | null
    summonType: $Enums.SummonType | null
    level: number | null
    atk: number | null
    def: number | null
    description: string | null
    restriction: number | null
  }

  export type CardCountAggregateOutputType = {
    id: number
    name: number
    attribute: number
    race: number
    summonType: number
    level: number
    atk: number
    def: number
    description: number
    restriction: number
    _all: number
  }


  export type CardAvgAggregateInputType = {
    id?: true
    level?: true
    atk?: true
    def?: true
    restriction?: true
  }

  export type CardSumAggregateInputType = {
    id?: true
    level?: true
    atk?: true
    def?: true
    restriction?: true
  }

  export type CardMinAggregateInputType = {
    id?: true
    name?: true
    attribute?: true
    race?: true
    summonType?: true
    level?: true
    atk?: true
    def?: true
    description?: true
    restriction?: true
  }

  export type CardMaxAggregateInputType = {
    id?: true
    name?: true
    attribute?: true
    race?: true
    summonType?: true
    level?: true
    atk?: true
    def?: true
    description?: true
    restriction?: true
  }

  export type CardCountAggregateInputType = {
    id?: true
    name?: true
    attribute?: true
    race?: true
    summonType?: true
    level?: true
    atk?: true
    def?: true
    description?: true
    restriction?: true
    _all?: true
  }

  export type CardAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Card to aggregate.
     */
    where?: CardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cards to fetch.
     */
    orderBy?: CardOrderByWithRelationInput | CardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Cards
    **/
    _count?: true | CardCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CardAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CardSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CardMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CardMaxAggregateInputType
  }

  export type GetCardAggregateType<T extends CardAggregateArgs> = {
        [P in keyof T & keyof AggregateCard]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCard[P]>
      : GetScalarType<T[P], AggregateCard[P]>
  }




  export type CardGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CardWhereInput
    orderBy?: CardOrderByWithAggregationInput | CardOrderByWithAggregationInput[]
    by: CardScalarFieldEnum[] | CardScalarFieldEnum
    having?: CardScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CardCountAggregateInputType | true
    _avg?: CardAvgAggregateInputType
    _sum?: CardSumAggregateInputType
    _min?: CardMinAggregateInputType
    _max?: CardMaxAggregateInputType
  }

  export type CardGroupByOutputType = {
    id: number
    name: string
    attribute: $Enums.Attribute
    race: string | null
    summonType: $Enums.SummonType | null
    level: number | null
    atk: number | null
    def: number | null
    description: string
    restriction: number
    _count: CardCountAggregateOutputType | null
    _avg: CardAvgAggregateOutputType | null
    _sum: CardSumAggregateOutputType | null
    _min: CardMinAggregateOutputType | null
    _max: CardMaxAggregateOutputType | null
  }

  type GetCardGroupByPayload<T extends CardGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CardGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CardGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CardGroupByOutputType[P]>
            : GetScalarType<T[P], CardGroupByOutputType[P]>
        }
      >
    >


  export type CardSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    attribute?: boolean
    race?: boolean
    summonType?: boolean
    level?: boolean
    atk?: boolean
    def?: boolean
    description?: boolean
    restriction?: boolean
    monsterTypes?: boolean | Card$monsterTypesArgs<ExtArgs>
    inventoryItems?: boolean | Card$inventoryItemsArgs<ExtArgs>
    deckCards?: boolean | Card$deckCardsArgs<ExtArgs>
    _count?: boolean | CardCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["card"]>

  export type CardSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    attribute?: boolean
    race?: boolean
    summonType?: boolean
    level?: boolean
    atk?: boolean
    def?: boolean
    description?: boolean
    restriction?: boolean
  }, ExtArgs["result"]["card"]>

  export type CardSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    attribute?: boolean
    race?: boolean
    summonType?: boolean
    level?: boolean
    atk?: boolean
    def?: boolean
    description?: boolean
    restriction?: boolean
  }, ExtArgs["result"]["card"]>

  export type CardSelectScalar = {
    id?: boolean
    name?: boolean
    attribute?: boolean
    race?: boolean
    summonType?: boolean
    level?: boolean
    atk?: boolean
    def?: boolean
    description?: boolean
    restriction?: boolean
  }

  export type CardOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "attribute" | "race" | "summonType" | "level" | "atk" | "def" | "description" | "restriction", ExtArgs["result"]["card"]>
  export type CardInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    monsterTypes?: boolean | Card$monsterTypesArgs<ExtArgs>
    inventoryItems?: boolean | Card$inventoryItemsArgs<ExtArgs>
    deckCards?: boolean | Card$deckCardsArgs<ExtArgs>
    _count?: boolean | CardCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CardIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CardIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CardPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Card"
    objects: {
      monsterTypes: Prisma.$CardMonsterTypePayload<ExtArgs>[]
      inventoryItems: Prisma.$InventoryItemPayload<ExtArgs>[]
      deckCards: Prisma.$DeckCardPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      attribute: $Enums.Attribute
      race: string | null
      summonType: $Enums.SummonType | null
      level: number | null
      atk: number | null
      def: number | null
      description: string
      restriction: number
    }, ExtArgs["result"]["card"]>
    composites: {}
  }

  type CardGetPayload<S extends boolean | null | undefined | CardDefaultArgs> = $Result.GetResult<Prisma.$CardPayload, S>

  type CardCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CardFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CardCountAggregateInputType | true
    }

  export interface CardDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Card'], meta: { name: 'Card' } }
    /**
     * Find zero or one Card that matches the filter.
     * @param {CardFindUniqueArgs} args - Arguments to find a Card
     * @example
     * // Get one Card
     * const card = await prisma.card.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CardFindUniqueArgs>(args: SelectSubset<T, CardFindUniqueArgs<ExtArgs>>): Prisma__CardClient<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Card that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CardFindUniqueOrThrowArgs} args - Arguments to find a Card
     * @example
     * // Get one Card
     * const card = await prisma.card.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CardFindUniqueOrThrowArgs>(args: SelectSubset<T, CardFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CardClient<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Card that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardFindFirstArgs} args - Arguments to find a Card
     * @example
     * // Get one Card
     * const card = await prisma.card.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CardFindFirstArgs>(args?: SelectSubset<T, CardFindFirstArgs<ExtArgs>>): Prisma__CardClient<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Card that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardFindFirstOrThrowArgs} args - Arguments to find a Card
     * @example
     * // Get one Card
     * const card = await prisma.card.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CardFindFirstOrThrowArgs>(args?: SelectSubset<T, CardFindFirstOrThrowArgs<ExtArgs>>): Prisma__CardClient<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cards that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cards
     * const cards = await prisma.card.findMany()
     * 
     * // Get first 10 Cards
     * const cards = await prisma.card.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cardWithIdOnly = await prisma.card.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CardFindManyArgs>(args?: SelectSubset<T, CardFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Card.
     * @param {CardCreateArgs} args - Arguments to create a Card.
     * @example
     * // Create one Card
     * const Card = await prisma.card.create({
     *   data: {
     *     // ... data to create a Card
     *   }
     * })
     * 
     */
    create<T extends CardCreateArgs>(args: SelectSubset<T, CardCreateArgs<ExtArgs>>): Prisma__CardClient<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cards.
     * @param {CardCreateManyArgs} args - Arguments to create many Cards.
     * @example
     * // Create many Cards
     * const card = await prisma.card.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CardCreateManyArgs>(args?: SelectSubset<T, CardCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Cards and returns the data saved in the database.
     * @param {CardCreateManyAndReturnArgs} args - Arguments to create many Cards.
     * @example
     * // Create many Cards
     * const card = await prisma.card.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Cards and only return the `id`
     * const cardWithIdOnly = await prisma.card.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CardCreateManyAndReturnArgs>(args?: SelectSubset<T, CardCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Card.
     * @param {CardDeleteArgs} args - Arguments to delete one Card.
     * @example
     * // Delete one Card
     * const Card = await prisma.card.delete({
     *   where: {
     *     // ... filter to delete one Card
     *   }
     * })
     * 
     */
    delete<T extends CardDeleteArgs>(args: SelectSubset<T, CardDeleteArgs<ExtArgs>>): Prisma__CardClient<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Card.
     * @param {CardUpdateArgs} args - Arguments to update one Card.
     * @example
     * // Update one Card
     * const card = await prisma.card.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CardUpdateArgs>(args: SelectSubset<T, CardUpdateArgs<ExtArgs>>): Prisma__CardClient<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cards.
     * @param {CardDeleteManyArgs} args - Arguments to filter Cards to delete.
     * @example
     * // Delete a few Cards
     * const { count } = await prisma.card.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CardDeleteManyArgs>(args?: SelectSubset<T, CardDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cards
     * const card = await prisma.card.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CardUpdateManyArgs>(args: SelectSubset<T, CardUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cards and returns the data updated in the database.
     * @param {CardUpdateManyAndReturnArgs} args - Arguments to update many Cards.
     * @example
     * // Update many Cards
     * const card = await prisma.card.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Cards and only return the `id`
     * const cardWithIdOnly = await prisma.card.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CardUpdateManyAndReturnArgs>(args: SelectSubset<T, CardUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Card.
     * @param {CardUpsertArgs} args - Arguments to update or create a Card.
     * @example
     * // Update or create a Card
     * const card = await prisma.card.upsert({
     *   create: {
     *     // ... data to create a Card
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Card we want to update
     *   }
     * })
     */
    upsert<T extends CardUpsertArgs>(args: SelectSubset<T, CardUpsertArgs<ExtArgs>>): Prisma__CardClient<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardCountArgs} args - Arguments to filter Cards to count.
     * @example
     * // Count the number of Cards
     * const count = await prisma.card.count({
     *   where: {
     *     // ... the filter for the Cards we want to count
     *   }
     * })
    **/
    count<T extends CardCountArgs>(
      args?: Subset<T, CardCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CardCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Card.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CardAggregateArgs>(args: Subset<T, CardAggregateArgs>): Prisma.PrismaPromise<GetCardAggregateType<T>>

    /**
     * Group by Card.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CardGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CardGroupByArgs['orderBy'] }
        : { orderBy?: CardGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CardGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCardGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Card model
   */
  readonly fields: CardFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Card.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CardClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    monsterTypes<T extends Card$monsterTypesArgs<ExtArgs> = {}>(args?: Subset<T, Card$monsterTypesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CardMonsterTypePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    inventoryItems<T extends Card$inventoryItemsArgs<ExtArgs> = {}>(args?: Subset<T, Card$inventoryItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    deckCards<T extends Card$deckCardsArgs<ExtArgs> = {}>(args?: Subset<T, Card$deckCardsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeckCardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Card model
   */
  interface CardFieldRefs {
    readonly id: FieldRef<"Card", 'Int'>
    readonly name: FieldRef<"Card", 'String'>
    readonly attribute: FieldRef<"Card", 'Attribute'>
    readonly race: FieldRef<"Card", 'String'>
    readonly summonType: FieldRef<"Card", 'SummonType'>
    readonly level: FieldRef<"Card", 'Int'>
    readonly atk: FieldRef<"Card", 'Int'>
    readonly def: FieldRef<"Card", 'Int'>
    readonly description: FieldRef<"Card", 'String'>
    readonly restriction: FieldRef<"Card", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Card findUnique
   */
  export type CardFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
    /**
     * Filter, which Card to fetch.
     */
    where: CardWhereUniqueInput
  }

  /**
   * Card findUniqueOrThrow
   */
  export type CardFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
    /**
     * Filter, which Card to fetch.
     */
    where: CardWhereUniqueInput
  }

  /**
   * Card findFirst
   */
  export type CardFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
    /**
     * Filter, which Card to fetch.
     */
    where?: CardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cards to fetch.
     */
    orderBy?: CardOrderByWithRelationInput | CardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cards.
     */
    cursor?: CardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cards.
     */
    distinct?: CardScalarFieldEnum | CardScalarFieldEnum[]
  }

  /**
   * Card findFirstOrThrow
   */
  export type CardFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
    /**
     * Filter, which Card to fetch.
     */
    where?: CardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cards to fetch.
     */
    orderBy?: CardOrderByWithRelationInput | CardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cards.
     */
    cursor?: CardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cards.
     */
    distinct?: CardScalarFieldEnum | CardScalarFieldEnum[]
  }

  /**
   * Card findMany
   */
  export type CardFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
    /**
     * Filter, which Cards to fetch.
     */
    where?: CardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cards to fetch.
     */
    orderBy?: CardOrderByWithRelationInput | CardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Cards.
     */
    cursor?: CardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cards.
     */
    skip?: number
    distinct?: CardScalarFieldEnum | CardScalarFieldEnum[]
  }

  /**
   * Card create
   */
  export type CardCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
    /**
     * The data needed to create a Card.
     */
    data: XOR<CardCreateInput, CardUncheckedCreateInput>
  }

  /**
   * Card createMany
   */
  export type CardCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Cards.
     */
    data: CardCreateManyInput | CardCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Card createManyAndReturn
   */
  export type CardCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * The data used to create many Cards.
     */
    data: CardCreateManyInput | CardCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Card update
   */
  export type CardUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
    /**
     * The data needed to update a Card.
     */
    data: XOR<CardUpdateInput, CardUncheckedUpdateInput>
    /**
     * Choose, which Card to update.
     */
    where: CardWhereUniqueInput
  }

  /**
   * Card updateMany
   */
  export type CardUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Cards.
     */
    data: XOR<CardUpdateManyMutationInput, CardUncheckedUpdateManyInput>
    /**
     * Filter which Cards to update
     */
    where?: CardWhereInput
    /**
     * Limit how many Cards to update.
     */
    limit?: number
  }

  /**
   * Card updateManyAndReturn
   */
  export type CardUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * The data used to update Cards.
     */
    data: XOR<CardUpdateManyMutationInput, CardUncheckedUpdateManyInput>
    /**
     * Filter which Cards to update
     */
    where?: CardWhereInput
    /**
     * Limit how many Cards to update.
     */
    limit?: number
  }

  /**
   * Card upsert
   */
  export type CardUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
    /**
     * The filter to search for the Card to update in case it exists.
     */
    where: CardWhereUniqueInput
    /**
     * In case the Card found by the `where` argument doesn't exist, create a new Card with this data.
     */
    create: XOR<CardCreateInput, CardUncheckedCreateInput>
    /**
     * In case the Card was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CardUpdateInput, CardUncheckedUpdateInput>
  }

  /**
   * Card delete
   */
  export type CardDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
    /**
     * Filter which Card to delete.
     */
    where: CardWhereUniqueInput
  }

  /**
   * Card deleteMany
   */
  export type CardDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cards to delete
     */
    where?: CardWhereInput
    /**
     * Limit how many Cards to delete.
     */
    limit?: number
  }

  /**
   * Card.monsterTypes
   */
  export type Card$monsterTypesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardMonsterType
     */
    select?: CardMonsterTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CardMonsterType
     */
    omit?: CardMonsterTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardMonsterTypeInclude<ExtArgs> | null
    where?: CardMonsterTypeWhereInput
    orderBy?: CardMonsterTypeOrderByWithRelationInput | CardMonsterTypeOrderByWithRelationInput[]
    cursor?: CardMonsterTypeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CardMonsterTypeScalarFieldEnum | CardMonsterTypeScalarFieldEnum[]
  }

  /**
   * Card.inventoryItems
   */
  export type Card$inventoryItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryItem
     */
    select?: InventoryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryItem
     */
    omit?: InventoryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryItemInclude<ExtArgs> | null
    where?: InventoryItemWhereInput
    orderBy?: InventoryItemOrderByWithRelationInput | InventoryItemOrderByWithRelationInput[]
    cursor?: InventoryItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InventoryItemScalarFieldEnum | InventoryItemScalarFieldEnum[]
  }

  /**
   * Card.deckCards
   */
  export type Card$deckCardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeckCard
     */
    select?: DeckCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeckCard
     */
    omit?: DeckCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeckCardInclude<ExtArgs> | null
    where?: DeckCardWhereInput
    orderBy?: DeckCardOrderByWithRelationInput | DeckCardOrderByWithRelationInput[]
    cursor?: DeckCardWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DeckCardScalarFieldEnum | DeckCardScalarFieldEnum[]
  }

  /**
   * Card without action
   */
  export type CardDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
  }


  /**
   * Model CardMonsterType
   */

  export type AggregateCardMonsterType = {
    _count: CardMonsterTypeCountAggregateOutputType | null
    _avg: CardMonsterTypeAvgAggregateOutputType | null
    _sum: CardMonsterTypeSumAggregateOutputType | null
    _min: CardMonsterTypeMinAggregateOutputType | null
    _max: CardMonsterTypeMaxAggregateOutputType | null
  }

  export type CardMonsterTypeAvgAggregateOutputType = {
    cardId: number | null
    monsterTypeId: number | null
  }

  export type CardMonsterTypeSumAggregateOutputType = {
    cardId: number | null
    monsterTypeId: number | null
  }

  export type CardMonsterTypeMinAggregateOutputType = {
    cardId: number | null
    monsterTypeId: number | null
  }

  export type CardMonsterTypeMaxAggregateOutputType = {
    cardId: number | null
    monsterTypeId: number | null
  }

  export type CardMonsterTypeCountAggregateOutputType = {
    cardId: number
    monsterTypeId: number
    _all: number
  }


  export type CardMonsterTypeAvgAggregateInputType = {
    cardId?: true
    monsterTypeId?: true
  }

  export type CardMonsterTypeSumAggregateInputType = {
    cardId?: true
    monsterTypeId?: true
  }

  export type CardMonsterTypeMinAggregateInputType = {
    cardId?: true
    monsterTypeId?: true
  }

  export type CardMonsterTypeMaxAggregateInputType = {
    cardId?: true
    monsterTypeId?: true
  }

  export type CardMonsterTypeCountAggregateInputType = {
    cardId?: true
    monsterTypeId?: true
    _all?: true
  }

  export type CardMonsterTypeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CardMonsterType to aggregate.
     */
    where?: CardMonsterTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CardMonsterTypes to fetch.
     */
    orderBy?: CardMonsterTypeOrderByWithRelationInput | CardMonsterTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CardMonsterTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CardMonsterTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CardMonsterTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CardMonsterTypes
    **/
    _count?: true | CardMonsterTypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CardMonsterTypeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CardMonsterTypeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CardMonsterTypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CardMonsterTypeMaxAggregateInputType
  }

  export type GetCardMonsterTypeAggregateType<T extends CardMonsterTypeAggregateArgs> = {
        [P in keyof T & keyof AggregateCardMonsterType]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCardMonsterType[P]>
      : GetScalarType<T[P], AggregateCardMonsterType[P]>
  }




  export type CardMonsterTypeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CardMonsterTypeWhereInput
    orderBy?: CardMonsterTypeOrderByWithAggregationInput | CardMonsterTypeOrderByWithAggregationInput[]
    by: CardMonsterTypeScalarFieldEnum[] | CardMonsterTypeScalarFieldEnum
    having?: CardMonsterTypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CardMonsterTypeCountAggregateInputType | true
    _avg?: CardMonsterTypeAvgAggregateInputType
    _sum?: CardMonsterTypeSumAggregateInputType
    _min?: CardMonsterTypeMinAggregateInputType
    _max?: CardMonsterTypeMaxAggregateInputType
  }

  export type CardMonsterTypeGroupByOutputType = {
    cardId: number
    monsterTypeId: number
    _count: CardMonsterTypeCountAggregateOutputType | null
    _avg: CardMonsterTypeAvgAggregateOutputType | null
    _sum: CardMonsterTypeSumAggregateOutputType | null
    _min: CardMonsterTypeMinAggregateOutputType | null
    _max: CardMonsterTypeMaxAggregateOutputType | null
  }

  type GetCardMonsterTypeGroupByPayload<T extends CardMonsterTypeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CardMonsterTypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CardMonsterTypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CardMonsterTypeGroupByOutputType[P]>
            : GetScalarType<T[P], CardMonsterTypeGroupByOutputType[P]>
        }
      >
    >


  export type CardMonsterTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    cardId?: boolean
    monsterTypeId?: boolean
    card?: boolean | CardDefaultArgs<ExtArgs>
    monsterType?: boolean | MonsterTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cardMonsterType"]>

  export type CardMonsterTypeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    cardId?: boolean
    monsterTypeId?: boolean
    card?: boolean | CardDefaultArgs<ExtArgs>
    monsterType?: boolean | MonsterTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cardMonsterType"]>

  export type CardMonsterTypeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    cardId?: boolean
    monsterTypeId?: boolean
    card?: boolean | CardDefaultArgs<ExtArgs>
    monsterType?: boolean | MonsterTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cardMonsterType"]>

  export type CardMonsterTypeSelectScalar = {
    cardId?: boolean
    monsterTypeId?: boolean
  }

  export type CardMonsterTypeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"cardId" | "monsterTypeId", ExtArgs["result"]["cardMonsterType"]>
  export type CardMonsterTypeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    card?: boolean | CardDefaultArgs<ExtArgs>
    monsterType?: boolean | MonsterTypeDefaultArgs<ExtArgs>
  }
  export type CardMonsterTypeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    card?: boolean | CardDefaultArgs<ExtArgs>
    monsterType?: boolean | MonsterTypeDefaultArgs<ExtArgs>
  }
  export type CardMonsterTypeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    card?: boolean | CardDefaultArgs<ExtArgs>
    monsterType?: boolean | MonsterTypeDefaultArgs<ExtArgs>
  }

  export type $CardMonsterTypePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CardMonsterType"
    objects: {
      card: Prisma.$CardPayload<ExtArgs>
      monsterType: Prisma.$MonsterTypePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      cardId: number
      monsterTypeId: number
    }, ExtArgs["result"]["cardMonsterType"]>
    composites: {}
  }

  type CardMonsterTypeGetPayload<S extends boolean | null | undefined | CardMonsterTypeDefaultArgs> = $Result.GetResult<Prisma.$CardMonsterTypePayload, S>

  type CardMonsterTypeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CardMonsterTypeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CardMonsterTypeCountAggregateInputType | true
    }

  export interface CardMonsterTypeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CardMonsterType'], meta: { name: 'CardMonsterType' } }
    /**
     * Find zero or one CardMonsterType that matches the filter.
     * @param {CardMonsterTypeFindUniqueArgs} args - Arguments to find a CardMonsterType
     * @example
     * // Get one CardMonsterType
     * const cardMonsterType = await prisma.cardMonsterType.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CardMonsterTypeFindUniqueArgs>(args: SelectSubset<T, CardMonsterTypeFindUniqueArgs<ExtArgs>>): Prisma__CardMonsterTypeClient<$Result.GetResult<Prisma.$CardMonsterTypePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CardMonsterType that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CardMonsterTypeFindUniqueOrThrowArgs} args - Arguments to find a CardMonsterType
     * @example
     * // Get one CardMonsterType
     * const cardMonsterType = await prisma.cardMonsterType.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CardMonsterTypeFindUniqueOrThrowArgs>(args: SelectSubset<T, CardMonsterTypeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CardMonsterTypeClient<$Result.GetResult<Prisma.$CardMonsterTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CardMonsterType that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardMonsterTypeFindFirstArgs} args - Arguments to find a CardMonsterType
     * @example
     * // Get one CardMonsterType
     * const cardMonsterType = await prisma.cardMonsterType.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CardMonsterTypeFindFirstArgs>(args?: SelectSubset<T, CardMonsterTypeFindFirstArgs<ExtArgs>>): Prisma__CardMonsterTypeClient<$Result.GetResult<Prisma.$CardMonsterTypePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CardMonsterType that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardMonsterTypeFindFirstOrThrowArgs} args - Arguments to find a CardMonsterType
     * @example
     * // Get one CardMonsterType
     * const cardMonsterType = await prisma.cardMonsterType.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CardMonsterTypeFindFirstOrThrowArgs>(args?: SelectSubset<T, CardMonsterTypeFindFirstOrThrowArgs<ExtArgs>>): Prisma__CardMonsterTypeClient<$Result.GetResult<Prisma.$CardMonsterTypePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CardMonsterTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardMonsterTypeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CardMonsterTypes
     * const cardMonsterTypes = await prisma.cardMonsterType.findMany()
     * 
     * // Get first 10 CardMonsterTypes
     * const cardMonsterTypes = await prisma.cardMonsterType.findMany({ take: 10 })
     * 
     * // Only select the `cardId`
     * const cardMonsterTypeWithCardIdOnly = await prisma.cardMonsterType.findMany({ select: { cardId: true } })
     * 
     */
    findMany<T extends CardMonsterTypeFindManyArgs>(args?: SelectSubset<T, CardMonsterTypeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CardMonsterTypePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CardMonsterType.
     * @param {CardMonsterTypeCreateArgs} args - Arguments to create a CardMonsterType.
     * @example
     * // Create one CardMonsterType
     * const CardMonsterType = await prisma.cardMonsterType.create({
     *   data: {
     *     // ... data to create a CardMonsterType
     *   }
     * })
     * 
     */
    create<T extends CardMonsterTypeCreateArgs>(args: SelectSubset<T, CardMonsterTypeCreateArgs<ExtArgs>>): Prisma__CardMonsterTypeClient<$Result.GetResult<Prisma.$CardMonsterTypePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CardMonsterTypes.
     * @param {CardMonsterTypeCreateManyArgs} args - Arguments to create many CardMonsterTypes.
     * @example
     * // Create many CardMonsterTypes
     * const cardMonsterType = await prisma.cardMonsterType.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CardMonsterTypeCreateManyArgs>(args?: SelectSubset<T, CardMonsterTypeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CardMonsterTypes and returns the data saved in the database.
     * @param {CardMonsterTypeCreateManyAndReturnArgs} args - Arguments to create many CardMonsterTypes.
     * @example
     * // Create many CardMonsterTypes
     * const cardMonsterType = await prisma.cardMonsterType.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CardMonsterTypes and only return the `cardId`
     * const cardMonsterTypeWithCardIdOnly = await prisma.cardMonsterType.createManyAndReturn({
     *   select: { cardId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CardMonsterTypeCreateManyAndReturnArgs>(args?: SelectSubset<T, CardMonsterTypeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CardMonsterTypePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CardMonsterType.
     * @param {CardMonsterTypeDeleteArgs} args - Arguments to delete one CardMonsterType.
     * @example
     * // Delete one CardMonsterType
     * const CardMonsterType = await prisma.cardMonsterType.delete({
     *   where: {
     *     // ... filter to delete one CardMonsterType
     *   }
     * })
     * 
     */
    delete<T extends CardMonsterTypeDeleteArgs>(args: SelectSubset<T, CardMonsterTypeDeleteArgs<ExtArgs>>): Prisma__CardMonsterTypeClient<$Result.GetResult<Prisma.$CardMonsterTypePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CardMonsterType.
     * @param {CardMonsterTypeUpdateArgs} args - Arguments to update one CardMonsterType.
     * @example
     * // Update one CardMonsterType
     * const cardMonsterType = await prisma.cardMonsterType.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CardMonsterTypeUpdateArgs>(args: SelectSubset<T, CardMonsterTypeUpdateArgs<ExtArgs>>): Prisma__CardMonsterTypeClient<$Result.GetResult<Prisma.$CardMonsterTypePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CardMonsterTypes.
     * @param {CardMonsterTypeDeleteManyArgs} args - Arguments to filter CardMonsterTypes to delete.
     * @example
     * // Delete a few CardMonsterTypes
     * const { count } = await prisma.cardMonsterType.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CardMonsterTypeDeleteManyArgs>(args?: SelectSubset<T, CardMonsterTypeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CardMonsterTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardMonsterTypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CardMonsterTypes
     * const cardMonsterType = await prisma.cardMonsterType.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CardMonsterTypeUpdateManyArgs>(args: SelectSubset<T, CardMonsterTypeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CardMonsterTypes and returns the data updated in the database.
     * @param {CardMonsterTypeUpdateManyAndReturnArgs} args - Arguments to update many CardMonsterTypes.
     * @example
     * // Update many CardMonsterTypes
     * const cardMonsterType = await prisma.cardMonsterType.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CardMonsterTypes and only return the `cardId`
     * const cardMonsterTypeWithCardIdOnly = await prisma.cardMonsterType.updateManyAndReturn({
     *   select: { cardId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CardMonsterTypeUpdateManyAndReturnArgs>(args: SelectSubset<T, CardMonsterTypeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CardMonsterTypePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CardMonsterType.
     * @param {CardMonsterTypeUpsertArgs} args - Arguments to update or create a CardMonsterType.
     * @example
     * // Update or create a CardMonsterType
     * const cardMonsterType = await prisma.cardMonsterType.upsert({
     *   create: {
     *     // ... data to create a CardMonsterType
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CardMonsterType we want to update
     *   }
     * })
     */
    upsert<T extends CardMonsterTypeUpsertArgs>(args: SelectSubset<T, CardMonsterTypeUpsertArgs<ExtArgs>>): Prisma__CardMonsterTypeClient<$Result.GetResult<Prisma.$CardMonsterTypePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CardMonsterTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardMonsterTypeCountArgs} args - Arguments to filter CardMonsterTypes to count.
     * @example
     * // Count the number of CardMonsterTypes
     * const count = await prisma.cardMonsterType.count({
     *   where: {
     *     // ... the filter for the CardMonsterTypes we want to count
     *   }
     * })
    **/
    count<T extends CardMonsterTypeCountArgs>(
      args?: Subset<T, CardMonsterTypeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CardMonsterTypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CardMonsterType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardMonsterTypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CardMonsterTypeAggregateArgs>(args: Subset<T, CardMonsterTypeAggregateArgs>): Prisma.PrismaPromise<GetCardMonsterTypeAggregateType<T>>

    /**
     * Group by CardMonsterType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardMonsterTypeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CardMonsterTypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CardMonsterTypeGroupByArgs['orderBy'] }
        : { orderBy?: CardMonsterTypeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CardMonsterTypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCardMonsterTypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CardMonsterType model
   */
  readonly fields: CardMonsterTypeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CardMonsterType.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CardMonsterTypeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    card<T extends CardDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CardDefaultArgs<ExtArgs>>): Prisma__CardClient<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    monsterType<T extends MonsterTypeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MonsterTypeDefaultArgs<ExtArgs>>): Prisma__MonsterTypeClient<$Result.GetResult<Prisma.$MonsterTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CardMonsterType model
   */
  interface CardMonsterTypeFieldRefs {
    readonly cardId: FieldRef<"CardMonsterType", 'Int'>
    readonly monsterTypeId: FieldRef<"CardMonsterType", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * CardMonsterType findUnique
   */
  export type CardMonsterTypeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardMonsterType
     */
    select?: CardMonsterTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CardMonsterType
     */
    omit?: CardMonsterTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardMonsterTypeInclude<ExtArgs> | null
    /**
     * Filter, which CardMonsterType to fetch.
     */
    where: CardMonsterTypeWhereUniqueInput
  }

  /**
   * CardMonsterType findUniqueOrThrow
   */
  export type CardMonsterTypeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardMonsterType
     */
    select?: CardMonsterTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CardMonsterType
     */
    omit?: CardMonsterTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardMonsterTypeInclude<ExtArgs> | null
    /**
     * Filter, which CardMonsterType to fetch.
     */
    where: CardMonsterTypeWhereUniqueInput
  }

  /**
   * CardMonsterType findFirst
   */
  export type CardMonsterTypeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardMonsterType
     */
    select?: CardMonsterTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CardMonsterType
     */
    omit?: CardMonsterTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardMonsterTypeInclude<ExtArgs> | null
    /**
     * Filter, which CardMonsterType to fetch.
     */
    where?: CardMonsterTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CardMonsterTypes to fetch.
     */
    orderBy?: CardMonsterTypeOrderByWithRelationInput | CardMonsterTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CardMonsterTypes.
     */
    cursor?: CardMonsterTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CardMonsterTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CardMonsterTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CardMonsterTypes.
     */
    distinct?: CardMonsterTypeScalarFieldEnum | CardMonsterTypeScalarFieldEnum[]
  }

  /**
   * CardMonsterType findFirstOrThrow
   */
  export type CardMonsterTypeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardMonsterType
     */
    select?: CardMonsterTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CardMonsterType
     */
    omit?: CardMonsterTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardMonsterTypeInclude<ExtArgs> | null
    /**
     * Filter, which CardMonsterType to fetch.
     */
    where?: CardMonsterTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CardMonsterTypes to fetch.
     */
    orderBy?: CardMonsterTypeOrderByWithRelationInput | CardMonsterTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CardMonsterTypes.
     */
    cursor?: CardMonsterTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CardMonsterTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CardMonsterTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CardMonsterTypes.
     */
    distinct?: CardMonsterTypeScalarFieldEnum | CardMonsterTypeScalarFieldEnum[]
  }

  /**
   * CardMonsterType findMany
   */
  export type CardMonsterTypeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardMonsterType
     */
    select?: CardMonsterTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CardMonsterType
     */
    omit?: CardMonsterTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardMonsterTypeInclude<ExtArgs> | null
    /**
     * Filter, which CardMonsterTypes to fetch.
     */
    where?: CardMonsterTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CardMonsterTypes to fetch.
     */
    orderBy?: CardMonsterTypeOrderByWithRelationInput | CardMonsterTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CardMonsterTypes.
     */
    cursor?: CardMonsterTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CardMonsterTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CardMonsterTypes.
     */
    skip?: number
    distinct?: CardMonsterTypeScalarFieldEnum | CardMonsterTypeScalarFieldEnum[]
  }

  /**
   * CardMonsterType create
   */
  export type CardMonsterTypeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardMonsterType
     */
    select?: CardMonsterTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CardMonsterType
     */
    omit?: CardMonsterTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardMonsterTypeInclude<ExtArgs> | null
    /**
     * The data needed to create a CardMonsterType.
     */
    data: XOR<CardMonsterTypeCreateInput, CardMonsterTypeUncheckedCreateInput>
  }

  /**
   * CardMonsterType createMany
   */
  export type CardMonsterTypeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CardMonsterTypes.
     */
    data: CardMonsterTypeCreateManyInput | CardMonsterTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CardMonsterType createManyAndReturn
   */
  export type CardMonsterTypeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardMonsterType
     */
    select?: CardMonsterTypeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CardMonsterType
     */
    omit?: CardMonsterTypeOmit<ExtArgs> | null
    /**
     * The data used to create many CardMonsterTypes.
     */
    data: CardMonsterTypeCreateManyInput | CardMonsterTypeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardMonsterTypeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CardMonsterType update
   */
  export type CardMonsterTypeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardMonsterType
     */
    select?: CardMonsterTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CardMonsterType
     */
    omit?: CardMonsterTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardMonsterTypeInclude<ExtArgs> | null
    /**
     * The data needed to update a CardMonsterType.
     */
    data: XOR<CardMonsterTypeUpdateInput, CardMonsterTypeUncheckedUpdateInput>
    /**
     * Choose, which CardMonsterType to update.
     */
    where: CardMonsterTypeWhereUniqueInput
  }

  /**
   * CardMonsterType updateMany
   */
  export type CardMonsterTypeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CardMonsterTypes.
     */
    data: XOR<CardMonsterTypeUpdateManyMutationInput, CardMonsterTypeUncheckedUpdateManyInput>
    /**
     * Filter which CardMonsterTypes to update
     */
    where?: CardMonsterTypeWhereInput
    /**
     * Limit how many CardMonsterTypes to update.
     */
    limit?: number
  }

  /**
   * CardMonsterType updateManyAndReturn
   */
  export type CardMonsterTypeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardMonsterType
     */
    select?: CardMonsterTypeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CardMonsterType
     */
    omit?: CardMonsterTypeOmit<ExtArgs> | null
    /**
     * The data used to update CardMonsterTypes.
     */
    data: XOR<CardMonsterTypeUpdateManyMutationInput, CardMonsterTypeUncheckedUpdateManyInput>
    /**
     * Filter which CardMonsterTypes to update
     */
    where?: CardMonsterTypeWhereInput
    /**
     * Limit how many CardMonsterTypes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardMonsterTypeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CardMonsterType upsert
   */
  export type CardMonsterTypeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardMonsterType
     */
    select?: CardMonsterTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CardMonsterType
     */
    omit?: CardMonsterTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardMonsterTypeInclude<ExtArgs> | null
    /**
     * The filter to search for the CardMonsterType to update in case it exists.
     */
    where: CardMonsterTypeWhereUniqueInput
    /**
     * In case the CardMonsterType found by the `where` argument doesn't exist, create a new CardMonsterType with this data.
     */
    create: XOR<CardMonsterTypeCreateInput, CardMonsterTypeUncheckedCreateInput>
    /**
     * In case the CardMonsterType was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CardMonsterTypeUpdateInput, CardMonsterTypeUncheckedUpdateInput>
  }

  /**
   * CardMonsterType delete
   */
  export type CardMonsterTypeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardMonsterType
     */
    select?: CardMonsterTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CardMonsterType
     */
    omit?: CardMonsterTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardMonsterTypeInclude<ExtArgs> | null
    /**
     * Filter which CardMonsterType to delete.
     */
    where: CardMonsterTypeWhereUniqueInput
  }

  /**
   * CardMonsterType deleteMany
   */
  export type CardMonsterTypeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CardMonsterTypes to delete
     */
    where?: CardMonsterTypeWhereInput
    /**
     * Limit how many CardMonsterTypes to delete.
     */
    limit?: number
  }

  /**
   * CardMonsterType without action
   */
  export type CardMonsterTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardMonsterType
     */
    select?: CardMonsterTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CardMonsterType
     */
    omit?: CardMonsterTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardMonsterTypeInclude<ExtArgs> | null
  }


  /**
   * Model MonsterType
   */

  export type AggregateMonsterType = {
    _count: MonsterTypeCountAggregateOutputType | null
    _avg: MonsterTypeAvgAggregateOutputType | null
    _sum: MonsterTypeSumAggregateOutputType | null
    _min: MonsterTypeMinAggregateOutputType | null
    _max: MonsterTypeMaxAggregateOutputType | null
  }

  export type MonsterTypeAvgAggregateOutputType = {
    id: number | null
  }

  export type MonsterTypeSumAggregateOutputType = {
    id: number | null
  }

  export type MonsterTypeMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type MonsterTypeMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type MonsterTypeCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type MonsterTypeAvgAggregateInputType = {
    id?: true
  }

  export type MonsterTypeSumAggregateInputType = {
    id?: true
  }

  export type MonsterTypeMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type MonsterTypeMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type MonsterTypeCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type MonsterTypeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MonsterType to aggregate.
     */
    where?: MonsterTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MonsterTypes to fetch.
     */
    orderBy?: MonsterTypeOrderByWithRelationInput | MonsterTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MonsterTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MonsterTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MonsterTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MonsterTypes
    **/
    _count?: true | MonsterTypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MonsterTypeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MonsterTypeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MonsterTypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MonsterTypeMaxAggregateInputType
  }

  export type GetMonsterTypeAggregateType<T extends MonsterTypeAggregateArgs> = {
        [P in keyof T & keyof AggregateMonsterType]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMonsterType[P]>
      : GetScalarType<T[P], AggregateMonsterType[P]>
  }




  export type MonsterTypeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MonsterTypeWhereInput
    orderBy?: MonsterTypeOrderByWithAggregationInput | MonsterTypeOrderByWithAggregationInput[]
    by: MonsterTypeScalarFieldEnum[] | MonsterTypeScalarFieldEnum
    having?: MonsterTypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MonsterTypeCountAggregateInputType | true
    _avg?: MonsterTypeAvgAggregateInputType
    _sum?: MonsterTypeSumAggregateInputType
    _min?: MonsterTypeMinAggregateInputType
    _max?: MonsterTypeMaxAggregateInputType
  }

  export type MonsterTypeGroupByOutputType = {
    id: number
    name: string
    _count: MonsterTypeCountAggregateOutputType | null
    _avg: MonsterTypeAvgAggregateOutputType | null
    _sum: MonsterTypeSumAggregateOutputType | null
    _min: MonsterTypeMinAggregateOutputType | null
    _max: MonsterTypeMaxAggregateOutputType | null
  }

  type GetMonsterTypeGroupByPayload<T extends MonsterTypeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MonsterTypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MonsterTypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MonsterTypeGroupByOutputType[P]>
            : GetScalarType<T[P], MonsterTypeGroupByOutputType[P]>
        }
      >
    >


  export type MonsterTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    cards?: boolean | MonsterType$cardsArgs<ExtArgs>
    _count?: boolean | MonsterTypeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["monsterType"]>

  export type MonsterTypeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["monsterType"]>

  export type MonsterTypeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["monsterType"]>

  export type MonsterTypeSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type MonsterTypeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["monsterType"]>
  export type MonsterTypeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cards?: boolean | MonsterType$cardsArgs<ExtArgs>
    _count?: boolean | MonsterTypeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MonsterTypeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type MonsterTypeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $MonsterTypePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MonsterType"
    objects: {
      cards: Prisma.$CardMonsterTypePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["monsterType"]>
    composites: {}
  }

  type MonsterTypeGetPayload<S extends boolean | null | undefined | MonsterTypeDefaultArgs> = $Result.GetResult<Prisma.$MonsterTypePayload, S>

  type MonsterTypeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MonsterTypeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MonsterTypeCountAggregateInputType | true
    }

  export interface MonsterTypeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MonsterType'], meta: { name: 'MonsterType' } }
    /**
     * Find zero or one MonsterType that matches the filter.
     * @param {MonsterTypeFindUniqueArgs} args - Arguments to find a MonsterType
     * @example
     * // Get one MonsterType
     * const monsterType = await prisma.monsterType.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MonsterTypeFindUniqueArgs>(args: SelectSubset<T, MonsterTypeFindUniqueArgs<ExtArgs>>): Prisma__MonsterTypeClient<$Result.GetResult<Prisma.$MonsterTypePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MonsterType that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MonsterTypeFindUniqueOrThrowArgs} args - Arguments to find a MonsterType
     * @example
     * // Get one MonsterType
     * const monsterType = await prisma.monsterType.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MonsterTypeFindUniqueOrThrowArgs>(args: SelectSubset<T, MonsterTypeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MonsterTypeClient<$Result.GetResult<Prisma.$MonsterTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MonsterType that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonsterTypeFindFirstArgs} args - Arguments to find a MonsterType
     * @example
     * // Get one MonsterType
     * const monsterType = await prisma.monsterType.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MonsterTypeFindFirstArgs>(args?: SelectSubset<T, MonsterTypeFindFirstArgs<ExtArgs>>): Prisma__MonsterTypeClient<$Result.GetResult<Prisma.$MonsterTypePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MonsterType that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonsterTypeFindFirstOrThrowArgs} args - Arguments to find a MonsterType
     * @example
     * // Get one MonsterType
     * const monsterType = await prisma.monsterType.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MonsterTypeFindFirstOrThrowArgs>(args?: SelectSubset<T, MonsterTypeFindFirstOrThrowArgs<ExtArgs>>): Prisma__MonsterTypeClient<$Result.GetResult<Prisma.$MonsterTypePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MonsterTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonsterTypeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MonsterTypes
     * const monsterTypes = await prisma.monsterType.findMany()
     * 
     * // Get first 10 MonsterTypes
     * const monsterTypes = await prisma.monsterType.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const monsterTypeWithIdOnly = await prisma.monsterType.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MonsterTypeFindManyArgs>(args?: SelectSubset<T, MonsterTypeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MonsterTypePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MonsterType.
     * @param {MonsterTypeCreateArgs} args - Arguments to create a MonsterType.
     * @example
     * // Create one MonsterType
     * const MonsterType = await prisma.monsterType.create({
     *   data: {
     *     // ... data to create a MonsterType
     *   }
     * })
     * 
     */
    create<T extends MonsterTypeCreateArgs>(args: SelectSubset<T, MonsterTypeCreateArgs<ExtArgs>>): Prisma__MonsterTypeClient<$Result.GetResult<Prisma.$MonsterTypePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MonsterTypes.
     * @param {MonsterTypeCreateManyArgs} args - Arguments to create many MonsterTypes.
     * @example
     * // Create many MonsterTypes
     * const monsterType = await prisma.monsterType.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MonsterTypeCreateManyArgs>(args?: SelectSubset<T, MonsterTypeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MonsterTypes and returns the data saved in the database.
     * @param {MonsterTypeCreateManyAndReturnArgs} args - Arguments to create many MonsterTypes.
     * @example
     * // Create many MonsterTypes
     * const monsterType = await prisma.monsterType.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MonsterTypes and only return the `id`
     * const monsterTypeWithIdOnly = await prisma.monsterType.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MonsterTypeCreateManyAndReturnArgs>(args?: SelectSubset<T, MonsterTypeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MonsterTypePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MonsterType.
     * @param {MonsterTypeDeleteArgs} args - Arguments to delete one MonsterType.
     * @example
     * // Delete one MonsterType
     * const MonsterType = await prisma.monsterType.delete({
     *   where: {
     *     // ... filter to delete one MonsterType
     *   }
     * })
     * 
     */
    delete<T extends MonsterTypeDeleteArgs>(args: SelectSubset<T, MonsterTypeDeleteArgs<ExtArgs>>): Prisma__MonsterTypeClient<$Result.GetResult<Prisma.$MonsterTypePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MonsterType.
     * @param {MonsterTypeUpdateArgs} args - Arguments to update one MonsterType.
     * @example
     * // Update one MonsterType
     * const monsterType = await prisma.monsterType.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MonsterTypeUpdateArgs>(args: SelectSubset<T, MonsterTypeUpdateArgs<ExtArgs>>): Prisma__MonsterTypeClient<$Result.GetResult<Prisma.$MonsterTypePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MonsterTypes.
     * @param {MonsterTypeDeleteManyArgs} args - Arguments to filter MonsterTypes to delete.
     * @example
     * // Delete a few MonsterTypes
     * const { count } = await prisma.monsterType.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MonsterTypeDeleteManyArgs>(args?: SelectSubset<T, MonsterTypeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MonsterTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonsterTypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MonsterTypes
     * const monsterType = await prisma.monsterType.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MonsterTypeUpdateManyArgs>(args: SelectSubset<T, MonsterTypeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MonsterTypes and returns the data updated in the database.
     * @param {MonsterTypeUpdateManyAndReturnArgs} args - Arguments to update many MonsterTypes.
     * @example
     * // Update many MonsterTypes
     * const monsterType = await prisma.monsterType.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MonsterTypes and only return the `id`
     * const monsterTypeWithIdOnly = await prisma.monsterType.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MonsterTypeUpdateManyAndReturnArgs>(args: SelectSubset<T, MonsterTypeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MonsterTypePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MonsterType.
     * @param {MonsterTypeUpsertArgs} args - Arguments to update or create a MonsterType.
     * @example
     * // Update or create a MonsterType
     * const monsterType = await prisma.monsterType.upsert({
     *   create: {
     *     // ... data to create a MonsterType
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MonsterType we want to update
     *   }
     * })
     */
    upsert<T extends MonsterTypeUpsertArgs>(args: SelectSubset<T, MonsterTypeUpsertArgs<ExtArgs>>): Prisma__MonsterTypeClient<$Result.GetResult<Prisma.$MonsterTypePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MonsterTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonsterTypeCountArgs} args - Arguments to filter MonsterTypes to count.
     * @example
     * // Count the number of MonsterTypes
     * const count = await prisma.monsterType.count({
     *   where: {
     *     // ... the filter for the MonsterTypes we want to count
     *   }
     * })
    **/
    count<T extends MonsterTypeCountArgs>(
      args?: Subset<T, MonsterTypeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MonsterTypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MonsterType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonsterTypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MonsterTypeAggregateArgs>(args: Subset<T, MonsterTypeAggregateArgs>): Prisma.PrismaPromise<GetMonsterTypeAggregateType<T>>

    /**
     * Group by MonsterType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonsterTypeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MonsterTypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MonsterTypeGroupByArgs['orderBy'] }
        : { orderBy?: MonsterTypeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MonsterTypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMonsterTypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MonsterType model
   */
  readonly fields: MonsterTypeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MonsterType.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MonsterTypeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cards<T extends MonsterType$cardsArgs<ExtArgs> = {}>(args?: Subset<T, MonsterType$cardsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CardMonsterTypePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MonsterType model
   */
  interface MonsterTypeFieldRefs {
    readonly id: FieldRef<"MonsterType", 'Int'>
    readonly name: FieldRef<"MonsterType", 'String'>
  }
    

  // Custom InputTypes
  /**
   * MonsterType findUnique
   */
  export type MonsterTypeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonsterType
     */
    select?: MonsterTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonsterType
     */
    omit?: MonsterTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonsterTypeInclude<ExtArgs> | null
    /**
     * Filter, which MonsterType to fetch.
     */
    where: MonsterTypeWhereUniqueInput
  }

  /**
   * MonsterType findUniqueOrThrow
   */
  export type MonsterTypeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonsterType
     */
    select?: MonsterTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonsterType
     */
    omit?: MonsterTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonsterTypeInclude<ExtArgs> | null
    /**
     * Filter, which MonsterType to fetch.
     */
    where: MonsterTypeWhereUniqueInput
  }

  /**
   * MonsterType findFirst
   */
  export type MonsterTypeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonsterType
     */
    select?: MonsterTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonsterType
     */
    omit?: MonsterTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonsterTypeInclude<ExtArgs> | null
    /**
     * Filter, which MonsterType to fetch.
     */
    where?: MonsterTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MonsterTypes to fetch.
     */
    orderBy?: MonsterTypeOrderByWithRelationInput | MonsterTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MonsterTypes.
     */
    cursor?: MonsterTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MonsterTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MonsterTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MonsterTypes.
     */
    distinct?: MonsterTypeScalarFieldEnum | MonsterTypeScalarFieldEnum[]
  }

  /**
   * MonsterType findFirstOrThrow
   */
  export type MonsterTypeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonsterType
     */
    select?: MonsterTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonsterType
     */
    omit?: MonsterTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonsterTypeInclude<ExtArgs> | null
    /**
     * Filter, which MonsterType to fetch.
     */
    where?: MonsterTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MonsterTypes to fetch.
     */
    orderBy?: MonsterTypeOrderByWithRelationInput | MonsterTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MonsterTypes.
     */
    cursor?: MonsterTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MonsterTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MonsterTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MonsterTypes.
     */
    distinct?: MonsterTypeScalarFieldEnum | MonsterTypeScalarFieldEnum[]
  }

  /**
   * MonsterType findMany
   */
  export type MonsterTypeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonsterType
     */
    select?: MonsterTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonsterType
     */
    omit?: MonsterTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonsterTypeInclude<ExtArgs> | null
    /**
     * Filter, which MonsterTypes to fetch.
     */
    where?: MonsterTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MonsterTypes to fetch.
     */
    orderBy?: MonsterTypeOrderByWithRelationInput | MonsterTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MonsterTypes.
     */
    cursor?: MonsterTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MonsterTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MonsterTypes.
     */
    skip?: number
    distinct?: MonsterTypeScalarFieldEnum | MonsterTypeScalarFieldEnum[]
  }

  /**
   * MonsterType create
   */
  export type MonsterTypeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonsterType
     */
    select?: MonsterTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonsterType
     */
    omit?: MonsterTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonsterTypeInclude<ExtArgs> | null
    /**
     * The data needed to create a MonsterType.
     */
    data: XOR<MonsterTypeCreateInput, MonsterTypeUncheckedCreateInput>
  }

  /**
   * MonsterType createMany
   */
  export type MonsterTypeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MonsterTypes.
     */
    data: MonsterTypeCreateManyInput | MonsterTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MonsterType createManyAndReturn
   */
  export type MonsterTypeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonsterType
     */
    select?: MonsterTypeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MonsterType
     */
    omit?: MonsterTypeOmit<ExtArgs> | null
    /**
     * The data used to create many MonsterTypes.
     */
    data: MonsterTypeCreateManyInput | MonsterTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MonsterType update
   */
  export type MonsterTypeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonsterType
     */
    select?: MonsterTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonsterType
     */
    omit?: MonsterTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonsterTypeInclude<ExtArgs> | null
    /**
     * The data needed to update a MonsterType.
     */
    data: XOR<MonsterTypeUpdateInput, MonsterTypeUncheckedUpdateInput>
    /**
     * Choose, which MonsterType to update.
     */
    where: MonsterTypeWhereUniqueInput
  }

  /**
   * MonsterType updateMany
   */
  export type MonsterTypeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MonsterTypes.
     */
    data: XOR<MonsterTypeUpdateManyMutationInput, MonsterTypeUncheckedUpdateManyInput>
    /**
     * Filter which MonsterTypes to update
     */
    where?: MonsterTypeWhereInput
    /**
     * Limit how many MonsterTypes to update.
     */
    limit?: number
  }

  /**
   * MonsterType updateManyAndReturn
   */
  export type MonsterTypeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonsterType
     */
    select?: MonsterTypeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MonsterType
     */
    omit?: MonsterTypeOmit<ExtArgs> | null
    /**
     * The data used to update MonsterTypes.
     */
    data: XOR<MonsterTypeUpdateManyMutationInput, MonsterTypeUncheckedUpdateManyInput>
    /**
     * Filter which MonsterTypes to update
     */
    where?: MonsterTypeWhereInput
    /**
     * Limit how many MonsterTypes to update.
     */
    limit?: number
  }

  /**
   * MonsterType upsert
   */
  export type MonsterTypeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonsterType
     */
    select?: MonsterTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonsterType
     */
    omit?: MonsterTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonsterTypeInclude<ExtArgs> | null
    /**
     * The filter to search for the MonsterType to update in case it exists.
     */
    where: MonsterTypeWhereUniqueInput
    /**
     * In case the MonsterType found by the `where` argument doesn't exist, create a new MonsterType with this data.
     */
    create: XOR<MonsterTypeCreateInput, MonsterTypeUncheckedCreateInput>
    /**
     * In case the MonsterType was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MonsterTypeUpdateInput, MonsterTypeUncheckedUpdateInput>
  }

  /**
   * MonsterType delete
   */
  export type MonsterTypeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonsterType
     */
    select?: MonsterTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonsterType
     */
    omit?: MonsterTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonsterTypeInclude<ExtArgs> | null
    /**
     * Filter which MonsterType to delete.
     */
    where: MonsterTypeWhereUniqueInput
  }

  /**
   * MonsterType deleteMany
   */
  export type MonsterTypeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MonsterTypes to delete
     */
    where?: MonsterTypeWhereInput
    /**
     * Limit how many MonsterTypes to delete.
     */
    limit?: number
  }

  /**
   * MonsterType.cards
   */
  export type MonsterType$cardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardMonsterType
     */
    select?: CardMonsterTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CardMonsterType
     */
    omit?: CardMonsterTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardMonsterTypeInclude<ExtArgs> | null
    where?: CardMonsterTypeWhereInput
    orderBy?: CardMonsterTypeOrderByWithRelationInput | CardMonsterTypeOrderByWithRelationInput[]
    cursor?: CardMonsterTypeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CardMonsterTypeScalarFieldEnum | CardMonsterTypeScalarFieldEnum[]
  }

  /**
   * MonsterType without action
   */
  export type MonsterTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonsterType
     */
    select?: MonsterTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonsterType
     */
    omit?: MonsterTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonsterTypeInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    username: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    username: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    username: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    username?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    username?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    username?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    username: string
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    username?: boolean
    inventory?: boolean | User$inventoryArgs<ExtArgs>
    decks?: boolean | User$decksArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    username?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    username?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    username?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "username", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inventory?: boolean | User$inventoryArgs<ExtArgs>
    decks?: boolean | User$decksArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      inventory: Prisma.$InventoryItemPayload<ExtArgs>[]
      decks: Prisma.$DeckPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      username: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    inventory<T extends User$inventoryArgs<ExtArgs> = {}>(args?: Subset<T, User$inventoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    decks<T extends User$decksArgs<ExtArgs> = {}>(args?: Subset<T, User$decksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeckPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.inventory
   */
  export type User$inventoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryItem
     */
    select?: InventoryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryItem
     */
    omit?: InventoryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryItemInclude<ExtArgs> | null
    where?: InventoryItemWhereInput
    orderBy?: InventoryItemOrderByWithRelationInput | InventoryItemOrderByWithRelationInput[]
    cursor?: InventoryItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InventoryItemScalarFieldEnum | InventoryItemScalarFieldEnum[]
  }

  /**
   * User.decks
   */
  export type User$decksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deck
     */
    select?: DeckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deck
     */
    omit?: DeckOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeckInclude<ExtArgs> | null
    where?: DeckWhereInput
    orderBy?: DeckOrderByWithRelationInput | DeckOrderByWithRelationInput[]
    cursor?: DeckWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DeckScalarFieldEnum | DeckScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model InventoryItem
   */

  export type AggregateInventoryItem = {
    _count: InventoryItemCountAggregateOutputType | null
    _avg: InventoryItemAvgAggregateOutputType | null
    _sum: InventoryItemSumAggregateOutputType | null
    _min: InventoryItemMinAggregateOutputType | null
    _max: InventoryItemMaxAggregateOutputType | null
  }

  export type InventoryItemAvgAggregateOutputType = {
    cardId: number | null
    quantity: number | null
  }

  export type InventoryItemSumAggregateOutputType = {
    cardId: number | null
    quantity: number | null
  }

  export type InventoryItemMinAggregateOutputType = {
    userId: string | null
    cardId: number | null
    quantity: number | null
  }

  export type InventoryItemMaxAggregateOutputType = {
    userId: string | null
    cardId: number | null
    quantity: number | null
  }

  export type InventoryItemCountAggregateOutputType = {
    userId: number
    cardId: number
    quantity: number
    _all: number
  }


  export type InventoryItemAvgAggregateInputType = {
    cardId?: true
    quantity?: true
  }

  export type InventoryItemSumAggregateInputType = {
    cardId?: true
    quantity?: true
  }

  export type InventoryItemMinAggregateInputType = {
    userId?: true
    cardId?: true
    quantity?: true
  }

  export type InventoryItemMaxAggregateInputType = {
    userId?: true
    cardId?: true
    quantity?: true
  }

  export type InventoryItemCountAggregateInputType = {
    userId?: true
    cardId?: true
    quantity?: true
    _all?: true
  }

  export type InventoryItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InventoryItem to aggregate.
     */
    where?: InventoryItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventoryItems to fetch.
     */
    orderBy?: InventoryItemOrderByWithRelationInput | InventoryItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InventoryItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InventoryItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InventoryItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned InventoryItems
    **/
    _count?: true | InventoryItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InventoryItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InventoryItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InventoryItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InventoryItemMaxAggregateInputType
  }

  export type GetInventoryItemAggregateType<T extends InventoryItemAggregateArgs> = {
        [P in keyof T & keyof AggregateInventoryItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInventoryItem[P]>
      : GetScalarType<T[P], AggregateInventoryItem[P]>
  }




  export type InventoryItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InventoryItemWhereInput
    orderBy?: InventoryItemOrderByWithAggregationInput | InventoryItemOrderByWithAggregationInput[]
    by: InventoryItemScalarFieldEnum[] | InventoryItemScalarFieldEnum
    having?: InventoryItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InventoryItemCountAggregateInputType | true
    _avg?: InventoryItemAvgAggregateInputType
    _sum?: InventoryItemSumAggregateInputType
    _min?: InventoryItemMinAggregateInputType
    _max?: InventoryItemMaxAggregateInputType
  }

  export type InventoryItemGroupByOutputType = {
    userId: string
    cardId: number
    quantity: number
    _count: InventoryItemCountAggregateOutputType | null
    _avg: InventoryItemAvgAggregateOutputType | null
    _sum: InventoryItemSumAggregateOutputType | null
    _min: InventoryItemMinAggregateOutputType | null
    _max: InventoryItemMaxAggregateOutputType | null
  }

  type GetInventoryItemGroupByPayload<T extends InventoryItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InventoryItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InventoryItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InventoryItemGroupByOutputType[P]>
            : GetScalarType<T[P], InventoryItemGroupByOutputType[P]>
        }
      >
    >


  export type InventoryItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    cardId?: boolean
    quantity?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    card?: boolean | CardDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inventoryItem"]>

  export type InventoryItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    cardId?: boolean
    quantity?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    card?: boolean | CardDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inventoryItem"]>

  export type InventoryItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    cardId?: boolean
    quantity?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    card?: boolean | CardDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inventoryItem"]>

  export type InventoryItemSelectScalar = {
    userId?: boolean
    cardId?: boolean
    quantity?: boolean
  }

  export type InventoryItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "cardId" | "quantity", ExtArgs["result"]["inventoryItem"]>
  export type InventoryItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    card?: boolean | CardDefaultArgs<ExtArgs>
  }
  export type InventoryItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    card?: boolean | CardDefaultArgs<ExtArgs>
  }
  export type InventoryItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    card?: boolean | CardDefaultArgs<ExtArgs>
  }

  export type $InventoryItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "InventoryItem"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      card: Prisma.$CardPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: string
      cardId: number
      quantity: number
    }, ExtArgs["result"]["inventoryItem"]>
    composites: {}
  }

  type InventoryItemGetPayload<S extends boolean | null | undefined | InventoryItemDefaultArgs> = $Result.GetResult<Prisma.$InventoryItemPayload, S>

  type InventoryItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InventoryItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InventoryItemCountAggregateInputType | true
    }

  export interface InventoryItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['InventoryItem'], meta: { name: 'InventoryItem' } }
    /**
     * Find zero or one InventoryItem that matches the filter.
     * @param {InventoryItemFindUniqueArgs} args - Arguments to find a InventoryItem
     * @example
     * // Get one InventoryItem
     * const inventoryItem = await prisma.inventoryItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InventoryItemFindUniqueArgs>(args: SelectSubset<T, InventoryItemFindUniqueArgs<ExtArgs>>): Prisma__InventoryItemClient<$Result.GetResult<Prisma.$InventoryItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one InventoryItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InventoryItemFindUniqueOrThrowArgs} args - Arguments to find a InventoryItem
     * @example
     * // Get one InventoryItem
     * const inventoryItem = await prisma.inventoryItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InventoryItemFindUniqueOrThrowArgs>(args: SelectSubset<T, InventoryItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InventoryItemClient<$Result.GetResult<Prisma.$InventoryItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InventoryItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryItemFindFirstArgs} args - Arguments to find a InventoryItem
     * @example
     * // Get one InventoryItem
     * const inventoryItem = await prisma.inventoryItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InventoryItemFindFirstArgs>(args?: SelectSubset<T, InventoryItemFindFirstArgs<ExtArgs>>): Prisma__InventoryItemClient<$Result.GetResult<Prisma.$InventoryItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InventoryItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryItemFindFirstOrThrowArgs} args - Arguments to find a InventoryItem
     * @example
     * // Get one InventoryItem
     * const inventoryItem = await prisma.inventoryItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InventoryItemFindFirstOrThrowArgs>(args?: SelectSubset<T, InventoryItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__InventoryItemClient<$Result.GetResult<Prisma.$InventoryItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more InventoryItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all InventoryItems
     * const inventoryItems = await prisma.inventoryItem.findMany()
     * 
     * // Get first 10 InventoryItems
     * const inventoryItems = await prisma.inventoryItem.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const inventoryItemWithUserIdOnly = await prisma.inventoryItem.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends InventoryItemFindManyArgs>(args?: SelectSubset<T, InventoryItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a InventoryItem.
     * @param {InventoryItemCreateArgs} args - Arguments to create a InventoryItem.
     * @example
     * // Create one InventoryItem
     * const InventoryItem = await prisma.inventoryItem.create({
     *   data: {
     *     // ... data to create a InventoryItem
     *   }
     * })
     * 
     */
    create<T extends InventoryItemCreateArgs>(args: SelectSubset<T, InventoryItemCreateArgs<ExtArgs>>): Prisma__InventoryItemClient<$Result.GetResult<Prisma.$InventoryItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many InventoryItems.
     * @param {InventoryItemCreateManyArgs} args - Arguments to create many InventoryItems.
     * @example
     * // Create many InventoryItems
     * const inventoryItem = await prisma.inventoryItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InventoryItemCreateManyArgs>(args?: SelectSubset<T, InventoryItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many InventoryItems and returns the data saved in the database.
     * @param {InventoryItemCreateManyAndReturnArgs} args - Arguments to create many InventoryItems.
     * @example
     * // Create many InventoryItems
     * const inventoryItem = await prisma.inventoryItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many InventoryItems and only return the `userId`
     * const inventoryItemWithUserIdOnly = await prisma.inventoryItem.createManyAndReturn({
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InventoryItemCreateManyAndReturnArgs>(args?: SelectSubset<T, InventoryItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a InventoryItem.
     * @param {InventoryItemDeleteArgs} args - Arguments to delete one InventoryItem.
     * @example
     * // Delete one InventoryItem
     * const InventoryItem = await prisma.inventoryItem.delete({
     *   where: {
     *     // ... filter to delete one InventoryItem
     *   }
     * })
     * 
     */
    delete<T extends InventoryItemDeleteArgs>(args: SelectSubset<T, InventoryItemDeleteArgs<ExtArgs>>): Prisma__InventoryItemClient<$Result.GetResult<Prisma.$InventoryItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one InventoryItem.
     * @param {InventoryItemUpdateArgs} args - Arguments to update one InventoryItem.
     * @example
     * // Update one InventoryItem
     * const inventoryItem = await prisma.inventoryItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InventoryItemUpdateArgs>(args: SelectSubset<T, InventoryItemUpdateArgs<ExtArgs>>): Prisma__InventoryItemClient<$Result.GetResult<Prisma.$InventoryItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more InventoryItems.
     * @param {InventoryItemDeleteManyArgs} args - Arguments to filter InventoryItems to delete.
     * @example
     * // Delete a few InventoryItems
     * const { count } = await prisma.inventoryItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InventoryItemDeleteManyArgs>(args?: SelectSubset<T, InventoryItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InventoryItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many InventoryItems
     * const inventoryItem = await prisma.inventoryItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InventoryItemUpdateManyArgs>(args: SelectSubset<T, InventoryItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InventoryItems and returns the data updated in the database.
     * @param {InventoryItemUpdateManyAndReturnArgs} args - Arguments to update many InventoryItems.
     * @example
     * // Update many InventoryItems
     * const inventoryItem = await prisma.inventoryItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more InventoryItems and only return the `userId`
     * const inventoryItemWithUserIdOnly = await prisma.inventoryItem.updateManyAndReturn({
     *   select: { userId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends InventoryItemUpdateManyAndReturnArgs>(args: SelectSubset<T, InventoryItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one InventoryItem.
     * @param {InventoryItemUpsertArgs} args - Arguments to update or create a InventoryItem.
     * @example
     * // Update or create a InventoryItem
     * const inventoryItem = await prisma.inventoryItem.upsert({
     *   create: {
     *     // ... data to create a InventoryItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the InventoryItem we want to update
     *   }
     * })
     */
    upsert<T extends InventoryItemUpsertArgs>(args: SelectSubset<T, InventoryItemUpsertArgs<ExtArgs>>): Prisma__InventoryItemClient<$Result.GetResult<Prisma.$InventoryItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of InventoryItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryItemCountArgs} args - Arguments to filter InventoryItems to count.
     * @example
     * // Count the number of InventoryItems
     * const count = await prisma.inventoryItem.count({
     *   where: {
     *     // ... the filter for the InventoryItems we want to count
     *   }
     * })
    **/
    count<T extends InventoryItemCountArgs>(
      args?: Subset<T, InventoryItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InventoryItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a InventoryItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InventoryItemAggregateArgs>(args: Subset<T, InventoryItemAggregateArgs>): Prisma.PrismaPromise<GetInventoryItemAggregateType<T>>

    /**
     * Group by InventoryItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InventoryItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InventoryItemGroupByArgs['orderBy'] }
        : { orderBy?: InventoryItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InventoryItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInventoryItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the InventoryItem model
   */
  readonly fields: InventoryItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for InventoryItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InventoryItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    card<T extends CardDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CardDefaultArgs<ExtArgs>>): Prisma__CardClient<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the InventoryItem model
   */
  interface InventoryItemFieldRefs {
    readonly userId: FieldRef<"InventoryItem", 'String'>
    readonly cardId: FieldRef<"InventoryItem", 'Int'>
    readonly quantity: FieldRef<"InventoryItem", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * InventoryItem findUnique
   */
  export type InventoryItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryItem
     */
    select?: InventoryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryItem
     */
    omit?: InventoryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryItemInclude<ExtArgs> | null
    /**
     * Filter, which InventoryItem to fetch.
     */
    where: InventoryItemWhereUniqueInput
  }

  /**
   * InventoryItem findUniqueOrThrow
   */
  export type InventoryItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryItem
     */
    select?: InventoryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryItem
     */
    omit?: InventoryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryItemInclude<ExtArgs> | null
    /**
     * Filter, which InventoryItem to fetch.
     */
    where: InventoryItemWhereUniqueInput
  }

  /**
   * InventoryItem findFirst
   */
  export type InventoryItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryItem
     */
    select?: InventoryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryItem
     */
    omit?: InventoryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryItemInclude<ExtArgs> | null
    /**
     * Filter, which InventoryItem to fetch.
     */
    where?: InventoryItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventoryItems to fetch.
     */
    orderBy?: InventoryItemOrderByWithRelationInput | InventoryItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InventoryItems.
     */
    cursor?: InventoryItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InventoryItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InventoryItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InventoryItems.
     */
    distinct?: InventoryItemScalarFieldEnum | InventoryItemScalarFieldEnum[]
  }

  /**
   * InventoryItem findFirstOrThrow
   */
  export type InventoryItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryItem
     */
    select?: InventoryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryItem
     */
    omit?: InventoryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryItemInclude<ExtArgs> | null
    /**
     * Filter, which InventoryItem to fetch.
     */
    where?: InventoryItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventoryItems to fetch.
     */
    orderBy?: InventoryItemOrderByWithRelationInput | InventoryItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InventoryItems.
     */
    cursor?: InventoryItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InventoryItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InventoryItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InventoryItems.
     */
    distinct?: InventoryItemScalarFieldEnum | InventoryItemScalarFieldEnum[]
  }

  /**
   * InventoryItem findMany
   */
  export type InventoryItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryItem
     */
    select?: InventoryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryItem
     */
    omit?: InventoryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryItemInclude<ExtArgs> | null
    /**
     * Filter, which InventoryItems to fetch.
     */
    where?: InventoryItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventoryItems to fetch.
     */
    orderBy?: InventoryItemOrderByWithRelationInput | InventoryItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing InventoryItems.
     */
    cursor?: InventoryItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InventoryItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InventoryItems.
     */
    skip?: number
    distinct?: InventoryItemScalarFieldEnum | InventoryItemScalarFieldEnum[]
  }

  /**
   * InventoryItem create
   */
  export type InventoryItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryItem
     */
    select?: InventoryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryItem
     */
    omit?: InventoryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryItemInclude<ExtArgs> | null
    /**
     * The data needed to create a InventoryItem.
     */
    data: XOR<InventoryItemCreateInput, InventoryItemUncheckedCreateInput>
  }

  /**
   * InventoryItem createMany
   */
  export type InventoryItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many InventoryItems.
     */
    data: InventoryItemCreateManyInput | InventoryItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * InventoryItem createManyAndReturn
   */
  export type InventoryItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryItem
     */
    select?: InventoryItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryItem
     */
    omit?: InventoryItemOmit<ExtArgs> | null
    /**
     * The data used to create many InventoryItems.
     */
    data: InventoryItemCreateManyInput | InventoryItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * InventoryItem update
   */
  export type InventoryItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryItem
     */
    select?: InventoryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryItem
     */
    omit?: InventoryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryItemInclude<ExtArgs> | null
    /**
     * The data needed to update a InventoryItem.
     */
    data: XOR<InventoryItemUpdateInput, InventoryItemUncheckedUpdateInput>
    /**
     * Choose, which InventoryItem to update.
     */
    where: InventoryItemWhereUniqueInput
  }

  /**
   * InventoryItem updateMany
   */
  export type InventoryItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update InventoryItems.
     */
    data: XOR<InventoryItemUpdateManyMutationInput, InventoryItemUncheckedUpdateManyInput>
    /**
     * Filter which InventoryItems to update
     */
    where?: InventoryItemWhereInput
    /**
     * Limit how many InventoryItems to update.
     */
    limit?: number
  }

  /**
   * InventoryItem updateManyAndReturn
   */
  export type InventoryItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryItem
     */
    select?: InventoryItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryItem
     */
    omit?: InventoryItemOmit<ExtArgs> | null
    /**
     * The data used to update InventoryItems.
     */
    data: XOR<InventoryItemUpdateManyMutationInput, InventoryItemUncheckedUpdateManyInput>
    /**
     * Filter which InventoryItems to update
     */
    where?: InventoryItemWhereInput
    /**
     * Limit how many InventoryItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * InventoryItem upsert
   */
  export type InventoryItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryItem
     */
    select?: InventoryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryItem
     */
    omit?: InventoryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryItemInclude<ExtArgs> | null
    /**
     * The filter to search for the InventoryItem to update in case it exists.
     */
    where: InventoryItemWhereUniqueInput
    /**
     * In case the InventoryItem found by the `where` argument doesn't exist, create a new InventoryItem with this data.
     */
    create: XOR<InventoryItemCreateInput, InventoryItemUncheckedCreateInput>
    /**
     * In case the InventoryItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InventoryItemUpdateInput, InventoryItemUncheckedUpdateInput>
  }

  /**
   * InventoryItem delete
   */
  export type InventoryItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryItem
     */
    select?: InventoryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryItem
     */
    omit?: InventoryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryItemInclude<ExtArgs> | null
    /**
     * Filter which InventoryItem to delete.
     */
    where: InventoryItemWhereUniqueInput
  }

  /**
   * InventoryItem deleteMany
   */
  export type InventoryItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InventoryItems to delete
     */
    where?: InventoryItemWhereInput
    /**
     * Limit how many InventoryItems to delete.
     */
    limit?: number
  }

  /**
   * InventoryItem without action
   */
  export type InventoryItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryItem
     */
    select?: InventoryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryItem
     */
    omit?: InventoryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryItemInclude<ExtArgs> | null
  }


  /**
   * Model Deck
   */

  export type AggregateDeck = {
    _count: DeckCountAggregateOutputType | null
    _min: DeckMinAggregateOutputType | null
    _max: DeckMaxAggregateOutputType | null
  }

  export type DeckMinAggregateOutputType = {
    userId: string | null
    name: string | null
  }

  export type DeckMaxAggregateOutputType = {
    userId: string | null
    name: string | null
  }

  export type DeckCountAggregateOutputType = {
    userId: number
    name: number
    _all: number
  }


  export type DeckMinAggregateInputType = {
    userId?: true
    name?: true
  }

  export type DeckMaxAggregateInputType = {
    userId?: true
    name?: true
  }

  export type DeckCountAggregateInputType = {
    userId?: true
    name?: true
    _all?: true
  }

  export type DeckAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Deck to aggregate.
     */
    where?: DeckWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Decks to fetch.
     */
    orderBy?: DeckOrderByWithRelationInput | DeckOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DeckWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Decks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Decks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Decks
    **/
    _count?: true | DeckCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DeckMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DeckMaxAggregateInputType
  }

  export type GetDeckAggregateType<T extends DeckAggregateArgs> = {
        [P in keyof T & keyof AggregateDeck]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDeck[P]>
      : GetScalarType<T[P], AggregateDeck[P]>
  }




  export type DeckGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeckWhereInput
    orderBy?: DeckOrderByWithAggregationInput | DeckOrderByWithAggregationInput[]
    by: DeckScalarFieldEnum[] | DeckScalarFieldEnum
    having?: DeckScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DeckCountAggregateInputType | true
    _min?: DeckMinAggregateInputType
    _max?: DeckMaxAggregateInputType
  }

  export type DeckGroupByOutputType = {
    userId: string
    name: string
    _count: DeckCountAggregateOutputType | null
    _min: DeckMinAggregateOutputType | null
    _max: DeckMaxAggregateOutputType | null
  }

  type GetDeckGroupByPayload<T extends DeckGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DeckGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DeckGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DeckGroupByOutputType[P]>
            : GetScalarType<T[P], DeckGroupByOutputType[P]>
        }
      >
    >


  export type DeckSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    name?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    cards?: boolean | Deck$cardsArgs<ExtArgs>
    _count?: boolean | DeckCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["deck"]>

  export type DeckSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    name?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["deck"]>

  export type DeckSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    name?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["deck"]>

  export type DeckSelectScalar = {
    userId?: boolean
    name?: boolean
  }

  export type DeckOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "name", ExtArgs["result"]["deck"]>
  export type DeckInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    cards?: boolean | Deck$cardsArgs<ExtArgs>
    _count?: boolean | DeckCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DeckIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type DeckIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $DeckPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Deck"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      cards: Prisma.$DeckCardPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: string
      name: string
    }, ExtArgs["result"]["deck"]>
    composites: {}
  }

  type DeckGetPayload<S extends boolean | null | undefined | DeckDefaultArgs> = $Result.GetResult<Prisma.$DeckPayload, S>

  type DeckCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DeckFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DeckCountAggregateInputType | true
    }

  export interface DeckDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Deck'], meta: { name: 'Deck' } }
    /**
     * Find zero or one Deck that matches the filter.
     * @param {DeckFindUniqueArgs} args - Arguments to find a Deck
     * @example
     * // Get one Deck
     * const deck = await prisma.deck.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DeckFindUniqueArgs>(args: SelectSubset<T, DeckFindUniqueArgs<ExtArgs>>): Prisma__DeckClient<$Result.GetResult<Prisma.$DeckPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Deck that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DeckFindUniqueOrThrowArgs} args - Arguments to find a Deck
     * @example
     * // Get one Deck
     * const deck = await prisma.deck.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DeckFindUniqueOrThrowArgs>(args: SelectSubset<T, DeckFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DeckClient<$Result.GetResult<Prisma.$DeckPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Deck that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeckFindFirstArgs} args - Arguments to find a Deck
     * @example
     * // Get one Deck
     * const deck = await prisma.deck.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DeckFindFirstArgs>(args?: SelectSubset<T, DeckFindFirstArgs<ExtArgs>>): Prisma__DeckClient<$Result.GetResult<Prisma.$DeckPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Deck that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeckFindFirstOrThrowArgs} args - Arguments to find a Deck
     * @example
     * // Get one Deck
     * const deck = await prisma.deck.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DeckFindFirstOrThrowArgs>(args?: SelectSubset<T, DeckFindFirstOrThrowArgs<ExtArgs>>): Prisma__DeckClient<$Result.GetResult<Prisma.$DeckPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Decks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeckFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Decks
     * const decks = await prisma.deck.findMany()
     * 
     * // Get first 10 Decks
     * const decks = await prisma.deck.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const deckWithUserIdOnly = await prisma.deck.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends DeckFindManyArgs>(args?: SelectSubset<T, DeckFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeckPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Deck.
     * @param {DeckCreateArgs} args - Arguments to create a Deck.
     * @example
     * // Create one Deck
     * const Deck = await prisma.deck.create({
     *   data: {
     *     // ... data to create a Deck
     *   }
     * })
     * 
     */
    create<T extends DeckCreateArgs>(args: SelectSubset<T, DeckCreateArgs<ExtArgs>>): Prisma__DeckClient<$Result.GetResult<Prisma.$DeckPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Decks.
     * @param {DeckCreateManyArgs} args - Arguments to create many Decks.
     * @example
     * // Create many Decks
     * const deck = await prisma.deck.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DeckCreateManyArgs>(args?: SelectSubset<T, DeckCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Decks and returns the data saved in the database.
     * @param {DeckCreateManyAndReturnArgs} args - Arguments to create many Decks.
     * @example
     * // Create many Decks
     * const deck = await prisma.deck.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Decks and only return the `userId`
     * const deckWithUserIdOnly = await prisma.deck.createManyAndReturn({
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DeckCreateManyAndReturnArgs>(args?: SelectSubset<T, DeckCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeckPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Deck.
     * @param {DeckDeleteArgs} args - Arguments to delete one Deck.
     * @example
     * // Delete one Deck
     * const Deck = await prisma.deck.delete({
     *   where: {
     *     // ... filter to delete one Deck
     *   }
     * })
     * 
     */
    delete<T extends DeckDeleteArgs>(args: SelectSubset<T, DeckDeleteArgs<ExtArgs>>): Prisma__DeckClient<$Result.GetResult<Prisma.$DeckPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Deck.
     * @param {DeckUpdateArgs} args - Arguments to update one Deck.
     * @example
     * // Update one Deck
     * const deck = await prisma.deck.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DeckUpdateArgs>(args: SelectSubset<T, DeckUpdateArgs<ExtArgs>>): Prisma__DeckClient<$Result.GetResult<Prisma.$DeckPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Decks.
     * @param {DeckDeleteManyArgs} args - Arguments to filter Decks to delete.
     * @example
     * // Delete a few Decks
     * const { count } = await prisma.deck.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DeckDeleteManyArgs>(args?: SelectSubset<T, DeckDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Decks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeckUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Decks
     * const deck = await prisma.deck.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DeckUpdateManyArgs>(args: SelectSubset<T, DeckUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Decks and returns the data updated in the database.
     * @param {DeckUpdateManyAndReturnArgs} args - Arguments to update many Decks.
     * @example
     * // Update many Decks
     * const deck = await prisma.deck.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Decks and only return the `userId`
     * const deckWithUserIdOnly = await prisma.deck.updateManyAndReturn({
     *   select: { userId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DeckUpdateManyAndReturnArgs>(args: SelectSubset<T, DeckUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeckPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Deck.
     * @param {DeckUpsertArgs} args - Arguments to update or create a Deck.
     * @example
     * // Update or create a Deck
     * const deck = await prisma.deck.upsert({
     *   create: {
     *     // ... data to create a Deck
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Deck we want to update
     *   }
     * })
     */
    upsert<T extends DeckUpsertArgs>(args: SelectSubset<T, DeckUpsertArgs<ExtArgs>>): Prisma__DeckClient<$Result.GetResult<Prisma.$DeckPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Decks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeckCountArgs} args - Arguments to filter Decks to count.
     * @example
     * // Count the number of Decks
     * const count = await prisma.deck.count({
     *   where: {
     *     // ... the filter for the Decks we want to count
     *   }
     * })
    **/
    count<T extends DeckCountArgs>(
      args?: Subset<T, DeckCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DeckCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Deck.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeckAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DeckAggregateArgs>(args: Subset<T, DeckAggregateArgs>): Prisma.PrismaPromise<GetDeckAggregateType<T>>

    /**
     * Group by Deck.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeckGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DeckGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DeckGroupByArgs['orderBy'] }
        : { orderBy?: DeckGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DeckGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDeckGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Deck model
   */
  readonly fields: DeckFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Deck.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DeckClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    cards<T extends Deck$cardsArgs<ExtArgs> = {}>(args?: Subset<T, Deck$cardsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeckCardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Deck model
   */
  interface DeckFieldRefs {
    readonly userId: FieldRef<"Deck", 'String'>
    readonly name: FieldRef<"Deck", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Deck findUnique
   */
  export type DeckFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deck
     */
    select?: DeckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deck
     */
    omit?: DeckOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeckInclude<ExtArgs> | null
    /**
     * Filter, which Deck to fetch.
     */
    where: DeckWhereUniqueInput
  }

  /**
   * Deck findUniqueOrThrow
   */
  export type DeckFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deck
     */
    select?: DeckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deck
     */
    omit?: DeckOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeckInclude<ExtArgs> | null
    /**
     * Filter, which Deck to fetch.
     */
    where: DeckWhereUniqueInput
  }

  /**
   * Deck findFirst
   */
  export type DeckFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deck
     */
    select?: DeckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deck
     */
    omit?: DeckOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeckInclude<ExtArgs> | null
    /**
     * Filter, which Deck to fetch.
     */
    where?: DeckWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Decks to fetch.
     */
    orderBy?: DeckOrderByWithRelationInput | DeckOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Decks.
     */
    cursor?: DeckWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Decks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Decks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Decks.
     */
    distinct?: DeckScalarFieldEnum | DeckScalarFieldEnum[]
  }

  /**
   * Deck findFirstOrThrow
   */
  export type DeckFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deck
     */
    select?: DeckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deck
     */
    omit?: DeckOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeckInclude<ExtArgs> | null
    /**
     * Filter, which Deck to fetch.
     */
    where?: DeckWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Decks to fetch.
     */
    orderBy?: DeckOrderByWithRelationInput | DeckOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Decks.
     */
    cursor?: DeckWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Decks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Decks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Decks.
     */
    distinct?: DeckScalarFieldEnum | DeckScalarFieldEnum[]
  }

  /**
   * Deck findMany
   */
  export type DeckFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deck
     */
    select?: DeckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deck
     */
    omit?: DeckOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeckInclude<ExtArgs> | null
    /**
     * Filter, which Decks to fetch.
     */
    where?: DeckWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Decks to fetch.
     */
    orderBy?: DeckOrderByWithRelationInput | DeckOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Decks.
     */
    cursor?: DeckWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Decks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Decks.
     */
    skip?: number
    distinct?: DeckScalarFieldEnum | DeckScalarFieldEnum[]
  }

  /**
   * Deck create
   */
  export type DeckCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deck
     */
    select?: DeckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deck
     */
    omit?: DeckOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeckInclude<ExtArgs> | null
    /**
     * The data needed to create a Deck.
     */
    data: XOR<DeckCreateInput, DeckUncheckedCreateInput>
  }

  /**
   * Deck createMany
   */
  export type DeckCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Decks.
     */
    data: DeckCreateManyInput | DeckCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Deck createManyAndReturn
   */
  export type DeckCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deck
     */
    select?: DeckSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Deck
     */
    omit?: DeckOmit<ExtArgs> | null
    /**
     * The data used to create many Decks.
     */
    data: DeckCreateManyInput | DeckCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeckIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Deck update
   */
  export type DeckUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deck
     */
    select?: DeckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deck
     */
    omit?: DeckOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeckInclude<ExtArgs> | null
    /**
     * The data needed to update a Deck.
     */
    data: XOR<DeckUpdateInput, DeckUncheckedUpdateInput>
    /**
     * Choose, which Deck to update.
     */
    where: DeckWhereUniqueInput
  }

  /**
   * Deck updateMany
   */
  export type DeckUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Decks.
     */
    data: XOR<DeckUpdateManyMutationInput, DeckUncheckedUpdateManyInput>
    /**
     * Filter which Decks to update
     */
    where?: DeckWhereInput
    /**
     * Limit how many Decks to update.
     */
    limit?: number
  }

  /**
   * Deck updateManyAndReturn
   */
  export type DeckUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deck
     */
    select?: DeckSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Deck
     */
    omit?: DeckOmit<ExtArgs> | null
    /**
     * The data used to update Decks.
     */
    data: XOR<DeckUpdateManyMutationInput, DeckUncheckedUpdateManyInput>
    /**
     * Filter which Decks to update
     */
    where?: DeckWhereInput
    /**
     * Limit how many Decks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeckIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Deck upsert
   */
  export type DeckUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deck
     */
    select?: DeckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deck
     */
    omit?: DeckOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeckInclude<ExtArgs> | null
    /**
     * The filter to search for the Deck to update in case it exists.
     */
    where: DeckWhereUniqueInput
    /**
     * In case the Deck found by the `where` argument doesn't exist, create a new Deck with this data.
     */
    create: XOR<DeckCreateInput, DeckUncheckedCreateInput>
    /**
     * In case the Deck was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DeckUpdateInput, DeckUncheckedUpdateInput>
  }

  /**
   * Deck delete
   */
  export type DeckDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deck
     */
    select?: DeckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deck
     */
    omit?: DeckOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeckInclude<ExtArgs> | null
    /**
     * Filter which Deck to delete.
     */
    where: DeckWhereUniqueInput
  }

  /**
   * Deck deleteMany
   */
  export type DeckDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Decks to delete
     */
    where?: DeckWhereInput
    /**
     * Limit how many Decks to delete.
     */
    limit?: number
  }

  /**
   * Deck.cards
   */
  export type Deck$cardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeckCard
     */
    select?: DeckCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeckCard
     */
    omit?: DeckCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeckCardInclude<ExtArgs> | null
    where?: DeckCardWhereInput
    orderBy?: DeckCardOrderByWithRelationInput | DeckCardOrderByWithRelationInput[]
    cursor?: DeckCardWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DeckCardScalarFieldEnum | DeckCardScalarFieldEnum[]
  }

  /**
   * Deck without action
   */
  export type DeckDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deck
     */
    select?: DeckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deck
     */
    omit?: DeckOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeckInclude<ExtArgs> | null
  }


  /**
   * Model DeckCard
   */

  export type AggregateDeckCard = {
    _count: DeckCardCountAggregateOutputType | null
    _avg: DeckCardAvgAggregateOutputType | null
    _sum: DeckCardSumAggregateOutputType | null
    _min: DeckCardMinAggregateOutputType | null
    _max: DeckCardMaxAggregateOutputType | null
  }

  export type DeckCardAvgAggregateOutputType = {
    cardId: number | null
    quantity: number | null
  }

  export type DeckCardSumAggregateOutputType = {
    cardId: number | null
    quantity: number | null
  }

  export type DeckCardMinAggregateOutputType = {
    deckUserId: string | null
    deckName: string | null
    cardId: number | null
    quantity: number | null
    zone: $Enums.DeckZone | null
  }

  export type DeckCardMaxAggregateOutputType = {
    deckUserId: string | null
    deckName: string | null
    cardId: number | null
    quantity: number | null
    zone: $Enums.DeckZone | null
  }

  export type DeckCardCountAggregateOutputType = {
    deckUserId: number
    deckName: number
    cardId: number
    quantity: number
    zone: number
    _all: number
  }


  export type DeckCardAvgAggregateInputType = {
    cardId?: true
    quantity?: true
  }

  export type DeckCardSumAggregateInputType = {
    cardId?: true
    quantity?: true
  }

  export type DeckCardMinAggregateInputType = {
    deckUserId?: true
    deckName?: true
    cardId?: true
    quantity?: true
    zone?: true
  }

  export type DeckCardMaxAggregateInputType = {
    deckUserId?: true
    deckName?: true
    cardId?: true
    quantity?: true
    zone?: true
  }

  export type DeckCardCountAggregateInputType = {
    deckUserId?: true
    deckName?: true
    cardId?: true
    quantity?: true
    zone?: true
    _all?: true
  }

  export type DeckCardAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DeckCard to aggregate.
     */
    where?: DeckCardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeckCards to fetch.
     */
    orderBy?: DeckCardOrderByWithRelationInput | DeckCardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DeckCardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeckCards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeckCards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DeckCards
    **/
    _count?: true | DeckCardCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DeckCardAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DeckCardSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DeckCardMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DeckCardMaxAggregateInputType
  }

  export type GetDeckCardAggregateType<T extends DeckCardAggregateArgs> = {
        [P in keyof T & keyof AggregateDeckCard]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDeckCard[P]>
      : GetScalarType<T[P], AggregateDeckCard[P]>
  }




  export type DeckCardGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeckCardWhereInput
    orderBy?: DeckCardOrderByWithAggregationInput | DeckCardOrderByWithAggregationInput[]
    by: DeckCardScalarFieldEnum[] | DeckCardScalarFieldEnum
    having?: DeckCardScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DeckCardCountAggregateInputType | true
    _avg?: DeckCardAvgAggregateInputType
    _sum?: DeckCardSumAggregateInputType
    _min?: DeckCardMinAggregateInputType
    _max?: DeckCardMaxAggregateInputType
  }

  export type DeckCardGroupByOutputType = {
    deckUserId: string
    deckName: string
    cardId: number
    quantity: number
    zone: $Enums.DeckZone
    _count: DeckCardCountAggregateOutputType | null
    _avg: DeckCardAvgAggregateOutputType | null
    _sum: DeckCardSumAggregateOutputType | null
    _min: DeckCardMinAggregateOutputType | null
    _max: DeckCardMaxAggregateOutputType | null
  }

  type GetDeckCardGroupByPayload<T extends DeckCardGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DeckCardGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DeckCardGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DeckCardGroupByOutputType[P]>
            : GetScalarType<T[P], DeckCardGroupByOutputType[P]>
        }
      >
    >


  export type DeckCardSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    deckUserId?: boolean
    deckName?: boolean
    cardId?: boolean
    quantity?: boolean
    zone?: boolean
    deck?: boolean | DeckDefaultArgs<ExtArgs>
    card?: boolean | CardDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["deckCard"]>

  export type DeckCardSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    deckUserId?: boolean
    deckName?: boolean
    cardId?: boolean
    quantity?: boolean
    zone?: boolean
    deck?: boolean | DeckDefaultArgs<ExtArgs>
    card?: boolean | CardDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["deckCard"]>

  export type DeckCardSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    deckUserId?: boolean
    deckName?: boolean
    cardId?: boolean
    quantity?: boolean
    zone?: boolean
    deck?: boolean | DeckDefaultArgs<ExtArgs>
    card?: boolean | CardDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["deckCard"]>

  export type DeckCardSelectScalar = {
    deckUserId?: boolean
    deckName?: boolean
    cardId?: boolean
    quantity?: boolean
    zone?: boolean
  }

  export type DeckCardOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"deckUserId" | "deckName" | "cardId" | "quantity" | "zone", ExtArgs["result"]["deckCard"]>
  export type DeckCardInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    deck?: boolean | DeckDefaultArgs<ExtArgs>
    card?: boolean | CardDefaultArgs<ExtArgs>
  }
  export type DeckCardIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    deck?: boolean | DeckDefaultArgs<ExtArgs>
    card?: boolean | CardDefaultArgs<ExtArgs>
  }
  export type DeckCardIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    deck?: boolean | DeckDefaultArgs<ExtArgs>
    card?: boolean | CardDefaultArgs<ExtArgs>
  }

  export type $DeckCardPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DeckCard"
    objects: {
      deck: Prisma.$DeckPayload<ExtArgs>
      card: Prisma.$CardPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      deckUserId: string
      deckName: string
      cardId: number
      quantity: number
      zone: $Enums.DeckZone
    }, ExtArgs["result"]["deckCard"]>
    composites: {}
  }

  type DeckCardGetPayload<S extends boolean | null | undefined | DeckCardDefaultArgs> = $Result.GetResult<Prisma.$DeckCardPayload, S>

  type DeckCardCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DeckCardFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DeckCardCountAggregateInputType | true
    }

  export interface DeckCardDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DeckCard'], meta: { name: 'DeckCard' } }
    /**
     * Find zero or one DeckCard that matches the filter.
     * @param {DeckCardFindUniqueArgs} args - Arguments to find a DeckCard
     * @example
     * // Get one DeckCard
     * const deckCard = await prisma.deckCard.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DeckCardFindUniqueArgs>(args: SelectSubset<T, DeckCardFindUniqueArgs<ExtArgs>>): Prisma__DeckCardClient<$Result.GetResult<Prisma.$DeckCardPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DeckCard that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DeckCardFindUniqueOrThrowArgs} args - Arguments to find a DeckCard
     * @example
     * // Get one DeckCard
     * const deckCard = await prisma.deckCard.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DeckCardFindUniqueOrThrowArgs>(args: SelectSubset<T, DeckCardFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DeckCardClient<$Result.GetResult<Prisma.$DeckCardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DeckCard that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeckCardFindFirstArgs} args - Arguments to find a DeckCard
     * @example
     * // Get one DeckCard
     * const deckCard = await prisma.deckCard.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DeckCardFindFirstArgs>(args?: SelectSubset<T, DeckCardFindFirstArgs<ExtArgs>>): Prisma__DeckCardClient<$Result.GetResult<Prisma.$DeckCardPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DeckCard that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeckCardFindFirstOrThrowArgs} args - Arguments to find a DeckCard
     * @example
     * // Get one DeckCard
     * const deckCard = await prisma.deckCard.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DeckCardFindFirstOrThrowArgs>(args?: SelectSubset<T, DeckCardFindFirstOrThrowArgs<ExtArgs>>): Prisma__DeckCardClient<$Result.GetResult<Prisma.$DeckCardPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DeckCards that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeckCardFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DeckCards
     * const deckCards = await prisma.deckCard.findMany()
     * 
     * // Get first 10 DeckCards
     * const deckCards = await prisma.deckCard.findMany({ take: 10 })
     * 
     * // Only select the `deckUserId`
     * const deckCardWithDeckUserIdOnly = await prisma.deckCard.findMany({ select: { deckUserId: true } })
     * 
     */
    findMany<T extends DeckCardFindManyArgs>(args?: SelectSubset<T, DeckCardFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeckCardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DeckCard.
     * @param {DeckCardCreateArgs} args - Arguments to create a DeckCard.
     * @example
     * // Create one DeckCard
     * const DeckCard = await prisma.deckCard.create({
     *   data: {
     *     // ... data to create a DeckCard
     *   }
     * })
     * 
     */
    create<T extends DeckCardCreateArgs>(args: SelectSubset<T, DeckCardCreateArgs<ExtArgs>>): Prisma__DeckCardClient<$Result.GetResult<Prisma.$DeckCardPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DeckCards.
     * @param {DeckCardCreateManyArgs} args - Arguments to create many DeckCards.
     * @example
     * // Create many DeckCards
     * const deckCard = await prisma.deckCard.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DeckCardCreateManyArgs>(args?: SelectSubset<T, DeckCardCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DeckCards and returns the data saved in the database.
     * @param {DeckCardCreateManyAndReturnArgs} args - Arguments to create many DeckCards.
     * @example
     * // Create many DeckCards
     * const deckCard = await prisma.deckCard.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DeckCards and only return the `deckUserId`
     * const deckCardWithDeckUserIdOnly = await prisma.deckCard.createManyAndReturn({
     *   select: { deckUserId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DeckCardCreateManyAndReturnArgs>(args?: SelectSubset<T, DeckCardCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeckCardPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DeckCard.
     * @param {DeckCardDeleteArgs} args - Arguments to delete one DeckCard.
     * @example
     * // Delete one DeckCard
     * const DeckCard = await prisma.deckCard.delete({
     *   where: {
     *     // ... filter to delete one DeckCard
     *   }
     * })
     * 
     */
    delete<T extends DeckCardDeleteArgs>(args: SelectSubset<T, DeckCardDeleteArgs<ExtArgs>>): Prisma__DeckCardClient<$Result.GetResult<Prisma.$DeckCardPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DeckCard.
     * @param {DeckCardUpdateArgs} args - Arguments to update one DeckCard.
     * @example
     * // Update one DeckCard
     * const deckCard = await prisma.deckCard.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DeckCardUpdateArgs>(args: SelectSubset<T, DeckCardUpdateArgs<ExtArgs>>): Prisma__DeckCardClient<$Result.GetResult<Prisma.$DeckCardPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DeckCards.
     * @param {DeckCardDeleteManyArgs} args - Arguments to filter DeckCards to delete.
     * @example
     * // Delete a few DeckCards
     * const { count } = await prisma.deckCard.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DeckCardDeleteManyArgs>(args?: SelectSubset<T, DeckCardDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DeckCards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeckCardUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DeckCards
     * const deckCard = await prisma.deckCard.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DeckCardUpdateManyArgs>(args: SelectSubset<T, DeckCardUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DeckCards and returns the data updated in the database.
     * @param {DeckCardUpdateManyAndReturnArgs} args - Arguments to update many DeckCards.
     * @example
     * // Update many DeckCards
     * const deckCard = await prisma.deckCard.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DeckCards and only return the `deckUserId`
     * const deckCardWithDeckUserIdOnly = await prisma.deckCard.updateManyAndReturn({
     *   select: { deckUserId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DeckCardUpdateManyAndReturnArgs>(args: SelectSubset<T, DeckCardUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeckCardPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DeckCard.
     * @param {DeckCardUpsertArgs} args - Arguments to update or create a DeckCard.
     * @example
     * // Update or create a DeckCard
     * const deckCard = await prisma.deckCard.upsert({
     *   create: {
     *     // ... data to create a DeckCard
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DeckCard we want to update
     *   }
     * })
     */
    upsert<T extends DeckCardUpsertArgs>(args: SelectSubset<T, DeckCardUpsertArgs<ExtArgs>>): Prisma__DeckCardClient<$Result.GetResult<Prisma.$DeckCardPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DeckCards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeckCardCountArgs} args - Arguments to filter DeckCards to count.
     * @example
     * // Count the number of DeckCards
     * const count = await prisma.deckCard.count({
     *   where: {
     *     // ... the filter for the DeckCards we want to count
     *   }
     * })
    **/
    count<T extends DeckCardCountArgs>(
      args?: Subset<T, DeckCardCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DeckCardCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DeckCard.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeckCardAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DeckCardAggregateArgs>(args: Subset<T, DeckCardAggregateArgs>): Prisma.PrismaPromise<GetDeckCardAggregateType<T>>

    /**
     * Group by DeckCard.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeckCardGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DeckCardGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DeckCardGroupByArgs['orderBy'] }
        : { orderBy?: DeckCardGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DeckCardGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDeckCardGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DeckCard model
   */
  readonly fields: DeckCardFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DeckCard.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DeckCardClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    deck<T extends DeckDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DeckDefaultArgs<ExtArgs>>): Prisma__DeckClient<$Result.GetResult<Prisma.$DeckPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    card<T extends CardDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CardDefaultArgs<ExtArgs>>): Prisma__CardClient<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DeckCard model
   */
  interface DeckCardFieldRefs {
    readonly deckUserId: FieldRef<"DeckCard", 'String'>
    readonly deckName: FieldRef<"DeckCard", 'String'>
    readonly cardId: FieldRef<"DeckCard", 'Int'>
    readonly quantity: FieldRef<"DeckCard", 'Int'>
    readonly zone: FieldRef<"DeckCard", 'DeckZone'>
  }
    

  // Custom InputTypes
  /**
   * DeckCard findUnique
   */
  export type DeckCardFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeckCard
     */
    select?: DeckCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeckCard
     */
    omit?: DeckCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeckCardInclude<ExtArgs> | null
    /**
     * Filter, which DeckCard to fetch.
     */
    where: DeckCardWhereUniqueInput
  }

  /**
   * DeckCard findUniqueOrThrow
   */
  export type DeckCardFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeckCard
     */
    select?: DeckCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeckCard
     */
    omit?: DeckCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeckCardInclude<ExtArgs> | null
    /**
     * Filter, which DeckCard to fetch.
     */
    where: DeckCardWhereUniqueInput
  }

  /**
   * DeckCard findFirst
   */
  export type DeckCardFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeckCard
     */
    select?: DeckCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeckCard
     */
    omit?: DeckCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeckCardInclude<ExtArgs> | null
    /**
     * Filter, which DeckCard to fetch.
     */
    where?: DeckCardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeckCards to fetch.
     */
    orderBy?: DeckCardOrderByWithRelationInput | DeckCardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DeckCards.
     */
    cursor?: DeckCardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeckCards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeckCards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DeckCards.
     */
    distinct?: DeckCardScalarFieldEnum | DeckCardScalarFieldEnum[]
  }

  /**
   * DeckCard findFirstOrThrow
   */
  export type DeckCardFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeckCard
     */
    select?: DeckCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeckCard
     */
    omit?: DeckCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeckCardInclude<ExtArgs> | null
    /**
     * Filter, which DeckCard to fetch.
     */
    where?: DeckCardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeckCards to fetch.
     */
    orderBy?: DeckCardOrderByWithRelationInput | DeckCardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DeckCards.
     */
    cursor?: DeckCardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeckCards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeckCards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DeckCards.
     */
    distinct?: DeckCardScalarFieldEnum | DeckCardScalarFieldEnum[]
  }

  /**
   * DeckCard findMany
   */
  export type DeckCardFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeckCard
     */
    select?: DeckCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeckCard
     */
    omit?: DeckCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeckCardInclude<ExtArgs> | null
    /**
     * Filter, which DeckCards to fetch.
     */
    where?: DeckCardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeckCards to fetch.
     */
    orderBy?: DeckCardOrderByWithRelationInput | DeckCardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DeckCards.
     */
    cursor?: DeckCardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeckCards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeckCards.
     */
    skip?: number
    distinct?: DeckCardScalarFieldEnum | DeckCardScalarFieldEnum[]
  }

  /**
   * DeckCard create
   */
  export type DeckCardCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeckCard
     */
    select?: DeckCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeckCard
     */
    omit?: DeckCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeckCardInclude<ExtArgs> | null
    /**
     * The data needed to create a DeckCard.
     */
    data: XOR<DeckCardCreateInput, DeckCardUncheckedCreateInput>
  }

  /**
   * DeckCard createMany
   */
  export type DeckCardCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DeckCards.
     */
    data: DeckCardCreateManyInput | DeckCardCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DeckCard createManyAndReturn
   */
  export type DeckCardCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeckCard
     */
    select?: DeckCardSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DeckCard
     */
    omit?: DeckCardOmit<ExtArgs> | null
    /**
     * The data used to create many DeckCards.
     */
    data: DeckCardCreateManyInput | DeckCardCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeckCardIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DeckCard update
   */
  export type DeckCardUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeckCard
     */
    select?: DeckCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeckCard
     */
    omit?: DeckCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeckCardInclude<ExtArgs> | null
    /**
     * The data needed to update a DeckCard.
     */
    data: XOR<DeckCardUpdateInput, DeckCardUncheckedUpdateInput>
    /**
     * Choose, which DeckCard to update.
     */
    where: DeckCardWhereUniqueInput
  }

  /**
   * DeckCard updateMany
   */
  export type DeckCardUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DeckCards.
     */
    data: XOR<DeckCardUpdateManyMutationInput, DeckCardUncheckedUpdateManyInput>
    /**
     * Filter which DeckCards to update
     */
    where?: DeckCardWhereInput
    /**
     * Limit how many DeckCards to update.
     */
    limit?: number
  }

  /**
   * DeckCard updateManyAndReturn
   */
  export type DeckCardUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeckCard
     */
    select?: DeckCardSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DeckCard
     */
    omit?: DeckCardOmit<ExtArgs> | null
    /**
     * The data used to update DeckCards.
     */
    data: XOR<DeckCardUpdateManyMutationInput, DeckCardUncheckedUpdateManyInput>
    /**
     * Filter which DeckCards to update
     */
    where?: DeckCardWhereInput
    /**
     * Limit how many DeckCards to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeckCardIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DeckCard upsert
   */
  export type DeckCardUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeckCard
     */
    select?: DeckCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeckCard
     */
    omit?: DeckCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeckCardInclude<ExtArgs> | null
    /**
     * The filter to search for the DeckCard to update in case it exists.
     */
    where: DeckCardWhereUniqueInput
    /**
     * In case the DeckCard found by the `where` argument doesn't exist, create a new DeckCard with this data.
     */
    create: XOR<DeckCardCreateInput, DeckCardUncheckedCreateInput>
    /**
     * In case the DeckCard was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DeckCardUpdateInput, DeckCardUncheckedUpdateInput>
  }

  /**
   * DeckCard delete
   */
  export type DeckCardDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeckCard
     */
    select?: DeckCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeckCard
     */
    omit?: DeckCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeckCardInclude<ExtArgs> | null
    /**
     * Filter which DeckCard to delete.
     */
    where: DeckCardWhereUniqueInput
  }

  /**
   * DeckCard deleteMany
   */
  export type DeckCardDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DeckCards to delete
     */
    where?: DeckCardWhereInput
    /**
     * Limit how many DeckCards to delete.
     */
    limit?: number
  }

  /**
   * DeckCard without action
   */
  export type DeckCardDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeckCard
     */
    select?: DeckCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeckCard
     */
    omit?: DeckCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeckCardInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CardScalarFieldEnum: {
    id: 'id',
    name: 'name',
    attribute: 'attribute',
    race: 'race',
    summonType: 'summonType',
    level: 'level',
    atk: 'atk',
    def: 'def',
    description: 'description',
    restriction: 'restriction'
  };

  export type CardScalarFieldEnum = (typeof CardScalarFieldEnum)[keyof typeof CardScalarFieldEnum]


  export const CardMonsterTypeScalarFieldEnum: {
    cardId: 'cardId',
    monsterTypeId: 'monsterTypeId'
  };

  export type CardMonsterTypeScalarFieldEnum = (typeof CardMonsterTypeScalarFieldEnum)[keyof typeof CardMonsterTypeScalarFieldEnum]


  export const MonsterTypeScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type MonsterTypeScalarFieldEnum = (typeof MonsterTypeScalarFieldEnum)[keyof typeof MonsterTypeScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    username: 'username'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const InventoryItemScalarFieldEnum: {
    userId: 'userId',
    cardId: 'cardId',
    quantity: 'quantity'
  };

  export type InventoryItemScalarFieldEnum = (typeof InventoryItemScalarFieldEnum)[keyof typeof InventoryItemScalarFieldEnum]


  export const DeckScalarFieldEnum: {
    userId: 'userId',
    name: 'name'
  };

  export type DeckScalarFieldEnum = (typeof DeckScalarFieldEnum)[keyof typeof DeckScalarFieldEnum]


  export const DeckCardScalarFieldEnum: {
    deckUserId: 'deckUserId',
    deckName: 'deckName',
    cardId: 'cardId',
    quantity: 'quantity',
    zone: 'zone'
  };

  export type DeckCardScalarFieldEnum = (typeof DeckCardScalarFieldEnum)[keyof typeof DeckCardScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Attribute'
   */
  export type EnumAttributeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Attribute'>
    


  /**
   * Reference to a field of type 'Attribute[]'
   */
  export type ListEnumAttributeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Attribute[]'>
    


  /**
   * Reference to a field of type 'SummonType'
   */
  export type EnumSummonTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SummonType'>
    


  /**
   * Reference to a field of type 'SummonType[]'
   */
  export type ListEnumSummonTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SummonType[]'>
    


  /**
   * Reference to a field of type 'DeckZone'
   */
  export type EnumDeckZoneFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DeckZone'>
    


  /**
   * Reference to a field of type 'DeckZone[]'
   */
  export type ListEnumDeckZoneFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DeckZone[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type CardWhereInput = {
    AND?: CardWhereInput | CardWhereInput[]
    OR?: CardWhereInput[]
    NOT?: CardWhereInput | CardWhereInput[]
    id?: IntFilter<"Card"> | number
    name?: StringFilter<"Card"> | string
    attribute?: EnumAttributeFilter<"Card"> | $Enums.Attribute
    race?: StringNullableFilter<"Card"> | string | null
    summonType?: EnumSummonTypeNullableFilter<"Card"> | $Enums.SummonType | null
    level?: IntNullableFilter<"Card"> | number | null
    atk?: IntNullableFilter<"Card"> | number | null
    def?: IntNullableFilter<"Card"> | number | null
    description?: StringFilter<"Card"> | string
    restriction?: IntFilter<"Card"> | number
    monsterTypes?: CardMonsterTypeListRelationFilter
    inventoryItems?: InventoryItemListRelationFilter
    deckCards?: DeckCardListRelationFilter
  }

  export type CardOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    attribute?: SortOrder
    race?: SortOrderInput | SortOrder
    summonType?: SortOrderInput | SortOrder
    level?: SortOrderInput | SortOrder
    atk?: SortOrderInput | SortOrder
    def?: SortOrderInput | SortOrder
    description?: SortOrder
    restriction?: SortOrder
    monsterTypes?: CardMonsterTypeOrderByRelationAggregateInput
    inventoryItems?: InventoryItemOrderByRelationAggregateInput
    deckCards?: DeckCardOrderByRelationAggregateInput
  }

  export type CardWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: CardWhereInput | CardWhereInput[]
    OR?: CardWhereInput[]
    NOT?: CardWhereInput | CardWhereInput[]
    attribute?: EnumAttributeFilter<"Card"> | $Enums.Attribute
    race?: StringNullableFilter<"Card"> | string | null
    summonType?: EnumSummonTypeNullableFilter<"Card"> | $Enums.SummonType | null
    level?: IntNullableFilter<"Card"> | number | null
    atk?: IntNullableFilter<"Card"> | number | null
    def?: IntNullableFilter<"Card"> | number | null
    description?: StringFilter<"Card"> | string
    restriction?: IntFilter<"Card"> | number
    monsterTypes?: CardMonsterTypeListRelationFilter
    inventoryItems?: InventoryItemListRelationFilter
    deckCards?: DeckCardListRelationFilter
  }, "id" | "name">

  export type CardOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    attribute?: SortOrder
    race?: SortOrderInput | SortOrder
    summonType?: SortOrderInput | SortOrder
    level?: SortOrderInput | SortOrder
    atk?: SortOrderInput | SortOrder
    def?: SortOrderInput | SortOrder
    description?: SortOrder
    restriction?: SortOrder
    _count?: CardCountOrderByAggregateInput
    _avg?: CardAvgOrderByAggregateInput
    _max?: CardMaxOrderByAggregateInput
    _min?: CardMinOrderByAggregateInput
    _sum?: CardSumOrderByAggregateInput
  }

  export type CardScalarWhereWithAggregatesInput = {
    AND?: CardScalarWhereWithAggregatesInput | CardScalarWhereWithAggregatesInput[]
    OR?: CardScalarWhereWithAggregatesInput[]
    NOT?: CardScalarWhereWithAggregatesInput | CardScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Card"> | number
    name?: StringWithAggregatesFilter<"Card"> | string
    attribute?: EnumAttributeWithAggregatesFilter<"Card"> | $Enums.Attribute
    race?: StringNullableWithAggregatesFilter<"Card"> | string | null
    summonType?: EnumSummonTypeNullableWithAggregatesFilter<"Card"> | $Enums.SummonType | null
    level?: IntNullableWithAggregatesFilter<"Card"> | number | null
    atk?: IntNullableWithAggregatesFilter<"Card"> | number | null
    def?: IntNullableWithAggregatesFilter<"Card"> | number | null
    description?: StringWithAggregatesFilter<"Card"> | string
    restriction?: IntWithAggregatesFilter<"Card"> | number
  }

  export type CardMonsterTypeWhereInput = {
    AND?: CardMonsterTypeWhereInput | CardMonsterTypeWhereInput[]
    OR?: CardMonsterTypeWhereInput[]
    NOT?: CardMonsterTypeWhereInput | CardMonsterTypeWhereInput[]
    cardId?: IntFilter<"CardMonsterType"> | number
    monsterTypeId?: IntFilter<"CardMonsterType"> | number
    card?: XOR<CardScalarRelationFilter, CardWhereInput>
    monsterType?: XOR<MonsterTypeScalarRelationFilter, MonsterTypeWhereInput>
  }

  export type CardMonsterTypeOrderByWithRelationInput = {
    cardId?: SortOrder
    monsterTypeId?: SortOrder
    card?: CardOrderByWithRelationInput
    monsterType?: MonsterTypeOrderByWithRelationInput
  }

  export type CardMonsterTypeWhereUniqueInput = Prisma.AtLeast<{
    cardId_monsterTypeId?: CardMonsterTypeCardIdMonsterTypeIdCompoundUniqueInput
    AND?: CardMonsterTypeWhereInput | CardMonsterTypeWhereInput[]
    OR?: CardMonsterTypeWhereInput[]
    NOT?: CardMonsterTypeWhereInput | CardMonsterTypeWhereInput[]
    cardId?: IntFilter<"CardMonsterType"> | number
    monsterTypeId?: IntFilter<"CardMonsterType"> | number
    card?: XOR<CardScalarRelationFilter, CardWhereInput>
    monsterType?: XOR<MonsterTypeScalarRelationFilter, MonsterTypeWhereInput>
  }, "cardId_monsterTypeId">

  export type CardMonsterTypeOrderByWithAggregationInput = {
    cardId?: SortOrder
    monsterTypeId?: SortOrder
    _count?: CardMonsterTypeCountOrderByAggregateInput
    _avg?: CardMonsterTypeAvgOrderByAggregateInput
    _max?: CardMonsterTypeMaxOrderByAggregateInput
    _min?: CardMonsterTypeMinOrderByAggregateInput
    _sum?: CardMonsterTypeSumOrderByAggregateInput
  }

  export type CardMonsterTypeScalarWhereWithAggregatesInput = {
    AND?: CardMonsterTypeScalarWhereWithAggregatesInput | CardMonsterTypeScalarWhereWithAggregatesInput[]
    OR?: CardMonsterTypeScalarWhereWithAggregatesInput[]
    NOT?: CardMonsterTypeScalarWhereWithAggregatesInput | CardMonsterTypeScalarWhereWithAggregatesInput[]
    cardId?: IntWithAggregatesFilter<"CardMonsterType"> | number
    monsterTypeId?: IntWithAggregatesFilter<"CardMonsterType"> | number
  }

  export type MonsterTypeWhereInput = {
    AND?: MonsterTypeWhereInput | MonsterTypeWhereInput[]
    OR?: MonsterTypeWhereInput[]
    NOT?: MonsterTypeWhereInput | MonsterTypeWhereInput[]
    id?: IntFilter<"MonsterType"> | number
    name?: StringFilter<"MonsterType"> | string
    cards?: CardMonsterTypeListRelationFilter
  }

  export type MonsterTypeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    cards?: CardMonsterTypeOrderByRelationAggregateInput
  }

  export type MonsterTypeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: MonsterTypeWhereInput | MonsterTypeWhereInput[]
    OR?: MonsterTypeWhereInput[]
    NOT?: MonsterTypeWhereInput | MonsterTypeWhereInput[]
    cards?: CardMonsterTypeListRelationFilter
  }, "id" | "name">

  export type MonsterTypeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: MonsterTypeCountOrderByAggregateInput
    _avg?: MonsterTypeAvgOrderByAggregateInput
    _max?: MonsterTypeMaxOrderByAggregateInput
    _min?: MonsterTypeMinOrderByAggregateInput
    _sum?: MonsterTypeSumOrderByAggregateInput
  }

  export type MonsterTypeScalarWhereWithAggregatesInput = {
    AND?: MonsterTypeScalarWhereWithAggregatesInput | MonsterTypeScalarWhereWithAggregatesInput[]
    OR?: MonsterTypeScalarWhereWithAggregatesInput[]
    NOT?: MonsterTypeScalarWhereWithAggregatesInput | MonsterTypeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"MonsterType"> | number
    name?: StringWithAggregatesFilter<"MonsterType"> | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    inventory?: InventoryItemListRelationFilter
    decks?: DeckListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    inventory?: InventoryItemOrderByRelationAggregateInput
    decks?: DeckOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    username?: StringFilter<"User"> | string
    inventory?: InventoryItemListRelationFilter
    decks?: DeckListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
  }

  export type InventoryItemWhereInput = {
    AND?: InventoryItemWhereInput | InventoryItemWhereInput[]
    OR?: InventoryItemWhereInput[]
    NOT?: InventoryItemWhereInput | InventoryItemWhereInput[]
    userId?: StringFilter<"InventoryItem"> | string
    cardId?: IntFilter<"InventoryItem"> | number
    quantity?: IntFilter<"InventoryItem"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    card?: XOR<CardScalarRelationFilter, CardWhereInput>
  }

  export type InventoryItemOrderByWithRelationInput = {
    userId?: SortOrder
    cardId?: SortOrder
    quantity?: SortOrder
    user?: UserOrderByWithRelationInput
    card?: CardOrderByWithRelationInput
  }

  export type InventoryItemWhereUniqueInput = Prisma.AtLeast<{
    userId_cardId?: InventoryItemUserIdCardIdCompoundUniqueInput
    AND?: InventoryItemWhereInput | InventoryItemWhereInput[]
    OR?: InventoryItemWhereInput[]
    NOT?: InventoryItemWhereInput | InventoryItemWhereInput[]
    userId?: StringFilter<"InventoryItem"> | string
    cardId?: IntFilter<"InventoryItem"> | number
    quantity?: IntFilter<"InventoryItem"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    card?: XOR<CardScalarRelationFilter, CardWhereInput>
  }, "userId_cardId">

  export type InventoryItemOrderByWithAggregationInput = {
    userId?: SortOrder
    cardId?: SortOrder
    quantity?: SortOrder
    _count?: InventoryItemCountOrderByAggregateInput
    _avg?: InventoryItemAvgOrderByAggregateInput
    _max?: InventoryItemMaxOrderByAggregateInput
    _min?: InventoryItemMinOrderByAggregateInput
    _sum?: InventoryItemSumOrderByAggregateInput
  }

  export type InventoryItemScalarWhereWithAggregatesInput = {
    AND?: InventoryItemScalarWhereWithAggregatesInput | InventoryItemScalarWhereWithAggregatesInput[]
    OR?: InventoryItemScalarWhereWithAggregatesInput[]
    NOT?: InventoryItemScalarWhereWithAggregatesInput | InventoryItemScalarWhereWithAggregatesInput[]
    userId?: StringWithAggregatesFilter<"InventoryItem"> | string
    cardId?: IntWithAggregatesFilter<"InventoryItem"> | number
    quantity?: IntWithAggregatesFilter<"InventoryItem"> | number
  }

  export type DeckWhereInput = {
    AND?: DeckWhereInput | DeckWhereInput[]
    OR?: DeckWhereInput[]
    NOT?: DeckWhereInput | DeckWhereInput[]
    userId?: StringFilter<"Deck"> | string
    name?: StringFilter<"Deck"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    cards?: DeckCardListRelationFilter
  }

  export type DeckOrderByWithRelationInput = {
    userId?: SortOrder
    name?: SortOrder
    user?: UserOrderByWithRelationInput
    cards?: DeckCardOrderByRelationAggregateInput
  }

  export type DeckWhereUniqueInput = Prisma.AtLeast<{
    userId_name?: DeckUserIdNameCompoundUniqueInput
    AND?: DeckWhereInput | DeckWhereInput[]
    OR?: DeckWhereInput[]
    NOT?: DeckWhereInput | DeckWhereInput[]
    userId?: StringFilter<"Deck"> | string
    name?: StringFilter<"Deck"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    cards?: DeckCardListRelationFilter
  }, "userId_name">

  export type DeckOrderByWithAggregationInput = {
    userId?: SortOrder
    name?: SortOrder
    _count?: DeckCountOrderByAggregateInput
    _max?: DeckMaxOrderByAggregateInput
    _min?: DeckMinOrderByAggregateInput
  }

  export type DeckScalarWhereWithAggregatesInput = {
    AND?: DeckScalarWhereWithAggregatesInput | DeckScalarWhereWithAggregatesInput[]
    OR?: DeckScalarWhereWithAggregatesInput[]
    NOT?: DeckScalarWhereWithAggregatesInput | DeckScalarWhereWithAggregatesInput[]
    userId?: StringWithAggregatesFilter<"Deck"> | string
    name?: StringWithAggregatesFilter<"Deck"> | string
  }

  export type DeckCardWhereInput = {
    AND?: DeckCardWhereInput | DeckCardWhereInput[]
    OR?: DeckCardWhereInput[]
    NOT?: DeckCardWhereInput | DeckCardWhereInput[]
    deckUserId?: StringFilter<"DeckCard"> | string
    deckName?: StringFilter<"DeckCard"> | string
    cardId?: IntFilter<"DeckCard"> | number
    quantity?: IntFilter<"DeckCard"> | number
    zone?: EnumDeckZoneFilter<"DeckCard"> | $Enums.DeckZone
    deck?: XOR<DeckScalarRelationFilter, DeckWhereInput>
    card?: XOR<CardScalarRelationFilter, CardWhereInput>
  }

  export type DeckCardOrderByWithRelationInput = {
    deckUserId?: SortOrder
    deckName?: SortOrder
    cardId?: SortOrder
    quantity?: SortOrder
    zone?: SortOrder
    deck?: DeckOrderByWithRelationInput
    card?: CardOrderByWithRelationInput
  }

  export type DeckCardWhereUniqueInput = Prisma.AtLeast<{
    deckUserId_deckName_cardId_zone?: DeckCardDeckUserIdDeckNameCardIdZoneCompoundUniqueInput
    AND?: DeckCardWhereInput | DeckCardWhereInput[]
    OR?: DeckCardWhereInput[]
    NOT?: DeckCardWhereInput | DeckCardWhereInput[]
    deckUserId?: StringFilter<"DeckCard"> | string
    deckName?: StringFilter<"DeckCard"> | string
    cardId?: IntFilter<"DeckCard"> | number
    quantity?: IntFilter<"DeckCard"> | number
    zone?: EnumDeckZoneFilter<"DeckCard"> | $Enums.DeckZone
    deck?: XOR<DeckScalarRelationFilter, DeckWhereInput>
    card?: XOR<CardScalarRelationFilter, CardWhereInput>
  }, "deckUserId_deckName_cardId_zone">

  export type DeckCardOrderByWithAggregationInput = {
    deckUserId?: SortOrder
    deckName?: SortOrder
    cardId?: SortOrder
    quantity?: SortOrder
    zone?: SortOrder
    _count?: DeckCardCountOrderByAggregateInput
    _avg?: DeckCardAvgOrderByAggregateInput
    _max?: DeckCardMaxOrderByAggregateInput
    _min?: DeckCardMinOrderByAggregateInput
    _sum?: DeckCardSumOrderByAggregateInput
  }

  export type DeckCardScalarWhereWithAggregatesInput = {
    AND?: DeckCardScalarWhereWithAggregatesInput | DeckCardScalarWhereWithAggregatesInput[]
    OR?: DeckCardScalarWhereWithAggregatesInput[]
    NOT?: DeckCardScalarWhereWithAggregatesInput | DeckCardScalarWhereWithAggregatesInput[]
    deckUserId?: StringWithAggregatesFilter<"DeckCard"> | string
    deckName?: StringWithAggregatesFilter<"DeckCard"> | string
    cardId?: IntWithAggregatesFilter<"DeckCard"> | number
    quantity?: IntWithAggregatesFilter<"DeckCard"> | number
    zone?: EnumDeckZoneWithAggregatesFilter<"DeckCard"> | $Enums.DeckZone
  }

  export type CardCreateInput = {
    name: string
    attribute: $Enums.Attribute
    race?: string | null
    summonType?: $Enums.SummonType | null
    level?: number | null
    atk?: number | null
    def?: number | null
    description: string
    restriction: number
    monsterTypes?: CardMonsterTypeCreateNestedManyWithoutCardInput
    inventoryItems?: InventoryItemCreateNestedManyWithoutCardInput
    deckCards?: DeckCardCreateNestedManyWithoutCardInput
  }

  export type CardUncheckedCreateInput = {
    id?: number
    name: string
    attribute: $Enums.Attribute
    race?: string | null
    summonType?: $Enums.SummonType | null
    level?: number | null
    atk?: number | null
    def?: number | null
    description: string
    restriction: number
    monsterTypes?: CardMonsterTypeUncheckedCreateNestedManyWithoutCardInput
    inventoryItems?: InventoryItemUncheckedCreateNestedManyWithoutCardInput
    deckCards?: DeckCardUncheckedCreateNestedManyWithoutCardInput
  }

  export type CardUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    attribute?: EnumAttributeFieldUpdateOperationsInput | $Enums.Attribute
    race?: NullableStringFieldUpdateOperationsInput | string | null
    summonType?: NullableEnumSummonTypeFieldUpdateOperationsInput | $Enums.SummonType | null
    level?: NullableIntFieldUpdateOperationsInput | number | null
    atk?: NullableIntFieldUpdateOperationsInput | number | null
    def?: NullableIntFieldUpdateOperationsInput | number | null
    description?: StringFieldUpdateOperationsInput | string
    restriction?: IntFieldUpdateOperationsInput | number
    monsterTypes?: CardMonsterTypeUpdateManyWithoutCardNestedInput
    inventoryItems?: InventoryItemUpdateManyWithoutCardNestedInput
    deckCards?: DeckCardUpdateManyWithoutCardNestedInput
  }

  export type CardUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    attribute?: EnumAttributeFieldUpdateOperationsInput | $Enums.Attribute
    race?: NullableStringFieldUpdateOperationsInput | string | null
    summonType?: NullableEnumSummonTypeFieldUpdateOperationsInput | $Enums.SummonType | null
    level?: NullableIntFieldUpdateOperationsInput | number | null
    atk?: NullableIntFieldUpdateOperationsInput | number | null
    def?: NullableIntFieldUpdateOperationsInput | number | null
    description?: StringFieldUpdateOperationsInput | string
    restriction?: IntFieldUpdateOperationsInput | number
    monsterTypes?: CardMonsterTypeUncheckedUpdateManyWithoutCardNestedInput
    inventoryItems?: InventoryItemUncheckedUpdateManyWithoutCardNestedInput
    deckCards?: DeckCardUncheckedUpdateManyWithoutCardNestedInput
  }

  export type CardCreateManyInput = {
    id?: number
    name: string
    attribute: $Enums.Attribute
    race?: string | null
    summonType?: $Enums.SummonType | null
    level?: number | null
    atk?: number | null
    def?: number | null
    description: string
    restriction: number
  }

  export type CardUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    attribute?: EnumAttributeFieldUpdateOperationsInput | $Enums.Attribute
    race?: NullableStringFieldUpdateOperationsInput | string | null
    summonType?: NullableEnumSummonTypeFieldUpdateOperationsInput | $Enums.SummonType | null
    level?: NullableIntFieldUpdateOperationsInput | number | null
    atk?: NullableIntFieldUpdateOperationsInput | number | null
    def?: NullableIntFieldUpdateOperationsInput | number | null
    description?: StringFieldUpdateOperationsInput | string
    restriction?: IntFieldUpdateOperationsInput | number
  }

  export type CardUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    attribute?: EnumAttributeFieldUpdateOperationsInput | $Enums.Attribute
    race?: NullableStringFieldUpdateOperationsInput | string | null
    summonType?: NullableEnumSummonTypeFieldUpdateOperationsInput | $Enums.SummonType | null
    level?: NullableIntFieldUpdateOperationsInput | number | null
    atk?: NullableIntFieldUpdateOperationsInput | number | null
    def?: NullableIntFieldUpdateOperationsInput | number | null
    description?: StringFieldUpdateOperationsInput | string
    restriction?: IntFieldUpdateOperationsInput | number
  }

  export type CardMonsterTypeCreateInput = {
    card: CardCreateNestedOneWithoutMonsterTypesInput
    monsterType: MonsterTypeCreateNestedOneWithoutCardsInput
  }

  export type CardMonsterTypeUncheckedCreateInput = {
    cardId: number
    monsterTypeId: number
  }

  export type CardMonsterTypeUpdateInput = {
    card?: CardUpdateOneRequiredWithoutMonsterTypesNestedInput
    monsterType?: MonsterTypeUpdateOneRequiredWithoutCardsNestedInput
  }

  export type CardMonsterTypeUncheckedUpdateInput = {
    cardId?: IntFieldUpdateOperationsInput | number
    monsterTypeId?: IntFieldUpdateOperationsInput | number
  }

  export type CardMonsterTypeCreateManyInput = {
    cardId: number
    monsterTypeId: number
  }

  export type CardMonsterTypeUpdateManyMutationInput = {

  }

  export type CardMonsterTypeUncheckedUpdateManyInput = {
    cardId?: IntFieldUpdateOperationsInput | number
    monsterTypeId?: IntFieldUpdateOperationsInput | number
  }

  export type MonsterTypeCreateInput = {
    name: string
    cards?: CardMonsterTypeCreateNestedManyWithoutMonsterTypeInput
  }

  export type MonsterTypeUncheckedCreateInput = {
    id?: number
    name: string
    cards?: CardMonsterTypeUncheckedCreateNestedManyWithoutMonsterTypeInput
  }

  export type MonsterTypeUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    cards?: CardMonsterTypeUpdateManyWithoutMonsterTypeNestedInput
  }

  export type MonsterTypeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    cards?: CardMonsterTypeUncheckedUpdateManyWithoutMonsterTypeNestedInput
  }

  export type MonsterTypeCreateManyInput = {
    id?: number
    name: string
  }

  export type MonsterTypeUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type MonsterTypeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateInput = {
    id: string
    email: string
    username: string
    inventory?: InventoryItemCreateNestedManyWithoutUserInput
    decks?: DeckCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id: string
    email: string
    username: string
    inventory?: InventoryItemUncheckedCreateNestedManyWithoutUserInput
    decks?: DeckUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    inventory?: InventoryItemUpdateManyWithoutUserNestedInput
    decks?: DeckUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    inventory?: InventoryItemUncheckedUpdateManyWithoutUserNestedInput
    decks?: DeckUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id: string
    email: string
    username: string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
  }

  export type InventoryItemCreateInput = {
    quantity?: number
    user: UserCreateNestedOneWithoutInventoryInput
    card: CardCreateNestedOneWithoutInventoryItemsInput
  }

  export type InventoryItemUncheckedCreateInput = {
    userId: string
    cardId: number
    quantity?: number
  }

  export type InventoryItemUpdateInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutInventoryNestedInput
    card?: CardUpdateOneRequiredWithoutInventoryItemsNestedInput
  }

  export type InventoryItemUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    cardId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type InventoryItemCreateManyInput = {
    userId: string
    cardId: number
    quantity?: number
  }

  export type InventoryItemUpdateManyMutationInput = {
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type InventoryItemUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    cardId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type DeckCreateInput = {
    name: string
    user: UserCreateNestedOneWithoutDecksInput
    cards?: DeckCardCreateNestedManyWithoutDeckInput
  }

  export type DeckUncheckedCreateInput = {
    userId: string
    name: string
    cards?: DeckCardUncheckedCreateNestedManyWithoutDeckInput
  }

  export type DeckUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutDecksNestedInput
    cards?: DeckCardUpdateManyWithoutDeckNestedInput
  }

  export type DeckUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cards?: DeckCardUncheckedUpdateManyWithoutDeckNestedInput
  }

  export type DeckCreateManyInput = {
    userId: string
    name: string
  }

  export type DeckUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type DeckUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type DeckCardCreateInput = {
    quantity?: number
    zone?: $Enums.DeckZone
    deck: DeckCreateNestedOneWithoutCardsInput
    card: CardCreateNestedOneWithoutDeckCardsInput
  }

  export type DeckCardUncheckedCreateInput = {
    deckUserId: string
    deckName: string
    cardId: number
    quantity?: number
    zone?: $Enums.DeckZone
  }

  export type DeckCardUpdateInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    zone?: EnumDeckZoneFieldUpdateOperationsInput | $Enums.DeckZone
    deck?: DeckUpdateOneRequiredWithoutCardsNestedInput
    card?: CardUpdateOneRequiredWithoutDeckCardsNestedInput
  }

  export type DeckCardUncheckedUpdateInput = {
    deckUserId?: StringFieldUpdateOperationsInput | string
    deckName?: StringFieldUpdateOperationsInput | string
    cardId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    zone?: EnumDeckZoneFieldUpdateOperationsInput | $Enums.DeckZone
  }

  export type DeckCardCreateManyInput = {
    deckUserId: string
    deckName: string
    cardId: number
    quantity?: number
    zone?: $Enums.DeckZone
  }

  export type DeckCardUpdateManyMutationInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    zone?: EnumDeckZoneFieldUpdateOperationsInput | $Enums.DeckZone
  }

  export type DeckCardUncheckedUpdateManyInput = {
    deckUserId?: StringFieldUpdateOperationsInput | string
    deckName?: StringFieldUpdateOperationsInput | string
    cardId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    zone?: EnumDeckZoneFieldUpdateOperationsInput | $Enums.DeckZone
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumAttributeFilter<$PrismaModel = never> = {
    equals?: $Enums.Attribute | EnumAttributeFieldRefInput<$PrismaModel>
    in?: $Enums.Attribute[] | ListEnumAttributeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Attribute[] | ListEnumAttributeFieldRefInput<$PrismaModel>
    not?: NestedEnumAttributeFilter<$PrismaModel> | $Enums.Attribute
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumSummonTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.SummonType | EnumSummonTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.SummonType[] | ListEnumSummonTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.SummonType[] | ListEnumSummonTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumSummonTypeNullableFilter<$PrismaModel> | $Enums.SummonType | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type CardMonsterTypeListRelationFilter = {
    every?: CardMonsterTypeWhereInput
    some?: CardMonsterTypeWhereInput
    none?: CardMonsterTypeWhereInput
  }

  export type InventoryItemListRelationFilter = {
    every?: InventoryItemWhereInput
    some?: InventoryItemWhereInput
    none?: InventoryItemWhereInput
  }

  export type DeckCardListRelationFilter = {
    every?: DeckCardWhereInput
    some?: DeckCardWhereInput
    none?: DeckCardWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CardMonsterTypeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InventoryItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DeckCardOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CardCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    attribute?: SortOrder
    race?: SortOrder
    summonType?: SortOrder
    level?: SortOrder
    atk?: SortOrder
    def?: SortOrder
    description?: SortOrder
    restriction?: SortOrder
  }

  export type CardAvgOrderByAggregateInput = {
    id?: SortOrder
    level?: SortOrder
    atk?: SortOrder
    def?: SortOrder
    restriction?: SortOrder
  }

  export type CardMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    attribute?: SortOrder
    race?: SortOrder
    summonType?: SortOrder
    level?: SortOrder
    atk?: SortOrder
    def?: SortOrder
    description?: SortOrder
    restriction?: SortOrder
  }

  export type CardMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    attribute?: SortOrder
    race?: SortOrder
    summonType?: SortOrder
    level?: SortOrder
    atk?: SortOrder
    def?: SortOrder
    description?: SortOrder
    restriction?: SortOrder
  }

  export type CardSumOrderByAggregateInput = {
    id?: SortOrder
    level?: SortOrder
    atk?: SortOrder
    def?: SortOrder
    restriction?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumAttributeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Attribute | EnumAttributeFieldRefInput<$PrismaModel>
    in?: $Enums.Attribute[] | ListEnumAttributeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Attribute[] | ListEnumAttributeFieldRefInput<$PrismaModel>
    not?: NestedEnumAttributeWithAggregatesFilter<$PrismaModel> | $Enums.Attribute
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAttributeFilter<$PrismaModel>
    _max?: NestedEnumAttributeFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumSummonTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SummonType | EnumSummonTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.SummonType[] | ListEnumSummonTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.SummonType[] | ListEnumSummonTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumSummonTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.SummonType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumSummonTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumSummonTypeNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type CardScalarRelationFilter = {
    is?: CardWhereInput
    isNot?: CardWhereInput
  }

  export type MonsterTypeScalarRelationFilter = {
    is?: MonsterTypeWhereInput
    isNot?: MonsterTypeWhereInput
  }

  export type CardMonsterTypeCardIdMonsterTypeIdCompoundUniqueInput = {
    cardId: number
    monsterTypeId: number
  }

  export type CardMonsterTypeCountOrderByAggregateInput = {
    cardId?: SortOrder
    monsterTypeId?: SortOrder
  }

  export type CardMonsterTypeAvgOrderByAggregateInput = {
    cardId?: SortOrder
    monsterTypeId?: SortOrder
  }

  export type CardMonsterTypeMaxOrderByAggregateInput = {
    cardId?: SortOrder
    monsterTypeId?: SortOrder
  }

  export type CardMonsterTypeMinOrderByAggregateInput = {
    cardId?: SortOrder
    monsterTypeId?: SortOrder
  }

  export type CardMonsterTypeSumOrderByAggregateInput = {
    cardId?: SortOrder
    monsterTypeId?: SortOrder
  }

  export type MonsterTypeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type MonsterTypeAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type MonsterTypeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type MonsterTypeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type MonsterTypeSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DeckListRelationFilter = {
    every?: DeckWhereInput
    some?: DeckWhereInput
    none?: DeckWhereInput
  }

  export type DeckOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type InventoryItemUserIdCardIdCompoundUniqueInput = {
    userId: string
    cardId: number
  }

  export type InventoryItemCountOrderByAggregateInput = {
    userId?: SortOrder
    cardId?: SortOrder
    quantity?: SortOrder
  }

  export type InventoryItemAvgOrderByAggregateInput = {
    cardId?: SortOrder
    quantity?: SortOrder
  }

  export type InventoryItemMaxOrderByAggregateInput = {
    userId?: SortOrder
    cardId?: SortOrder
    quantity?: SortOrder
  }

  export type InventoryItemMinOrderByAggregateInput = {
    userId?: SortOrder
    cardId?: SortOrder
    quantity?: SortOrder
  }

  export type InventoryItemSumOrderByAggregateInput = {
    cardId?: SortOrder
    quantity?: SortOrder
  }

  export type DeckUserIdNameCompoundUniqueInput = {
    userId: string
    name: string
  }

  export type DeckCountOrderByAggregateInput = {
    userId?: SortOrder
    name?: SortOrder
  }

  export type DeckMaxOrderByAggregateInput = {
    userId?: SortOrder
    name?: SortOrder
  }

  export type DeckMinOrderByAggregateInput = {
    userId?: SortOrder
    name?: SortOrder
  }

  export type EnumDeckZoneFilter<$PrismaModel = never> = {
    equals?: $Enums.DeckZone | EnumDeckZoneFieldRefInput<$PrismaModel>
    in?: $Enums.DeckZone[] | ListEnumDeckZoneFieldRefInput<$PrismaModel>
    notIn?: $Enums.DeckZone[] | ListEnumDeckZoneFieldRefInput<$PrismaModel>
    not?: NestedEnumDeckZoneFilter<$PrismaModel> | $Enums.DeckZone
  }

  export type DeckScalarRelationFilter = {
    is?: DeckWhereInput
    isNot?: DeckWhereInput
  }

  export type DeckCardDeckUserIdDeckNameCardIdZoneCompoundUniqueInput = {
    deckUserId: string
    deckName: string
    cardId: number
    zone: $Enums.DeckZone
  }

  export type DeckCardCountOrderByAggregateInput = {
    deckUserId?: SortOrder
    deckName?: SortOrder
    cardId?: SortOrder
    quantity?: SortOrder
    zone?: SortOrder
  }

  export type DeckCardAvgOrderByAggregateInput = {
    cardId?: SortOrder
    quantity?: SortOrder
  }

  export type DeckCardMaxOrderByAggregateInput = {
    deckUserId?: SortOrder
    deckName?: SortOrder
    cardId?: SortOrder
    quantity?: SortOrder
    zone?: SortOrder
  }

  export type DeckCardMinOrderByAggregateInput = {
    deckUserId?: SortOrder
    deckName?: SortOrder
    cardId?: SortOrder
    quantity?: SortOrder
    zone?: SortOrder
  }

  export type DeckCardSumOrderByAggregateInput = {
    cardId?: SortOrder
    quantity?: SortOrder
  }

  export type EnumDeckZoneWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DeckZone | EnumDeckZoneFieldRefInput<$PrismaModel>
    in?: $Enums.DeckZone[] | ListEnumDeckZoneFieldRefInput<$PrismaModel>
    notIn?: $Enums.DeckZone[] | ListEnumDeckZoneFieldRefInput<$PrismaModel>
    not?: NestedEnumDeckZoneWithAggregatesFilter<$PrismaModel> | $Enums.DeckZone
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDeckZoneFilter<$PrismaModel>
    _max?: NestedEnumDeckZoneFilter<$PrismaModel>
  }

  export type CardMonsterTypeCreateNestedManyWithoutCardInput = {
    create?: XOR<CardMonsterTypeCreateWithoutCardInput, CardMonsterTypeUncheckedCreateWithoutCardInput> | CardMonsterTypeCreateWithoutCardInput[] | CardMonsterTypeUncheckedCreateWithoutCardInput[]
    connectOrCreate?: CardMonsterTypeCreateOrConnectWithoutCardInput | CardMonsterTypeCreateOrConnectWithoutCardInput[]
    createMany?: CardMonsterTypeCreateManyCardInputEnvelope
    connect?: CardMonsterTypeWhereUniqueInput | CardMonsterTypeWhereUniqueInput[]
  }

  export type InventoryItemCreateNestedManyWithoutCardInput = {
    create?: XOR<InventoryItemCreateWithoutCardInput, InventoryItemUncheckedCreateWithoutCardInput> | InventoryItemCreateWithoutCardInput[] | InventoryItemUncheckedCreateWithoutCardInput[]
    connectOrCreate?: InventoryItemCreateOrConnectWithoutCardInput | InventoryItemCreateOrConnectWithoutCardInput[]
    createMany?: InventoryItemCreateManyCardInputEnvelope
    connect?: InventoryItemWhereUniqueInput | InventoryItemWhereUniqueInput[]
  }

  export type DeckCardCreateNestedManyWithoutCardInput = {
    create?: XOR<DeckCardCreateWithoutCardInput, DeckCardUncheckedCreateWithoutCardInput> | DeckCardCreateWithoutCardInput[] | DeckCardUncheckedCreateWithoutCardInput[]
    connectOrCreate?: DeckCardCreateOrConnectWithoutCardInput | DeckCardCreateOrConnectWithoutCardInput[]
    createMany?: DeckCardCreateManyCardInputEnvelope
    connect?: DeckCardWhereUniqueInput | DeckCardWhereUniqueInput[]
  }

  export type CardMonsterTypeUncheckedCreateNestedManyWithoutCardInput = {
    create?: XOR<CardMonsterTypeCreateWithoutCardInput, CardMonsterTypeUncheckedCreateWithoutCardInput> | CardMonsterTypeCreateWithoutCardInput[] | CardMonsterTypeUncheckedCreateWithoutCardInput[]
    connectOrCreate?: CardMonsterTypeCreateOrConnectWithoutCardInput | CardMonsterTypeCreateOrConnectWithoutCardInput[]
    createMany?: CardMonsterTypeCreateManyCardInputEnvelope
    connect?: CardMonsterTypeWhereUniqueInput | CardMonsterTypeWhereUniqueInput[]
  }

  export type InventoryItemUncheckedCreateNestedManyWithoutCardInput = {
    create?: XOR<InventoryItemCreateWithoutCardInput, InventoryItemUncheckedCreateWithoutCardInput> | InventoryItemCreateWithoutCardInput[] | InventoryItemUncheckedCreateWithoutCardInput[]
    connectOrCreate?: InventoryItemCreateOrConnectWithoutCardInput | InventoryItemCreateOrConnectWithoutCardInput[]
    createMany?: InventoryItemCreateManyCardInputEnvelope
    connect?: InventoryItemWhereUniqueInput | InventoryItemWhereUniqueInput[]
  }

  export type DeckCardUncheckedCreateNestedManyWithoutCardInput = {
    create?: XOR<DeckCardCreateWithoutCardInput, DeckCardUncheckedCreateWithoutCardInput> | DeckCardCreateWithoutCardInput[] | DeckCardUncheckedCreateWithoutCardInput[]
    connectOrCreate?: DeckCardCreateOrConnectWithoutCardInput | DeckCardCreateOrConnectWithoutCardInput[]
    createMany?: DeckCardCreateManyCardInputEnvelope
    connect?: DeckCardWhereUniqueInput | DeckCardWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumAttributeFieldUpdateOperationsInput = {
    set?: $Enums.Attribute
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableEnumSummonTypeFieldUpdateOperationsInput = {
    set?: $Enums.SummonType | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CardMonsterTypeUpdateManyWithoutCardNestedInput = {
    create?: XOR<CardMonsterTypeCreateWithoutCardInput, CardMonsterTypeUncheckedCreateWithoutCardInput> | CardMonsterTypeCreateWithoutCardInput[] | CardMonsterTypeUncheckedCreateWithoutCardInput[]
    connectOrCreate?: CardMonsterTypeCreateOrConnectWithoutCardInput | CardMonsterTypeCreateOrConnectWithoutCardInput[]
    upsert?: CardMonsterTypeUpsertWithWhereUniqueWithoutCardInput | CardMonsterTypeUpsertWithWhereUniqueWithoutCardInput[]
    createMany?: CardMonsterTypeCreateManyCardInputEnvelope
    set?: CardMonsterTypeWhereUniqueInput | CardMonsterTypeWhereUniqueInput[]
    disconnect?: CardMonsterTypeWhereUniqueInput | CardMonsterTypeWhereUniqueInput[]
    delete?: CardMonsterTypeWhereUniqueInput | CardMonsterTypeWhereUniqueInput[]
    connect?: CardMonsterTypeWhereUniqueInput | CardMonsterTypeWhereUniqueInput[]
    update?: CardMonsterTypeUpdateWithWhereUniqueWithoutCardInput | CardMonsterTypeUpdateWithWhereUniqueWithoutCardInput[]
    updateMany?: CardMonsterTypeUpdateManyWithWhereWithoutCardInput | CardMonsterTypeUpdateManyWithWhereWithoutCardInput[]
    deleteMany?: CardMonsterTypeScalarWhereInput | CardMonsterTypeScalarWhereInput[]
  }

  export type InventoryItemUpdateManyWithoutCardNestedInput = {
    create?: XOR<InventoryItemCreateWithoutCardInput, InventoryItemUncheckedCreateWithoutCardInput> | InventoryItemCreateWithoutCardInput[] | InventoryItemUncheckedCreateWithoutCardInput[]
    connectOrCreate?: InventoryItemCreateOrConnectWithoutCardInput | InventoryItemCreateOrConnectWithoutCardInput[]
    upsert?: InventoryItemUpsertWithWhereUniqueWithoutCardInput | InventoryItemUpsertWithWhereUniqueWithoutCardInput[]
    createMany?: InventoryItemCreateManyCardInputEnvelope
    set?: InventoryItemWhereUniqueInput | InventoryItemWhereUniqueInput[]
    disconnect?: InventoryItemWhereUniqueInput | InventoryItemWhereUniqueInput[]
    delete?: InventoryItemWhereUniqueInput | InventoryItemWhereUniqueInput[]
    connect?: InventoryItemWhereUniqueInput | InventoryItemWhereUniqueInput[]
    update?: InventoryItemUpdateWithWhereUniqueWithoutCardInput | InventoryItemUpdateWithWhereUniqueWithoutCardInput[]
    updateMany?: InventoryItemUpdateManyWithWhereWithoutCardInput | InventoryItemUpdateManyWithWhereWithoutCardInput[]
    deleteMany?: InventoryItemScalarWhereInput | InventoryItemScalarWhereInput[]
  }

  export type DeckCardUpdateManyWithoutCardNestedInput = {
    create?: XOR<DeckCardCreateWithoutCardInput, DeckCardUncheckedCreateWithoutCardInput> | DeckCardCreateWithoutCardInput[] | DeckCardUncheckedCreateWithoutCardInput[]
    connectOrCreate?: DeckCardCreateOrConnectWithoutCardInput | DeckCardCreateOrConnectWithoutCardInput[]
    upsert?: DeckCardUpsertWithWhereUniqueWithoutCardInput | DeckCardUpsertWithWhereUniqueWithoutCardInput[]
    createMany?: DeckCardCreateManyCardInputEnvelope
    set?: DeckCardWhereUniqueInput | DeckCardWhereUniqueInput[]
    disconnect?: DeckCardWhereUniqueInput | DeckCardWhereUniqueInput[]
    delete?: DeckCardWhereUniqueInput | DeckCardWhereUniqueInput[]
    connect?: DeckCardWhereUniqueInput | DeckCardWhereUniqueInput[]
    update?: DeckCardUpdateWithWhereUniqueWithoutCardInput | DeckCardUpdateWithWhereUniqueWithoutCardInput[]
    updateMany?: DeckCardUpdateManyWithWhereWithoutCardInput | DeckCardUpdateManyWithWhereWithoutCardInput[]
    deleteMany?: DeckCardScalarWhereInput | DeckCardScalarWhereInput[]
  }

  export type CardMonsterTypeUncheckedUpdateManyWithoutCardNestedInput = {
    create?: XOR<CardMonsterTypeCreateWithoutCardInput, CardMonsterTypeUncheckedCreateWithoutCardInput> | CardMonsterTypeCreateWithoutCardInput[] | CardMonsterTypeUncheckedCreateWithoutCardInput[]
    connectOrCreate?: CardMonsterTypeCreateOrConnectWithoutCardInput | CardMonsterTypeCreateOrConnectWithoutCardInput[]
    upsert?: CardMonsterTypeUpsertWithWhereUniqueWithoutCardInput | CardMonsterTypeUpsertWithWhereUniqueWithoutCardInput[]
    createMany?: CardMonsterTypeCreateManyCardInputEnvelope
    set?: CardMonsterTypeWhereUniqueInput | CardMonsterTypeWhereUniqueInput[]
    disconnect?: CardMonsterTypeWhereUniqueInput | CardMonsterTypeWhereUniqueInput[]
    delete?: CardMonsterTypeWhereUniqueInput | CardMonsterTypeWhereUniqueInput[]
    connect?: CardMonsterTypeWhereUniqueInput | CardMonsterTypeWhereUniqueInput[]
    update?: CardMonsterTypeUpdateWithWhereUniqueWithoutCardInput | CardMonsterTypeUpdateWithWhereUniqueWithoutCardInput[]
    updateMany?: CardMonsterTypeUpdateManyWithWhereWithoutCardInput | CardMonsterTypeUpdateManyWithWhereWithoutCardInput[]
    deleteMany?: CardMonsterTypeScalarWhereInput | CardMonsterTypeScalarWhereInput[]
  }

  export type InventoryItemUncheckedUpdateManyWithoutCardNestedInput = {
    create?: XOR<InventoryItemCreateWithoutCardInput, InventoryItemUncheckedCreateWithoutCardInput> | InventoryItemCreateWithoutCardInput[] | InventoryItemUncheckedCreateWithoutCardInput[]
    connectOrCreate?: InventoryItemCreateOrConnectWithoutCardInput | InventoryItemCreateOrConnectWithoutCardInput[]
    upsert?: InventoryItemUpsertWithWhereUniqueWithoutCardInput | InventoryItemUpsertWithWhereUniqueWithoutCardInput[]
    createMany?: InventoryItemCreateManyCardInputEnvelope
    set?: InventoryItemWhereUniqueInput | InventoryItemWhereUniqueInput[]
    disconnect?: InventoryItemWhereUniqueInput | InventoryItemWhereUniqueInput[]
    delete?: InventoryItemWhereUniqueInput | InventoryItemWhereUniqueInput[]
    connect?: InventoryItemWhereUniqueInput | InventoryItemWhereUniqueInput[]
    update?: InventoryItemUpdateWithWhereUniqueWithoutCardInput | InventoryItemUpdateWithWhereUniqueWithoutCardInput[]
    updateMany?: InventoryItemUpdateManyWithWhereWithoutCardInput | InventoryItemUpdateManyWithWhereWithoutCardInput[]
    deleteMany?: InventoryItemScalarWhereInput | InventoryItemScalarWhereInput[]
  }

  export type DeckCardUncheckedUpdateManyWithoutCardNestedInput = {
    create?: XOR<DeckCardCreateWithoutCardInput, DeckCardUncheckedCreateWithoutCardInput> | DeckCardCreateWithoutCardInput[] | DeckCardUncheckedCreateWithoutCardInput[]
    connectOrCreate?: DeckCardCreateOrConnectWithoutCardInput | DeckCardCreateOrConnectWithoutCardInput[]
    upsert?: DeckCardUpsertWithWhereUniqueWithoutCardInput | DeckCardUpsertWithWhereUniqueWithoutCardInput[]
    createMany?: DeckCardCreateManyCardInputEnvelope
    set?: DeckCardWhereUniqueInput | DeckCardWhereUniqueInput[]
    disconnect?: DeckCardWhereUniqueInput | DeckCardWhereUniqueInput[]
    delete?: DeckCardWhereUniqueInput | DeckCardWhereUniqueInput[]
    connect?: DeckCardWhereUniqueInput | DeckCardWhereUniqueInput[]
    update?: DeckCardUpdateWithWhereUniqueWithoutCardInput | DeckCardUpdateWithWhereUniqueWithoutCardInput[]
    updateMany?: DeckCardUpdateManyWithWhereWithoutCardInput | DeckCardUpdateManyWithWhereWithoutCardInput[]
    deleteMany?: DeckCardScalarWhereInput | DeckCardScalarWhereInput[]
  }

  export type CardCreateNestedOneWithoutMonsterTypesInput = {
    create?: XOR<CardCreateWithoutMonsterTypesInput, CardUncheckedCreateWithoutMonsterTypesInput>
    connectOrCreate?: CardCreateOrConnectWithoutMonsterTypesInput
    connect?: CardWhereUniqueInput
  }

  export type MonsterTypeCreateNestedOneWithoutCardsInput = {
    create?: XOR<MonsterTypeCreateWithoutCardsInput, MonsterTypeUncheckedCreateWithoutCardsInput>
    connectOrCreate?: MonsterTypeCreateOrConnectWithoutCardsInput
    connect?: MonsterTypeWhereUniqueInput
  }

  export type CardUpdateOneRequiredWithoutMonsterTypesNestedInput = {
    create?: XOR<CardCreateWithoutMonsterTypesInput, CardUncheckedCreateWithoutMonsterTypesInput>
    connectOrCreate?: CardCreateOrConnectWithoutMonsterTypesInput
    upsert?: CardUpsertWithoutMonsterTypesInput
    connect?: CardWhereUniqueInput
    update?: XOR<XOR<CardUpdateToOneWithWhereWithoutMonsterTypesInput, CardUpdateWithoutMonsterTypesInput>, CardUncheckedUpdateWithoutMonsterTypesInput>
  }

  export type MonsterTypeUpdateOneRequiredWithoutCardsNestedInput = {
    create?: XOR<MonsterTypeCreateWithoutCardsInput, MonsterTypeUncheckedCreateWithoutCardsInput>
    connectOrCreate?: MonsterTypeCreateOrConnectWithoutCardsInput
    upsert?: MonsterTypeUpsertWithoutCardsInput
    connect?: MonsterTypeWhereUniqueInput
    update?: XOR<XOR<MonsterTypeUpdateToOneWithWhereWithoutCardsInput, MonsterTypeUpdateWithoutCardsInput>, MonsterTypeUncheckedUpdateWithoutCardsInput>
  }

  export type CardMonsterTypeCreateNestedManyWithoutMonsterTypeInput = {
    create?: XOR<CardMonsterTypeCreateWithoutMonsterTypeInput, CardMonsterTypeUncheckedCreateWithoutMonsterTypeInput> | CardMonsterTypeCreateWithoutMonsterTypeInput[] | CardMonsterTypeUncheckedCreateWithoutMonsterTypeInput[]
    connectOrCreate?: CardMonsterTypeCreateOrConnectWithoutMonsterTypeInput | CardMonsterTypeCreateOrConnectWithoutMonsterTypeInput[]
    createMany?: CardMonsterTypeCreateManyMonsterTypeInputEnvelope
    connect?: CardMonsterTypeWhereUniqueInput | CardMonsterTypeWhereUniqueInput[]
  }

  export type CardMonsterTypeUncheckedCreateNestedManyWithoutMonsterTypeInput = {
    create?: XOR<CardMonsterTypeCreateWithoutMonsterTypeInput, CardMonsterTypeUncheckedCreateWithoutMonsterTypeInput> | CardMonsterTypeCreateWithoutMonsterTypeInput[] | CardMonsterTypeUncheckedCreateWithoutMonsterTypeInput[]
    connectOrCreate?: CardMonsterTypeCreateOrConnectWithoutMonsterTypeInput | CardMonsterTypeCreateOrConnectWithoutMonsterTypeInput[]
    createMany?: CardMonsterTypeCreateManyMonsterTypeInputEnvelope
    connect?: CardMonsterTypeWhereUniqueInput | CardMonsterTypeWhereUniqueInput[]
  }

  export type CardMonsterTypeUpdateManyWithoutMonsterTypeNestedInput = {
    create?: XOR<CardMonsterTypeCreateWithoutMonsterTypeInput, CardMonsterTypeUncheckedCreateWithoutMonsterTypeInput> | CardMonsterTypeCreateWithoutMonsterTypeInput[] | CardMonsterTypeUncheckedCreateWithoutMonsterTypeInput[]
    connectOrCreate?: CardMonsterTypeCreateOrConnectWithoutMonsterTypeInput | CardMonsterTypeCreateOrConnectWithoutMonsterTypeInput[]
    upsert?: CardMonsterTypeUpsertWithWhereUniqueWithoutMonsterTypeInput | CardMonsterTypeUpsertWithWhereUniqueWithoutMonsterTypeInput[]
    createMany?: CardMonsterTypeCreateManyMonsterTypeInputEnvelope
    set?: CardMonsterTypeWhereUniqueInput | CardMonsterTypeWhereUniqueInput[]
    disconnect?: CardMonsterTypeWhereUniqueInput | CardMonsterTypeWhereUniqueInput[]
    delete?: CardMonsterTypeWhereUniqueInput | CardMonsterTypeWhereUniqueInput[]
    connect?: CardMonsterTypeWhereUniqueInput | CardMonsterTypeWhereUniqueInput[]
    update?: CardMonsterTypeUpdateWithWhereUniqueWithoutMonsterTypeInput | CardMonsterTypeUpdateWithWhereUniqueWithoutMonsterTypeInput[]
    updateMany?: CardMonsterTypeUpdateManyWithWhereWithoutMonsterTypeInput | CardMonsterTypeUpdateManyWithWhereWithoutMonsterTypeInput[]
    deleteMany?: CardMonsterTypeScalarWhereInput | CardMonsterTypeScalarWhereInput[]
  }

  export type CardMonsterTypeUncheckedUpdateManyWithoutMonsterTypeNestedInput = {
    create?: XOR<CardMonsterTypeCreateWithoutMonsterTypeInput, CardMonsterTypeUncheckedCreateWithoutMonsterTypeInput> | CardMonsterTypeCreateWithoutMonsterTypeInput[] | CardMonsterTypeUncheckedCreateWithoutMonsterTypeInput[]
    connectOrCreate?: CardMonsterTypeCreateOrConnectWithoutMonsterTypeInput | CardMonsterTypeCreateOrConnectWithoutMonsterTypeInput[]
    upsert?: CardMonsterTypeUpsertWithWhereUniqueWithoutMonsterTypeInput | CardMonsterTypeUpsertWithWhereUniqueWithoutMonsterTypeInput[]
    createMany?: CardMonsterTypeCreateManyMonsterTypeInputEnvelope
    set?: CardMonsterTypeWhereUniqueInput | CardMonsterTypeWhereUniqueInput[]
    disconnect?: CardMonsterTypeWhereUniqueInput | CardMonsterTypeWhereUniqueInput[]
    delete?: CardMonsterTypeWhereUniqueInput | CardMonsterTypeWhereUniqueInput[]
    connect?: CardMonsterTypeWhereUniqueInput | CardMonsterTypeWhereUniqueInput[]
    update?: CardMonsterTypeUpdateWithWhereUniqueWithoutMonsterTypeInput | CardMonsterTypeUpdateWithWhereUniqueWithoutMonsterTypeInput[]
    updateMany?: CardMonsterTypeUpdateManyWithWhereWithoutMonsterTypeInput | CardMonsterTypeUpdateManyWithWhereWithoutMonsterTypeInput[]
    deleteMany?: CardMonsterTypeScalarWhereInput | CardMonsterTypeScalarWhereInput[]
  }

  export type InventoryItemCreateNestedManyWithoutUserInput = {
    create?: XOR<InventoryItemCreateWithoutUserInput, InventoryItemUncheckedCreateWithoutUserInput> | InventoryItemCreateWithoutUserInput[] | InventoryItemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: InventoryItemCreateOrConnectWithoutUserInput | InventoryItemCreateOrConnectWithoutUserInput[]
    createMany?: InventoryItemCreateManyUserInputEnvelope
    connect?: InventoryItemWhereUniqueInput | InventoryItemWhereUniqueInput[]
  }

  export type DeckCreateNestedManyWithoutUserInput = {
    create?: XOR<DeckCreateWithoutUserInput, DeckUncheckedCreateWithoutUserInput> | DeckCreateWithoutUserInput[] | DeckUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DeckCreateOrConnectWithoutUserInput | DeckCreateOrConnectWithoutUserInput[]
    createMany?: DeckCreateManyUserInputEnvelope
    connect?: DeckWhereUniqueInput | DeckWhereUniqueInput[]
  }

  export type InventoryItemUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<InventoryItemCreateWithoutUserInput, InventoryItemUncheckedCreateWithoutUserInput> | InventoryItemCreateWithoutUserInput[] | InventoryItemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: InventoryItemCreateOrConnectWithoutUserInput | InventoryItemCreateOrConnectWithoutUserInput[]
    createMany?: InventoryItemCreateManyUserInputEnvelope
    connect?: InventoryItemWhereUniqueInput | InventoryItemWhereUniqueInput[]
  }

  export type DeckUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<DeckCreateWithoutUserInput, DeckUncheckedCreateWithoutUserInput> | DeckCreateWithoutUserInput[] | DeckUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DeckCreateOrConnectWithoutUserInput | DeckCreateOrConnectWithoutUserInput[]
    createMany?: DeckCreateManyUserInputEnvelope
    connect?: DeckWhereUniqueInput | DeckWhereUniqueInput[]
  }

  export type InventoryItemUpdateManyWithoutUserNestedInput = {
    create?: XOR<InventoryItemCreateWithoutUserInput, InventoryItemUncheckedCreateWithoutUserInput> | InventoryItemCreateWithoutUserInput[] | InventoryItemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: InventoryItemCreateOrConnectWithoutUserInput | InventoryItemCreateOrConnectWithoutUserInput[]
    upsert?: InventoryItemUpsertWithWhereUniqueWithoutUserInput | InventoryItemUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: InventoryItemCreateManyUserInputEnvelope
    set?: InventoryItemWhereUniqueInput | InventoryItemWhereUniqueInput[]
    disconnect?: InventoryItemWhereUniqueInput | InventoryItemWhereUniqueInput[]
    delete?: InventoryItemWhereUniqueInput | InventoryItemWhereUniqueInput[]
    connect?: InventoryItemWhereUniqueInput | InventoryItemWhereUniqueInput[]
    update?: InventoryItemUpdateWithWhereUniqueWithoutUserInput | InventoryItemUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: InventoryItemUpdateManyWithWhereWithoutUserInput | InventoryItemUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: InventoryItemScalarWhereInput | InventoryItemScalarWhereInput[]
  }

  export type DeckUpdateManyWithoutUserNestedInput = {
    create?: XOR<DeckCreateWithoutUserInput, DeckUncheckedCreateWithoutUserInput> | DeckCreateWithoutUserInput[] | DeckUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DeckCreateOrConnectWithoutUserInput | DeckCreateOrConnectWithoutUserInput[]
    upsert?: DeckUpsertWithWhereUniqueWithoutUserInput | DeckUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DeckCreateManyUserInputEnvelope
    set?: DeckWhereUniqueInput | DeckWhereUniqueInput[]
    disconnect?: DeckWhereUniqueInput | DeckWhereUniqueInput[]
    delete?: DeckWhereUniqueInput | DeckWhereUniqueInput[]
    connect?: DeckWhereUniqueInput | DeckWhereUniqueInput[]
    update?: DeckUpdateWithWhereUniqueWithoutUserInput | DeckUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DeckUpdateManyWithWhereWithoutUserInput | DeckUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DeckScalarWhereInput | DeckScalarWhereInput[]
  }

  export type InventoryItemUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<InventoryItemCreateWithoutUserInput, InventoryItemUncheckedCreateWithoutUserInput> | InventoryItemCreateWithoutUserInput[] | InventoryItemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: InventoryItemCreateOrConnectWithoutUserInput | InventoryItemCreateOrConnectWithoutUserInput[]
    upsert?: InventoryItemUpsertWithWhereUniqueWithoutUserInput | InventoryItemUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: InventoryItemCreateManyUserInputEnvelope
    set?: InventoryItemWhereUniqueInput | InventoryItemWhereUniqueInput[]
    disconnect?: InventoryItemWhereUniqueInput | InventoryItemWhereUniqueInput[]
    delete?: InventoryItemWhereUniqueInput | InventoryItemWhereUniqueInput[]
    connect?: InventoryItemWhereUniqueInput | InventoryItemWhereUniqueInput[]
    update?: InventoryItemUpdateWithWhereUniqueWithoutUserInput | InventoryItemUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: InventoryItemUpdateManyWithWhereWithoutUserInput | InventoryItemUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: InventoryItemScalarWhereInput | InventoryItemScalarWhereInput[]
  }

  export type DeckUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<DeckCreateWithoutUserInput, DeckUncheckedCreateWithoutUserInput> | DeckCreateWithoutUserInput[] | DeckUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DeckCreateOrConnectWithoutUserInput | DeckCreateOrConnectWithoutUserInput[]
    upsert?: DeckUpsertWithWhereUniqueWithoutUserInput | DeckUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DeckCreateManyUserInputEnvelope
    set?: DeckWhereUniqueInput | DeckWhereUniqueInput[]
    disconnect?: DeckWhereUniqueInput | DeckWhereUniqueInput[]
    delete?: DeckWhereUniqueInput | DeckWhereUniqueInput[]
    connect?: DeckWhereUniqueInput | DeckWhereUniqueInput[]
    update?: DeckUpdateWithWhereUniqueWithoutUserInput | DeckUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DeckUpdateManyWithWhereWithoutUserInput | DeckUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DeckScalarWhereInput | DeckScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutInventoryInput = {
    create?: XOR<UserCreateWithoutInventoryInput, UserUncheckedCreateWithoutInventoryInput>
    connectOrCreate?: UserCreateOrConnectWithoutInventoryInput
    connect?: UserWhereUniqueInput
  }

  export type CardCreateNestedOneWithoutInventoryItemsInput = {
    create?: XOR<CardCreateWithoutInventoryItemsInput, CardUncheckedCreateWithoutInventoryItemsInput>
    connectOrCreate?: CardCreateOrConnectWithoutInventoryItemsInput
    connect?: CardWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutInventoryNestedInput = {
    create?: XOR<UserCreateWithoutInventoryInput, UserUncheckedCreateWithoutInventoryInput>
    connectOrCreate?: UserCreateOrConnectWithoutInventoryInput
    upsert?: UserUpsertWithoutInventoryInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutInventoryInput, UserUpdateWithoutInventoryInput>, UserUncheckedUpdateWithoutInventoryInput>
  }

  export type CardUpdateOneRequiredWithoutInventoryItemsNestedInput = {
    create?: XOR<CardCreateWithoutInventoryItemsInput, CardUncheckedCreateWithoutInventoryItemsInput>
    connectOrCreate?: CardCreateOrConnectWithoutInventoryItemsInput
    upsert?: CardUpsertWithoutInventoryItemsInput
    connect?: CardWhereUniqueInput
    update?: XOR<XOR<CardUpdateToOneWithWhereWithoutInventoryItemsInput, CardUpdateWithoutInventoryItemsInput>, CardUncheckedUpdateWithoutInventoryItemsInput>
  }

  export type UserCreateNestedOneWithoutDecksInput = {
    create?: XOR<UserCreateWithoutDecksInput, UserUncheckedCreateWithoutDecksInput>
    connectOrCreate?: UserCreateOrConnectWithoutDecksInput
    connect?: UserWhereUniqueInput
  }

  export type DeckCardCreateNestedManyWithoutDeckInput = {
    create?: XOR<DeckCardCreateWithoutDeckInput, DeckCardUncheckedCreateWithoutDeckInput> | DeckCardCreateWithoutDeckInput[] | DeckCardUncheckedCreateWithoutDeckInput[]
    connectOrCreate?: DeckCardCreateOrConnectWithoutDeckInput | DeckCardCreateOrConnectWithoutDeckInput[]
    createMany?: DeckCardCreateManyDeckInputEnvelope
    connect?: DeckCardWhereUniqueInput | DeckCardWhereUniqueInput[]
  }

  export type DeckCardUncheckedCreateNestedManyWithoutDeckInput = {
    create?: XOR<DeckCardCreateWithoutDeckInput, DeckCardUncheckedCreateWithoutDeckInput> | DeckCardCreateWithoutDeckInput[] | DeckCardUncheckedCreateWithoutDeckInput[]
    connectOrCreate?: DeckCardCreateOrConnectWithoutDeckInput | DeckCardCreateOrConnectWithoutDeckInput[]
    createMany?: DeckCardCreateManyDeckInputEnvelope
    connect?: DeckCardWhereUniqueInput | DeckCardWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutDecksNestedInput = {
    create?: XOR<UserCreateWithoutDecksInput, UserUncheckedCreateWithoutDecksInput>
    connectOrCreate?: UserCreateOrConnectWithoutDecksInput
    upsert?: UserUpsertWithoutDecksInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDecksInput, UserUpdateWithoutDecksInput>, UserUncheckedUpdateWithoutDecksInput>
  }

  export type DeckCardUpdateManyWithoutDeckNestedInput = {
    create?: XOR<DeckCardCreateWithoutDeckInput, DeckCardUncheckedCreateWithoutDeckInput> | DeckCardCreateWithoutDeckInput[] | DeckCardUncheckedCreateWithoutDeckInput[]
    connectOrCreate?: DeckCardCreateOrConnectWithoutDeckInput | DeckCardCreateOrConnectWithoutDeckInput[]
    upsert?: DeckCardUpsertWithWhereUniqueWithoutDeckInput | DeckCardUpsertWithWhereUniqueWithoutDeckInput[]
    createMany?: DeckCardCreateManyDeckInputEnvelope
    set?: DeckCardWhereUniqueInput | DeckCardWhereUniqueInput[]
    disconnect?: DeckCardWhereUniqueInput | DeckCardWhereUniqueInput[]
    delete?: DeckCardWhereUniqueInput | DeckCardWhereUniqueInput[]
    connect?: DeckCardWhereUniqueInput | DeckCardWhereUniqueInput[]
    update?: DeckCardUpdateWithWhereUniqueWithoutDeckInput | DeckCardUpdateWithWhereUniqueWithoutDeckInput[]
    updateMany?: DeckCardUpdateManyWithWhereWithoutDeckInput | DeckCardUpdateManyWithWhereWithoutDeckInput[]
    deleteMany?: DeckCardScalarWhereInput | DeckCardScalarWhereInput[]
  }

  export type DeckCardUncheckedUpdateManyWithoutDeckNestedInput = {
    create?: XOR<DeckCardCreateWithoutDeckInput, DeckCardUncheckedCreateWithoutDeckInput> | DeckCardCreateWithoutDeckInput[] | DeckCardUncheckedCreateWithoutDeckInput[]
    connectOrCreate?: DeckCardCreateOrConnectWithoutDeckInput | DeckCardCreateOrConnectWithoutDeckInput[]
    upsert?: DeckCardUpsertWithWhereUniqueWithoutDeckInput | DeckCardUpsertWithWhereUniqueWithoutDeckInput[]
    createMany?: DeckCardCreateManyDeckInputEnvelope
    set?: DeckCardWhereUniqueInput | DeckCardWhereUniqueInput[]
    disconnect?: DeckCardWhereUniqueInput | DeckCardWhereUniqueInput[]
    delete?: DeckCardWhereUniqueInput | DeckCardWhereUniqueInput[]
    connect?: DeckCardWhereUniqueInput | DeckCardWhereUniqueInput[]
    update?: DeckCardUpdateWithWhereUniqueWithoutDeckInput | DeckCardUpdateWithWhereUniqueWithoutDeckInput[]
    updateMany?: DeckCardUpdateManyWithWhereWithoutDeckInput | DeckCardUpdateManyWithWhereWithoutDeckInput[]
    deleteMany?: DeckCardScalarWhereInput | DeckCardScalarWhereInput[]
  }

  export type DeckCreateNestedOneWithoutCardsInput = {
    create?: XOR<DeckCreateWithoutCardsInput, DeckUncheckedCreateWithoutCardsInput>
    connectOrCreate?: DeckCreateOrConnectWithoutCardsInput
    connect?: DeckWhereUniqueInput
  }

  export type CardCreateNestedOneWithoutDeckCardsInput = {
    create?: XOR<CardCreateWithoutDeckCardsInput, CardUncheckedCreateWithoutDeckCardsInput>
    connectOrCreate?: CardCreateOrConnectWithoutDeckCardsInput
    connect?: CardWhereUniqueInput
  }

  export type EnumDeckZoneFieldUpdateOperationsInput = {
    set?: $Enums.DeckZone
  }

  export type DeckUpdateOneRequiredWithoutCardsNestedInput = {
    create?: XOR<DeckCreateWithoutCardsInput, DeckUncheckedCreateWithoutCardsInput>
    connectOrCreate?: DeckCreateOrConnectWithoutCardsInput
    upsert?: DeckUpsertWithoutCardsInput
    connect?: DeckWhereUniqueInput
    update?: XOR<XOR<DeckUpdateToOneWithWhereWithoutCardsInput, DeckUpdateWithoutCardsInput>, DeckUncheckedUpdateWithoutCardsInput>
  }

  export type CardUpdateOneRequiredWithoutDeckCardsNestedInput = {
    create?: XOR<CardCreateWithoutDeckCardsInput, CardUncheckedCreateWithoutDeckCardsInput>
    connectOrCreate?: CardCreateOrConnectWithoutDeckCardsInput
    upsert?: CardUpsertWithoutDeckCardsInput
    connect?: CardWhereUniqueInput
    update?: XOR<XOR<CardUpdateToOneWithWhereWithoutDeckCardsInput, CardUpdateWithoutDeckCardsInput>, CardUncheckedUpdateWithoutDeckCardsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumAttributeFilter<$PrismaModel = never> = {
    equals?: $Enums.Attribute | EnumAttributeFieldRefInput<$PrismaModel>
    in?: $Enums.Attribute[] | ListEnumAttributeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Attribute[] | ListEnumAttributeFieldRefInput<$PrismaModel>
    not?: NestedEnumAttributeFilter<$PrismaModel> | $Enums.Attribute
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumSummonTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.SummonType | EnumSummonTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.SummonType[] | ListEnumSummonTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.SummonType[] | ListEnumSummonTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumSummonTypeNullableFilter<$PrismaModel> | $Enums.SummonType | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumAttributeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Attribute | EnumAttributeFieldRefInput<$PrismaModel>
    in?: $Enums.Attribute[] | ListEnumAttributeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Attribute[] | ListEnumAttributeFieldRefInput<$PrismaModel>
    not?: NestedEnumAttributeWithAggregatesFilter<$PrismaModel> | $Enums.Attribute
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAttributeFilter<$PrismaModel>
    _max?: NestedEnumAttributeFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedEnumSummonTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SummonType | EnumSummonTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.SummonType[] | ListEnumSummonTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.SummonType[] | ListEnumSummonTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumSummonTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.SummonType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumSummonTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumSummonTypeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumDeckZoneFilter<$PrismaModel = never> = {
    equals?: $Enums.DeckZone | EnumDeckZoneFieldRefInput<$PrismaModel>
    in?: $Enums.DeckZone[] | ListEnumDeckZoneFieldRefInput<$PrismaModel>
    notIn?: $Enums.DeckZone[] | ListEnumDeckZoneFieldRefInput<$PrismaModel>
    not?: NestedEnumDeckZoneFilter<$PrismaModel> | $Enums.DeckZone
  }

  export type NestedEnumDeckZoneWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DeckZone | EnumDeckZoneFieldRefInput<$PrismaModel>
    in?: $Enums.DeckZone[] | ListEnumDeckZoneFieldRefInput<$PrismaModel>
    notIn?: $Enums.DeckZone[] | ListEnumDeckZoneFieldRefInput<$PrismaModel>
    not?: NestedEnumDeckZoneWithAggregatesFilter<$PrismaModel> | $Enums.DeckZone
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDeckZoneFilter<$PrismaModel>
    _max?: NestedEnumDeckZoneFilter<$PrismaModel>
  }

  export type CardMonsterTypeCreateWithoutCardInput = {
    monsterType: MonsterTypeCreateNestedOneWithoutCardsInput
  }

  export type CardMonsterTypeUncheckedCreateWithoutCardInput = {
    monsterTypeId: number
  }

  export type CardMonsterTypeCreateOrConnectWithoutCardInput = {
    where: CardMonsterTypeWhereUniqueInput
    create: XOR<CardMonsterTypeCreateWithoutCardInput, CardMonsterTypeUncheckedCreateWithoutCardInput>
  }

  export type CardMonsterTypeCreateManyCardInputEnvelope = {
    data: CardMonsterTypeCreateManyCardInput | CardMonsterTypeCreateManyCardInput[]
    skipDuplicates?: boolean
  }

  export type InventoryItemCreateWithoutCardInput = {
    quantity?: number
    user: UserCreateNestedOneWithoutInventoryInput
  }

  export type InventoryItemUncheckedCreateWithoutCardInput = {
    userId: string
    quantity?: number
  }

  export type InventoryItemCreateOrConnectWithoutCardInput = {
    where: InventoryItemWhereUniqueInput
    create: XOR<InventoryItemCreateWithoutCardInput, InventoryItemUncheckedCreateWithoutCardInput>
  }

  export type InventoryItemCreateManyCardInputEnvelope = {
    data: InventoryItemCreateManyCardInput | InventoryItemCreateManyCardInput[]
    skipDuplicates?: boolean
  }

  export type DeckCardCreateWithoutCardInput = {
    quantity?: number
    zone?: $Enums.DeckZone
    deck: DeckCreateNestedOneWithoutCardsInput
  }

  export type DeckCardUncheckedCreateWithoutCardInput = {
    deckUserId: string
    deckName: string
    quantity?: number
    zone?: $Enums.DeckZone
  }

  export type DeckCardCreateOrConnectWithoutCardInput = {
    where: DeckCardWhereUniqueInput
    create: XOR<DeckCardCreateWithoutCardInput, DeckCardUncheckedCreateWithoutCardInput>
  }

  export type DeckCardCreateManyCardInputEnvelope = {
    data: DeckCardCreateManyCardInput | DeckCardCreateManyCardInput[]
    skipDuplicates?: boolean
  }

  export type CardMonsterTypeUpsertWithWhereUniqueWithoutCardInput = {
    where: CardMonsterTypeWhereUniqueInput
    update: XOR<CardMonsterTypeUpdateWithoutCardInput, CardMonsterTypeUncheckedUpdateWithoutCardInput>
    create: XOR<CardMonsterTypeCreateWithoutCardInput, CardMonsterTypeUncheckedCreateWithoutCardInput>
  }

  export type CardMonsterTypeUpdateWithWhereUniqueWithoutCardInput = {
    where: CardMonsterTypeWhereUniqueInput
    data: XOR<CardMonsterTypeUpdateWithoutCardInput, CardMonsterTypeUncheckedUpdateWithoutCardInput>
  }

  export type CardMonsterTypeUpdateManyWithWhereWithoutCardInput = {
    where: CardMonsterTypeScalarWhereInput
    data: XOR<CardMonsterTypeUpdateManyMutationInput, CardMonsterTypeUncheckedUpdateManyWithoutCardInput>
  }

  export type CardMonsterTypeScalarWhereInput = {
    AND?: CardMonsterTypeScalarWhereInput | CardMonsterTypeScalarWhereInput[]
    OR?: CardMonsterTypeScalarWhereInput[]
    NOT?: CardMonsterTypeScalarWhereInput | CardMonsterTypeScalarWhereInput[]
    cardId?: IntFilter<"CardMonsterType"> | number
    monsterTypeId?: IntFilter<"CardMonsterType"> | number
  }

  export type InventoryItemUpsertWithWhereUniqueWithoutCardInput = {
    where: InventoryItemWhereUniqueInput
    update: XOR<InventoryItemUpdateWithoutCardInput, InventoryItemUncheckedUpdateWithoutCardInput>
    create: XOR<InventoryItemCreateWithoutCardInput, InventoryItemUncheckedCreateWithoutCardInput>
  }

  export type InventoryItemUpdateWithWhereUniqueWithoutCardInput = {
    where: InventoryItemWhereUniqueInput
    data: XOR<InventoryItemUpdateWithoutCardInput, InventoryItemUncheckedUpdateWithoutCardInput>
  }

  export type InventoryItemUpdateManyWithWhereWithoutCardInput = {
    where: InventoryItemScalarWhereInput
    data: XOR<InventoryItemUpdateManyMutationInput, InventoryItemUncheckedUpdateManyWithoutCardInput>
  }

  export type InventoryItemScalarWhereInput = {
    AND?: InventoryItemScalarWhereInput | InventoryItemScalarWhereInput[]
    OR?: InventoryItemScalarWhereInput[]
    NOT?: InventoryItemScalarWhereInput | InventoryItemScalarWhereInput[]
    userId?: StringFilter<"InventoryItem"> | string
    cardId?: IntFilter<"InventoryItem"> | number
    quantity?: IntFilter<"InventoryItem"> | number
  }

  export type DeckCardUpsertWithWhereUniqueWithoutCardInput = {
    where: DeckCardWhereUniqueInput
    update: XOR<DeckCardUpdateWithoutCardInput, DeckCardUncheckedUpdateWithoutCardInput>
    create: XOR<DeckCardCreateWithoutCardInput, DeckCardUncheckedCreateWithoutCardInput>
  }

  export type DeckCardUpdateWithWhereUniqueWithoutCardInput = {
    where: DeckCardWhereUniqueInput
    data: XOR<DeckCardUpdateWithoutCardInput, DeckCardUncheckedUpdateWithoutCardInput>
  }

  export type DeckCardUpdateManyWithWhereWithoutCardInput = {
    where: DeckCardScalarWhereInput
    data: XOR<DeckCardUpdateManyMutationInput, DeckCardUncheckedUpdateManyWithoutCardInput>
  }

  export type DeckCardScalarWhereInput = {
    AND?: DeckCardScalarWhereInput | DeckCardScalarWhereInput[]
    OR?: DeckCardScalarWhereInput[]
    NOT?: DeckCardScalarWhereInput | DeckCardScalarWhereInput[]
    deckUserId?: StringFilter<"DeckCard"> | string
    deckName?: StringFilter<"DeckCard"> | string
    cardId?: IntFilter<"DeckCard"> | number
    quantity?: IntFilter<"DeckCard"> | number
    zone?: EnumDeckZoneFilter<"DeckCard"> | $Enums.DeckZone
  }

  export type CardCreateWithoutMonsterTypesInput = {
    name: string
    attribute: $Enums.Attribute
    race?: string | null
    summonType?: $Enums.SummonType | null
    level?: number | null
    atk?: number | null
    def?: number | null
    description: string
    restriction: number
    inventoryItems?: InventoryItemCreateNestedManyWithoutCardInput
    deckCards?: DeckCardCreateNestedManyWithoutCardInput
  }

  export type CardUncheckedCreateWithoutMonsterTypesInput = {
    id?: number
    name: string
    attribute: $Enums.Attribute
    race?: string | null
    summonType?: $Enums.SummonType | null
    level?: number | null
    atk?: number | null
    def?: number | null
    description: string
    restriction: number
    inventoryItems?: InventoryItemUncheckedCreateNestedManyWithoutCardInput
    deckCards?: DeckCardUncheckedCreateNestedManyWithoutCardInput
  }

  export type CardCreateOrConnectWithoutMonsterTypesInput = {
    where: CardWhereUniqueInput
    create: XOR<CardCreateWithoutMonsterTypesInput, CardUncheckedCreateWithoutMonsterTypesInput>
  }

  export type MonsterTypeCreateWithoutCardsInput = {
    name: string
  }

  export type MonsterTypeUncheckedCreateWithoutCardsInput = {
    id?: number
    name: string
  }

  export type MonsterTypeCreateOrConnectWithoutCardsInput = {
    where: MonsterTypeWhereUniqueInput
    create: XOR<MonsterTypeCreateWithoutCardsInput, MonsterTypeUncheckedCreateWithoutCardsInput>
  }

  export type CardUpsertWithoutMonsterTypesInput = {
    update: XOR<CardUpdateWithoutMonsterTypesInput, CardUncheckedUpdateWithoutMonsterTypesInput>
    create: XOR<CardCreateWithoutMonsterTypesInput, CardUncheckedCreateWithoutMonsterTypesInput>
    where?: CardWhereInput
  }

  export type CardUpdateToOneWithWhereWithoutMonsterTypesInput = {
    where?: CardWhereInput
    data: XOR<CardUpdateWithoutMonsterTypesInput, CardUncheckedUpdateWithoutMonsterTypesInput>
  }

  export type CardUpdateWithoutMonsterTypesInput = {
    name?: StringFieldUpdateOperationsInput | string
    attribute?: EnumAttributeFieldUpdateOperationsInput | $Enums.Attribute
    race?: NullableStringFieldUpdateOperationsInput | string | null
    summonType?: NullableEnumSummonTypeFieldUpdateOperationsInput | $Enums.SummonType | null
    level?: NullableIntFieldUpdateOperationsInput | number | null
    atk?: NullableIntFieldUpdateOperationsInput | number | null
    def?: NullableIntFieldUpdateOperationsInput | number | null
    description?: StringFieldUpdateOperationsInput | string
    restriction?: IntFieldUpdateOperationsInput | number
    inventoryItems?: InventoryItemUpdateManyWithoutCardNestedInput
    deckCards?: DeckCardUpdateManyWithoutCardNestedInput
  }

  export type CardUncheckedUpdateWithoutMonsterTypesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    attribute?: EnumAttributeFieldUpdateOperationsInput | $Enums.Attribute
    race?: NullableStringFieldUpdateOperationsInput | string | null
    summonType?: NullableEnumSummonTypeFieldUpdateOperationsInput | $Enums.SummonType | null
    level?: NullableIntFieldUpdateOperationsInput | number | null
    atk?: NullableIntFieldUpdateOperationsInput | number | null
    def?: NullableIntFieldUpdateOperationsInput | number | null
    description?: StringFieldUpdateOperationsInput | string
    restriction?: IntFieldUpdateOperationsInput | number
    inventoryItems?: InventoryItemUncheckedUpdateManyWithoutCardNestedInput
    deckCards?: DeckCardUncheckedUpdateManyWithoutCardNestedInput
  }

  export type MonsterTypeUpsertWithoutCardsInput = {
    update: XOR<MonsterTypeUpdateWithoutCardsInput, MonsterTypeUncheckedUpdateWithoutCardsInput>
    create: XOR<MonsterTypeCreateWithoutCardsInput, MonsterTypeUncheckedCreateWithoutCardsInput>
    where?: MonsterTypeWhereInput
  }

  export type MonsterTypeUpdateToOneWithWhereWithoutCardsInput = {
    where?: MonsterTypeWhereInput
    data: XOR<MonsterTypeUpdateWithoutCardsInput, MonsterTypeUncheckedUpdateWithoutCardsInput>
  }

  export type MonsterTypeUpdateWithoutCardsInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type MonsterTypeUncheckedUpdateWithoutCardsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CardMonsterTypeCreateWithoutMonsterTypeInput = {
    card: CardCreateNestedOneWithoutMonsterTypesInput
  }

  export type CardMonsterTypeUncheckedCreateWithoutMonsterTypeInput = {
    cardId: number
  }

  export type CardMonsterTypeCreateOrConnectWithoutMonsterTypeInput = {
    where: CardMonsterTypeWhereUniqueInput
    create: XOR<CardMonsterTypeCreateWithoutMonsterTypeInput, CardMonsterTypeUncheckedCreateWithoutMonsterTypeInput>
  }

  export type CardMonsterTypeCreateManyMonsterTypeInputEnvelope = {
    data: CardMonsterTypeCreateManyMonsterTypeInput | CardMonsterTypeCreateManyMonsterTypeInput[]
    skipDuplicates?: boolean
  }

  export type CardMonsterTypeUpsertWithWhereUniqueWithoutMonsterTypeInput = {
    where: CardMonsterTypeWhereUniqueInput
    update: XOR<CardMonsterTypeUpdateWithoutMonsterTypeInput, CardMonsterTypeUncheckedUpdateWithoutMonsterTypeInput>
    create: XOR<CardMonsterTypeCreateWithoutMonsterTypeInput, CardMonsterTypeUncheckedCreateWithoutMonsterTypeInput>
  }

  export type CardMonsterTypeUpdateWithWhereUniqueWithoutMonsterTypeInput = {
    where: CardMonsterTypeWhereUniqueInput
    data: XOR<CardMonsterTypeUpdateWithoutMonsterTypeInput, CardMonsterTypeUncheckedUpdateWithoutMonsterTypeInput>
  }

  export type CardMonsterTypeUpdateManyWithWhereWithoutMonsterTypeInput = {
    where: CardMonsterTypeScalarWhereInput
    data: XOR<CardMonsterTypeUpdateManyMutationInput, CardMonsterTypeUncheckedUpdateManyWithoutMonsterTypeInput>
  }

  export type InventoryItemCreateWithoutUserInput = {
    quantity?: number
    card: CardCreateNestedOneWithoutInventoryItemsInput
  }

  export type InventoryItemUncheckedCreateWithoutUserInput = {
    cardId: number
    quantity?: number
  }

  export type InventoryItemCreateOrConnectWithoutUserInput = {
    where: InventoryItemWhereUniqueInput
    create: XOR<InventoryItemCreateWithoutUserInput, InventoryItemUncheckedCreateWithoutUserInput>
  }

  export type InventoryItemCreateManyUserInputEnvelope = {
    data: InventoryItemCreateManyUserInput | InventoryItemCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type DeckCreateWithoutUserInput = {
    name: string
    cards?: DeckCardCreateNestedManyWithoutDeckInput
  }

  export type DeckUncheckedCreateWithoutUserInput = {
    name: string
    cards?: DeckCardUncheckedCreateNestedManyWithoutDeckInput
  }

  export type DeckCreateOrConnectWithoutUserInput = {
    where: DeckWhereUniqueInput
    create: XOR<DeckCreateWithoutUserInput, DeckUncheckedCreateWithoutUserInput>
  }

  export type DeckCreateManyUserInputEnvelope = {
    data: DeckCreateManyUserInput | DeckCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type InventoryItemUpsertWithWhereUniqueWithoutUserInput = {
    where: InventoryItemWhereUniqueInput
    update: XOR<InventoryItemUpdateWithoutUserInput, InventoryItemUncheckedUpdateWithoutUserInput>
    create: XOR<InventoryItemCreateWithoutUserInput, InventoryItemUncheckedCreateWithoutUserInput>
  }

  export type InventoryItemUpdateWithWhereUniqueWithoutUserInput = {
    where: InventoryItemWhereUniqueInput
    data: XOR<InventoryItemUpdateWithoutUserInput, InventoryItemUncheckedUpdateWithoutUserInput>
  }

  export type InventoryItemUpdateManyWithWhereWithoutUserInput = {
    where: InventoryItemScalarWhereInput
    data: XOR<InventoryItemUpdateManyMutationInput, InventoryItemUncheckedUpdateManyWithoutUserInput>
  }

  export type DeckUpsertWithWhereUniqueWithoutUserInput = {
    where: DeckWhereUniqueInput
    update: XOR<DeckUpdateWithoutUserInput, DeckUncheckedUpdateWithoutUserInput>
    create: XOR<DeckCreateWithoutUserInput, DeckUncheckedCreateWithoutUserInput>
  }

  export type DeckUpdateWithWhereUniqueWithoutUserInput = {
    where: DeckWhereUniqueInput
    data: XOR<DeckUpdateWithoutUserInput, DeckUncheckedUpdateWithoutUserInput>
  }

  export type DeckUpdateManyWithWhereWithoutUserInput = {
    where: DeckScalarWhereInput
    data: XOR<DeckUpdateManyMutationInput, DeckUncheckedUpdateManyWithoutUserInput>
  }

  export type DeckScalarWhereInput = {
    AND?: DeckScalarWhereInput | DeckScalarWhereInput[]
    OR?: DeckScalarWhereInput[]
    NOT?: DeckScalarWhereInput | DeckScalarWhereInput[]
    userId?: StringFilter<"Deck"> | string
    name?: StringFilter<"Deck"> | string
  }

  export type UserCreateWithoutInventoryInput = {
    id: string
    email: string
    username: string
    decks?: DeckCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutInventoryInput = {
    id: string
    email: string
    username: string
    decks?: DeckUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutInventoryInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutInventoryInput, UserUncheckedCreateWithoutInventoryInput>
  }

  export type CardCreateWithoutInventoryItemsInput = {
    name: string
    attribute: $Enums.Attribute
    race?: string | null
    summonType?: $Enums.SummonType | null
    level?: number | null
    atk?: number | null
    def?: number | null
    description: string
    restriction: number
    monsterTypes?: CardMonsterTypeCreateNestedManyWithoutCardInput
    deckCards?: DeckCardCreateNestedManyWithoutCardInput
  }

  export type CardUncheckedCreateWithoutInventoryItemsInput = {
    id?: number
    name: string
    attribute: $Enums.Attribute
    race?: string | null
    summonType?: $Enums.SummonType | null
    level?: number | null
    atk?: number | null
    def?: number | null
    description: string
    restriction: number
    monsterTypes?: CardMonsterTypeUncheckedCreateNestedManyWithoutCardInput
    deckCards?: DeckCardUncheckedCreateNestedManyWithoutCardInput
  }

  export type CardCreateOrConnectWithoutInventoryItemsInput = {
    where: CardWhereUniqueInput
    create: XOR<CardCreateWithoutInventoryItemsInput, CardUncheckedCreateWithoutInventoryItemsInput>
  }

  export type UserUpsertWithoutInventoryInput = {
    update: XOR<UserUpdateWithoutInventoryInput, UserUncheckedUpdateWithoutInventoryInput>
    create: XOR<UserCreateWithoutInventoryInput, UserUncheckedCreateWithoutInventoryInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutInventoryInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutInventoryInput, UserUncheckedUpdateWithoutInventoryInput>
  }

  export type UserUpdateWithoutInventoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    decks?: DeckUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutInventoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    decks?: DeckUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CardUpsertWithoutInventoryItemsInput = {
    update: XOR<CardUpdateWithoutInventoryItemsInput, CardUncheckedUpdateWithoutInventoryItemsInput>
    create: XOR<CardCreateWithoutInventoryItemsInput, CardUncheckedCreateWithoutInventoryItemsInput>
    where?: CardWhereInput
  }

  export type CardUpdateToOneWithWhereWithoutInventoryItemsInput = {
    where?: CardWhereInput
    data: XOR<CardUpdateWithoutInventoryItemsInput, CardUncheckedUpdateWithoutInventoryItemsInput>
  }

  export type CardUpdateWithoutInventoryItemsInput = {
    name?: StringFieldUpdateOperationsInput | string
    attribute?: EnumAttributeFieldUpdateOperationsInput | $Enums.Attribute
    race?: NullableStringFieldUpdateOperationsInput | string | null
    summonType?: NullableEnumSummonTypeFieldUpdateOperationsInput | $Enums.SummonType | null
    level?: NullableIntFieldUpdateOperationsInput | number | null
    atk?: NullableIntFieldUpdateOperationsInput | number | null
    def?: NullableIntFieldUpdateOperationsInput | number | null
    description?: StringFieldUpdateOperationsInput | string
    restriction?: IntFieldUpdateOperationsInput | number
    monsterTypes?: CardMonsterTypeUpdateManyWithoutCardNestedInput
    deckCards?: DeckCardUpdateManyWithoutCardNestedInput
  }

  export type CardUncheckedUpdateWithoutInventoryItemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    attribute?: EnumAttributeFieldUpdateOperationsInput | $Enums.Attribute
    race?: NullableStringFieldUpdateOperationsInput | string | null
    summonType?: NullableEnumSummonTypeFieldUpdateOperationsInput | $Enums.SummonType | null
    level?: NullableIntFieldUpdateOperationsInput | number | null
    atk?: NullableIntFieldUpdateOperationsInput | number | null
    def?: NullableIntFieldUpdateOperationsInput | number | null
    description?: StringFieldUpdateOperationsInput | string
    restriction?: IntFieldUpdateOperationsInput | number
    monsterTypes?: CardMonsterTypeUncheckedUpdateManyWithoutCardNestedInput
    deckCards?: DeckCardUncheckedUpdateManyWithoutCardNestedInput
  }

  export type UserCreateWithoutDecksInput = {
    id: string
    email: string
    username: string
    inventory?: InventoryItemCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutDecksInput = {
    id: string
    email: string
    username: string
    inventory?: InventoryItemUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutDecksInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDecksInput, UserUncheckedCreateWithoutDecksInput>
  }

  export type DeckCardCreateWithoutDeckInput = {
    quantity?: number
    zone?: $Enums.DeckZone
    card: CardCreateNestedOneWithoutDeckCardsInput
  }

  export type DeckCardUncheckedCreateWithoutDeckInput = {
    cardId: number
    quantity?: number
    zone?: $Enums.DeckZone
  }

  export type DeckCardCreateOrConnectWithoutDeckInput = {
    where: DeckCardWhereUniqueInput
    create: XOR<DeckCardCreateWithoutDeckInput, DeckCardUncheckedCreateWithoutDeckInput>
  }

  export type DeckCardCreateManyDeckInputEnvelope = {
    data: DeckCardCreateManyDeckInput | DeckCardCreateManyDeckInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutDecksInput = {
    update: XOR<UserUpdateWithoutDecksInput, UserUncheckedUpdateWithoutDecksInput>
    create: XOR<UserCreateWithoutDecksInput, UserUncheckedCreateWithoutDecksInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDecksInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDecksInput, UserUncheckedUpdateWithoutDecksInput>
  }

  export type UserUpdateWithoutDecksInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    inventory?: InventoryItemUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutDecksInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    inventory?: InventoryItemUncheckedUpdateManyWithoutUserNestedInput
  }

  export type DeckCardUpsertWithWhereUniqueWithoutDeckInput = {
    where: DeckCardWhereUniqueInput
    update: XOR<DeckCardUpdateWithoutDeckInput, DeckCardUncheckedUpdateWithoutDeckInput>
    create: XOR<DeckCardCreateWithoutDeckInput, DeckCardUncheckedCreateWithoutDeckInput>
  }

  export type DeckCardUpdateWithWhereUniqueWithoutDeckInput = {
    where: DeckCardWhereUniqueInput
    data: XOR<DeckCardUpdateWithoutDeckInput, DeckCardUncheckedUpdateWithoutDeckInput>
  }

  export type DeckCardUpdateManyWithWhereWithoutDeckInput = {
    where: DeckCardScalarWhereInput
    data: XOR<DeckCardUpdateManyMutationInput, DeckCardUncheckedUpdateManyWithoutDeckInput>
  }

  export type DeckCreateWithoutCardsInput = {
    name: string
    user: UserCreateNestedOneWithoutDecksInput
  }

  export type DeckUncheckedCreateWithoutCardsInput = {
    userId: string
    name: string
  }

  export type DeckCreateOrConnectWithoutCardsInput = {
    where: DeckWhereUniqueInput
    create: XOR<DeckCreateWithoutCardsInput, DeckUncheckedCreateWithoutCardsInput>
  }

  export type CardCreateWithoutDeckCardsInput = {
    name: string
    attribute: $Enums.Attribute
    race?: string | null
    summonType?: $Enums.SummonType | null
    level?: number | null
    atk?: number | null
    def?: number | null
    description: string
    restriction: number
    monsterTypes?: CardMonsterTypeCreateNestedManyWithoutCardInput
    inventoryItems?: InventoryItemCreateNestedManyWithoutCardInput
  }

  export type CardUncheckedCreateWithoutDeckCardsInput = {
    id?: number
    name: string
    attribute: $Enums.Attribute
    race?: string | null
    summonType?: $Enums.SummonType | null
    level?: number | null
    atk?: number | null
    def?: number | null
    description: string
    restriction: number
    monsterTypes?: CardMonsterTypeUncheckedCreateNestedManyWithoutCardInput
    inventoryItems?: InventoryItemUncheckedCreateNestedManyWithoutCardInput
  }

  export type CardCreateOrConnectWithoutDeckCardsInput = {
    where: CardWhereUniqueInput
    create: XOR<CardCreateWithoutDeckCardsInput, CardUncheckedCreateWithoutDeckCardsInput>
  }

  export type DeckUpsertWithoutCardsInput = {
    update: XOR<DeckUpdateWithoutCardsInput, DeckUncheckedUpdateWithoutCardsInput>
    create: XOR<DeckCreateWithoutCardsInput, DeckUncheckedCreateWithoutCardsInput>
    where?: DeckWhereInput
  }

  export type DeckUpdateToOneWithWhereWithoutCardsInput = {
    where?: DeckWhereInput
    data: XOR<DeckUpdateWithoutCardsInput, DeckUncheckedUpdateWithoutCardsInput>
  }

  export type DeckUpdateWithoutCardsInput = {
    name?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutDecksNestedInput
  }

  export type DeckUncheckedUpdateWithoutCardsInput = {
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CardUpsertWithoutDeckCardsInput = {
    update: XOR<CardUpdateWithoutDeckCardsInput, CardUncheckedUpdateWithoutDeckCardsInput>
    create: XOR<CardCreateWithoutDeckCardsInput, CardUncheckedCreateWithoutDeckCardsInput>
    where?: CardWhereInput
  }

  export type CardUpdateToOneWithWhereWithoutDeckCardsInput = {
    where?: CardWhereInput
    data: XOR<CardUpdateWithoutDeckCardsInput, CardUncheckedUpdateWithoutDeckCardsInput>
  }

  export type CardUpdateWithoutDeckCardsInput = {
    name?: StringFieldUpdateOperationsInput | string
    attribute?: EnumAttributeFieldUpdateOperationsInput | $Enums.Attribute
    race?: NullableStringFieldUpdateOperationsInput | string | null
    summonType?: NullableEnumSummonTypeFieldUpdateOperationsInput | $Enums.SummonType | null
    level?: NullableIntFieldUpdateOperationsInput | number | null
    atk?: NullableIntFieldUpdateOperationsInput | number | null
    def?: NullableIntFieldUpdateOperationsInput | number | null
    description?: StringFieldUpdateOperationsInput | string
    restriction?: IntFieldUpdateOperationsInput | number
    monsterTypes?: CardMonsterTypeUpdateManyWithoutCardNestedInput
    inventoryItems?: InventoryItemUpdateManyWithoutCardNestedInput
  }

  export type CardUncheckedUpdateWithoutDeckCardsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    attribute?: EnumAttributeFieldUpdateOperationsInput | $Enums.Attribute
    race?: NullableStringFieldUpdateOperationsInput | string | null
    summonType?: NullableEnumSummonTypeFieldUpdateOperationsInput | $Enums.SummonType | null
    level?: NullableIntFieldUpdateOperationsInput | number | null
    atk?: NullableIntFieldUpdateOperationsInput | number | null
    def?: NullableIntFieldUpdateOperationsInput | number | null
    description?: StringFieldUpdateOperationsInput | string
    restriction?: IntFieldUpdateOperationsInput | number
    monsterTypes?: CardMonsterTypeUncheckedUpdateManyWithoutCardNestedInput
    inventoryItems?: InventoryItemUncheckedUpdateManyWithoutCardNestedInput
  }

  export type CardMonsterTypeCreateManyCardInput = {
    monsterTypeId: number
  }

  export type InventoryItemCreateManyCardInput = {
    userId: string
    quantity?: number
  }

  export type DeckCardCreateManyCardInput = {
    deckUserId: string
    deckName: string
    quantity?: number
    zone?: $Enums.DeckZone
  }

  export type CardMonsterTypeUpdateWithoutCardInput = {
    monsterType?: MonsterTypeUpdateOneRequiredWithoutCardsNestedInput
  }

  export type CardMonsterTypeUncheckedUpdateWithoutCardInput = {
    monsterTypeId?: IntFieldUpdateOperationsInput | number
  }

  export type CardMonsterTypeUncheckedUpdateManyWithoutCardInput = {
    monsterTypeId?: IntFieldUpdateOperationsInput | number
  }

  export type InventoryItemUpdateWithoutCardInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutInventoryNestedInput
  }

  export type InventoryItemUncheckedUpdateWithoutCardInput = {
    userId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type InventoryItemUncheckedUpdateManyWithoutCardInput = {
    userId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type DeckCardUpdateWithoutCardInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    zone?: EnumDeckZoneFieldUpdateOperationsInput | $Enums.DeckZone
    deck?: DeckUpdateOneRequiredWithoutCardsNestedInput
  }

  export type DeckCardUncheckedUpdateWithoutCardInput = {
    deckUserId?: StringFieldUpdateOperationsInput | string
    deckName?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    zone?: EnumDeckZoneFieldUpdateOperationsInput | $Enums.DeckZone
  }

  export type DeckCardUncheckedUpdateManyWithoutCardInput = {
    deckUserId?: StringFieldUpdateOperationsInput | string
    deckName?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    zone?: EnumDeckZoneFieldUpdateOperationsInput | $Enums.DeckZone
  }

  export type CardMonsterTypeCreateManyMonsterTypeInput = {
    cardId: number
  }

  export type CardMonsterTypeUpdateWithoutMonsterTypeInput = {
    card?: CardUpdateOneRequiredWithoutMonsterTypesNestedInput
  }

  export type CardMonsterTypeUncheckedUpdateWithoutMonsterTypeInput = {
    cardId?: IntFieldUpdateOperationsInput | number
  }

  export type CardMonsterTypeUncheckedUpdateManyWithoutMonsterTypeInput = {
    cardId?: IntFieldUpdateOperationsInput | number
  }

  export type InventoryItemCreateManyUserInput = {
    cardId: number
    quantity?: number
  }

  export type DeckCreateManyUserInput = {
    name: string
  }

  export type InventoryItemUpdateWithoutUserInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    card?: CardUpdateOneRequiredWithoutInventoryItemsNestedInput
  }

  export type InventoryItemUncheckedUpdateWithoutUserInput = {
    cardId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type InventoryItemUncheckedUpdateManyWithoutUserInput = {
    cardId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type DeckUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    cards?: DeckCardUpdateManyWithoutDeckNestedInput
  }

  export type DeckUncheckedUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    cards?: DeckCardUncheckedUpdateManyWithoutDeckNestedInput
  }

  export type DeckUncheckedUpdateManyWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type DeckCardCreateManyDeckInput = {
    cardId: number
    quantity?: number
    zone?: $Enums.DeckZone
  }

  export type DeckCardUpdateWithoutDeckInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    zone?: EnumDeckZoneFieldUpdateOperationsInput | $Enums.DeckZone
    card?: CardUpdateOneRequiredWithoutDeckCardsNestedInput
  }

  export type DeckCardUncheckedUpdateWithoutDeckInput = {
    cardId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    zone?: EnumDeckZoneFieldUpdateOperationsInput | $Enums.DeckZone
  }

  export type DeckCardUncheckedUpdateManyWithoutDeckInput = {
    cardId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    zone?: EnumDeckZoneFieldUpdateOperationsInput | $Enums.DeckZone
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}