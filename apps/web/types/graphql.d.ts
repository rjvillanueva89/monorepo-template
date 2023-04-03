type Maybe<T> = T | null;
type InputMaybe<T> = Maybe<T>;
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  numeric: any;
  timestamp: any;
  timestamptz: any;
  uuid: any;
};

type IntComparisonExp = {
  _eq: InputMaybe<Scalars['Int']>;
  _gt: InputMaybe<Scalars['Int']>;
  _gte: InputMaybe<Scalars['Int']>;
  _in: InputMaybe<Array<Scalars['Int']>>;
  _is_null: InputMaybe<Scalars['Boolean']>;
  _lt: InputMaybe<Scalars['Int']>;
  _lte: InputMaybe<Scalars['Int']>;
  _neq: InputMaybe<Scalars['Int']>;
  _nin: InputMaybe<Array<Scalars['Int']>>;
};

type StringComparisonExp = {
  _eq: InputMaybe<Scalars['String']>;
  _gt: InputMaybe<Scalars['String']>;
  _gte: InputMaybe<Scalars['String']>;
  _ilike: InputMaybe<Scalars['String']>;
  _in: InputMaybe<Array<Scalars['String']>>;
  _iregex: InputMaybe<Scalars['String']>;
  _is_null: InputMaybe<Scalars['Boolean']>;
  _like: InputMaybe<Scalars['String']>;
  _lt: InputMaybe<Scalars['String']>;
  _lte: InputMaybe<Scalars['String']>;
  _neq: InputMaybe<Scalars['String']>;
  _nilike: InputMaybe<Scalars['String']>;
  _nin: InputMaybe<Array<Scalars['String']>>;
  _niregex: InputMaybe<Scalars['String']>;
  _nlike: InputMaybe<Scalars['String']>;
  _nregex: InputMaybe<Scalars['String']>;
  _nsimilar: InputMaybe<Scalars['String']>;
  _regex: InputMaybe<Scalars['String']>;
  _similar: InputMaybe<Scalars['String']>;
};

type AuthenticateArgs = {
  identifier: InputMaybe<Scalars['String']>;
  password: InputMaybe<Scalars['String']>;
};

type CursorOrdering =
  | 'ASC'
  | 'DESC';

type Locations = {
  __typename?: 'locations';
  address: Scalars['String'];
  created_at: Scalars['timestamp'];
  created_by: Scalars['uuid'];
  id: Scalars['uuid'];
  name: Scalars['String'];
  updated_at: Maybe<Scalars['timestamp']>;
};

type LocationsAggregate = {
  __typename?: 'locations_aggregate';
  aggregate: Maybe<LocationsAggregateFields>;
  nodes: Array<Locations>;
};

type LocationsAggregateFields = {
  __typename?: 'locations_aggregate_fields';
  count: Scalars['Int'];
  max: Maybe<LocationsMaxFields>;
  min: Maybe<LocationsMinFields>;
};


type LocationsAggregateFieldsCountArgs = {
  columns: InputMaybe<Array<LocationsSelectColumn>>;
  distinct: InputMaybe<Scalars['Boolean']>;
};

type LocationsBoolExp = {
  _and: InputMaybe<Array<LocationsBoolExp>>;
  _not: InputMaybe<LocationsBoolExp>;
  _or: InputMaybe<Array<LocationsBoolExp>>;
  address: InputMaybe<StringComparisonExp>;
  created_at: InputMaybe<TimestampComparisonExp>;
  created_by: InputMaybe<UuidComparisonExp>;
  id: InputMaybe<UuidComparisonExp>;
  name: InputMaybe<StringComparisonExp>;
  updated_at: InputMaybe<TimestampComparisonExp>;
};

type LocationsConstraint =
  | 'locations_pkey';

type LocationsInsertInput = {
  address: InputMaybe<Scalars['String']>;
  created_at: InputMaybe<Scalars['timestamp']>;
  created_by: InputMaybe<Scalars['uuid']>;
  id: InputMaybe<Scalars['uuid']>;
  name: InputMaybe<Scalars['String']>;
  updated_at: InputMaybe<Scalars['timestamp']>;
};

type LocationsMaxFields = {
  __typename?: 'locations_max_fields';
  address: Maybe<Scalars['String']>;
  created_at: Maybe<Scalars['timestamp']>;
  created_by: Maybe<Scalars['uuid']>;
  id: Maybe<Scalars['uuid']>;
  name: Maybe<Scalars['String']>;
  updated_at: Maybe<Scalars['timestamp']>;
};

type LocationsMinFields = {
  __typename?: 'locations_min_fields';
  address: Maybe<Scalars['String']>;
  created_at: Maybe<Scalars['timestamp']>;
  created_by: Maybe<Scalars['uuid']>;
  id: Maybe<Scalars['uuid']>;
  name: Maybe<Scalars['String']>;
  updated_at: Maybe<Scalars['timestamp']>;
};

type LocationsMutationResponse = {
  __typename?: 'locations_mutation_response';
  affected_rows: Scalars['Int'];
  returning: Array<Locations>;
};

type LocationsOnConflict = {
  constraint: LocationsConstraint;
  update_columns: Array<LocationsUpdateColumn>;
  where: InputMaybe<LocationsBoolExp>;
};

type LocationsOrderBy = {
  address: InputMaybe<OrderBy>;
  created_at: InputMaybe<OrderBy>;
  created_by: InputMaybe<OrderBy>;
  id: InputMaybe<OrderBy>;
  name: InputMaybe<OrderBy>;
  updated_at: InputMaybe<OrderBy>;
};

type LocationsPkColumnsInput = {
  id: Scalars['uuid'];
};

type LocationsSelectColumn =
  | 'address'
  | 'created_at'
  | 'created_by'
  | 'id'
  | 'name'
  | 'updated_at';

type LocationsSetInput = {
  address: InputMaybe<Scalars['String']>;
  created_at: InputMaybe<Scalars['timestamp']>;
  created_by: InputMaybe<Scalars['uuid']>;
  id: InputMaybe<Scalars['uuid']>;
  name: InputMaybe<Scalars['String']>;
  updated_at: InputMaybe<Scalars['timestamp']>;
};

type LocationsStreamCursorInput = {
  initial_value: LocationsStreamCursorValueInput;
  ordering: InputMaybe<CursorOrdering>;
};

type LocationsStreamCursorValueInput = {
  address: InputMaybe<Scalars['String']>;
  created_at: InputMaybe<Scalars['timestamp']>;
  created_by: InputMaybe<Scalars['uuid']>;
  id: InputMaybe<Scalars['uuid']>;
  name: InputMaybe<Scalars['String']>;
  updated_at: InputMaybe<Scalars['timestamp']>;
};

type LocationsUpdateColumn =
  | 'address'
  | 'created_at'
  | 'created_by'
  | 'id'
  | 'name'
  | 'updated_at';

type LocationsUpdates = {
  _set: InputMaybe<LocationsSetInput>;
  where: LocationsBoolExp;
};

type MutationRoot = {
  __typename?: 'mutation_root';
  delete_locations: Maybe<LocationsMutationResponse>;
  delete_locations_by_pk: Maybe<Locations>;
  delete_products: Maybe<ProductsMutationResponse>;
  delete_products_by_pk: Maybe<Products>;
  delete_roles: Maybe<RolesMutationResponse>;
  delete_roles_by_pk: Maybe<Roles>;
  delete_status: Maybe<StatusMutationResponse>;
  delete_status_by_pk: Maybe<Status>;
  delete_supplier_products: Maybe<SupplierProductsMutationResponse>;
  delete_supplier_products_by_pk: Maybe<SupplierProducts>;
  delete_suppliers: Maybe<SuppliersMutationResponse>;
  delete_suppliers_by_pk: Maybe<Suppliers>;
  delete_trader_products: Maybe<TraderProductsMutationResponse>;
  delete_trader_products_by_pk: Maybe<TraderProducts>;
  delete_trader_users: Maybe<TraderUsersMutationResponse>;
  delete_trader_users_by_pk: Maybe<TraderUsers>;
  delete_traders: Maybe<TradersMutationResponse>;
  delete_traders_by_pk: Maybe<Traders>;
  delete_user_credentials: Maybe<UserCredentialsMutationResponse>;
  delete_user_credentials_by_pk: Maybe<UserCredentials>;
  delete_user_tokens: Maybe<UserTokensMutationResponse>;
  delete_users: Maybe<UsersMutationResponse>;
  delete_users_by_pk: Maybe<Users>;
  insert_locations: Maybe<LocationsMutationResponse>;
  insert_locations_one: Maybe<Locations>;
  insert_products: Maybe<ProductsMutationResponse>;
  insert_products_one: Maybe<Products>;
  insert_roles: Maybe<RolesMutationResponse>;
  insert_roles_one: Maybe<Roles>;
  insert_status: Maybe<StatusMutationResponse>;
  insert_status_one: Maybe<Status>;
  insert_supplier_products: Maybe<SupplierProductsMutationResponse>;
  insert_supplier_products_one: Maybe<SupplierProducts>;
  insert_suppliers: Maybe<SuppliersMutationResponse>;
  insert_suppliers_one: Maybe<Suppliers>;
  insert_trader_products: Maybe<TraderProductsMutationResponse>;
  insert_trader_products_one: Maybe<TraderProducts>;
  insert_trader_users: Maybe<TraderUsersMutationResponse>;
  insert_trader_users_one: Maybe<TraderUsers>;
  insert_traders: Maybe<TradersMutationResponse>;
  insert_traders_one: Maybe<Traders>;
  insert_user_credentials: Maybe<UserCredentialsMutationResponse>;
  insert_user_credentials_one: Maybe<UserCredentials>;
  insert_user_tokens: Maybe<UserTokensMutationResponse>;
  insert_user_tokens_one: Maybe<UserTokens>;
  insert_users: Maybe<UsersMutationResponse>;
  insert_users_one: Maybe<Users>;
  update_locations: Maybe<LocationsMutationResponse>;
  update_locations_by_pk: Maybe<Locations>;
  update_locations_many: Maybe<Array<Maybe<LocationsMutationResponse>>>;
  update_products: Maybe<ProductsMutationResponse>;
  update_products_by_pk: Maybe<Products>;
  update_products_many: Maybe<Array<Maybe<ProductsMutationResponse>>>;
  update_roles: Maybe<RolesMutationResponse>;
  update_roles_by_pk: Maybe<Roles>;
  update_roles_many: Maybe<Array<Maybe<RolesMutationResponse>>>;
  update_status: Maybe<StatusMutationResponse>;
  update_status_by_pk: Maybe<Status>;
  update_status_many: Maybe<Array<Maybe<StatusMutationResponse>>>;
  update_supplier_products: Maybe<SupplierProductsMutationResponse>;
  update_supplier_products_by_pk: Maybe<SupplierProducts>;
  update_supplier_products_many: Maybe<Array<Maybe<SupplierProductsMutationResponse>>>;
  update_suppliers: Maybe<SuppliersMutationResponse>;
  update_suppliers_by_pk: Maybe<Suppliers>;
  update_suppliers_many: Maybe<Array<Maybe<SuppliersMutationResponse>>>;
  update_trader_products: Maybe<TraderProductsMutationResponse>;
  update_trader_products_by_pk: Maybe<TraderProducts>;
  update_trader_products_many: Maybe<Array<Maybe<TraderProductsMutationResponse>>>;
  update_trader_users: Maybe<TraderUsersMutationResponse>;
  update_trader_users_by_pk: Maybe<TraderUsers>;
  update_trader_users_many: Maybe<Array<Maybe<TraderUsersMutationResponse>>>;
  update_traders: Maybe<TradersMutationResponse>;
  update_traders_by_pk: Maybe<Traders>;
  update_traders_many: Maybe<Array<Maybe<TradersMutationResponse>>>;
  update_user_credentials: Maybe<UserCredentialsMutationResponse>;
  update_user_credentials_by_pk: Maybe<UserCredentials>;
  update_user_credentials_many: Maybe<Array<Maybe<UserCredentialsMutationResponse>>>;
  update_user_tokens: Maybe<UserTokensMutationResponse>;
  update_user_tokens_many: Maybe<Array<Maybe<UserTokensMutationResponse>>>;
  update_users: Maybe<UsersMutationResponse>;
  update_users_by_pk: Maybe<Users>;
  update_users_many: Maybe<Array<Maybe<UsersMutationResponse>>>;
};


type MutationRootDeleteLocationsArgs = {
  where: LocationsBoolExp;
};


type MutationRootDeleteLocationsByPkArgs = {
  id: Scalars['uuid'];
};


type MutationRootDeleteProductsArgs = {
  where: ProductsBoolExp;
};


type MutationRootDeleteProductsByPkArgs = {
  id: Scalars['uuid'];
};


type MutationRootDeleteRolesArgs = {
  where: RolesBoolExp;
};


type MutationRootDeleteRolesByPkArgs = {
  key: Scalars['String'];
};


type MutationRootDeleteStatusArgs = {
  where: StatusBoolExp;
};


type MutationRootDeleteStatusByPkArgs = {
  key: Scalars['String'];
};


type MutationRootDeleteSupplierProductsArgs = {
  where: SupplierProductsBoolExp;
};


type MutationRootDeleteSupplierProductsByPkArgs = {
  id: Scalars['uuid'];
};


type MutationRootDeleteSuppliersArgs = {
  where: SuppliersBoolExp;
};


type MutationRootDeleteSuppliersByPkArgs = {
  id: Scalars['uuid'];
};


type MutationRootDeleteTraderProductsArgs = {
  where: TraderProductsBoolExp;
};


type MutationRootDeleteTraderProductsByPkArgs = {
  id: Scalars['uuid'];
};


type MutationRootDeleteTraderUsersArgs = {
  where: TraderUsersBoolExp;
};


type MutationRootDeleteTraderUsersByPkArgs = {
  user_id: Scalars['uuid'];
};


type MutationRootDeleteTradersArgs = {
  where: TradersBoolExp;
};


type MutationRootDeleteTradersByPkArgs = {
  id: Scalars['uuid'];
};


type MutationRootDeleteUserCredentialsArgs = {
  where: UserCredentialsBoolExp;
};


type MutationRootDeleteUserCredentialsByPkArgs = {
  user_id: Scalars['uuid'];
};


type MutationRootDeleteUserTokensArgs = {
  where: UserTokensBoolExp;
};


type MutationRootDeleteUsersArgs = {
  where: UsersBoolExp;
};


type MutationRootDeleteUsersByPkArgs = {
  id: Scalars['uuid'];
};


type MutationRootInsertLocationsArgs = {
  objects: Array<LocationsInsertInput>;
  on_conflict: InputMaybe<LocationsOnConflict>;
};


type MutationRootInsertLocationsOneArgs = {
  object: LocationsInsertInput;
  on_conflict: InputMaybe<LocationsOnConflict>;
};


type MutationRootInsertProductsArgs = {
  objects: Array<ProductsInsertInput>;
  on_conflict: InputMaybe<ProductsOnConflict>;
};


type MutationRootInsertProductsOneArgs = {
  object: ProductsInsertInput;
  on_conflict: InputMaybe<ProductsOnConflict>;
};


type MutationRootInsertRolesArgs = {
  objects: Array<RolesInsertInput>;
  on_conflict: InputMaybe<RolesOnConflict>;
};


type MutationRootInsertRolesOneArgs = {
  object: RolesInsertInput;
  on_conflict: InputMaybe<RolesOnConflict>;
};


type MutationRootInsertStatusArgs = {
  objects: Array<StatusInsertInput>;
  on_conflict: InputMaybe<StatusOnConflict>;
};


type MutationRootInsertStatusOneArgs = {
  object: StatusInsertInput;
  on_conflict: InputMaybe<StatusOnConflict>;
};


type MutationRootInsertSupplierProductsArgs = {
  objects: Array<SupplierProductsInsertInput>;
  on_conflict: InputMaybe<SupplierProductsOnConflict>;
};


type MutationRootInsertSupplierProductsOneArgs = {
  object: SupplierProductsInsertInput;
  on_conflict: InputMaybe<SupplierProductsOnConflict>;
};


type MutationRootInsertSuppliersArgs = {
  objects: Array<SuppliersInsertInput>;
  on_conflict: InputMaybe<SuppliersOnConflict>;
};


type MutationRootInsertSuppliersOneArgs = {
  object: SuppliersInsertInput;
  on_conflict: InputMaybe<SuppliersOnConflict>;
};


type MutationRootInsertTraderProductsArgs = {
  objects: Array<TraderProductsInsertInput>;
  on_conflict: InputMaybe<TraderProductsOnConflict>;
};


type MutationRootInsertTraderProductsOneArgs = {
  object: TraderProductsInsertInput;
  on_conflict: InputMaybe<TraderProductsOnConflict>;
};


type MutationRootInsertTraderUsersArgs = {
  objects: Array<TraderUsersInsertInput>;
  on_conflict: InputMaybe<TraderUsersOnConflict>;
};


type MutationRootInsertTraderUsersOneArgs = {
  object: TraderUsersInsertInput;
  on_conflict: InputMaybe<TraderUsersOnConflict>;
};


type MutationRootInsertTradersArgs = {
  objects: Array<TradersInsertInput>;
  on_conflict: InputMaybe<TradersOnConflict>;
};


type MutationRootInsertTradersOneArgs = {
  object: TradersInsertInput;
  on_conflict: InputMaybe<TradersOnConflict>;
};


type MutationRootInsertUserCredentialsArgs = {
  objects: Array<UserCredentialsInsertInput>;
  on_conflict: InputMaybe<UserCredentialsOnConflict>;
};


type MutationRootInsertUserCredentialsOneArgs = {
  object: UserCredentialsInsertInput;
  on_conflict: InputMaybe<UserCredentialsOnConflict>;
};


type MutationRootInsertUserTokensArgs = {
  objects: Array<UserTokensInsertInput>;
};


type MutationRootInsertUserTokensOneArgs = {
  object: UserTokensInsertInput;
};


type MutationRootInsertUsersArgs = {
  objects: Array<UsersInsertInput>;
  on_conflict: InputMaybe<UsersOnConflict>;
};


type MutationRootInsertUsersOneArgs = {
  object: UsersInsertInput;
  on_conflict: InputMaybe<UsersOnConflict>;
};


type MutationRootUpdateLocationsArgs = {
  _set: InputMaybe<LocationsSetInput>;
  where: LocationsBoolExp;
};


type MutationRootUpdateLocationsByPkArgs = {
  _set: InputMaybe<LocationsSetInput>;
  pk_columns: LocationsPkColumnsInput;
};


type MutationRootUpdateLocationsManyArgs = {
  updates: Array<LocationsUpdates>;
};


type MutationRootUpdateProductsArgs = {
  _set: InputMaybe<ProductsSetInput>;
  where: ProductsBoolExp;
};


type MutationRootUpdateProductsByPkArgs = {
  _set: InputMaybe<ProductsSetInput>;
  pk_columns: ProductsPkColumnsInput;
};


type MutationRootUpdateProductsManyArgs = {
  updates: Array<ProductsUpdates>;
};


type MutationRootUpdateRolesArgs = {
  _set: InputMaybe<RolesSetInput>;
  where: RolesBoolExp;
};


type MutationRootUpdateRolesByPkArgs = {
  _set: InputMaybe<RolesSetInput>;
  pk_columns: RolesPkColumnsInput;
};


type MutationRootUpdateRolesManyArgs = {
  updates: Array<RolesUpdates>;
};


type MutationRootUpdateStatusArgs = {
  _set: InputMaybe<StatusSetInput>;
  where: StatusBoolExp;
};


type MutationRootUpdateStatusByPkArgs = {
  _set: InputMaybe<StatusSetInput>;
  pk_columns: StatusPkColumnsInput;
};


type MutationRootUpdateStatusManyArgs = {
  updates: Array<StatusUpdates>;
};


type MutationRootUpdateSupplierProductsArgs = {
  _inc: InputMaybe<SupplierProductsIncInput>;
  _set: InputMaybe<SupplierProductsSetInput>;
  where: SupplierProductsBoolExp;
};


type MutationRootUpdateSupplierProductsByPkArgs = {
  _inc: InputMaybe<SupplierProductsIncInput>;
  _set: InputMaybe<SupplierProductsSetInput>;
  pk_columns: SupplierProductsPkColumnsInput;
};


type MutationRootUpdateSupplierProductsManyArgs = {
  updates: Array<SupplierProductsUpdates>;
};


type MutationRootUpdateSuppliersArgs = {
  _set: InputMaybe<SuppliersSetInput>;
  where: SuppliersBoolExp;
};


type MutationRootUpdateSuppliersByPkArgs = {
  _set: InputMaybe<SuppliersSetInput>;
  pk_columns: SuppliersPkColumnsInput;
};


type MutationRootUpdateSuppliersManyArgs = {
  updates: Array<SuppliersUpdates>;
};


type MutationRootUpdateTraderProductsArgs = {
  _inc: InputMaybe<TraderProductsIncInput>;
  _set: InputMaybe<TraderProductsSetInput>;
  where: TraderProductsBoolExp;
};


type MutationRootUpdateTraderProductsByPkArgs = {
  _inc: InputMaybe<TraderProductsIncInput>;
  _set: InputMaybe<TraderProductsSetInput>;
  pk_columns: TraderProductsPkColumnsInput;
};


type MutationRootUpdateTraderProductsManyArgs = {
  updates: Array<TraderProductsUpdates>;
};


type MutationRootUpdateTraderUsersArgs = {
  _set: InputMaybe<TraderUsersSetInput>;
  where: TraderUsersBoolExp;
};


type MutationRootUpdateTraderUsersByPkArgs = {
  _set: InputMaybe<TraderUsersSetInput>;
  pk_columns: TraderUsersPkColumnsInput;
};


type MutationRootUpdateTraderUsersManyArgs = {
  updates: Array<TraderUsersUpdates>;
};


type MutationRootUpdateTradersArgs = {
  _set: InputMaybe<TradersSetInput>;
  where: TradersBoolExp;
};


type MutationRootUpdateTradersByPkArgs = {
  _set: InputMaybe<TradersSetInput>;
  pk_columns: TradersPkColumnsInput;
};


type MutationRootUpdateTradersManyArgs = {
  updates: Array<TradersUpdates>;
};


type MutationRootUpdateUserCredentialsArgs = {
  _set: InputMaybe<UserCredentialsSetInput>;
  where: UserCredentialsBoolExp;
};


type MutationRootUpdateUserCredentialsByPkArgs = {
  _set: InputMaybe<UserCredentialsSetInput>;
  pk_columns: UserCredentialsPkColumnsInput;
};


type MutationRootUpdateUserCredentialsManyArgs = {
  updates: Array<UserCredentialsUpdates>;
};


type MutationRootUpdateUserTokensArgs = {
  _set: InputMaybe<UserTokensSetInput>;
  where: UserTokensBoolExp;
};


type MutationRootUpdateUserTokensManyArgs = {
  updates: Array<UserTokensUpdates>;
};


type MutationRootUpdateUsersArgs = {
  _set: InputMaybe<UsersSetInput>;
  where: UsersBoolExp;
};


type MutationRootUpdateUsersByPkArgs = {
  _set: InputMaybe<UsersSetInput>;
  pk_columns: UsersPkColumnsInput;
};


type MutationRootUpdateUsersManyArgs = {
  updates: Array<UsersUpdates>;
};

type NumericComparisonExp = {
  _eq: InputMaybe<Scalars['numeric']>;
  _gt: InputMaybe<Scalars['numeric']>;
  _gte: InputMaybe<Scalars['numeric']>;
  _in: InputMaybe<Array<Scalars['numeric']>>;
  _is_null: InputMaybe<Scalars['Boolean']>;
  _lt: InputMaybe<Scalars['numeric']>;
  _lte: InputMaybe<Scalars['numeric']>;
  _neq: InputMaybe<Scalars['numeric']>;
  _nin: InputMaybe<Array<Scalars['numeric']>>;
};

type OrderBy =
  | 'asc'
  | 'asc_nulls_first'
  | 'asc_nulls_last'
  | 'desc'
  | 'desc_nulls_first'
  | 'desc_nulls_last';

type Products = {
  __typename?: 'products';
  created_at: Scalars['timestamp'];
  description: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  name: Maybe<Scalars['String']>;
  updated_at: Maybe<Scalars['timestamp']>;
};

type ProductsAggregate = {
  __typename?: 'products_aggregate';
  aggregate: Maybe<ProductsAggregateFields>;
  nodes: Array<Products>;
};

type ProductsAggregateFields = {
  __typename?: 'products_aggregate_fields';
  count: Scalars['Int'];
  max: Maybe<ProductsMaxFields>;
  min: Maybe<ProductsMinFields>;
};


type ProductsAggregateFieldsCountArgs = {
  columns: InputMaybe<Array<ProductsSelectColumn>>;
  distinct: InputMaybe<Scalars['Boolean']>;
};

type ProductsBoolExp = {
  _and: InputMaybe<Array<ProductsBoolExp>>;
  _not: InputMaybe<ProductsBoolExp>;
  _or: InputMaybe<Array<ProductsBoolExp>>;
  created_at: InputMaybe<TimestampComparisonExp>;
  description: InputMaybe<StringComparisonExp>;
  id: InputMaybe<UuidComparisonExp>;
  name: InputMaybe<StringComparisonExp>;
  updated_at: InputMaybe<TimestampComparisonExp>;
};

type ProductsConstraint =
  | 'products_pkey';

type ProductsInsertInput = {
  created_at: InputMaybe<Scalars['timestamp']>;
  description: InputMaybe<Scalars['String']>;
  id: InputMaybe<Scalars['uuid']>;
  name: InputMaybe<Scalars['String']>;
  updated_at: InputMaybe<Scalars['timestamp']>;
};

type ProductsMaxFields = {
  __typename?: 'products_max_fields';
  created_at: Maybe<Scalars['timestamp']>;
  description: Maybe<Scalars['String']>;
  id: Maybe<Scalars['uuid']>;
  name: Maybe<Scalars['String']>;
  updated_at: Maybe<Scalars['timestamp']>;
};

type ProductsMinFields = {
  __typename?: 'products_min_fields';
  created_at: Maybe<Scalars['timestamp']>;
  description: Maybe<Scalars['String']>;
  id: Maybe<Scalars['uuid']>;
  name: Maybe<Scalars['String']>;
  updated_at: Maybe<Scalars['timestamp']>;
};

type ProductsMutationResponse = {
  __typename?: 'products_mutation_response';
  affected_rows: Scalars['Int'];
  returning: Array<Products>;
};

type ProductsObjRelInsertInput = {
  data: ProductsInsertInput;
  on_conflict: InputMaybe<ProductsOnConflict>;
};

type ProductsOnConflict = {
  constraint: ProductsConstraint;
  update_columns: Array<ProductsUpdateColumn>;
  where: InputMaybe<ProductsBoolExp>;
};

type ProductsOrderBy = {
  created_at: InputMaybe<OrderBy>;
  description: InputMaybe<OrderBy>;
  id: InputMaybe<OrderBy>;
  name: InputMaybe<OrderBy>;
  updated_at: InputMaybe<OrderBy>;
};

type ProductsPkColumnsInput = {
  id: Scalars['uuid'];
};

type ProductsSelectColumn =
  | 'created_at'
  | 'description'
  | 'id'
  | 'name'
  | 'updated_at';

type ProductsSetInput = {
  created_at: InputMaybe<Scalars['timestamp']>;
  description: InputMaybe<Scalars['String']>;
  id: InputMaybe<Scalars['uuid']>;
  name: InputMaybe<Scalars['String']>;
  updated_at: InputMaybe<Scalars['timestamp']>;
};

type ProductsStreamCursorInput = {
  initial_value: ProductsStreamCursorValueInput;
  ordering: InputMaybe<CursorOrdering>;
};

type ProductsStreamCursorValueInput = {
  created_at: InputMaybe<Scalars['timestamp']>;
  description: InputMaybe<Scalars['String']>;
  id: InputMaybe<Scalars['uuid']>;
  name: InputMaybe<Scalars['String']>;
  updated_at: InputMaybe<Scalars['timestamp']>;
};

type ProductsUpdateColumn =
  | 'created_at'
  | 'description'
  | 'id'
  | 'name'
  | 'updated_at';

type ProductsUpdates = {
  _set: InputMaybe<ProductsSetInput>;
  where: ProductsBoolExp;
};

type QueryRoot = {
  __typename?: 'query_root';
  authenticate: Maybe<Users>;
  authenticate_aggregate: UsersAggregate;
  locations: Array<Locations>;
  locations_aggregate: LocationsAggregate;
  locations_by_pk: Maybe<Locations>;
  products: Array<Products>;
  products_aggregate: ProductsAggregate;
  products_by_pk: Maybe<Products>;
  roles: Array<Roles>;
  roles_aggregate: RolesAggregate;
  roles_by_pk: Maybe<Roles>;
  status: Array<Status>;
  status_aggregate: StatusAggregate;
  status_by_pk: Maybe<Status>;
  supplier_products: Array<SupplierProducts>;
  supplier_products_aggregate: SupplierProductsAggregate;
  supplier_products_by_pk: Maybe<SupplierProducts>;
  suppliers: Array<Suppliers>;
  suppliers_aggregate: SuppliersAggregate;
  suppliers_by_pk: Maybe<Suppliers>;
  trader_products: Array<TraderProducts>;
  trader_products_aggregate: TraderProductsAggregate;
  trader_products_by_pk: Maybe<TraderProducts>;
  trader_users: Array<TraderUsers>;
  trader_users_aggregate: TraderUsersAggregate;
  trader_users_by_pk: Maybe<TraderUsers>;
  traders: Array<Traders>;
  traders_aggregate: TradersAggregate;
  traders_by_pk: Maybe<Traders>;
  user_credentials: Array<UserCredentials>;
  user_credentials_aggregate: UserCredentialsAggregate;
  user_credentials_by_pk: Maybe<UserCredentials>;
  user_tokens: Array<UserTokens>;
  user_tokens_aggregate: UserTokensAggregate;
  users: Array<Users>;
  users_aggregate: UsersAggregate;
  users_by_pk: Maybe<Users>;
};


type QueryRootAuthenticateArgs = {
  args: AuthenticateArgs;
  distinct_on: InputMaybe<Array<UsersSelectColumn>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<UsersOrderBy>>;
  where: InputMaybe<UsersBoolExp>;
};


type QueryRootAuthenticateAggregateArgs = {
  args: AuthenticateArgs;
  distinct_on: InputMaybe<Array<UsersSelectColumn>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<UsersOrderBy>>;
  where: InputMaybe<UsersBoolExp>;
};


type QueryRootLocationsArgs = {
  distinct_on: InputMaybe<Array<LocationsSelectColumn>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<LocationsOrderBy>>;
  where: InputMaybe<LocationsBoolExp>;
};


type QueryRootLocationsAggregateArgs = {
  distinct_on: InputMaybe<Array<LocationsSelectColumn>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<LocationsOrderBy>>;
  where: InputMaybe<LocationsBoolExp>;
};


type QueryRootLocationsByPkArgs = {
  id: Scalars['uuid'];
};


type QueryRootProductsArgs = {
  distinct_on: InputMaybe<Array<ProductsSelectColumn>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<ProductsOrderBy>>;
  where: InputMaybe<ProductsBoolExp>;
};


type QueryRootProductsAggregateArgs = {
  distinct_on: InputMaybe<Array<ProductsSelectColumn>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<ProductsOrderBy>>;
  where: InputMaybe<ProductsBoolExp>;
};


type QueryRootProductsByPkArgs = {
  id: Scalars['uuid'];
};


type QueryRootRolesArgs = {
  distinct_on: InputMaybe<Array<RolesSelectColumn>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<RolesOrderBy>>;
  where: InputMaybe<RolesBoolExp>;
};


type QueryRootRolesAggregateArgs = {
  distinct_on: InputMaybe<Array<RolesSelectColumn>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<RolesOrderBy>>;
  where: InputMaybe<RolesBoolExp>;
};


type QueryRootRolesByPkArgs = {
  key: Scalars['String'];
};


type QueryRootStatusArgs = {
  distinct_on: InputMaybe<Array<StatusSelectColumn>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<StatusOrderBy>>;
  where: InputMaybe<StatusBoolExp>;
};


type QueryRootStatusAggregateArgs = {
  distinct_on: InputMaybe<Array<StatusSelectColumn>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<StatusOrderBy>>;
  where: InputMaybe<StatusBoolExp>;
};


type QueryRootStatusByPkArgs = {
  key: Scalars['String'];
};


type QueryRootSupplierProductsArgs = {
  distinct_on: InputMaybe<Array<SupplierProductsSelectColumn>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<SupplierProductsOrderBy>>;
  where: InputMaybe<SupplierProductsBoolExp>;
};


type QueryRootSupplierProductsAggregateArgs = {
  distinct_on: InputMaybe<Array<SupplierProductsSelectColumn>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<SupplierProductsOrderBy>>;
  where: InputMaybe<SupplierProductsBoolExp>;
};


type QueryRootSupplierProductsByPkArgs = {
  id: Scalars['uuid'];
};


type QueryRootSuppliersArgs = {
  distinct_on: InputMaybe<Array<SuppliersSelectColumn>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<SuppliersOrderBy>>;
  where: InputMaybe<SuppliersBoolExp>;
};


type QueryRootSuppliersAggregateArgs = {
  distinct_on: InputMaybe<Array<SuppliersSelectColumn>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<SuppliersOrderBy>>;
  where: InputMaybe<SuppliersBoolExp>;
};


type QueryRootSuppliersByPkArgs = {
  id: Scalars['uuid'];
};


type QueryRootTraderProductsArgs = {
  distinct_on: InputMaybe<Array<TraderProductsSelectColumn>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<TraderProductsOrderBy>>;
  where: InputMaybe<TraderProductsBoolExp>;
};


type QueryRootTraderProductsAggregateArgs = {
  distinct_on: InputMaybe<Array<TraderProductsSelectColumn>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<TraderProductsOrderBy>>;
  where: InputMaybe<TraderProductsBoolExp>;
};


type QueryRootTraderProductsByPkArgs = {
  id: Scalars['uuid'];
};


type QueryRootTraderUsersArgs = {
  distinct_on: InputMaybe<Array<TraderUsersSelectColumn>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<TraderUsersOrderBy>>;
  where: InputMaybe<TraderUsersBoolExp>;
};


type QueryRootTraderUsersAggregateArgs = {
  distinct_on: InputMaybe<Array<TraderUsersSelectColumn>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<TraderUsersOrderBy>>;
  where: InputMaybe<TraderUsersBoolExp>;
};


type QueryRootTraderUsersByPkArgs = {
  user_id: Scalars['uuid'];
};


type QueryRootTradersArgs = {
  distinct_on: InputMaybe<Array<TradersSelectColumn>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<TradersOrderBy>>;
  where: InputMaybe<TradersBoolExp>;
};


type QueryRootTradersAggregateArgs = {
  distinct_on: InputMaybe<Array<TradersSelectColumn>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<TradersOrderBy>>;
  where: InputMaybe<TradersBoolExp>;
};


type QueryRootTradersByPkArgs = {
  id: Scalars['uuid'];
};


type QueryRootUserCredentialsArgs = {
  distinct_on: InputMaybe<Array<UserCredentialsSelectColumn>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<UserCredentialsOrderBy>>;
  where: InputMaybe<UserCredentialsBoolExp>;
};


type QueryRootUserCredentialsAggregateArgs = {
  distinct_on: InputMaybe<Array<UserCredentialsSelectColumn>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<UserCredentialsOrderBy>>;
  where: InputMaybe<UserCredentialsBoolExp>;
};


type QueryRootUserCredentialsByPkArgs = {
  user_id: Scalars['uuid'];
};


type QueryRootUserTokensArgs = {
  distinct_on: InputMaybe<Array<UserTokensSelectColumn>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<UserTokensOrderBy>>;
  where: InputMaybe<UserTokensBoolExp>;
};


type QueryRootUserTokensAggregateArgs = {
  distinct_on: InputMaybe<Array<UserTokensSelectColumn>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<UserTokensOrderBy>>;
  where: InputMaybe<UserTokensBoolExp>;
};


type QueryRootUsersArgs = {
  distinct_on: InputMaybe<Array<UsersSelectColumn>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<UsersOrderBy>>;
  where: InputMaybe<UsersBoolExp>;
};


type QueryRootUsersAggregateArgs = {
  distinct_on: InputMaybe<Array<UsersSelectColumn>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<UsersOrderBy>>;
  where: InputMaybe<UsersBoolExp>;
};


type QueryRootUsersByPkArgs = {
  id: Scalars['uuid'];
};

type Roles = {
  __typename?: 'roles';
  description: Scalars['String'];
  key: Scalars['String'];
};

type RolesAggregate = {
  __typename?: 'roles_aggregate';
  aggregate: Maybe<RolesAggregateFields>;
  nodes: Array<Roles>;
};

type RolesAggregateFields = {
  __typename?: 'roles_aggregate_fields';
  count: Scalars['Int'];
  max: Maybe<RolesMaxFields>;
  min: Maybe<RolesMinFields>;
};


type RolesAggregateFieldsCountArgs = {
  columns: InputMaybe<Array<RolesSelectColumn>>;
  distinct: InputMaybe<Scalars['Boolean']>;
};

type RolesBoolExp = {
  _and: InputMaybe<Array<RolesBoolExp>>;
  _not: InputMaybe<RolesBoolExp>;
  _or: InputMaybe<Array<RolesBoolExp>>;
  description: InputMaybe<StringComparisonExp>;
  key: InputMaybe<StringComparisonExp>;
};

type RolesConstraint =
  | 'roles_pkey';

type RolesEnum =
  | 'ADMIN'
  | 'CLERK'
  | 'OWNER'
  | 'STAFF'
  | 'USER';

type RolesEnumComparisonExp = {
  _eq: InputMaybe<RolesEnum>;
  _in: InputMaybe<Array<RolesEnum>>;
  _is_null: InputMaybe<Scalars['Boolean']>;
  _neq: InputMaybe<RolesEnum>;
  _nin: InputMaybe<Array<RolesEnum>>;
};

type RolesInsertInput = {
  description: InputMaybe<Scalars['String']>;
  key: InputMaybe<Scalars['String']>;
};

type RolesMaxFields = {
  __typename?: 'roles_max_fields';
  description: Maybe<Scalars['String']>;
  key: Maybe<Scalars['String']>;
};

type RolesMinFields = {
  __typename?: 'roles_min_fields';
  description: Maybe<Scalars['String']>;
  key: Maybe<Scalars['String']>;
};

type RolesMutationResponse = {
  __typename?: 'roles_mutation_response';
  affected_rows: Scalars['Int'];
  returning: Array<Roles>;
};

type RolesOnConflict = {
  constraint: RolesConstraint;
  update_columns: Array<RolesUpdateColumn>;
  where: InputMaybe<RolesBoolExp>;
};

type RolesOrderBy = {
  description: InputMaybe<OrderBy>;
  key: InputMaybe<OrderBy>;
};

type RolesPkColumnsInput = {
  key: Scalars['String'];
};

type RolesSelectColumn =
  | 'description'
  | 'key';

type RolesSetInput = {
  description: InputMaybe<Scalars['String']>;
  key: InputMaybe<Scalars['String']>;
};

type RolesStreamCursorInput = {
  initial_value: RolesStreamCursorValueInput;
  ordering: InputMaybe<CursorOrdering>;
};

type RolesStreamCursorValueInput = {
  description: InputMaybe<Scalars['String']>;
  key: InputMaybe<Scalars['String']>;
};

type RolesUpdateColumn =
  | 'description'
  | 'key';

type RolesUpdates = {
  _set: InputMaybe<RolesSetInput>;
  where: RolesBoolExp;
};

type Status = {
  __typename?: 'status';
  description: Scalars['String'];
  key: Scalars['String'];
};

type StatusAggregate = {
  __typename?: 'status_aggregate';
  aggregate: Maybe<StatusAggregateFields>;
  nodes: Array<Status>;
};

type StatusAggregateFields = {
  __typename?: 'status_aggregate_fields';
  count: Scalars['Int'];
  max: Maybe<StatusMaxFields>;
  min: Maybe<StatusMinFields>;
};


type StatusAggregateFieldsCountArgs = {
  columns: InputMaybe<Array<StatusSelectColumn>>;
  distinct: InputMaybe<Scalars['Boolean']>;
};

type StatusBoolExp = {
  _and: InputMaybe<Array<StatusBoolExp>>;
  _not: InputMaybe<StatusBoolExp>;
  _or: InputMaybe<Array<StatusBoolExp>>;
  description: InputMaybe<StringComparisonExp>;
  key: InputMaybe<StringComparisonExp>;
};

type StatusConstraint =
  | 'status_pkey';

type StatusEnum =
  | 'DISABLED'
  | 'ENABLED'
  | 'PENDING';

type StatusEnumComparisonExp = {
  _eq: InputMaybe<StatusEnum>;
  _in: InputMaybe<Array<StatusEnum>>;
  _is_null: InputMaybe<Scalars['Boolean']>;
  _neq: InputMaybe<StatusEnum>;
  _nin: InputMaybe<Array<StatusEnum>>;
};

type StatusInsertInput = {
  description: InputMaybe<Scalars['String']>;
  key: InputMaybe<Scalars['String']>;
};

type StatusMaxFields = {
  __typename?: 'status_max_fields';
  description: Maybe<Scalars['String']>;
  key: Maybe<Scalars['String']>;
};

type StatusMinFields = {
  __typename?: 'status_min_fields';
  description: Maybe<Scalars['String']>;
  key: Maybe<Scalars['String']>;
};

type StatusMutationResponse = {
  __typename?: 'status_mutation_response';
  affected_rows: Scalars['Int'];
  returning: Array<Status>;
};

type StatusOnConflict = {
  constraint: StatusConstraint;
  update_columns: Array<StatusUpdateColumn>;
  where: InputMaybe<StatusBoolExp>;
};

type StatusOrderBy = {
  description: InputMaybe<OrderBy>;
  key: InputMaybe<OrderBy>;
};

type StatusPkColumnsInput = {
  key: Scalars['String'];
};

type StatusSelectColumn =
  | 'description'
  | 'key';

type StatusSetInput = {
  description: InputMaybe<Scalars['String']>;
  key: InputMaybe<Scalars['String']>;
};

type StatusStreamCursorInput = {
  initial_value: StatusStreamCursorValueInput;
  ordering: InputMaybe<CursorOrdering>;
};

type StatusStreamCursorValueInput = {
  description: InputMaybe<Scalars['String']>;
  key: InputMaybe<Scalars['String']>;
};

type StatusUpdateColumn =
  | 'description'
  | 'key';

type StatusUpdates = {
  _set: InputMaybe<StatusSetInput>;
  where: StatusBoolExp;
};

type SubscriptionRoot = {
  __typename?: 'subscription_root';
  authenticate: Maybe<Users>;
  authenticate_aggregate: UsersAggregate;
  locations: Array<Locations>;
  locations_aggregate: LocationsAggregate;
  locations_by_pk: Maybe<Locations>;
  locations_stream: Array<Locations>;
  products: Array<Products>;
  products_aggregate: ProductsAggregate;
  products_by_pk: Maybe<Products>;
  products_stream: Array<Products>;
  roles: Array<Roles>;
  roles_aggregate: RolesAggregate;
  roles_by_pk: Maybe<Roles>;
  roles_stream: Array<Roles>;
  status: Array<Status>;
  status_aggregate: StatusAggregate;
  status_by_pk: Maybe<Status>;
  status_stream: Array<Status>;
  supplier_products: Array<SupplierProducts>;
  supplier_products_aggregate: SupplierProductsAggregate;
  supplier_products_by_pk: Maybe<SupplierProducts>;
  supplier_products_stream: Array<SupplierProducts>;
  suppliers: Array<Suppliers>;
  suppliers_aggregate: SuppliersAggregate;
  suppliers_by_pk: Maybe<Suppliers>;
  suppliers_stream: Array<Suppliers>;
  trader_products: Array<TraderProducts>;
  trader_products_aggregate: TraderProductsAggregate;
  trader_products_by_pk: Maybe<TraderProducts>;
  trader_products_stream: Array<TraderProducts>;
  trader_users: Array<TraderUsers>;
  trader_users_aggregate: TraderUsersAggregate;
  trader_users_by_pk: Maybe<TraderUsers>;
  trader_users_stream: Array<TraderUsers>;
  traders: Array<Traders>;
  traders_aggregate: TradersAggregate;
  traders_by_pk: Maybe<Traders>;
  traders_stream: Array<Traders>;
  user_credentials: Array<UserCredentials>;
  user_credentials_aggregate: UserCredentialsAggregate;
  user_credentials_by_pk: Maybe<UserCredentials>;
  user_credentials_stream: Array<UserCredentials>;
  user_tokens: Array<UserTokens>;
  user_tokens_aggregate: UserTokensAggregate;
  user_tokens_stream: Array<UserTokens>;
  users: Array<Users>;
  users_aggregate: UsersAggregate;
  users_by_pk: Maybe<Users>;
  users_stream: Array<Users>;
};


type SubscriptionRootAuthenticateArgs = {
  args: AuthenticateArgs;
  distinct_on: InputMaybe<Array<UsersSelectColumn>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<UsersOrderBy>>;
  where: InputMaybe<UsersBoolExp>;
};


type SubscriptionRootAuthenticateAggregateArgs = {
  args: AuthenticateArgs;
  distinct_on: InputMaybe<Array<UsersSelectColumn>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<UsersOrderBy>>;
  where: InputMaybe<UsersBoolExp>;
};


type SubscriptionRootLocationsArgs = {
  distinct_on: InputMaybe<Array<LocationsSelectColumn>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<LocationsOrderBy>>;
  where: InputMaybe<LocationsBoolExp>;
};


type SubscriptionRootLocationsAggregateArgs = {
  distinct_on: InputMaybe<Array<LocationsSelectColumn>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<LocationsOrderBy>>;
  where: InputMaybe<LocationsBoolExp>;
};


type SubscriptionRootLocationsByPkArgs = {
  id: Scalars['uuid'];
};


type SubscriptionRootLocationsStreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<LocationsStreamCursorInput>>;
  where: InputMaybe<LocationsBoolExp>;
};


type SubscriptionRootProductsArgs = {
  distinct_on: InputMaybe<Array<ProductsSelectColumn>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<ProductsOrderBy>>;
  where: InputMaybe<ProductsBoolExp>;
};


type SubscriptionRootProductsAggregateArgs = {
  distinct_on: InputMaybe<Array<ProductsSelectColumn>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<ProductsOrderBy>>;
  where: InputMaybe<ProductsBoolExp>;
};


type SubscriptionRootProductsByPkArgs = {
  id: Scalars['uuid'];
};


type SubscriptionRootProductsStreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<ProductsStreamCursorInput>>;
  where: InputMaybe<ProductsBoolExp>;
};


type SubscriptionRootRolesArgs = {
  distinct_on: InputMaybe<Array<RolesSelectColumn>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<RolesOrderBy>>;
  where: InputMaybe<RolesBoolExp>;
};


type SubscriptionRootRolesAggregateArgs = {
  distinct_on: InputMaybe<Array<RolesSelectColumn>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<RolesOrderBy>>;
  where: InputMaybe<RolesBoolExp>;
};


type SubscriptionRootRolesByPkArgs = {
  key: Scalars['String'];
};


type SubscriptionRootRolesStreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<RolesStreamCursorInput>>;
  where: InputMaybe<RolesBoolExp>;
};


type SubscriptionRootStatusArgs = {
  distinct_on: InputMaybe<Array<StatusSelectColumn>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<StatusOrderBy>>;
  where: InputMaybe<StatusBoolExp>;
};


type SubscriptionRootStatusAggregateArgs = {
  distinct_on: InputMaybe<Array<StatusSelectColumn>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<StatusOrderBy>>;
  where: InputMaybe<StatusBoolExp>;
};


type SubscriptionRootStatusByPkArgs = {
  key: Scalars['String'];
};


type SubscriptionRootStatusStreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<StatusStreamCursorInput>>;
  where: InputMaybe<StatusBoolExp>;
};


type SubscriptionRootSupplierProductsArgs = {
  distinct_on: InputMaybe<Array<SupplierProductsSelectColumn>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<SupplierProductsOrderBy>>;
  where: InputMaybe<SupplierProductsBoolExp>;
};


type SubscriptionRootSupplierProductsAggregateArgs = {
  distinct_on: InputMaybe<Array<SupplierProductsSelectColumn>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<SupplierProductsOrderBy>>;
  where: InputMaybe<SupplierProductsBoolExp>;
};


type SubscriptionRootSupplierProductsByPkArgs = {
  id: Scalars['uuid'];
};


type SubscriptionRootSupplierProductsStreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<SupplierProductsStreamCursorInput>>;
  where: InputMaybe<SupplierProductsBoolExp>;
};


type SubscriptionRootSuppliersArgs = {
  distinct_on: InputMaybe<Array<SuppliersSelectColumn>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<SuppliersOrderBy>>;
  where: InputMaybe<SuppliersBoolExp>;
};


type SubscriptionRootSuppliersAggregateArgs = {
  distinct_on: InputMaybe<Array<SuppliersSelectColumn>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<SuppliersOrderBy>>;
  where: InputMaybe<SuppliersBoolExp>;
};


type SubscriptionRootSuppliersByPkArgs = {
  id: Scalars['uuid'];
};


type SubscriptionRootSuppliersStreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<SuppliersStreamCursorInput>>;
  where: InputMaybe<SuppliersBoolExp>;
};


type SubscriptionRootTraderProductsArgs = {
  distinct_on: InputMaybe<Array<TraderProductsSelectColumn>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<TraderProductsOrderBy>>;
  where: InputMaybe<TraderProductsBoolExp>;
};


type SubscriptionRootTraderProductsAggregateArgs = {
  distinct_on: InputMaybe<Array<TraderProductsSelectColumn>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<TraderProductsOrderBy>>;
  where: InputMaybe<TraderProductsBoolExp>;
};


type SubscriptionRootTraderProductsByPkArgs = {
  id: Scalars['uuid'];
};


type SubscriptionRootTraderProductsStreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<TraderProductsStreamCursorInput>>;
  where: InputMaybe<TraderProductsBoolExp>;
};


type SubscriptionRootTraderUsersArgs = {
  distinct_on: InputMaybe<Array<TraderUsersSelectColumn>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<TraderUsersOrderBy>>;
  where: InputMaybe<TraderUsersBoolExp>;
};


type SubscriptionRootTraderUsersAggregateArgs = {
  distinct_on: InputMaybe<Array<TraderUsersSelectColumn>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<TraderUsersOrderBy>>;
  where: InputMaybe<TraderUsersBoolExp>;
};


type SubscriptionRootTraderUsersByPkArgs = {
  user_id: Scalars['uuid'];
};


type SubscriptionRootTraderUsersStreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<TraderUsersStreamCursorInput>>;
  where: InputMaybe<TraderUsersBoolExp>;
};


type SubscriptionRootTradersArgs = {
  distinct_on: InputMaybe<Array<TradersSelectColumn>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<TradersOrderBy>>;
  where: InputMaybe<TradersBoolExp>;
};


type SubscriptionRootTradersAggregateArgs = {
  distinct_on: InputMaybe<Array<TradersSelectColumn>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<TradersOrderBy>>;
  where: InputMaybe<TradersBoolExp>;
};


type SubscriptionRootTradersByPkArgs = {
  id: Scalars['uuid'];
};


type SubscriptionRootTradersStreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<TradersStreamCursorInput>>;
  where: InputMaybe<TradersBoolExp>;
};


type SubscriptionRootUserCredentialsArgs = {
  distinct_on: InputMaybe<Array<UserCredentialsSelectColumn>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<UserCredentialsOrderBy>>;
  where: InputMaybe<UserCredentialsBoolExp>;
};


type SubscriptionRootUserCredentialsAggregateArgs = {
  distinct_on: InputMaybe<Array<UserCredentialsSelectColumn>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<UserCredentialsOrderBy>>;
  where: InputMaybe<UserCredentialsBoolExp>;
};


type SubscriptionRootUserCredentialsByPkArgs = {
  user_id: Scalars['uuid'];
};


type SubscriptionRootUserCredentialsStreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<UserCredentialsStreamCursorInput>>;
  where: InputMaybe<UserCredentialsBoolExp>;
};


type SubscriptionRootUserTokensArgs = {
  distinct_on: InputMaybe<Array<UserTokensSelectColumn>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<UserTokensOrderBy>>;
  where: InputMaybe<UserTokensBoolExp>;
};


type SubscriptionRootUserTokensAggregateArgs = {
  distinct_on: InputMaybe<Array<UserTokensSelectColumn>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<UserTokensOrderBy>>;
  where: InputMaybe<UserTokensBoolExp>;
};


type SubscriptionRootUserTokensStreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<UserTokensStreamCursorInput>>;
  where: InputMaybe<UserTokensBoolExp>;
};


type SubscriptionRootUsersArgs = {
  distinct_on: InputMaybe<Array<UsersSelectColumn>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<UsersOrderBy>>;
  where: InputMaybe<UsersBoolExp>;
};


type SubscriptionRootUsersAggregateArgs = {
  distinct_on: InputMaybe<Array<UsersSelectColumn>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<UsersOrderBy>>;
  where: InputMaybe<UsersBoolExp>;
};


type SubscriptionRootUsersByPkArgs = {
  id: Scalars['uuid'];
};


type SubscriptionRootUsersStreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<UsersStreamCursorInput>>;
  where: InputMaybe<UsersBoolExp>;
};

type SupplierProducts = {
  __typename?: 'supplier_products';
  created_at: Scalars['timestamp'];
  id: Scalars['uuid'];
  price: Maybe<Scalars['numeric']>;
  product: Products;
  product_id: Scalars['uuid'];
  supplier_id: Scalars['uuid'];
  unit: Maybe<Scalars['String']>;
};

type SupplierProductsAggregate = {
  __typename?: 'supplier_products_aggregate';
  aggregate: Maybe<SupplierProductsAggregateFields>;
  nodes: Array<SupplierProducts>;
};

type SupplierProductsAggregateBoolExp = {
  count: InputMaybe<SupplierProductsAggregateBoolExpCount>;
};

type SupplierProductsAggregateBoolExpCount = {
  arguments: InputMaybe<Array<SupplierProductsSelectColumn>>;
  distinct: InputMaybe<Scalars['Boolean']>;
  filter: InputMaybe<SupplierProductsBoolExp>;
  predicate: IntComparisonExp;
};

type SupplierProductsAggregateFields = {
  __typename?: 'supplier_products_aggregate_fields';
  avg: Maybe<SupplierProductsAvgFields>;
  count: Scalars['Int'];
  max: Maybe<SupplierProductsMaxFields>;
  min: Maybe<SupplierProductsMinFields>;
  stddev: Maybe<SupplierProductsStddevFields>;
  stddev_pop: Maybe<SupplierProductsStddevPopFields>;
  stddev_samp: Maybe<SupplierProductsStddevSampFields>;
  sum: Maybe<SupplierProductsSumFields>;
  var_pop: Maybe<SupplierProductsVarPopFields>;
  var_samp: Maybe<SupplierProductsVarSampFields>;
  variance: Maybe<SupplierProductsVarianceFields>;
};


type SupplierProductsAggregateFieldsCountArgs = {
  columns: InputMaybe<Array<SupplierProductsSelectColumn>>;
  distinct: InputMaybe<Scalars['Boolean']>;
};

type SupplierProductsAggregateOrderBy = {
  avg: InputMaybe<SupplierProductsAvgOrderBy>;
  count: InputMaybe<OrderBy>;
  max: InputMaybe<SupplierProductsMaxOrderBy>;
  min: InputMaybe<SupplierProductsMinOrderBy>;
  stddev: InputMaybe<SupplierProductsStddevOrderBy>;
  stddev_pop: InputMaybe<SupplierProductsStddevPopOrderBy>;
  stddev_samp: InputMaybe<SupplierProductsStddevSampOrderBy>;
  sum: InputMaybe<SupplierProductsSumOrderBy>;
  var_pop: InputMaybe<SupplierProductsVarPopOrderBy>;
  var_samp: InputMaybe<SupplierProductsVarSampOrderBy>;
  variance: InputMaybe<SupplierProductsVarianceOrderBy>;
};

type SupplierProductsArrRelInsertInput = {
  data: Array<SupplierProductsInsertInput>;
  on_conflict: InputMaybe<SupplierProductsOnConflict>;
};

type SupplierProductsAvgFields = {
  __typename?: 'supplier_products_avg_fields';
  price: Maybe<Scalars['Float']>;
};

type SupplierProductsAvgOrderBy = {
  price: InputMaybe<OrderBy>;
};

type SupplierProductsBoolExp = {
  _and: InputMaybe<Array<SupplierProductsBoolExp>>;
  _not: InputMaybe<SupplierProductsBoolExp>;
  _or: InputMaybe<Array<SupplierProductsBoolExp>>;
  created_at: InputMaybe<TimestampComparisonExp>;
  id: InputMaybe<UuidComparisonExp>;
  price: InputMaybe<NumericComparisonExp>;
  product: InputMaybe<ProductsBoolExp>;
  product_id: InputMaybe<UuidComparisonExp>;
  supplier_id: InputMaybe<UuidComparisonExp>;
  unit: InputMaybe<StringComparisonExp>;
};

type SupplierProductsConstraint =
  | 'supplier_products_pkey';

type SupplierProductsIncInput = {
  price: InputMaybe<Scalars['numeric']>;
};

type SupplierProductsInsertInput = {
  created_at: InputMaybe<Scalars['timestamp']>;
  id: InputMaybe<Scalars['uuid']>;
  price: InputMaybe<Scalars['numeric']>;
  product: InputMaybe<ProductsObjRelInsertInput>;
  product_id: InputMaybe<Scalars['uuid']>;
  supplier_id: InputMaybe<Scalars['uuid']>;
  unit: InputMaybe<Scalars['String']>;
};

type SupplierProductsMaxFields = {
  __typename?: 'supplier_products_max_fields';
  created_at: Maybe<Scalars['timestamp']>;
  id: Maybe<Scalars['uuid']>;
  price: Maybe<Scalars['numeric']>;
  product_id: Maybe<Scalars['uuid']>;
  supplier_id: Maybe<Scalars['uuid']>;
  unit: Maybe<Scalars['String']>;
};

type SupplierProductsMaxOrderBy = {
  created_at: InputMaybe<OrderBy>;
  id: InputMaybe<OrderBy>;
  price: InputMaybe<OrderBy>;
  product_id: InputMaybe<OrderBy>;
  supplier_id: InputMaybe<OrderBy>;
  unit: InputMaybe<OrderBy>;
};

type SupplierProductsMinFields = {
  __typename?: 'supplier_products_min_fields';
  created_at: Maybe<Scalars['timestamp']>;
  id: Maybe<Scalars['uuid']>;
  price: Maybe<Scalars['numeric']>;
  product_id: Maybe<Scalars['uuid']>;
  supplier_id: Maybe<Scalars['uuid']>;
  unit: Maybe<Scalars['String']>;
};

type SupplierProductsMinOrderBy = {
  created_at: InputMaybe<OrderBy>;
  id: InputMaybe<OrderBy>;
  price: InputMaybe<OrderBy>;
  product_id: InputMaybe<OrderBy>;
  supplier_id: InputMaybe<OrderBy>;
  unit: InputMaybe<OrderBy>;
};

type SupplierProductsMutationResponse = {
  __typename?: 'supplier_products_mutation_response';
  affected_rows: Scalars['Int'];
  returning: Array<SupplierProducts>;
};

type SupplierProductsOnConflict = {
  constraint: SupplierProductsConstraint;
  update_columns: Array<SupplierProductsUpdateColumn>;
  where: InputMaybe<SupplierProductsBoolExp>;
};

type SupplierProductsOrderBy = {
  created_at: InputMaybe<OrderBy>;
  id: InputMaybe<OrderBy>;
  price: InputMaybe<OrderBy>;
  product: InputMaybe<ProductsOrderBy>;
  product_id: InputMaybe<OrderBy>;
  supplier_id: InputMaybe<OrderBy>;
  unit: InputMaybe<OrderBy>;
};

type SupplierProductsPkColumnsInput = {
  id: Scalars['uuid'];
};

type SupplierProductsSelectColumn =
  | 'created_at'
  | 'id'
  | 'price'
  | 'product_id'
  | 'supplier_id'
  | 'unit';

type SupplierProductsSetInput = {
  created_at: InputMaybe<Scalars['timestamp']>;
  id: InputMaybe<Scalars['uuid']>;
  price: InputMaybe<Scalars['numeric']>;
  product_id: InputMaybe<Scalars['uuid']>;
  supplier_id: InputMaybe<Scalars['uuid']>;
  unit: InputMaybe<Scalars['String']>;
};

type SupplierProductsStddevFields = {
  __typename?: 'supplier_products_stddev_fields';
  price: Maybe<Scalars['Float']>;
};

type SupplierProductsStddevOrderBy = {
  price: InputMaybe<OrderBy>;
};

type SupplierProductsStddevPopFields = {
  __typename?: 'supplier_products_stddev_pop_fields';
  price: Maybe<Scalars['Float']>;
};

type SupplierProductsStddevPopOrderBy = {
  price: InputMaybe<OrderBy>;
};

type SupplierProductsStddevSampFields = {
  __typename?: 'supplier_products_stddev_samp_fields';
  price: Maybe<Scalars['Float']>;
};

type SupplierProductsStddevSampOrderBy = {
  price: InputMaybe<OrderBy>;
};

type SupplierProductsStreamCursorInput = {
  initial_value: SupplierProductsStreamCursorValueInput;
  ordering: InputMaybe<CursorOrdering>;
};

type SupplierProductsStreamCursorValueInput = {
  created_at: InputMaybe<Scalars['timestamp']>;
  id: InputMaybe<Scalars['uuid']>;
  price: InputMaybe<Scalars['numeric']>;
  product_id: InputMaybe<Scalars['uuid']>;
  supplier_id: InputMaybe<Scalars['uuid']>;
  unit: InputMaybe<Scalars['String']>;
};

type SupplierProductsSumFields = {
  __typename?: 'supplier_products_sum_fields';
  price: Maybe<Scalars['numeric']>;
};

type SupplierProductsSumOrderBy = {
  price: InputMaybe<OrderBy>;
};

type SupplierProductsUpdateColumn =
  | 'created_at'
  | 'id'
  | 'price'
  | 'product_id'
  | 'supplier_id'
  | 'unit';

type SupplierProductsUpdates = {
  _inc: InputMaybe<SupplierProductsIncInput>;
  _set: InputMaybe<SupplierProductsSetInput>;
  where: SupplierProductsBoolExp;
};

type SupplierProductsVarPopFields = {
  __typename?: 'supplier_products_var_pop_fields';
  price: Maybe<Scalars['Float']>;
};

type SupplierProductsVarPopOrderBy = {
  price: InputMaybe<OrderBy>;
};

type SupplierProductsVarSampFields = {
  __typename?: 'supplier_products_var_samp_fields';
  price: Maybe<Scalars['Float']>;
};

type SupplierProductsVarSampOrderBy = {
  price: InputMaybe<OrderBy>;
};

type SupplierProductsVarianceFields = {
  __typename?: 'supplier_products_variance_fields';
  price: Maybe<Scalars['Float']>;
};

type SupplierProductsVarianceOrderBy = {
  price: InputMaybe<OrderBy>;
};

type Suppliers = {
  __typename?: 'suppliers';
  created_at: Scalars['timestamp'];
  created_by: Scalars['uuid'];
  id: Scalars['uuid'];
  name: Maybe<Scalars['String']>;
  supplier_products: Array<SupplierProducts>;
  supplier_products_aggregate: SupplierProductsAggregate;
  updated_at: Maybe<Scalars['timestamp']>;
};


type SuppliersSupplierProductsArgs = {
  distinct_on: InputMaybe<Array<SupplierProductsSelectColumn>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<SupplierProductsOrderBy>>;
  where: InputMaybe<SupplierProductsBoolExp>;
};


type SuppliersSupplierProductsAggregateArgs = {
  distinct_on: InputMaybe<Array<SupplierProductsSelectColumn>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<SupplierProductsOrderBy>>;
  where: InputMaybe<SupplierProductsBoolExp>;
};

type SuppliersAggregate = {
  __typename?: 'suppliers_aggregate';
  aggregate: Maybe<SuppliersAggregateFields>;
  nodes: Array<Suppliers>;
};

type SuppliersAggregateFields = {
  __typename?: 'suppliers_aggregate_fields';
  count: Scalars['Int'];
  max: Maybe<SuppliersMaxFields>;
  min: Maybe<SuppliersMinFields>;
};


type SuppliersAggregateFieldsCountArgs = {
  columns: InputMaybe<Array<SuppliersSelectColumn>>;
  distinct: InputMaybe<Scalars['Boolean']>;
};

type SuppliersBoolExp = {
  _and: InputMaybe<Array<SuppliersBoolExp>>;
  _not: InputMaybe<SuppliersBoolExp>;
  _or: InputMaybe<Array<SuppliersBoolExp>>;
  created_at: InputMaybe<TimestampComparisonExp>;
  created_by: InputMaybe<UuidComparisonExp>;
  id: InputMaybe<UuidComparisonExp>;
  name: InputMaybe<StringComparisonExp>;
  supplier_products: InputMaybe<SupplierProductsBoolExp>;
  supplier_products_aggregate: InputMaybe<SupplierProductsAggregateBoolExp>;
  updated_at: InputMaybe<TimestampComparisonExp>;
};

type SuppliersConstraint =
  | 'suppliers_pkey';

type SuppliersInsertInput = {
  created_at: InputMaybe<Scalars['timestamp']>;
  created_by: InputMaybe<Scalars['uuid']>;
  id: InputMaybe<Scalars['uuid']>;
  name: InputMaybe<Scalars['String']>;
  supplier_products: InputMaybe<SupplierProductsArrRelInsertInput>;
  updated_at: InputMaybe<Scalars['timestamp']>;
};

type SuppliersMaxFields = {
  __typename?: 'suppliers_max_fields';
  created_at: Maybe<Scalars['timestamp']>;
  created_by: Maybe<Scalars['uuid']>;
  id: Maybe<Scalars['uuid']>;
  name: Maybe<Scalars['String']>;
  updated_at: Maybe<Scalars['timestamp']>;
};

type SuppliersMinFields = {
  __typename?: 'suppliers_min_fields';
  created_at: Maybe<Scalars['timestamp']>;
  created_by: Maybe<Scalars['uuid']>;
  id: Maybe<Scalars['uuid']>;
  name: Maybe<Scalars['String']>;
  updated_at: Maybe<Scalars['timestamp']>;
};

type SuppliersMutationResponse = {
  __typename?: 'suppliers_mutation_response';
  affected_rows: Scalars['Int'];
  returning: Array<Suppliers>;
};

type SuppliersOnConflict = {
  constraint: SuppliersConstraint;
  update_columns: Array<SuppliersUpdateColumn>;
  where: InputMaybe<SuppliersBoolExp>;
};

type SuppliersOrderBy = {
  created_at: InputMaybe<OrderBy>;
  created_by: InputMaybe<OrderBy>;
  id: InputMaybe<OrderBy>;
  name: InputMaybe<OrderBy>;
  supplier_products_aggregate: InputMaybe<SupplierProductsAggregateOrderBy>;
  updated_at: InputMaybe<OrderBy>;
};

type SuppliersPkColumnsInput = {
  id: Scalars['uuid'];
};

type SuppliersSelectColumn =
  | 'created_at'
  | 'created_by'
  | 'id'
  | 'name'
  | 'updated_at';

type SuppliersSetInput = {
  created_at: InputMaybe<Scalars['timestamp']>;
  created_by: InputMaybe<Scalars['uuid']>;
  id: InputMaybe<Scalars['uuid']>;
  name: InputMaybe<Scalars['String']>;
  updated_at: InputMaybe<Scalars['timestamp']>;
};

type SuppliersStreamCursorInput = {
  initial_value: SuppliersStreamCursorValueInput;
  ordering: InputMaybe<CursorOrdering>;
};

type SuppliersStreamCursorValueInput = {
  created_at: InputMaybe<Scalars['timestamp']>;
  created_by: InputMaybe<Scalars['uuid']>;
  id: InputMaybe<Scalars['uuid']>;
  name: InputMaybe<Scalars['String']>;
  updated_at: InputMaybe<Scalars['timestamp']>;
};

type SuppliersUpdateColumn =
  | 'created_at'
  | 'created_by'
  | 'id'
  | 'name'
  | 'updated_at';

type SuppliersUpdates = {
  _set: InputMaybe<SuppliersSetInput>;
  where: SuppliersBoolExp;
};

type TimestampComparisonExp = {
  _eq: InputMaybe<Scalars['timestamp']>;
  _gt: InputMaybe<Scalars['timestamp']>;
  _gte: InputMaybe<Scalars['timestamp']>;
  _in: InputMaybe<Array<Scalars['timestamp']>>;
  _is_null: InputMaybe<Scalars['Boolean']>;
  _lt: InputMaybe<Scalars['timestamp']>;
  _lte: InputMaybe<Scalars['timestamp']>;
  _neq: InputMaybe<Scalars['timestamp']>;
  _nin: InputMaybe<Array<Scalars['timestamp']>>;
};

type TimestamptzComparisonExp = {
  _eq: InputMaybe<Scalars['timestamptz']>;
  _gt: InputMaybe<Scalars['timestamptz']>;
  _gte: InputMaybe<Scalars['timestamptz']>;
  _in: InputMaybe<Array<Scalars['timestamptz']>>;
  _is_null: InputMaybe<Scalars['Boolean']>;
  _lt: InputMaybe<Scalars['timestamptz']>;
  _lte: InputMaybe<Scalars['timestamptz']>;
  _neq: InputMaybe<Scalars['timestamptz']>;
  _nin: InputMaybe<Array<Scalars['timestamptz']>>;
};

type TraderProducts = {
  __typename?: 'trader_products';
  created_at: Scalars['timestamp'];
  id: Scalars['uuid'];
  price: Maybe<Scalars['numeric']>;
  product_id: Scalars['uuid'];
  trader_id: Scalars['uuid'];
  unit: Maybe<Scalars['String']>;
};

type TraderProductsAggregate = {
  __typename?: 'trader_products_aggregate';
  aggregate: Maybe<TraderProductsAggregateFields>;
  nodes: Array<TraderProducts>;
};

type TraderProductsAggregateFields = {
  __typename?: 'trader_products_aggregate_fields';
  avg: Maybe<TraderProductsAvgFields>;
  count: Scalars['Int'];
  max: Maybe<TraderProductsMaxFields>;
  min: Maybe<TraderProductsMinFields>;
  stddev: Maybe<TraderProductsStddevFields>;
  stddev_pop: Maybe<TraderProductsStddevPopFields>;
  stddev_samp: Maybe<TraderProductsStddevSampFields>;
  sum: Maybe<TraderProductsSumFields>;
  var_pop: Maybe<TraderProductsVarPopFields>;
  var_samp: Maybe<TraderProductsVarSampFields>;
  variance: Maybe<TraderProductsVarianceFields>;
};


type TraderProductsAggregateFieldsCountArgs = {
  columns: InputMaybe<Array<TraderProductsSelectColumn>>;
  distinct: InputMaybe<Scalars['Boolean']>;
};

type TraderProductsAvgFields = {
  __typename?: 'trader_products_avg_fields';
  price: Maybe<Scalars['Float']>;
};

type TraderProductsBoolExp = {
  _and: InputMaybe<Array<TraderProductsBoolExp>>;
  _not: InputMaybe<TraderProductsBoolExp>;
  _or: InputMaybe<Array<TraderProductsBoolExp>>;
  created_at: InputMaybe<TimestampComparisonExp>;
  id: InputMaybe<UuidComparisonExp>;
  price: InputMaybe<NumericComparisonExp>;
  product_id: InputMaybe<UuidComparisonExp>;
  trader_id: InputMaybe<UuidComparisonExp>;
  unit: InputMaybe<StringComparisonExp>;
};

type TraderProductsConstraint =
  | 'trader_products_pkey';

type TraderProductsIncInput = {
  price: InputMaybe<Scalars['numeric']>;
};

type TraderProductsInsertInput = {
  created_at: InputMaybe<Scalars['timestamp']>;
  id: InputMaybe<Scalars['uuid']>;
  price: InputMaybe<Scalars['numeric']>;
  product_id: InputMaybe<Scalars['uuid']>;
  trader_id: InputMaybe<Scalars['uuid']>;
  unit: InputMaybe<Scalars['String']>;
};

type TraderProductsMaxFields = {
  __typename?: 'trader_products_max_fields';
  created_at: Maybe<Scalars['timestamp']>;
  id: Maybe<Scalars['uuid']>;
  price: Maybe<Scalars['numeric']>;
  product_id: Maybe<Scalars['uuid']>;
  trader_id: Maybe<Scalars['uuid']>;
  unit: Maybe<Scalars['String']>;
};

type TraderProductsMinFields = {
  __typename?: 'trader_products_min_fields';
  created_at: Maybe<Scalars['timestamp']>;
  id: Maybe<Scalars['uuid']>;
  price: Maybe<Scalars['numeric']>;
  product_id: Maybe<Scalars['uuid']>;
  trader_id: Maybe<Scalars['uuid']>;
  unit: Maybe<Scalars['String']>;
};

type TraderProductsMutationResponse = {
  __typename?: 'trader_products_mutation_response';
  affected_rows: Scalars['Int'];
  returning: Array<TraderProducts>;
};

type TraderProductsOnConflict = {
  constraint: TraderProductsConstraint;
  update_columns: Array<TraderProductsUpdateColumn>;
  where: InputMaybe<TraderProductsBoolExp>;
};

type TraderProductsOrderBy = {
  created_at: InputMaybe<OrderBy>;
  id: InputMaybe<OrderBy>;
  price: InputMaybe<OrderBy>;
  product_id: InputMaybe<OrderBy>;
  trader_id: InputMaybe<OrderBy>;
  unit: InputMaybe<OrderBy>;
};

type TraderProductsPkColumnsInput = {
  id: Scalars['uuid'];
};

type TraderProductsSelectColumn =
  | 'created_at'
  | 'id'
  | 'price'
  | 'product_id'
  | 'trader_id'
  | 'unit';

type TraderProductsSetInput = {
  created_at: InputMaybe<Scalars['timestamp']>;
  id: InputMaybe<Scalars['uuid']>;
  price: InputMaybe<Scalars['numeric']>;
  product_id: InputMaybe<Scalars['uuid']>;
  trader_id: InputMaybe<Scalars['uuid']>;
  unit: InputMaybe<Scalars['String']>;
};

type TraderProductsStddevFields = {
  __typename?: 'trader_products_stddev_fields';
  price: Maybe<Scalars['Float']>;
};

type TraderProductsStddevPopFields = {
  __typename?: 'trader_products_stddev_pop_fields';
  price: Maybe<Scalars['Float']>;
};

type TraderProductsStddevSampFields = {
  __typename?: 'trader_products_stddev_samp_fields';
  price: Maybe<Scalars['Float']>;
};

type TraderProductsStreamCursorInput = {
  initial_value: TraderProductsStreamCursorValueInput;
  ordering: InputMaybe<CursorOrdering>;
};

type TraderProductsStreamCursorValueInput = {
  created_at: InputMaybe<Scalars['timestamp']>;
  id: InputMaybe<Scalars['uuid']>;
  price: InputMaybe<Scalars['numeric']>;
  product_id: InputMaybe<Scalars['uuid']>;
  trader_id: InputMaybe<Scalars['uuid']>;
  unit: InputMaybe<Scalars['String']>;
};

type TraderProductsSumFields = {
  __typename?: 'trader_products_sum_fields';
  price: Maybe<Scalars['numeric']>;
};

type TraderProductsUpdateColumn =
  | 'created_at'
  | 'id'
  | 'price'
  | 'product_id'
  | 'trader_id'
  | 'unit';

type TraderProductsUpdates = {
  _inc: InputMaybe<TraderProductsIncInput>;
  _set: InputMaybe<TraderProductsSetInput>;
  where: TraderProductsBoolExp;
};

type TraderProductsVarPopFields = {
  __typename?: 'trader_products_var_pop_fields';
  price: Maybe<Scalars['Float']>;
};

type TraderProductsVarSampFields = {
  __typename?: 'trader_products_var_samp_fields';
  price: Maybe<Scalars['Float']>;
};

type TraderProductsVarianceFields = {
  __typename?: 'trader_products_variance_fields';
  price: Maybe<Scalars['Float']>;
};

type TraderUsers = {
  __typename?: 'trader_users';
  created_at: Scalars['timestamp'];
  role: RolesEnum;
  status: StatusEnum;
  trader: Traders;
  trader_id: Scalars['uuid'];
  updated_at: Maybe<Scalars['timestamp']>;
  user: Users;
  user_id: Scalars['uuid'];
};

type TraderUsersAggregate = {
  __typename?: 'trader_users_aggregate';
  aggregate: Maybe<TraderUsersAggregateFields>;
  nodes: Array<TraderUsers>;
};

type TraderUsersAggregateFields = {
  __typename?: 'trader_users_aggregate_fields';
  count: Scalars['Int'];
  max: Maybe<TraderUsersMaxFields>;
  min: Maybe<TraderUsersMinFields>;
};


type TraderUsersAggregateFieldsCountArgs = {
  columns: InputMaybe<Array<TraderUsersSelectColumn>>;
  distinct: InputMaybe<Scalars['Boolean']>;
};

type TraderUsersBoolExp = {
  _and: InputMaybe<Array<TraderUsersBoolExp>>;
  _not: InputMaybe<TraderUsersBoolExp>;
  _or: InputMaybe<Array<TraderUsersBoolExp>>;
  created_at: InputMaybe<TimestampComparisonExp>;
  role: InputMaybe<RolesEnumComparisonExp>;
  status: InputMaybe<StatusEnumComparisonExp>;
  trader: InputMaybe<TradersBoolExp>;
  trader_id: InputMaybe<UuidComparisonExp>;
  updated_at: InputMaybe<TimestampComparisonExp>;
  user: InputMaybe<UsersBoolExp>;
  user_id: InputMaybe<UuidComparisonExp>;
};

type TraderUsersConstraint =
  | 'trader_users_pkey'
  | 'trader_users_trader_id_key';

type TraderUsersInsertInput = {
  created_at: InputMaybe<Scalars['timestamp']>;
  role: InputMaybe<RolesEnum>;
  status: InputMaybe<StatusEnum>;
  trader: InputMaybe<TradersObjRelInsertInput>;
  trader_id: InputMaybe<Scalars['uuid']>;
  updated_at: InputMaybe<Scalars['timestamp']>;
  user: InputMaybe<UsersObjRelInsertInput>;
  user_id: InputMaybe<Scalars['uuid']>;
};

type TraderUsersMaxFields = {
  __typename?: 'trader_users_max_fields';
  created_at: Maybe<Scalars['timestamp']>;
  trader_id: Maybe<Scalars['uuid']>;
  updated_at: Maybe<Scalars['timestamp']>;
  user_id: Maybe<Scalars['uuid']>;
};

type TraderUsersMinFields = {
  __typename?: 'trader_users_min_fields';
  created_at: Maybe<Scalars['timestamp']>;
  trader_id: Maybe<Scalars['uuid']>;
  updated_at: Maybe<Scalars['timestamp']>;
  user_id: Maybe<Scalars['uuid']>;
};

type TraderUsersMutationResponse = {
  __typename?: 'trader_users_mutation_response';
  affected_rows: Scalars['Int'];
  returning: Array<TraderUsers>;
};

type TraderUsersObjRelInsertInput = {
  data: TraderUsersInsertInput;
  on_conflict: InputMaybe<TraderUsersOnConflict>;
};

type TraderUsersOnConflict = {
  constraint: TraderUsersConstraint;
  update_columns: Array<TraderUsersUpdateColumn>;
  where: InputMaybe<TraderUsersBoolExp>;
};

type TraderUsersOrderBy = {
  created_at: InputMaybe<OrderBy>;
  role: InputMaybe<OrderBy>;
  status: InputMaybe<OrderBy>;
  trader: InputMaybe<TradersOrderBy>;
  trader_id: InputMaybe<OrderBy>;
  updated_at: InputMaybe<OrderBy>;
  user: InputMaybe<UsersOrderBy>;
  user_id: InputMaybe<OrderBy>;
};

type TraderUsersPkColumnsInput = {
  user_id: Scalars['uuid'];
};

type TraderUsersSelectColumn =
  | 'created_at'
  | 'role'
  | 'status'
  | 'trader_id'
  | 'updated_at'
  | 'user_id';

type TraderUsersSetInput = {
  created_at: InputMaybe<Scalars['timestamp']>;
  role: InputMaybe<RolesEnum>;
  status: InputMaybe<StatusEnum>;
  trader_id: InputMaybe<Scalars['uuid']>;
  updated_at: InputMaybe<Scalars['timestamp']>;
  user_id: InputMaybe<Scalars['uuid']>;
};

type TraderUsersStreamCursorInput = {
  initial_value: TraderUsersStreamCursorValueInput;
  ordering: InputMaybe<CursorOrdering>;
};

type TraderUsersStreamCursorValueInput = {
  created_at: InputMaybe<Scalars['timestamp']>;
  role: InputMaybe<RolesEnum>;
  status: InputMaybe<StatusEnum>;
  trader_id: InputMaybe<Scalars['uuid']>;
  updated_at: InputMaybe<Scalars['timestamp']>;
  user_id: InputMaybe<Scalars['uuid']>;
};

type TraderUsersUpdateColumn =
  | 'created_at'
  | 'role'
  | 'status'
  | 'trader_id'
  | 'updated_at'
  | 'user_id';

type TraderUsersUpdates = {
  _set: InputMaybe<TraderUsersSetInput>;
  where: TraderUsersBoolExp;
};

type Traders = {
  __typename?: 'traders';
  created_at: Scalars['timestamp'];
  id: Scalars['uuid'];
  name: Maybe<Scalars['String']>;
  status: StatusEnum;
  trader_user: Maybe<TraderUsers>;
  updated_at: Maybe<Scalars['timestamp']>;
};

type TradersAggregate = {
  __typename?: 'traders_aggregate';
  aggregate: Maybe<TradersAggregateFields>;
  nodes: Array<Traders>;
};

type TradersAggregateFields = {
  __typename?: 'traders_aggregate_fields';
  count: Scalars['Int'];
  max: Maybe<TradersMaxFields>;
  min: Maybe<TradersMinFields>;
};


type TradersAggregateFieldsCountArgs = {
  columns: InputMaybe<Array<TradersSelectColumn>>;
  distinct: InputMaybe<Scalars['Boolean']>;
};

type TradersBoolExp = {
  _and: InputMaybe<Array<TradersBoolExp>>;
  _not: InputMaybe<TradersBoolExp>;
  _or: InputMaybe<Array<TradersBoolExp>>;
  created_at: InputMaybe<TimestampComparisonExp>;
  id: InputMaybe<UuidComparisonExp>;
  name: InputMaybe<StringComparisonExp>;
  status: InputMaybe<StatusEnumComparisonExp>;
  trader_user: InputMaybe<TraderUsersBoolExp>;
  updated_at: InputMaybe<TimestampComparisonExp>;
};

type TradersConstraint =
  | 'traders_pkey';

type TradersInsertInput = {
  created_at: InputMaybe<Scalars['timestamp']>;
  id: InputMaybe<Scalars['uuid']>;
  name: InputMaybe<Scalars['String']>;
  status: InputMaybe<StatusEnum>;
  trader_user: InputMaybe<TraderUsersObjRelInsertInput>;
  updated_at: InputMaybe<Scalars['timestamp']>;
};

type TradersMaxFields = {
  __typename?: 'traders_max_fields';
  created_at: Maybe<Scalars['timestamp']>;
  id: Maybe<Scalars['uuid']>;
  name: Maybe<Scalars['String']>;
  updated_at: Maybe<Scalars['timestamp']>;
};

type TradersMinFields = {
  __typename?: 'traders_min_fields';
  created_at: Maybe<Scalars['timestamp']>;
  id: Maybe<Scalars['uuid']>;
  name: Maybe<Scalars['String']>;
  updated_at: Maybe<Scalars['timestamp']>;
};

type TradersMutationResponse = {
  __typename?: 'traders_mutation_response';
  affected_rows: Scalars['Int'];
  returning: Array<Traders>;
};

type TradersObjRelInsertInput = {
  data: TradersInsertInput;
  on_conflict: InputMaybe<TradersOnConflict>;
};

type TradersOnConflict = {
  constraint: TradersConstraint;
  update_columns: Array<TradersUpdateColumn>;
  where: InputMaybe<TradersBoolExp>;
};

type TradersOrderBy = {
  created_at: InputMaybe<OrderBy>;
  id: InputMaybe<OrderBy>;
  name: InputMaybe<OrderBy>;
  status: InputMaybe<OrderBy>;
  trader_user: InputMaybe<TraderUsersOrderBy>;
  updated_at: InputMaybe<OrderBy>;
};

type TradersPkColumnsInput = {
  id: Scalars['uuid'];
};

type TradersSelectColumn =
  | 'created_at'
  | 'id'
  | 'name'
  | 'status'
  | 'updated_at';

type TradersSetInput = {
  created_at: InputMaybe<Scalars['timestamp']>;
  id: InputMaybe<Scalars['uuid']>;
  name: InputMaybe<Scalars['String']>;
  status: InputMaybe<StatusEnum>;
  updated_at: InputMaybe<Scalars['timestamp']>;
};

type TradersStreamCursorInput = {
  initial_value: TradersStreamCursorValueInput;
  ordering: InputMaybe<CursorOrdering>;
};

type TradersStreamCursorValueInput = {
  created_at: InputMaybe<Scalars['timestamp']>;
  id: InputMaybe<Scalars['uuid']>;
  name: InputMaybe<Scalars['String']>;
  status: InputMaybe<StatusEnum>;
  updated_at: InputMaybe<Scalars['timestamp']>;
};

type TradersUpdateColumn =
  | 'created_at'
  | 'id'
  | 'name'
  | 'status'
  | 'updated_at';

type TradersUpdates = {
  _set: InputMaybe<TradersSetInput>;
  where: TradersBoolExp;
};

type UserCredentials = {
  __typename?: 'user_credentials';
  identifier: Scalars['String'];
  password: Scalars['String'];
  user_id: Scalars['uuid'];
};

type UserCredentialsAggregate = {
  __typename?: 'user_credentials_aggregate';
  aggregate: Maybe<UserCredentialsAggregateFields>;
  nodes: Array<UserCredentials>;
};

type UserCredentialsAggregateFields = {
  __typename?: 'user_credentials_aggregate_fields';
  count: Scalars['Int'];
  max: Maybe<UserCredentialsMaxFields>;
  min: Maybe<UserCredentialsMinFields>;
};


type UserCredentialsAggregateFieldsCountArgs = {
  columns: InputMaybe<Array<UserCredentialsSelectColumn>>;
  distinct: InputMaybe<Scalars['Boolean']>;
};

type UserCredentialsBoolExp = {
  _and: InputMaybe<Array<UserCredentialsBoolExp>>;
  _not: InputMaybe<UserCredentialsBoolExp>;
  _or: InputMaybe<Array<UserCredentialsBoolExp>>;
  identifier: InputMaybe<StringComparisonExp>;
  password: InputMaybe<StringComparisonExp>;
  user_id: InputMaybe<UuidComparisonExp>;
};

type UserCredentialsConstraint =
  | 'user_credentials_pkey';

type UserCredentialsInsertInput = {
  identifier: InputMaybe<Scalars['String']>;
  password: InputMaybe<Scalars['String']>;
  user_id: InputMaybe<Scalars['uuid']>;
};

type UserCredentialsMaxFields = {
  __typename?: 'user_credentials_max_fields';
  identifier: Maybe<Scalars['String']>;
  password: Maybe<Scalars['String']>;
  user_id: Maybe<Scalars['uuid']>;
};

type UserCredentialsMinFields = {
  __typename?: 'user_credentials_min_fields';
  identifier: Maybe<Scalars['String']>;
  password: Maybe<Scalars['String']>;
  user_id: Maybe<Scalars['uuid']>;
};

type UserCredentialsMutationResponse = {
  __typename?: 'user_credentials_mutation_response';
  affected_rows: Scalars['Int'];
  returning: Array<UserCredentials>;
};

type UserCredentialsObjRelInsertInput = {
  data: UserCredentialsInsertInput;
  on_conflict: InputMaybe<UserCredentialsOnConflict>;
};

type UserCredentialsOnConflict = {
  constraint: UserCredentialsConstraint;
  update_columns: Array<UserCredentialsUpdateColumn>;
  where: InputMaybe<UserCredentialsBoolExp>;
};

type UserCredentialsOrderBy = {
  identifier: InputMaybe<OrderBy>;
  password: InputMaybe<OrderBy>;
  user_id: InputMaybe<OrderBy>;
};

type UserCredentialsPkColumnsInput = {
  user_id: Scalars['uuid'];
};

type UserCredentialsSelectColumn =
  | 'identifier'
  | 'password'
  | 'user_id';

type UserCredentialsSetInput = {
  identifier: InputMaybe<Scalars['String']>;
  password: InputMaybe<Scalars['String']>;
  user_id: InputMaybe<Scalars['uuid']>;
};

type UserCredentialsStreamCursorInput = {
  initial_value: UserCredentialsStreamCursorValueInput;
  ordering: InputMaybe<CursorOrdering>;
};

type UserCredentialsStreamCursorValueInput = {
  identifier: InputMaybe<Scalars['String']>;
  password: InputMaybe<Scalars['String']>;
  user_id: InputMaybe<Scalars['uuid']>;
};

type UserCredentialsUpdateColumn =
  | 'identifier'
  | 'password'
  | 'user_id';

type UserCredentialsUpdates = {
  _set: InputMaybe<UserCredentialsSetInput>;
  where: UserCredentialsBoolExp;
};

type UserTokens = {
  __typename?: 'user_tokens';
  expires: Maybe<Scalars['timestamptz']>;
  identifier: Scalars['String'];
  token: Scalars['String'];
};

type UserTokensAggregate = {
  __typename?: 'user_tokens_aggregate';
  aggregate: Maybe<UserTokensAggregateFields>;
  nodes: Array<UserTokens>;
};

type UserTokensAggregateFields = {
  __typename?: 'user_tokens_aggregate_fields';
  count: Scalars['Int'];
  max: Maybe<UserTokensMaxFields>;
  min: Maybe<UserTokensMinFields>;
};


type UserTokensAggregateFieldsCountArgs = {
  columns: InputMaybe<Array<UserTokensSelectColumn>>;
  distinct: InputMaybe<Scalars['Boolean']>;
};

type UserTokensBoolExp = {
  _and: InputMaybe<Array<UserTokensBoolExp>>;
  _not: InputMaybe<UserTokensBoolExp>;
  _or: InputMaybe<Array<UserTokensBoolExp>>;
  expires: InputMaybe<TimestamptzComparisonExp>;
  identifier: InputMaybe<StringComparisonExp>;
  token: InputMaybe<StringComparisonExp>;
};

type UserTokensInsertInput = {
  expires: InputMaybe<Scalars['timestamptz']>;
  identifier: InputMaybe<Scalars['String']>;
  token: InputMaybe<Scalars['String']>;
};

type UserTokensMaxFields = {
  __typename?: 'user_tokens_max_fields';
  expires: Maybe<Scalars['timestamptz']>;
  identifier: Maybe<Scalars['String']>;
  token: Maybe<Scalars['String']>;
};

type UserTokensMinFields = {
  __typename?: 'user_tokens_min_fields';
  expires: Maybe<Scalars['timestamptz']>;
  identifier: Maybe<Scalars['String']>;
  token: Maybe<Scalars['String']>;
};

type UserTokensMutationResponse = {
  __typename?: 'user_tokens_mutation_response';
  affected_rows: Scalars['Int'];
  returning: Array<UserTokens>;
};

type UserTokensOrderBy = {
  expires: InputMaybe<OrderBy>;
  identifier: InputMaybe<OrderBy>;
  token: InputMaybe<OrderBy>;
};

type UserTokensSelectColumn =
  | 'expires'
  | 'identifier'
  | 'token';

type UserTokensSetInput = {
  expires: InputMaybe<Scalars['timestamptz']>;
  identifier: InputMaybe<Scalars['String']>;
  token: InputMaybe<Scalars['String']>;
};

type UserTokensStreamCursorInput = {
  initial_value: UserTokensStreamCursorValueInput;
  ordering: InputMaybe<CursorOrdering>;
};

type UserTokensStreamCursorValueInput = {
  expires: InputMaybe<Scalars['timestamptz']>;
  identifier: InputMaybe<Scalars['String']>;
  token: InputMaybe<Scalars['String']>;
};

type UserTokensUpdates = {
  _set: InputMaybe<UserTokensSetInput>;
  where: UserTokensBoolExp;
};

type Users = {
  __typename?: 'users';
  created_at: Scalars['timestamp'];
  email: Scalars['String'];
  emailVerified: Maybe<Scalars['timestamp']>;
  id: Scalars['uuid'];
  image: Maybe<Scalars['String']>;
  name: Maybe<Scalars['String']>;
  phone: Maybe<Scalars['String']>;
  role: Maybe<RolesEnum>;
  trader_user: Maybe<TraderUsers>;
  updated_at: Maybe<Scalars['timestamp']>;
  user_credential: Maybe<UserCredentials>;
};

type UsersAggregate = {
  __typename?: 'users_aggregate';
  aggregate: Maybe<UsersAggregateFields>;
  nodes: Array<Users>;
};

type UsersAggregateFields = {
  __typename?: 'users_aggregate_fields';
  count: Scalars['Int'];
  max: Maybe<UsersMaxFields>;
  min: Maybe<UsersMinFields>;
};


type UsersAggregateFieldsCountArgs = {
  columns: InputMaybe<Array<UsersSelectColumn>>;
  distinct: InputMaybe<Scalars['Boolean']>;
};

type UsersBoolExp = {
  _and: InputMaybe<Array<UsersBoolExp>>;
  _not: InputMaybe<UsersBoolExp>;
  _or: InputMaybe<Array<UsersBoolExp>>;
  created_at: InputMaybe<TimestampComparisonExp>;
  email: InputMaybe<StringComparisonExp>;
  emailVerified: InputMaybe<TimestampComparisonExp>;
  id: InputMaybe<UuidComparisonExp>;
  image: InputMaybe<StringComparisonExp>;
  name: InputMaybe<StringComparisonExp>;
  phone: InputMaybe<StringComparisonExp>;
  role: InputMaybe<RolesEnumComparisonExp>;
  trader_user: InputMaybe<TraderUsersBoolExp>;
  updated_at: InputMaybe<TimestampComparisonExp>;
  user_credential: InputMaybe<UserCredentialsBoolExp>;
};

type UsersConstraint =
  | 'users_email_key'
  | 'users_pkey';

type UsersInsertInput = {
  created_at: InputMaybe<Scalars['timestamp']>;
  email: InputMaybe<Scalars['String']>;
  emailVerified: InputMaybe<Scalars['timestamp']>;
  id: InputMaybe<Scalars['uuid']>;
  image: InputMaybe<Scalars['String']>;
  name: InputMaybe<Scalars['String']>;
  phone: InputMaybe<Scalars['String']>;
  role: InputMaybe<RolesEnum>;
  trader_user: InputMaybe<TraderUsersObjRelInsertInput>;
  updated_at: InputMaybe<Scalars['timestamp']>;
  user_credential: InputMaybe<UserCredentialsObjRelInsertInput>;
};

type UsersMaxFields = {
  __typename?: 'users_max_fields';
  created_at: Maybe<Scalars['timestamp']>;
  email: Maybe<Scalars['String']>;
  emailVerified: Maybe<Scalars['timestamp']>;
  id: Maybe<Scalars['uuid']>;
  image: Maybe<Scalars['String']>;
  name: Maybe<Scalars['String']>;
  phone: Maybe<Scalars['String']>;
  updated_at: Maybe<Scalars['timestamp']>;
};

type UsersMinFields = {
  __typename?: 'users_min_fields';
  created_at: Maybe<Scalars['timestamp']>;
  email: Maybe<Scalars['String']>;
  emailVerified: Maybe<Scalars['timestamp']>;
  id: Maybe<Scalars['uuid']>;
  image: Maybe<Scalars['String']>;
  name: Maybe<Scalars['String']>;
  phone: Maybe<Scalars['String']>;
  updated_at: Maybe<Scalars['timestamp']>;
};

type UsersMutationResponse = {
  __typename?: 'users_mutation_response';
  affected_rows: Scalars['Int'];
  returning: Array<Users>;
};

type UsersObjRelInsertInput = {
  data: UsersInsertInput;
  on_conflict: InputMaybe<UsersOnConflict>;
};

type UsersOnConflict = {
  constraint: UsersConstraint;
  update_columns: Array<UsersUpdateColumn>;
  where: InputMaybe<UsersBoolExp>;
};

type UsersOrderBy = {
  created_at: InputMaybe<OrderBy>;
  email: InputMaybe<OrderBy>;
  emailVerified: InputMaybe<OrderBy>;
  id: InputMaybe<OrderBy>;
  image: InputMaybe<OrderBy>;
  name: InputMaybe<OrderBy>;
  phone: InputMaybe<OrderBy>;
  role: InputMaybe<OrderBy>;
  trader_user: InputMaybe<TraderUsersOrderBy>;
  updated_at: InputMaybe<OrderBy>;
  user_credential: InputMaybe<UserCredentialsOrderBy>;
};

type UsersPkColumnsInput = {
  id: Scalars['uuid'];
};

type UsersSelectColumn =
  | 'created_at'
  | 'email'
  | 'emailVerified'
  | 'id'
  | 'image'
  | 'name'
  | 'phone'
  | 'role'
  | 'updated_at';

type UsersSetInput = {
  created_at: InputMaybe<Scalars['timestamp']>;
  email: InputMaybe<Scalars['String']>;
  emailVerified: InputMaybe<Scalars['timestamp']>;
  id: InputMaybe<Scalars['uuid']>;
  image: InputMaybe<Scalars['String']>;
  name: InputMaybe<Scalars['String']>;
  phone: InputMaybe<Scalars['String']>;
  role: InputMaybe<RolesEnum>;
  updated_at: InputMaybe<Scalars['timestamp']>;
};

type UsersStreamCursorInput = {
  initial_value: UsersStreamCursorValueInput;
  ordering: InputMaybe<CursorOrdering>;
};

type UsersStreamCursorValueInput = {
  created_at: InputMaybe<Scalars['timestamp']>;
  email: InputMaybe<Scalars['String']>;
  emailVerified: InputMaybe<Scalars['timestamp']>;
  id: InputMaybe<Scalars['uuid']>;
  image: InputMaybe<Scalars['String']>;
  name: InputMaybe<Scalars['String']>;
  phone: InputMaybe<Scalars['String']>;
  role: InputMaybe<RolesEnum>;
  updated_at: InputMaybe<Scalars['timestamp']>;
};

type UsersUpdateColumn =
  | 'created_at'
  | 'email'
  | 'emailVerified'
  | 'id'
  | 'image'
  | 'name'
  | 'phone'
  | 'role'
  | 'updated_at';

type UsersUpdates = {
  _set: InputMaybe<UsersSetInput>;
  where: UsersBoolExp;
};

type UuidComparisonExp = {
  _eq: InputMaybe<Scalars['uuid']>;
  _gt: InputMaybe<Scalars['uuid']>;
  _gte: InputMaybe<Scalars['uuid']>;
  _in: InputMaybe<Array<Scalars['uuid']>>;
  _is_null: InputMaybe<Scalars['Boolean']>;
  _lt: InputMaybe<Scalars['uuid']>;
  _lte: InputMaybe<Scalars['uuid']>;
  _neq: InputMaybe<Scalars['uuid']>;
  _nin: InputMaybe<Array<Scalars['uuid']>>;
};

type UpdateTraderStatusMutationVariables = Exact<{
  id: Scalars['uuid'];
  status: StatusEnum;
}>;


type UpdateTraderStatusMutation = { __typename?: 'mutation_root', update_traders_by_pk: { __typename?: 'traders', id: any, status: StatusEnum } | null };

type TraderFragment = { __typename?: 'traders', id: any, name: string | null, status: StatusEnum, created_at: any, updated_at: any | null, owner: { __typename?: 'trader_users', user: { __typename?: 'users', id: any, name: string | null, phone: string | null, email: string, emailVerified: any | null, image: string | null, role: RolesEnum | null, created_at: any, updated_at: any | null } } | null };

type GetTradersQueryVariables = Exact<{
  where?: InputMaybe<TradersBoolExp>;
  order_by?: InputMaybe<Array<TradersOrderBy> | TradersOrderBy>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
}>;


type GetTradersQuery = { __typename?: 'query_root', traders: Array<{ __typename?: 'traders', id: any, name: string | null, status: StatusEnum, created_at: any, updated_at: any | null, owner: { __typename?: 'trader_users', user: { __typename?: 'users', id: any, name: string | null, phone: string | null, email: string, emailVerified: any | null, image: string | null, role: RolesEnum | null, created_at: any, updated_at: any | null } } | null }>, total: { __typename?: 'traders_aggregate', aggregate: { __typename?: 'traders_aggregate_fields', count: number } | null } };

type UserFragment = { __typename?: 'users', id: any, name: string | null, phone: string | null, email: string, emailVerified: any | null, image: string | null, role: RolesEnum | null, created_at: any, updated_at: any | null };

type GetUsersQueryVariables = Exact<{
  where?: InputMaybe<UsersBoolExp>;
  order_by?: InputMaybe<Array<UsersOrderBy> | UsersOrderBy>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
}>;


type GetUsersQuery = { __typename?: 'query_root', users: Array<{ __typename?: 'users', id: any, name: string | null, phone: string | null, email: string, emailVerified: any | null, image: string | null, role: RolesEnum | null, created_at: any, updated_at: any | null }>, total: { __typename?: 'users_aggregate', aggregate: { __typename?: 'users_aggregate_fields', count: number } | null } };

type RegisterUserMutationVariables = Exact<{
  objects?: InputMaybe<Array<UsersInsertInput> | UsersInsertInput>;
}>;


type RegisterUserMutation = { __typename?: 'mutation_root', insert_users: { __typename?: 'users_mutation_response', affected_rows: number } | null };

type AddLocationMutationVariables = Exact<{
  objects?: InputMaybe<Array<LocationsInsertInput> | LocationsInsertInput>;
}>;


type AddLocationMutation = { __typename?: 'mutation_root', insert_locations: { __typename?: 'locations_mutation_response', affected_rows: number } | null };

type LocationFragment = { __typename?: 'locations', id: any, name: string, address: string, created_at: any, updated_at: any | null };

type GetLocationsQueryVariables = Exact<{
  where?: InputMaybe<LocationsBoolExp>;
  order_by?: InputMaybe<Array<LocationsOrderBy> | LocationsOrderBy>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
}>;


type GetLocationsQuery = { __typename?: 'query_root', locations: Array<{ __typename?: 'locations', id: any, name: string, address: string, created_at: any, updated_at: any | null }>, total: { __typename?: 'locations_aggregate', aggregate: { __typename?: 'locations_aggregate_fields', count: number } | null } };

type ProductFragment = { __typename?: 'products', id: any, name: string | null, description: string | null, created_at: any, updated_at: any | null };

type GetProductsQueryVariables = Exact<{
  where?: InputMaybe<ProductsBoolExp>;
  order_by?: InputMaybe<Array<ProductsOrderBy> | ProductsOrderBy>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
}>;


type GetProductsQuery = { __typename?: 'query_root', products: Array<{ __typename?: 'products', id: any, name: string | null, description: string | null, created_at: any, updated_at: any | null }>, total: { __typename?: 'products_aggregate', aggregate: { __typename?: 'products_aggregate_fields', count: number } | null } };

type NewSupplierMutationVariables = Exact<{
  object?: InputMaybe<SuppliersInsertInput>;
}>;


type NewSupplierMutation = { __typename?: 'mutation_root', supplier: { __typename?: 'suppliers', id: any } | null };

type AddSupplierProductMutationVariables = Exact<{
  objects?: InputMaybe<Array<SupplierProductsInsertInput> | SupplierProductsInsertInput>;
}>;


type AddSupplierProductMutation = { __typename?: 'mutation_root', insert_supplier_products: { __typename?: 'supplier_products_mutation_response', affected_rows: number } | null };

type SupplierFragment = { __typename?: 'suppliers', id: any, name: string | null, created_at: any, updated_at: any | null, products: Array<{ __typename?: 'supplier_products', id: any, product_id: any, price: any | null }> };

type GetSuppliersQueryVariables = Exact<{
  where?: InputMaybe<SuppliersBoolExp>;
  order_by?: InputMaybe<Array<SuppliersOrderBy> | SuppliersOrderBy>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
}>;


type GetSuppliersQuery = { __typename?: 'query_root', suppliers: Array<{ __typename?: 'suppliers', id: any, name: string | null, created_at: any, updated_at: any | null, products: Array<{ __typename?: 'supplier_products', id: any, product_id: any, price: any | null }> }>, total: { __typename?: 'suppliers_aggregate', aggregate: { __typename?: 'suppliers_aggregate_fields', count: number } | null } };

type GetAllProductsQueryVariables = Exact<{ [key: string]: never; }>;


type GetAllProductsQuery = { __typename?: 'query_root', products: Array<{ __typename?: 'products', id: any, name: string | null, description: string | null, created_at: any, updated_at: any | null }> };

type GetAllSuppliersQueryVariables = Exact<{ [key: string]: never; }>;


type GetAllSuppliersQuery = { __typename?: 'query_root', suppliers: Array<{ __typename?: 'suppliers', id: any, name: string | null, created_at: any, updated_at: any | null, products: Array<{ __typename?: 'supplier_products', id: any, product_id: any, price: any | null }> }> };

type GetUserTraderQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;


type GetUserTraderQuery = { __typename?: 'query_root', users: { __typename?: 'users', trader_user: { __typename?: 'trader_users', role: RolesEnum, status: StatusEnum, trader: { __typename?: 'traders', id: any, name: string | null, status: StatusEnum } } | null } | null };
