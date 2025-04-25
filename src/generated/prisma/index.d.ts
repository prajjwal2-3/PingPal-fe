
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model EndPoints
 * 
 */
export type EndPoints = $Result.DefaultSelection<Prisma.$EndPointsPayload>
/**
 * Model PingLogs
 * 
 */
export type PingLogs = $Result.DefaultSelection<Prisma.$PingLogsPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.endPoints`: Exposes CRUD operations for the **EndPoints** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EndPoints
    * const endPoints = await prisma.endPoints.findMany()
    * ```
    */
  get endPoints(): Prisma.EndPointsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pingLogs`: Exposes CRUD operations for the **PingLogs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PingLogs
    * const pingLogs = await prisma.pingLogs.findMany()
    * ```
    */
  get pingLogs(): Prisma.PingLogsDelegate<ExtArgs, ClientOptions>;
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
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    User: 'User',
    EndPoints: 'EndPoints',
    PingLogs: 'PingLogs'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "endPoints" | "pingLogs"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
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
      EndPoints: {
        payload: Prisma.$EndPointsPayload<ExtArgs>
        fields: Prisma.EndPointsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EndPointsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EndPointsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EndPointsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EndPointsPayload>
          }
          findFirst: {
            args: Prisma.EndPointsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EndPointsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EndPointsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EndPointsPayload>
          }
          findMany: {
            args: Prisma.EndPointsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EndPointsPayload>[]
          }
          create: {
            args: Prisma.EndPointsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EndPointsPayload>
          }
          createMany: {
            args: Prisma.EndPointsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EndPointsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EndPointsPayload>[]
          }
          delete: {
            args: Prisma.EndPointsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EndPointsPayload>
          }
          update: {
            args: Prisma.EndPointsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EndPointsPayload>
          }
          deleteMany: {
            args: Prisma.EndPointsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EndPointsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EndPointsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EndPointsPayload>[]
          }
          upsert: {
            args: Prisma.EndPointsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EndPointsPayload>
          }
          aggregate: {
            args: Prisma.EndPointsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEndPoints>
          }
          groupBy: {
            args: Prisma.EndPointsGroupByArgs<ExtArgs>
            result: $Utils.Optional<EndPointsGroupByOutputType>[]
          }
          count: {
            args: Prisma.EndPointsCountArgs<ExtArgs>
            result: $Utils.Optional<EndPointsCountAggregateOutputType> | number
          }
        }
      }
      PingLogs: {
        payload: Prisma.$PingLogsPayload<ExtArgs>
        fields: Prisma.PingLogsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PingLogsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PingLogsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PingLogsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PingLogsPayload>
          }
          findFirst: {
            args: Prisma.PingLogsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PingLogsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PingLogsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PingLogsPayload>
          }
          findMany: {
            args: Prisma.PingLogsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PingLogsPayload>[]
          }
          create: {
            args: Prisma.PingLogsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PingLogsPayload>
          }
          createMany: {
            args: Prisma.PingLogsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PingLogsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PingLogsPayload>[]
          }
          delete: {
            args: Prisma.PingLogsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PingLogsPayload>
          }
          update: {
            args: Prisma.PingLogsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PingLogsPayload>
          }
          deleteMany: {
            args: Prisma.PingLogsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PingLogsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PingLogsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PingLogsPayload>[]
          }
          upsert: {
            args: Prisma.PingLogsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PingLogsPayload>
          }
          aggregate: {
            args: Prisma.PingLogsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePingLogs>
          }
          groupBy: {
            args: Prisma.PingLogsGroupByArgs<ExtArgs>
            result: $Utils.Optional<PingLogsGroupByOutputType>[]
          }
          count: {
            args: Prisma.PingLogsCountArgs<ExtArgs>
            result: $Utils.Optional<PingLogsCountAggregateOutputType> | number
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
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
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
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    endPoints?: EndPointsOmit
    pingLogs?: PingLogsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    endpoints: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    endpoints?: boolean | UserCountOutputTypeCountEndpointsArgs
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
  export type UserCountOutputTypeCountEndpointsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EndPointsWhereInput
  }


  /**
   * Count Type EndPointsCountOutputType
   */

  export type EndPointsCountOutputType = {
    pingLogs: number
  }

  export type EndPointsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pingLogs?: boolean | EndPointsCountOutputTypeCountPingLogsArgs
  }

  // Custom InputTypes
  /**
   * EndPointsCountOutputType without action
   */
  export type EndPointsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EndPointsCountOutputType
     */
    select?: EndPointsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EndPointsCountOutputType without action
   */
  export type EndPointsCountOutputTypeCountPingLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PingLogsWhereInput
  }


  /**
   * Models
   */

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
    username: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    username: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    email: number
    password: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
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
    username: string
    email: string
    password: string
    createdAt: Date
    updatedAt: Date
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
    username?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    endpoints?: boolean | User$endpointsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "email" | "password" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    endpoints?: boolean | User$endpointsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      endpoints: Prisma.$EndPointsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string
      email: string
      password: string
      createdAt: Date
      updatedAt: Date
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
    endpoints<T extends User$endpointsArgs<ExtArgs> = {}>(args?: Subset<T, User$endpointsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EndPointsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly username: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
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
   * User.endpoints
   */
  export type User$endpointsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EndPoints
     */
    select?: EndPointsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EndPoints
     */
    omit?: EndPointsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EndPointsInclude<ExtArgs> | null
    where?: EndPointsWhereInput
    orderBy?: EndPointsOrderByWithRelationInput | EndPointsOrderByWithRelationInput[]
    cursor?: EndPointsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EndPointsScalarFieldEnum | EndPointsScalarFieldEnum[]
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
   * Model EndPoints
   */

  export type AggregateEndPoints = {
    _count: EndPointsCountAggregateOutputType | null
    _min: EndPointsMinAggregateOutputType | null
    _max: EndPointsMaxAggregateOutputType | null
  }

  export type EndPointsMinAggregateOutputType = {
    id: string | null
    name: string | null
    url: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EndPointsMaxAggregateOutputType = {
    id: string | null
    name: string | null
    url: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EndPointsCountAggregateOutputType = {
    id: number
    name: number
    url: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EndPointsMinAggregateInputType = {
    id?: true
    name?: true
    url?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EndPointsMaxAggregateInputType = {
    id?: true
    name?: true
    url?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EndPointsCountAggregateInputType = {
    id?: true
    name?: true
    url?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EndPointsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EndPoints to aggregate.
     */
    where?: EndPointsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EndPoints to fetch.
     */
    orderBy?: EndPointsOrderByWithRelationInput | EndPointsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EndPointsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EndPoints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EndPoints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EndPoints
    **/
    _count?: true | EndPointsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EndPointsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EndPointsMaxAggregateInputType
  }

  export type GetEndPointsAggregateType<T extends EndPointsAggregateArgs> = {
        [P in keyof T & keyof AggregateEndPoints]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEndPoints[P]>
      : GetScalarType<T[P], AggregateEndPoints[P]>
  }




  export type EndPointsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EndPointsWhereInput
    orderBy?: EndPointsOrderByWithAggregationInput | EndPointsOrderByWithAggregationInput[]
    by: EndPointsScalarFieldEnum[] | EndPointsScalarFieldEnum
    having?: EndPointsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EndPointsCountAggregateInputType | true
    _min?: EndPointsMinAggregateInputType
    _max?: EndPointsMaxAggregateInputType
  }

  export type EndPointsGroupByOutputType = {
    id: string
    name: string
    url: string
    userId: string
    createdAt: Date
    updatedAt: Date
    _count: EndPointsCountAggregateOutputType | null
    _min: EndPointsMinAggregateOutputType | null
    _max: EndPointsMaxAggregateOutputType | null
  }

  type GetEndPointsGroupByPayload<T extends EndPointsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EndPointsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EndPointsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EndPointsGroupByOutputType[P]>
            : GetScalarType<T[P], EndPointsGroupByOutputType[P]>
        }
      >
    >


  export type EndPointsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    url?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    pingLogs?: boolean | EndPoints$pingLogsArgs<ExtArgs>
    _count?: boolean | EndPointsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["endPoints"]>

  export type EndPointsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    url?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["endPoints"]>

  export type EndPointsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    url?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["endPoints"]>

  export type EndPointsSelectScalar = {
    id?: boolean
    name?: boolean
    url?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EndPointsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "url" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["endPoints"]>
  export type EndPointsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    pingLogs?: boolean | EndPoints$pingLogsArgs<ExtArgs>
    _count?: boolean | EndPointsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EndPointsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type EndPointsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $EndPointsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EndPoints"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      pingLogs: Prisma.$PingLogsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      url: string
      userId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["endPoints"]>
    composites: {}
  }

  type EndPointsGetPayload<S extends boolean | null | undefined | EndPointsDefaultArgs> = $Result.GetResult<Prisma.$EndPointsPayload, S>

  type EndPointsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EndPointsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EndPointsCountAggregateInputType | true
    }

  export interface EndPointsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EndPoints'], meta: { name: 'EndPoints' } }
    /**
     * Find zero or one EndPoints that matches the filter.
     * @param {EndPointsFindUniqueArgs} args - Arguments to find a EndPoints
     * @example
     * // Get one EndPoints
     * const endPoints = await prisma.endPoints.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EndPointsFindUniqueArgs>(args: SelectSubset<T, EndPointsFindUniqueArgs<ExtArgs>>): Prisma__EndPointsClient<$Result.GetResult<Prisma.$EndPointsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EndPoints that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EndPointsFindUniqueOrThrowArgs} args - Arguments to find a EndPoints
     * @example
     * // Get one EndPoints
     * const endPoints = await prisma.endPoints.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EndPointsFindUniqueOrThrowArgs>(args: SelectSubset<T, EndPointsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EndPointsClient<$Result.GetResult<Prisma.$EndPointsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EndPoints that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EndPointsFindFirstArgs} args - Arguments to find a EndPoints
     * @example
     * // Get one EndPoints
     * const endPoints = await prisma.endPoints.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EndPointsFindFirstArgs>(args?: SelectSubset<T, EndPointsFindFirstArgs<ExtArgs>>): Prisma__EndPointsClient<$Result.GetResult<Prisma.$EndPointsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EndPoints that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EndPointsFindFirstOrThrowArgs} args - Arguments to find a EndPoints
     * @example
     * // Get one EndPoints
     * const endPoints = await prisma.endPoints.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EndPointsFindFirstOrThrowArgs>(args?: SelectSubset<T, EndPointsFindFirstOrThrowArgs<ExtArgs>>): Prisma__EndPointsClient<$Result.GetResult<Prisma.$EndPointsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EndPoints that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EndPointsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EndPoints
     * const endPoints = await prisma.endPoints.findMany()
     * 
     * // Get first 10 EndPoints
     * const endPoints = await prisma.endPoints.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const endPointsWithIdOnly = await prisma.endPoints.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EndPointsFindManyArgs>(args?: SelectSubset<T, EndPointsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EndPointsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EndPoints.
     * @param {EndPointsCreateArgs} args - Arguments to create a EndPoints.
     * @example
     * // Create one EndPoints
     * const EndPoints = await prisma.endPoints.create({
     *   data: {
     *     // ... data to create a EndPoints
     *   }
     * })
     * 
     */
    create<T extends EndPointsCreateArgs>(args: SelectSubset<T, EndPointsCreateArgs<ExtArgs>>): Prisma__EndPointsClient<$Result.GetResult<Prisma.$EndPointsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EndPoints.
     * @param {EndPointsCreateManyArgs} args - Arguments to create many EndPoints.
     * @example
     * // Create many EndPoints
     * const endPoints = await prisma.endPoints.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EndPointsCreateManyArgs>(args?: SelectSubset<T, EndPointsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EndPoints and returns the data saved in the database.
     * @param {EndPointsCreateManyAndReturnArgs} args - Arguments to create many EndPoints.
     * @example
     * // Create many EndPoints
     * const endPoints = await prisma.endPoints.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EndPoints and only return the `id`
     * const endPointsWithIdOnly = await prisma.endPoints.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EndPointsCreateManyAndReturnArgs>(args?: SelectSubset<T, EndPointsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EndPointsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EndPoints.
     * @param {EndPointsDeleteArgs} args - Arguments to delete one EndPoints.
     * @example
     * // Delete one EndPoints
     * const EndPoints = await prisma.endPoints.delete({
     *   where: {
     *     // ... filter to delete one EndPoints
     *   }
     * })
     * 
     */
    delete<T extends EndPointsDeleteArgs>(args: SelectSubset<T, EndPointsDeleteArgs<ExtArgs>>): Prisma__EndPointsClient<$Result.GetResult<Prisma.$EndPointsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EndPoints.
     * @param {EndPointsUpdateArgs} args - Arguments to update one EndPoints.
     * @example
     * // Update one EndPoints
     * const endPoints = await prisma.endPoints.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EndPointsUpdateArgs>(args: SelectSubset<T, EndPointsUpdateArgs<ExtArgs>>): Prisma__EndPointsClient<$Result.GetResult<Prisma.$EndPointsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EndPoints.
     * @param {EndPointsDeleteManyArgs} args - Arguments to filter EndPoints to delete.
     * @example
     * // Delete a few EndPoints
     * const { count } = await prisma.endPoints.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EndPointsDeleteManyArgs>(args?: SelectSubset<T, EndPointsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EndPoints.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EndPointsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EndPoints
     * const endPoints = await prisma.endPoints.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EndPointsUpdateManyArgs>(args: SelectSubset<T, EndPointsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EndPoints and returns the data updated in the database.
     * @param {EndPointsUpdateManyAndReturnArgs} args - Arguments to update many EndPoints.
     * @example
     * // Update many EndPoints
     * const endPoints = await prisma.endPoints.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EndPoints and only return the `id`
     * const endPointsWithIdOnly = await prisma.endPoints.updateManyAndReturn({
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
    updateManyAndReturn<T extends EndPointsUpdateManyAndReturnArgs>(args: SelectSubset<T, EndPointsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EndPointsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EndPoints.
     * @param {EndPointsUpsertArgs} args - Arguments to update or create a EndPoints.
     * @example
     * // Update or create a EndPoints
     * const endPoints = await prisma.endPoints.upsert({
     *   create: {
     *     // ... data to create a EndPoints
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EndPoints we want to update
     *   }
     * })
     */
    upsert<T extends EndPointsUpsertArgs>(args: SelectSubset<T, EndPointsUpsertArgs<ExtArgs>>): Prisma__EndPointsClient<$Result.GetResult<Prisma.$EndPointsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EndPoints.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EndPointsCountArgs} args - Arguments to filter EndPoints to count.
     * @example
     * // Count the number of EndPoints
     * const count = await prisma.endPoints.count({
     *   where: {
     *     // ... the filter for the EndPoints we want to count
     *   }
     * })
    **/
    count<T extends EndPointsCountArgs>(
      args?: Subset<T, EndPointsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EndPointsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EndPoints.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EndPointsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EndPointsAggregateArgs>(args: Subset<T, EndPointsAggregateArgs>): Prisma.PrismaPromise<GetEndPointsAggregateType<T>>

    /**
     * Group by EndPoints.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EndPointsGroupByArgs} args - Group by arguments.
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
      T extends EndPointsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EndPointsGroupByArgs['orderBy'] }
        : { orderBy?: EndPointsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EndPointsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEndPointsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EndPoints model
   */
  readonly fields: EndPointsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EndPoints.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EndPointsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    pingLogs<T extends EndPoints$pingLogsArgs<ExtArgs> = {}>(args?: Subset<T, EndPoints$pingLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PingLogsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the EndPoints model
   */
  interface EndPointsFieldRefs {
    readonly id: FieldRef<"EndPoints", 'String'>
    readonly name: FieldRef<"EndPoints", 'String'>
    readonly url: FieldRef<"EndPoints", 'String'>
    readonly userId: FieldRef<"EndPoints", 'String'>
    readonly createdAt: FieldRef<"EndPoints", 'DateTime'>
    readonly updatedAt: FieldRef<"EndPoints", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * EndPoints findUnique
   */
  export type EndPointsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EndPoints
     */
    select?: EndPointsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EndPoints
     */
    omit?: EndPointsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EndPointsInclude<ExtArgs> | null
    /**
     * Filter, which EndPoints to fetch.
     */
    where: EndPointsWhereUniqueInput
  }

  /**
   * EndPoints findUniqueOrThrow
   */
  export type EndPointsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EndPoints
     */
    select?: EndPointsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EndPoints
     */
    omit?: EndPointsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EndPointsInclude<ExtArgs> | null
    /**
     * Filter, which EndPoints to fetch.
     */
    where: EndPointsWhereUniqueInput
  }

  /**
   * EndPoints findFirst
   */
  export type EndPointsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EndPoints
     */
    select?: EndPointsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EndPoints
     */
    omit?: EndPointsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EndPointsInclude<ExtArgs> | null
    /**
     * Filter, which EndPoints to fetch.
     */
    where?: EndPointsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EndPoints to fetch.
     */
    orderBy?: EndPointsOrderByWithRelationInput | EndPointsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EndPoints.
     */
    cursor?: EndPointsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EndPoints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EndPoints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EndPoints.
     */
    distinct?: EndPointsScalarFieldEnum | EndPointsScalarFieldEnum[]
  }

  /**
   * EndPoints findFirstOrThrow
   */
  export type EndPointsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EndPoints
     */
    select?: EndPointsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EndPoints
     */
    omit?: EndPointsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EndPointsInclude<ExtArgs> | null
    /**
     * Filter, which EndPoints to fetch.
     */
    where?: EndPointsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EndPoints to fetch.
     */
    orderBy?: EndPointsOrderByWithRelationInput | EndPointsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EndPoints.
     */
    cursor?: EndPointsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EndPoints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EndPoints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EndPoints.
     */
    distinct?: EndPointsScalarFieldEnum | EndPointsScalarFieldEnum[]
  }

  /**
   * EndPoints findMany
   */
  export type EndPointsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EndPoints
     */
    select?: EndPointsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EndPoints
     */
    omit?: EndPointsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EndPointsInclude<ExtArgs> | null
    /**
     * Filter, which EndPoints to fetch.
     */
    where?: EndPointsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EndPoints to fetch.
     */
    orderBy?: EndPointsOrderByWithRelationInput | EndPointsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EndPoints.
     */
    cursor?: EndPointsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EndPoints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EndPoints.
     */
    skip?: number
    distinct?: EndPointsScalarFieldEnum | EndPointsScalarFieldEnum[]
  }

  /**
   * EndPoints create
   */
  export type EndPointsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EndPoints
     */
    select?: EndPointsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EndPoints
     */
    omit?: EndPointsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EndPointsInclude<ExtArgs> | null
    /**
     * The data needed to create a EndPoints.
     */
    data: XOR<EndPointsCreateInput, EndPointsUncheckedCreateInput>
  }

  /**
   * EndPoints createMany
   */
  export type EndPointsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EndPoints.
     */
    data: EndPointsCreateManyInput | EndPointsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EndPoints createManyAndReturn
   */
  export type EndPointsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EndPoints
     */
    select?: EndPointsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EndPoints
     */
    omit?: EndPointsOmit<ExtArgs> | null
    /**
     * The data used to create many EndPoints.
     */
    data: EndPointsCreateManyInput | EndPointsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EndPointsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * EndPoints update
   */
  export type EndPointsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EndPoints
     */
    select?: EndPointsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EndPoints
     */
    omit?: EndPointsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EndPointsInclude<ExtArgs> | null
    /**
     * The data needed to update a EndPoints.
     */
    data: XOR<EndPointsUpdateInput, EndPointsUncheckedUpdateInput>
    /**
     * Choose, which EndPoints to update.
     */
    where: EndPointsWhereUniqueInput
  }

  /**
   * EndPoints updateMany
   */
  export type EndPointsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EndPoints.
     */
    data: XOR<EndPointsUpdateManyMutationInput, EndPointsUncheckedUpdateManyInput>
    /**
     * Filter which EndPoints to update
     */
    where?: EndPointsWhereInput
    /**
     * Limit how many EndPoints to update.
     */
    limit?: number
  }

  /**
   * EndPoints updateManyAndReturn
   */
  export type EndPointsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EndPoints
     */
    select?: EndPointsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EndPoints
     */
    omit?: EndPointsOmit<ExtArgs> | null
    /**
     * The data used to update EndPoints.
     */
    data: XOR<EndPointsUpdateManyMutationInput, EndPointsUncheckedUpdateManyInput>
    /**
     * Filter which EndPoints to update
     */
    where?: EndPointsWhereInput
    /**
     * Limit how many EndPoints to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EndPointsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * EndPoints upsert
   */
  export type EndPointsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EndPoints
     */
    select?: EndPointsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EndPoints
     */
    omit?: EndPointsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EndPointsInclude<ExtArgs> | null
    /**
     * The filter to search for the EndPoints to update in case it exists.
     */
    where: EndPointsWhereUniqueInput
    /**
     * In case the EndPoints found by the `where` argument doesn't exist, create a new EndPoints with this data.
     */
    create: XOR<EndPointsCreateInput, EndPointsUncheckedCreateInput>
    /**
     * In case the EndPoints was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EndPointsUpdateInput, EndPointsUncheckedUpdateInput>
  }

  /**
   * EndPoints delete
   */
  export type EndPointsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EndPoints
     */
    select?: EndPointsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EndPoints
     */
    omit?: EndPointsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EndPointsInclude<ExtArgs> | null
    /**
     * Filter which EndPoints to delete.
     */
    where: EndPointsWhereUniqueInput
  }

  /**
   * EndPoints deleteMany
   */
  export type EndPointsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EndPoints to delete
     */
    where?: EndPointsWhereInput
    /**
     * Limit how many EndPoints to delete.
     */
    limit?: number
  }

  /**
   * EndPoints.pingLogs
   */
  export type EndPoints$pingLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PingLogs
     */
    select?: PingLogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PingLogs
     */
    omit?: PingLogsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PingLogsInclude<ExtArgs> | null
    where?: PingLogsWhereInput
    orderBy?: PingLogsOrderByWithRelationInput | PingLogsOrderByWithRelationInput[]
    cursor?: PingLogsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PingLogsScalarFieldEnum | PingLogsScalarFieldEnum[]
  }

  /**
   * EndPoints without action
   */
  export type EndPointsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EndPoints
     */
    select?: EndPointsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EndPoints
     */
    omit?: EndPointsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EndPointsInclude<ExtArgs> | null
  }


  /**
   * Model PingLogs
   */

  export type AggregatePingLogs = {
    _count: PingLogsCountAggregateOutputType | null
    _min: PingLogsMinAggregateOutputType | null
    _max: PingLogsMaxAggregateOutputType | null
  }

  export type PingLogsMinAggregateOutputType = {
    id: string | null
    endpointId: string | null
    response: string | null
    status: boolean | null
    createdAt: Date | null
  }

  export type PingLogsMaxAggregateOutputType = {
    id: string | null
    endpointId: string | null
    response: string | null
    status: boolean | null
    createdAt: Date | null
  }

  export type PingLogsCountAggregateOutputType = {
    id: number
    endpointId: number
    response: number
    status: number
    createdAt: number
    _all: number
  }


  export type PingLogsMinAggregateInputType = {
    id?: true
    endpointId?: true
    response?: true
    status?: true
    createdAt?: true
  }

  export type PingLogsMaxAggregateInputType = {
    id?: true
    endpointId?: true
    response?: true
    status?: true
    createdAt?: true
  }

  export type PingLogsCountAggregateInputType = {
    id?: true
    endpointId?: true
    response?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type PingLogsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PingLogs to aggregate.
     */
    where?: PingLogsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PingLogs to fetch.
     */
    orderBy?: PingLogsOrderByWithRelationInput | PingLogsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PingLogsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PingLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PingLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PingLogs
    **/
    _count?: true | PingLogsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PingLogsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PingLogsMaxAggregateInputType
  }

  export type GetPingLogsAggregateType<T extends PingLogsAggregateArgs> = {
        [P in keyof T & keyof AggregatePingLogs]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePingLogs[P]>
      : GetScalarType<T[P], AggregatePingLogs[P]>
  }




  export type PingLogsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PingLogsWhereInput
    orderBy?: PingLogsOrderByWithAggregationInput | PingLogsOrderByWithAggregationInput[]
    by: PingLogsScalarFieldEnum[] | PingLogsScalarFieldEnum
    having?: PingLogsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PingLogsCountAggregateInputType | true
    _min?: PingLogsMinAggregateInputType
    _max?: PingLogsMaxAggregateInputType
  }

  export type PingLogsGroupByOutputType = {
    id: string
    endpointId: string
    response: string
    status: boolean
    createdAt: Date
    _count: PingLogsCountAggregateOutputType | null
    _min: PingLogsMinAggregateOutputType | null
    _max: PingLogsMaxAggregateOutputType | null
  }

  type GetPingLogsGroupByPayload<T extends PingLogsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PingLogsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PingLogsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PingLogsGroupByOutputType[P]>
            : GetScalarType<T[P], PingLogsGroupByOutputType[P]>
        }
      >
    >


  export type PingLogsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    endpointId?: boolean
    response?: boolean
    status?: boolean
    createdAt?: boolean
    endpoint?: boolean | EndPointsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pingLogs"]>

  export type PingLogsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    endpointId?: boolean
    response?: boolean
    status?: boolean
    createdAt?: boolean
    endpoint?: boolean | EndPointsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pingLogs"]>

  export type PingLogsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    endpointId?: boolean
    response?: boolean
    status?: boolean
    createdAt?: boolean
    endpoint?: boolean | EndPointsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pingLogs"]>

  export type PingLogsSelectScalar = {
    id?: boolean
    endpointId?: boolean
    response?: boolean
    status?: boolean
    createdAt?: boolean
  }

  export type PingLogsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "endpointId" | "response" | "status" | "createdAt", ExtArgs["result"]["pingLogs"]>
  export type PingLogsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    endpoint?: boolean | EndPointsDefaultArgs<ExtArgs>
  }
  export type PingLogsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    endpoint?: boolean | EndPointsDefaultArgs<ExtArgs>
  }
  export type PingLogsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    endpoint?: boolean | EndPointsDefaultArgs<ExtArgs>
  }

  export type $PingLogsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PingLogs"
    objects: {
      endpoint: Prisma.$EndPointsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      endpointId: string
      response: string
      status: boolean
      createdAt: Date
    }, ExtArgs["result"]["pingLogs"]>
    composites: {}
  }

  type PingLogsGetPayload<S extends boolean | null | undefined | PingLogsDefaultArgs> = $Result.GetResult<Prisma.$PingLogsPayload, S>

  type PingLogsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PingLogsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PingLogsCountAggregateInputType | true
    }

  export interface PingLogsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PingLogs'], meta: { name: 'PingLogs' } }
    /**
     * Find zero or one PingLogs that matches the filter.
     * @param {PingLogsFindUniqueArgs} args - Arguments to find a PingLogs
     * @example
     * // Get one PingLogs
     * const pingLogs = await prisma.pingLogs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PingLogsFindUniqueArgs>(args: SelectSubset<T, PingLogsFindUniqueArgs<ExtArgs>>): Prisma__PingLogsClient<$Result.GetResult<Prisma.$PingLogsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PingLogs that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PingLogsFindUniqueOrThrowArgs} args - Arguments to find a PingLogs
     * @example
     * // Get one PingLogs
     * const pingLogs = await prisma.pingLogs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PingLogsFindUniqueOrThrowArgs>(args: SelectSubset<T, PingLogsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PingLogsClient<$Result.GetResult<Prisma.$PingLogsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PingLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PingLogsFindFirstArgs} args - Arguments to find a PingLogs
     * @example
     * // Get one PingLogs
     * const pingLogs = await prisma.pingLogs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PingLogsFindFirstArgs>(args?: SelectSubset<T, PingLogsFindFirstArgs<ExtArgs>>): Prisma__PingLogsClient<$Result.GetResult<Prisma.$PingLogsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PingLogs that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PingLogsFindFirstOrThrowArgs} args - Arguments to find a PingLogs
     * @example
     * // Get one PingLogs
     * const pingLogs = await prisma.pingLogs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PingLogsFindFirstOrThrowArgs>(args?: SelectSubset<T, PingLogsFindFirstOrThrowArgs<ExtArgs>>): Prisma__PingLogsClient<$Result.GetResult<Prisma.$PingLogsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PingLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PingLogsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PingLogs
     * const pingLogs = await prisma.pingLogs.findMany()
     * 
     * // Get first 10 PingLogs
     * const pingLogs = await prisma.pingLogs.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pingLogsWithIdOnly = await prisma.pingLogs.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PingLogsFindManyArgs>(args?: SelectSubset<T, PingLogsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PingLogsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PingLogs.
     * @param {PingLogsCreateArgs} args - Arguments to create a PingLogs.
     * @example
     * // Create one PingLogs
     * const PingLogs = await prisma.pingLogs.create({
     *   data: {
     *     // ... data to create a PingLogs
     *   }
     * })
     * 
     */
    create<T extends PingLogsCreateArgs>(args: SelectSubset<T, PingLogsCreateArgs<ExtArgs>>): Prisma__PingLogsClient<$Result.GetResult<Prisma.$PingLogsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PingLogs.
     * @param {PingLogsCreateManyArgs} args - Arguments to create many PingLogs.
     * @example
     * // Create many PingLogs
     * const pingLogs = await prisma.pingLogs.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PingLogsCreateManyArgs>(args?: SelectSubset<T, PingLogsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PingLogs and returns the data saved in the database.
     * @param {PingLogsCreateManyAndReturnArgs} args - Arguments to create many PingLogs.
     * @example
     * // Create many PingLogs
     * const pingLogs = await prisma.pingLogs.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PingLogs and only return the `id`
     * const pingLogsWithIdOnly = await prisma.pingLogs.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PingLogsCreateManyAndReturnArgs>(args?: SelectSubset<T, PingLogsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PingLogsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PingLogs.
     * @param {PingLogsDeleteArgs} args - Arguments to delete one PingLogs.
     * @example
     * // Delete one PingLogs
     * const PingLogs = await prisma.pingLogs.delete({
     *   where: {
     *     // ... filter to delete one PingLogs
     *   }
     * })
     * 
     */
    delete<T extends PingLogsDeleteArgs>(args: SelectSubset<T, PingLogsDeleteArgs<ExtArgs>>): Prisma__PingLogsClient<$Result.GetResult<Prisma.$PingLogsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PingLogs.
     * @param {PingLogsUpdateArgs} args - Arguments to update one PingLogs.
     * @example
     * // Update one PingLogs
     * const pingLogs = await prisma.pingLogs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PingLogsUpdateArgs>(args: SelectSubset<T, PingLogsUpdateArgs<ExtArgs>>): Prisma__PingLogsClient<$Result.GetResult<Prisma.$PingLogsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PingLogs.
     * @param {PingLogsDeleteManyArgs} args - Arguments to filter PingLogs to delete.
     * @example
     * // Delete a few PingLogs
     * const { count } = await prisma.pingLogs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PingLogsDeleteManyArgs>(args?: SelectSubset<T, PingLogsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PingLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PingLogsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PingLogs
     * const pingLogs = await prisma.pingLogs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PingLogsUpdateManyArgs>(args: SelectSubset<T, PingLogsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PingLogs and returns the data updated in the database.
     * @param {PingLogsUpdateManyAndReturnArgs} args - Arguments to update many PingLogs.
     * @example
     * // Update many PingLogs
     * const pingLogs = await prisma.pingLogs.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PingLogs and only return the `id`
     * const pingLogsWithIdOnly = await prisma.pingLogs.updateManyAndReturn({
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
    updateManyAndReturn<T extends PingLogsUpdateManyAndReturnArgs>(args: SelectSubset<T, PingLogsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PingLogsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PingLogs.
     * @param {PingLogsUpsertArgs} args - Arguments to update or create a PingLogs.
     * @example
     * // Update or create a PingLogs
     * const pingLogs = await prisma.pingLogs.upsert({
     *   create: {
     *     // ... data to create a PingLogs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PingLogs we want to update
     *   }
     * })
     */
    upsert<T extends PingLogsUpsertArgs>(args: SelectSubset<T, PingLogsUpsertArgs<ExtArgs>>): Prisma__PingLogsClient<$Result.GetResult<Prisma.$PingLogsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PingLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PingLogsCountArgs} args - Arguments to filter PingLogs to count.
     * @example
     * // Count the number of PingLogs
     * const count = await prisma.pingLogs.count({
     *   where: {
     *     // ... the filter for the PingLogs we want to count
     *   }
     * })
    **/
    count<T extends PingLogsCountArgs>(
      args?: Subset<T, PingLogsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PingLogsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PingLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PingLogsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PingLogsAggregateArgs>(args: Subset<T, PingLogsAggregateArgs>): Prisma.PrismaPromise<GetPingLogsAggregateType<T>>

    /**
     * Group by PingLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PingLogsGroupByArgs} args - Group by arguments.
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
      T extends PingLogsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PingLogsGroupByArgs['orderBy'] }
        : { orderBy?: PingLogsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PingLogsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPingLogsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PingLogs model
   */
  readonly fields: PingLogsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PingLogs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PingLogsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    endpoint<T extends EndPointsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EndPointsDefaultArgs<ExtArgs>>): Prisma__EndPointsClient<$Result.GetResult<Prisma.$EndPointsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PingLogs model
   */
  interface PingLogsFieldRefs {
    readonly id: FieldRef<"PingLogs", 'String'>
    readonly endpointId: FieldRef<"PingLogs", 'String'>
    readonly response: FieldRef<"PingLogs", 'String'>
    readonly status: FieldRef<"PingLogs", 'Boolean'>
    readonly createdAt: FieldRef<"PingLogs", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PingLogs findUnique
   */
  export type PingLogsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PingLogs
     */
    select?: PingLogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PingLogs
     */
    omit?: PingLogsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PingLogsInclude<ExtArgs> | null
    /**
     * Filter, which PingLogs to fetch.
     */
    where: PingLogsWhereUniqueInput
  }

  /**
   * PingLogs findUniqueOrThrow
   */
  export type PingLogsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PingLogs
     */
    select?: PingLogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PingLogs
     */
    omit?: PingLogsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PingLogsInclude<ExtArgs> | null
    /**
     * Filter, which PingLogs to fetch.
     */
    where: PingLogsWhereUniqueInput
  }

  /**
   * PingLogs findFirst
   */
  export type PingLogsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PingLogs
     */
    select?: PingLogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PingLogs
     */
    omit?: PingLogsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PingLogsInclude<ExtArgs> | null
    /**
     * Filter, which PingLogs to fetch.
     */
    where?: PingLogsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PingLogs to fetch.
     */
    orderBy?: PingLogsOrderByWithRelationInput | PingLogsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PingLogs.
     */
    cursor?: PingLogsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PingLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PingLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PingLogs.
     */
    distinct?: PingLogsScalarFieldEnum | PingLogsScalarFieldEnum[]
  }

  /**
   * PingLogs findFirstOrThrow
   */
  export type PingLogsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PingLogs
     */
    select?: PingLogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PingLogs
     */
    omit?: PingLogsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PingLogsInclude<ExtArgs> | null
    /**
     * Filter, which PingLogs to fetch.
     */
    where?: PingLogsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PingLogs to fetch.
     */
    orderBy?: PingLogsOrderByWithRelationInput | PingLogsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PingLogs.
     */
    cursor?: PingLogsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PingLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PingLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PingLogs.
     */
    distinct?: PingLogsScalarFieldEnum | PingLogsScalarFieldEnum[]
  }

  /**
   * PingLogs findMany
   */
  export type PingLogsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PingLogs
     */
    select?: PingLogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PingLogs
     */
    omit?: PingLogsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PingLogsInclude<ExtArgs> | null
    /**
     * Filter, which PingLogs to fetch.
     */
    where?: PingLogsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PingLogs to fetch.
     */
    orderBy?: PingLogsOrderByWithRelationInput | PingLogsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PingLogs.
     */
    cursor?: PingLogsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PingLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PingLogs.
     */
    skip?: number
    distinct?: PingLogsScalarFieldEnum | PingLogsScalarFieldEnum[]
  }

  /**
   * PingLogs create
   */
  export type PingLogsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PingLogs
     */
    select?: PingLogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PingLogs
     */
    omit?: PingLogsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PingLogsInclude<ExtArgs> | null
    /**
     * The data needed to create a PingLogs.
     */
    data: XOR<PingLogsCreateInput, PingLogsUncheckedCreateInput>
  }

  /**
   * PingLogs createMany
   */
  export type PingLogsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PingLogs.
     */
    data: PingLogsCreateManyInput | PingLogsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PingLogs createManyAndReturn
   */
  export type PingLogsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PingLogs
     */
    select?: PingLogsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PingLogs
     */
    omit?: PingLogsOmit<ExtArgs> | null
    /**
     * The data used to create many PingLogs.
     */
    data: PingLogsCreateManyInput | PingLogsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PingLogsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PingLogs update
   */
  export type PingLogsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PingLogs
     */
    select?: PingLogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PingLogs
     */
    omit?: PingLogsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PingLogsInclude<ExtArgs> | null
    /**
     * The data needed to update a PingLogs.
     */
    data: XOR<PingLogsUpdateInput, PingLogsUncheckedUpdateInput>
    /**
     * Choose, which PingLogs to update.
     */
    where: PingLogsWhereUniqueInput
  }

  /**
   * PingLogs updateMany
   */
  export type PingLogsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PingLogs.
     */
    data: XOR<PingLogsUpdateManyMutationInput, PingLogsUncheckedUpdateManyInput>
    /**
     * Filter which PingLogs to update
     */
    where?: PingLogsWhereInput
    /**
     * Limit how many PingLogs to update.
     */
    limit?: number
  }

  /**
   * PingLogs updateManyAndReturn
   */
  export type PingLogsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PingLogs
     */
    select?: PingLogsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PingLogs
     */
    omit?: PingLogsOmit<ExtArgs> | null
    /**
     * The data used to update PingLogs.
     */
    data: XOR<PingLogsUpdateManyMutationInput, PingLogsUncheckedUpdateManyInput>
    /**
     * Filter which PingLogs to update
     */
    where?: PingLogsWhereInput
    /**
     * Limit how many PingLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PingLogsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PingLogs upsert
   */
  export type PingLogsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PingLogs
     */
    select?: PingLogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PingLogs
     */
    omit?: PingLogsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PingLogsInclude<ExtArgs> | null
    /**
     * The filter to search for the PingLogs to update in case it exists.
     */
    where: PingLogsWhereUniqueInput
    /**
     * In case the PingLogs found by the `where` argument doesn't exist, create a new PingLogs with this data.
     */
    create: XOR<PingLogsCreateInput, PingLogsUncheckedCreateInput>
    /**
     * In case the PingLogs was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PingLogsUpdateInput, PingLogsUncheckedUpdateInput>
  }

  /**
   * PingLogs delete
   */
  export type PingLogsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PingLogs
     */
    select?: PingLogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PingLogs
     */
    omit?: PingLogsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PingLogsInclude<ExtArgs> | null
    /**
     * Filter which PingLogs to delete.
     */
    where: PingLogsWhereUniqueInput
  }

  /**
   * PingLogs deleteMany
   */
  export type PingLogsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PingLogs to delete
     */
    where?: PingLogsWhereInput
    /**
     * Limit how many PingLogs to delete.
     */
    limit?: number
  }

  /**
   * PingLogs without action
   */
  export type PingLogsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PingLogs
     */
    select?: PingLogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PingLogs
     */
    omit?: PingLogsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PingLogsInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    email: 'email',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const EndPointsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    url: 'url',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EndPointsScalarFieldEnum = (typeof EndPointsScalarFieldEnum)[keyof typeof EndPointsScalarFieldEnum]


  export const PingLogsScalarFieldEnum: {
    id: 'id',
    endpointId: 'endpointId',
    response: 'response',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type PingLogsScalarFieldEnum = (typeof PingLogsScalarFieldEnum)[keyof typeof PingLogsScalarFieldEnum]


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


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    endpoints?: EndPointsListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    endpoints?: EndPointsOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    endpoints?: EndPointsListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type EndPointsWhereInput = {
    AND?: EndPointsWhereInput | EndPointsWhereInput[]
    OR?: EndPointsWhereInput[]
    NOT?: EndPointsWhereInput | EndPointsWhereInput[]
    id?: StringFilter<"EndPoints"> | string
    name?: StringFilter<"EndPoints"> | string
    url?: StringFilter<"EndPoints"> | string
    userId?: StringFilter<"EndPoints"> | string
    createdAt?: DateTimeFilter<"EndPoints"> | Date | string
    updatedAt?: DateTimeFilter<"EndPoints"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    pingLogs?: PingLogsListRelationFilter
  }

  export type EndPointsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    pingLogs?: PingLogsOrderByRelationAggregateInput
  }

  export type EndPointsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    url?: string
    AND?: EndPointsWhereInput | EndPointsWhereInput[]
    OR?: EndPointsWhereInput[]
    NOT?: EndPointsWhereInput | EndPointsWhereInput[]
    name?: StringFilter<"EndPoints"> | string
    userId?: StringFilter<"EndPoints"> | string
    createdAt?: DateTimeFilter<"EndPoints"> | Date | string
    updatedAt?: DateTimeFilter<"EndPoints"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    pingLogs?: PingLogsListRelationFilter
  }, "id" | "url">

  export type EndPointsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EndPointsCountOrderByAggregateInput
    _max?: EndPointsMaxOrderByAggregateInput
    _min?: EndPointsMinOrderByAggregateInput
  }

  export type EndPointsScalarWhereWithAggregatesInput = {
    AND?: EndPointsScalarWhereWithAggregatesInput | EndPointsScalarWhereWithAggregatesInput[]
    OR?: EndPointsScalarWhereWithAggregatesInput[]
    NOT?: EndPointsScalarWhereWithAggregatesInput | EndPointsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"EndPoints"> | string
    name?: StringWithAggregatesFilter<"EndPoints"> | string
    url?: StringWithAggregatesFilter<"EndPoints"> | string
    userId?: StringWithAggregatesFilter<"EndPoints"> | string
    createdAt?: DateTimeWithAggregatesFilter<"EndPoints"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"EndPoints"> | Date | string
  }

  export type PingLogsWhereInput = {
    AND?: PingLogsWhereInput | PingLogsWhereInput[]
    OR?: PingLogsWhereInput[]
    NOT?: PingLogsWhereInput | PingLogsWhereInput[]
    id?: StringFilter<"PingLogs"> | string
    endpointId?: StringFilter<"PingLogs"> | string
    response?: StringFilter<"PingLogs"> | string
    status?: BoolFilter<"PingLogs"> | boolean
    createdAt?: DateTimeFilter<"PingLogs"> | Date | string
    endpoint?: XOR<EndPointsScalarRelationFilter, EndPointsWhereInput>
  }

  export type PingLogsOrderByWithRelationInput = {
    id?: SortOrder
    endpointId?: SortOrder
    response?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    endpoint?: EndPointsOrderByWithRelationInput
  }

  export type PingLogsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PingLogsWhereInput | PingLogsWhereInput[]
    OR?: PingLogsWhereInput[]
    NOT?: PingLogsWhereInput | PingLogsWhereInput[]
    endpointId?: StringFilter<"PingLogs"> | string
    response?: StringFilter<"PingLogs"> | string
    status?: BoolFilter<"PingLogs"> | boolean
    createdAt?: DateTimeFilter<"PingLogs"> | Date | string
    endpoint?: XOR<EndPointsScalarRelationFilter, EndPointsWhereInput>
  }, "id">

  export type PingLogsOrderByWithAggregationInput = {
    id?: SortOrder
    endpointId?: SortOrder
    response?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: PingLogsCountOrderByAggregateInput
    _max?: PingLogsMaxOrderByAggregateInput
    _min?: PingLogsMinOrderByAggregateInput
  }

  export type PingLogsScalarWhereWithAggregatesInput = {
    AND?: PingLogsScalarWhereWithAggregatesInput | PingLogsScalarWhereWithAggregatesInput[]
    OR?: PingLogsScalarWhereWithAggregatesInput[]
    NOT?: PingLogsScalarWhereWithAggregatesInput | PingLogsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PingLogs"> | string
    endpointId?: StringWithAggregatesFilter<"PingLogs"> | string
    response?: StringWithAggregatesFilter<"PingLogs"> | string
    status?: BoolWithAggregatesFilter<"PingLogs"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"PingLogs"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    username: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    endpoints?: EndPointsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    username: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    endpoints?: EndPointsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endpoints?: EndPointsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endpoints?: EndPointsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    username: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EndPointsCreateInput = {
    id?: string
    name: string
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutEndpointsInput
    pingLogs?: PingLogsCreateNestedManyWithoutEndpointInput
  }

  export type EndPointsUncheckedCreateInput = {
    id?: string
    name: string
    url: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    pingLogs?: PingLogsUncheckedCreateNestedManyWithoutEndpointInput
  }

  export type EndPointsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutEndpointsNestedInput
    pingLogs?: PingLogsUpdateManyWithoutEndpointNestedInput
  }

  export type EndPointsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pingLogs?: PingLogsUncheckedUpdateManyWithoutEndpointNestedInput
  }

  export type EndPointsCreateManyInput = {
    id?: string
    name: string
    url: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EndPointsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EndPointsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PingLogsCreateInput = {
    id?: string
    response: string
    status?: boolean
    createdAt?: Date | string
    endpoint: EndPointsCreateNestedOneWithoutPingLogsInput
  }

  export type PingLogsUncheckedCreateInput = {
    id?: string
    endpointId: string
    response: string
    status?: boolean
    createdAt?: Date | string
  }

  export type PingLogsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    response?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endpoint?: EndPointsUpdateOneRequiredWithoutPingLogsNestedInput
  }

  export type PingLogsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    endpointId?: StringFieldUpdateOperationsInput | string
    response?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PingLogsCreateManyInput = {
    id?: string
    endpointId: string
    response: string
    status?: boolean
    createdAt?: Date | string
  }

  export type PingLogsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    response?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PingLogsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    endpointId?: StringFieldUpdateOperationsInput | string
    response?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type EndPointsListRelationFilter = {
    every?: EndPointsWhereInput
    some?: EndPointsWhereInput
    none?: EndPointsWhereInput
  }

  export type EndPointsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type PingLogsListRelationFilter = {
    every?: PingLogsWhereInput
    some?: PingLogsWhereInput
    none?: PingLogsWhereInput
  }

  export type PingLogsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EndPointsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EndPointsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EndPointsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type EndPointsScalarRelationFilter = {
    is?: EndPointsWhereInput
    isNot?: EndPointsWhereInput
  }

  export type PingLogsCountOrderByAggregateInput = {
    id?: SortOrder
    endpointId?: SortOrder
    response?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type PingLogsMaxOrderByAggregateInput = {
    id?: SortOrder
    endpointId?: SortOrder
    response?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type PingLogsMinOrderByAggregateInput = {
    id?: SortOrder
    endpointId?: SortOrder
    response?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EndPointsCreateNestedManyWithoutUserInput = {
    create?: XOR<EndPointsCreateWithoutUserInput, EndPointsUncheckedCreateWithoutUserInput> | EndPointsCreateWithoutUserInput[] | EndPointsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EndPointsCreateOrConnectWithoutUserInput | EndPointsCreateOrConnectWithoutUserInput[]
    createMany?: EndPointsCreateManyUserInputEnvelope
    connect?: EndPointsWhereUniqueInput | EndPointsWhereUniqueInput[]
  }

  export type EndPointsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<EndPointsCreateWithoutUserInput, EndPointsUncheckedCreateWithoutUserInput> | EndPointsCreateWithoutUserInput[] | EndPointsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EndPointsCreateOrConnectWithoutUserInput | EndPointsCreateOrConnectWithoutUserInput[]
    createMany?: EndPointsCreateManyUserInputEnvelope
    connect?: EndPointsWhereUniqueInput | EndPointsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EndPointsUpdateManyWithoutUserNestedInput = {
    create?: XOR<EndPointsCreateWithoutUserInput, EndPointsUncheckedCreateWithoutUserInput> | EndPointsCreateWithoutUserInput[] | EndPointsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EndPointsCreateOrConnectWithoutUserInput | EndPointsCreateOrConnectWithoutUserInput[]
    upsert?: EndPointsUpsertWithWhereUniqueWithoutUserInput | EndPointsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EndPointsCreateManyUserInputEnvelope
    set?: EndPointsWhereUniqueInput | EndPointsWhereUniqueInput[]
    disconnect?: EndPointsWhereUniqueInput | EndPointsWhereUniqueInput[]
    delete?: EndPointsWhereUniqueInput | EndPointsWhereUniqueInput[]
    connect?: EndPointsWhereUniqueInput | EndPointsWhereUniqueInput[]
    update?: EndPointsUpdateWithWhereUniqueWithoutUserInput | EndPointsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EndPointsUpdateManyWithWhereWithoutUserInput | EndPointsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EndPointsScalarWhereInput | EndPointsScalarWhereInput[]
  }

  export type EndPointsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<EndPointsCreateWithoutUserInput, EndPointsUncheckedCreateWithoutUserInput> | EndPointsCreateWithoutUserInput[] | EndPointsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EndPointsCreateOrConnectWithoutUserInput | EndPointsCreateOrConnectWithoutUserInput[]
    upsert?: EndPointsUpsertWithWhereUniqueWithoutUserInput | EndPointsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EndPointsCreateManyUserInputEnvelope
    set?: EndPointsWhereUniqueInput | EndPointsWhereUniqueInput[]
    disconnect?: EndPointsWhereUniqueInput | EndPointsWhereUniqueInput[]
    delete?: EndPointsWhereUniqueInput | EndPointsWhereUniqueInput[]
    connect?: EndPointsWhereUniqueInput | EndPointsWhereUniqueInput[]
    update?: EndPointsUpdateWithWhereUniqueWithoutUserInput | EndPointsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EndPointsUpdateManyWithWhereWithoutUserInput | EndPointsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EndPointsScalarWhereInput | EndPointsScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutEndpointsInput = {
    create?: XOR<UserCreateWithoutEndpointsInput, UserUncheckedCreateWithoutEndpointsInput>
    connectOrCreate?: UserCreateOrConnectWithoutEndpointsInput
    connect?: UserWhereUniqueInput
  }

  export type PingLogsCreateNestedManyWithoutEndpointInput = {
    create?: XOR<PingLogsCreateWithoutEndpointInput, PingLogsUncheckedCreateWithoutEndpointInput> | PingLogsCreateWithoutEndpointInput[] | PingLogsUncheckedCreateWithoutEndpointInput[]
    connectOrCreate?: PingLogsCreateOrConnectWithoutEndpointInput | PingLogsCreateOrConnectWithoutEndpointInput[]
    createMany?: PingLogsCreateManyEndpointInputEnvelope
    connect?: PingLogsWhereUniqueInput | PingLogsWhereUniqueInput[]
  }

  export type PingLogsUncheckedCreateNestedManyWithoutEndpointInput = {
    create?: XOR<PingLogsCreateWithoutEndpointInput, PingLogsUncheckedCreateWithoutEndpointInput> | PingLogsCreateWithoutEndpointInput[] | PingLogsUncheckedCreateWithoutEndpointInput[]
    connectOrCreate?: PingLogsCreateOrConnectWithoutEndpointInput | PingLogsCreateOrConnectWithoutEndpointInput[]
    createMany?: PingLogsCreateManyEndpointInputEnvelope
    connect?: PingLogsWhereUniqueInput | PingLogsWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutEndpointsNestedInput = {
    create?: XOR<UserCreateWithoutEndpointsInput, UserUncheckedCreateWithoutEndpointsInput>
    connectOrCreate?: UserCreateOrConnectWithoutEndpointsInput
    upsert?: UserUpsertWithoutEndpointsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutEndpointsInput, UserUpdateWithoutEndpointsInput>, UserUncheckedUpdateWithoutEndpointsInput>
  }

  export type PingLogsUpdateManyWithoutEndpointNestedInput = {
    create?: XOR<PingLogsCreateWithoutEndpointInput, PingLogsUncheckedCreateWithoutEndpointInput> | PingLogsCreateWithoutEndpointInput[] | PingLogsUncheckedCreateWithoutEndpointInput[]
    connectOrCreate?: PingLogsCreateOrConnectWithoutEndpointInput | PingLogsCreateOrConnectWithoutEndpointInput[]
    upsert?: PingLogsUpsertWithWhereUniqueWithoutEndpointInput | PingLogsUpsertWithWhereUniqueWithoutEndpointInput[]
    createMany?: PingLogsCreateManyEndpointInputEnvelope
    set?: PingLogsWhereUniqueInput | PingLogsWhereUniqueInput[]
    disconnect?: PingLogsWhereUniqueInput | PingLogsWhereUniqueInput[]
    delete?: PingLogsWhereUniqueInput | PingLogsWhereUniqueInput[]
    connect?: PingLogsWhereUniqueInput | PingLogsWhereUniqueInput[]
    update?: PingLogsUpdateWithWhereUniqueWithoutEndpointInput | PingLogsUpdateWithWhereUniqueWithoutEndpointInput[]
    updateMany?: PingLogsUpdateManyWithWhereWithoutEndpointInput | PingLogsUpdateManyWithWhereWithoutEndpointInput[]
    deleteMany?: PingLogsScalarWhereInput | PingLogsScalarWhereInput[]
  }

  export type PingLogsUncheckedUpdateManyWithoutEndpointNestedInput = {
    create?: XOR<PingLogsCreateWithoutEndpointInput, PingLogsUncheckedCreateWithoutEndpointInput> | PingLogsCreateWithoutEndpointInput[] | PingLogsUncheckedCreateWithoutEndpointInput[]
    connectOrCreate?: PingLogsCreateOrConnectWithoutEndpointInput | PingLogsCreateOrConnectWithoutEndpointInput[]
    upsert?: PingLogsUpsertWithWhereUniqueWithoutEndpointInput | PingLogsUpsertWithWhereUniqueWithoutEndpointInput[]
    createMany?: PingLogsCreateManyEndpointInputEnvelope
    set?: PingLogsWhereUniqueInput | PingLogsWhereUniqueInput[]
    disconnect?: PingLogsWhereUniqueInput | PingLogsWhereUniqueInput[]
    delete?: PingLogsWhereUniqueInput | PingLogsWhereUniqueInput[]
    connect?: PingLogsWhereUniqueInput | PingLogsWhereUniqueInput[]
    update?: PingLogsUpdateWithWhereUniqueWithoutEndpointInput | PingLogsUpdateWithWhereUniqueWithoutEndpointInput[]
    updateMany?: PingLogsUpdateManyWithWhereWithoutEndpointInput | PingLogsUpdateManyWithWhereWithoutEndpointInput[]
    deleteMany?: PingLogsScalarWhereInput | PingLogsScalarWhereInput[]
  }

  export type EndPointsCreateNestedOneWithoutPingLogsInput = {
    create?: XOR<EndPointsCreateWithoutPingLogsInput, EndPointsUncheckedCreateWithoutPingLogsInput>
    connectOrCreate?: EndPointsCreateOrConnectWithoutPingLogsInput
    connect?: EndPointsWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type EndPointsUpdateOneRequiredWithoutPingLogsNestedInput = {
    create?: XOR<EndPointsCreateWithoutPingLogsInput, EndPointsUncheckedCreateWithoutPingLogsInput>
    connectOrCreate?: EndPointsCreateOrConnectWithoutPingLogsInput
    upsert?: EndPointsUpsertWithoutPingLogsInput
    connect?: EndPointsWhereUniqueInput
    update?: XOR<XOR<EndPointsUpdateToOneWithWhereWithoutPingLogsInput, EndPointsUpdateWithoutPingLogsInput>, EndPointsUncheckedUpdateWithoutPingLogsInput>
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

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
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

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EndPointsCreateWithoutUserInput = {
    id?: string
    name: string
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string
    pingLogs?: PingLogsCreateNestedManyWithoutEndpointInput
  }

  export type EndPointsUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string
    pingLogs?: PingLogsUncheckedCreateNestedManyWithoutEndpointInput
  }

  export type EndPointsCreateOrConnectWithoutUserInput = {
    where: EndPointsWhereUniqueInput
    create: XOR<EndPointsCreateWithoutUserInput, EndPointsUncheckedCreateWithoutUserInput>
  }

  export type EndPointsCreateManyUserInputEnvelope = {
    data: EndPointsCreateManyUserInput | EndPointsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type EndPointsUpsertWithWhereUniqueWithoutUserInput = {
    where: EndPointsWhereUniqueInput
    update: XOR<EndPointsUpdateWithoutUserInput, EndPointsUncheckedUpdateWithoutUserInput>
    create: XOR<EndPointsCreateWithoutUserInput, EndPointsUncheckedCreateWithoutUserInput>
  }

  export type EndPointsUpdateWithWhereUniqueWithoutUserInput = {
    where: EndPointsWhereUniqueInput
    data: XOR<EndPointsUpdateWithoutUserInput, EndPointsUncheckedUpdateWithoutUserInput>
  }

  export type EndPointsUpdateManyWithWhereWithoutUserInput = {
    where: EndPointsScalarWhereInput
    data: XOR<EndPointsUpdateManyMutationInput, EndPointsUncheckedUpdateManyWithoutUserInput>
  }

  export type EndPointsScalarWhereInput = {
    AND?: EndPointsScalarWhereInput | EndPointsScalarWhereInput[]
    OR?: EndPointsScalarWhereInput[]
    NOT?: EndPointsScalarWhereInput | EndPointsScalarWhereInput[]
    id?: StringFilter<"EndPoints"> | string
    name?: StringFilter<"EndPoints"> | string
    url?: StringFilter<"EndPoints"> | string
    userId?: StringFilter<"EndPoints"> | string
    createdAt?: DateTimeFilter<"EndPoints"> | Date | string
    updatedAt?: DateTimeFilter<"EndPoints"> | Date | string
  }

  export type UserCreateWithoutEndpointsInput = {
    id?: string
    username: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutEndpointsInput = {
    id?: string
    username: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutEndpointsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutEndpointsInput, UserUncheckedCreateWithoutEndpointsInput>
  }

  export type PingLogsCreateWithoutEndpointInput = {
    id?: string
    response: string
    status?: boolean
    createdAt?: Date | string
  }

  export type PingLogsUncheckedCreateWithoutEndpointInput = {
    id?: string
    response: string
    status?: boolean
    createdAt?: Date | string
  }

  export type PingLogsCreateOrConnectWithoutEndpointInput = {
    where: PingLogsWhereUniqueInput
    create: XOR<PingLogsCreateWithoutEndpointInput, PingLogsUncheckedCreateWithoutEndpointInput>
  }

  export type PingLogsCreateManyEndpointInputEnvelope = {
    data: PingLogsCreateManyEndpointInput | PingLogsCreateManyEndpointInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutEndpointsInput = {
    update: XOR<UserUpdateWithoutEndpointsInput, UserUncheckedUpdateWithoutEndpointsInput>
    create: XOR<UserCreateWithoutEndpointsInput, UserUncheckedCreateWithoutEndpointsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutEndpointsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutEndpointsInput, UserUncheckedUpdateWithoutEndpointsInput>
  }

  export type UserUpdateWithoutEndpointsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutEndpointsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PingLogsUpsertWithWhereUniqueWithoutEndpointInput = {
    where: PingLogsWhereUniqueInput
    update: XOR<PingLogsUpdateWithoutEndpointInput, PingLogsUncheckedUpdateWithoutEndpointInput>
    create: XOR<PingLogsCreateWithoutEndpointInput, PingLogsUncheckedCreateWithoutEndpointInput>
  }

  export type PingLogsUpdateWithWhereUniqueWithoutEndpointInput = {
    where: PingLogsWhereUniqueInput
    data: XOR<PingLogsUpdateWithoutEndpointInput, PingLogsUncheckedUpdateWithoutEndpointInput>
  }

  export type PingLogsUpdateManyWithWhereWithoutEndpointInput = {
    where: PingLogsScalarWhereInput
    data: XOR<PingLogsUpdateManyMutationInput, PingLogsUncheckedUpdateManyWithoutEndpointInput>
  }

  export type PingLogsScalarWhereInput = {
    AND?: PingLogsScalarWhereInput | PingLogsScalarWhereInput[]
    OR?: PingLogsScalarWhereInput[]
    NOT?: PingLogsScalarWhereInput | PingLogsScalarWhereInput[]
    id?: StringFilter<"PingLogs"> | string
    endpointId?: StringFilter<"PingLogs"> | string
    response?: StringFilter<"PingLogs"> | string
    status?: BoolFilter<"PingLogs"> | boolean
    createdAt?: DateTimeFilter<"PingLogs"> | Date | string
  }

  export type EndPointsCreateWithoutPingLogsInput = {
    id?: string
    name: string
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutEndpointsInput
  }

  export type EndPointsUncheckedCreateWithoutPingLogsInput = {
    id?: string
    name: string
    url: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EndPointsCreateOrConnectWithoutPingLogsInput = {
    where: EndPointsWhereUniqueInput
    create: XOR<EndPointsCreateWithoutPingLogsInput, EndPointsUncheckedCreateWithoutPingLogsInput>
  }

  export type EndPointsUpsertWithoutPingLogsInput = {
    update: XOR<EndPointsUpdateWithoutPingLogsInput, EndPointsUncheckedUpdateWithoutPingLogsInput>
    create: XOR<EndPointsCreateWithoutPingLogsInput, EndPointsUncheckedCreateWithoutPingLogsInput>
    where?: EndPointsWhereInput
  }

  export type EndPointsUpdateToOneWithWhereWithoutPingLogsInput = {
    where?: EndPointsWhereInput
    data: XOR<EndPointsUpdateWithoutPingLogsInput, EndPointsUncheckedUpdateWithoutPingLogsInput>
  }

  export type EndPointsUpdateWithoutPingLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutEndpointsNestedInput
  }

  export type EndPointsUncheckedUpdateWithoutPingLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EndPointsCreateManyUserInput = {
    id?: string
    name: string
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EndPointsUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pingLogs?: PingLogsUpdateManyWithoutEndpointNestedInput
  }

  export type EndPointsUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pingLogs?: PingLogsUncheckedUpdateManyWithoutEndpointNestedInput
  }

  export type EndPointsUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PingLogsCreateManyEndpointInput = {
    id?: string
    response: string
    status?: boolean
    createdAt?: Date | string
  }

  export type PingLogsUpdateWithoutEndpointInput = {
    id?: StringFieldUpdateOperationsInput | string
    response?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PingLogsUncheckedUpdateWithoutEndpointInput = {
    id?: StringFieldUpdateOperationsInput | string
    response?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PingLogsUncheckedUpdateManyWithoutEndpointInput = {
    id?: StringFieldUpdateOperationsInput | string
    response?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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