import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as React from 'react';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  DateTime: any,
};

export type IAuthPayload = {
   __typename?: 'AuthPayload',
  token: Scalars['String'],
  user: IUser,
};

export type ICreateUserInput = {
  firstName: Scalars['String'],
  lastName: Scalars['String'],
  email: Scalars['String'],
  password: Scalars['String'],
  phone?: Maybe<Scalars['String']>,
  address?: Maybe<Scalars['String']>,
  userType: IUserType,
  isActivated: Scalars['Boolean'],
};

export type ICreateVesselInput = {
  vesselName: Scalars['String'],
  vesselNameLower: Scalars['String'],
  port: Scalars['String'],
  portLower: Scalars['String'],
  shipName?: Maybe<Scalars['String']>,
  shipyard?: Maybe<Scalars['String']>,
  owner?: Maybe<Scalars['String']>,
  transitSpeed?: Maybe<Scalars['Int']>,
  yearOfConstruction?: Maybe<Scalars['Int']>,
  accommodation?: Maybe<Scalars['Int']>,
  afterdeck?: Maybe<Scalars['Int']>,
  beam?: Maybe<Scalars['String']>,
  cargoCapacity?: Maybe<Scalars['Int']>,
  classification?: Maybe<Scalars['String']>,
  craneCapacity?: Maybe<Scalars['Int']>,
  foredeckSpace?: Maybe<Scalars['Int']>,
  design?: Maybe<Scalars['String']>,
  engineType?: Maybe<Scalars['String']>,
  fender?: Maybe<Scalars['String']>,
  flag?: Maybe<Scalars['String']>,
  totalDeck?: Maybe<Scalars['Int']>,
  freshWaterCapacity?: Maybe<Scalars['Int']>,
  fuelCapacity?: Maybe<Scalars['Int']>,
  hullType?: Maybe<Scalars['String']>,
  imo?: Maybe<Scalars['String']>,
  lengthOverall?: Maybe<Scalars['Int']>,
  mmsi?: Maybe<Scalars['Int']>,
  minDraft?: Maybe<Scalars['Int']>,
  maxDraft?: Maybe<Scalars['Int']>,
  maxSpeed?: Maybe<Scalars['Int']>,
  crew12hr?: Maybe<Scalars['Int']>,
  crew14hr?: Maybe<Scalars['Int']>,
  crew24hr?: Maybe<Scalars['Int']>,
  numberOfPax?: Maybe<Scalars['Int']>,
  propulsionType?: Maybe<Scalars['String']>,
};


export type IDeleteVesselInput = {
  id: Scalars['String'],
};

export type ILoginUserInput = {
  email: Scalars['String'],
  password: Scalars['String'],
};

export type IMutation = {
   __typename?: 'Mutation',
  createUser: IAuthPayload,
  login: IAuthPayload,
  deleteUser: IUser,
  updateUser: IUser,
  createVessel: IVessel,
  deleteVessel: IVessel,
};


export type IMutationCreateUserArgs = {
  data: ICreateUserInput
};


export type IMutationLoginArgs = {
  data: ILoginUserInput
};


export type IMutationUpdateUserArgs = {
  data: IUpdateUserInput
};


export type IMutationCreateVesselArgs = {
  data: ICreateVesselInput
};


export type IMutationDeleteVesselArgs = {
  data: IDeleteVesselInput
};

export enum IMutationType {
  Created = 'CREATED',
  Updated = 'UPDATED',
  Deleted = 'DELETED'
}

export type IQuery = {
   __typename?: 'Query',
  users: Array<IUser>,
  me: IUser,
  vessels: Array<IVessel>,
};


export type IQueryUsersArgs = {
  query?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  orderBy?: Maybe<IUserOrderByInput>
};


export type IQueryVesselsArgs = {
  query?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  orderBy?: Maybe<IVesselOrderByInput>
};

export type IUpdateUserInput = {
  name?: Maybe<Scalars['String']>,
  email?: Maybe<Scalars['String']>,
  password?: Maybe<Scalars['String']>,
};

export type IUser = {
   __typename?: 'User',
  id: Scalars['ID'],
  firstName: Scalars['String'],
  lastName: Scalars['String'],
  email: Scalars['String'],
  password: Scalars['String'],
  phone?: Maybe<Scalars['String']>,
  address?: Maybe<Scalars['String']>,
  userType: IUserType,
  isActivated: Scalars['Boolean'],
  createdAt: Scalars['DateTime'],
  updatedAt: Scalars['DateTime'],
  deletedAt?: Maybe<Scalars['DateTime']>,
};

export enum IUserOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  FirstNameAsc = 'firstName_ASC',
  FirstNameDesc = 'firstName_DESC',
  LastNameAsc = 'lastName_ASC',
  LastNameDesc = 'lastName_DESC',
  EmailAsc = 'email_ASC',
  EmailDesc = 'email_DESC',
  PasswordAsc = 'password_ASC',
  PasswordDesc = 'password_DESC',
  PhoneAsc = 'phone_ASC',
  PhoneDesc = 'phone_DESC',
  AddressAsc = 'address_ASC',
  AddressDesc = 'address_DESC',
  UserTypeAsc = 'userType_ASC',
  UserTypeDesc = 'userType_DESC',
  IsActivatedAsc = 'isActivated_ASC',
  IsActivatedDesc = 'isActivated_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC'
}

export enum IUserType {
  Admin = 'ADMIN',
  Owner = 'OWNER',
  Customer = 'CUSTOMER'
}

export type IVessel = {
   __typename?: 'Vessel',
  id: Scalars['ID'],
  vesselName: Scalars['String'],
  vesselNameLower: Scalars['String'],
  port: Scalars['String'],
  portLower: Scalars['String'],
  shipName?: Maybe<Scalars['String']>,
  shipyard?: Maybe<Scalars['String']>,
  owner?: Maybe<Scalars['String']>,
  transitSpeed?: Maybe<Scalars['Int']>,
  yearOfConstruction?: Maybe<Scalars['Int']>,
  accommodation?: Maybe<Scalars['Int']>,
  afterdeck?: Maybe<Scalars['Int']>,
  beam?: Maybe<Scalars['String']>,
  cargoCapacity?: Maybe<Scalars['Int']>,
  classification?: Maybe<Scalars['String']>,
  craneCapacity?: Maybe<Scalars['Int']>,
  foredeckSpace?: Maybe<Scalars['Int']>,
  design?: Maybe<Scalars['String']>,
  engineType?: Maybe<Scalars['String']>,
  fender?: Maybe<Scalars['String']>,
  flag?: Maybe<Scalars['String']>,
  totalDeck?: Maybe<Scalars['Int']>,
  freshWaterCapacity?: Maybe<Scalars['Int']>,
  fuelCapacity?: Maybe<Scalars['Int']>,
  hullType?: Maybe<Scalars['String']>,
  imo?: Maybe<Scalars['String']>,
  lengthOverall?: Maybe<Scalars['Int']>,
  mmsi?: Maybe<Scalars['Int']>,
  minDraft?: Maybe<Scalars['Int']>,
  maxDraft?: Maybe<Scalars['Int']>,
  maxSpeed?: Maybe<Scalars['Int']>,
  crew12hr?: Maybe<Scalars['Int']>,
  crew14hr?: Maybe<Scalars['Int']>,
  crew24hr?: Maybe<Scalars['Int']>,
  numberOfPax?: Maybe<Scalars['Int']>,
  propulsionType?: Maybe<Scalars['String']>,
  createdAt: Scalars['DateTime'],
  updatedAt: Scalars['DateTime'],
  deletedAt?: Maybe<Scalars['DateTime']>,
};

export enum IVesselOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  VesselNameAsc = 'vesselName_ASC',
  VesselNameDesc = 'vesselName_DESC',
  VesselNameLowerAsc = 'vesselNameLower_ASC',
  VesselNameLowerDesc = 'vesselNameLower_DESC',
  PortAsc = 'port_ASC',
  PortDesc = 'port_DESC',
  PortLowerAsc = 'portLower_ASC',
  PortLowerDesc = 'portLower_DESC',
  ShipNameAsc = 'shipName_ASC',
  ShipNameDesc = 'shipName_DESC',
  ShipyardAsc = 'shipyard_ASC',
  ShipyardDesc = 'shipyard_DESC',
  OwnerAsc = 'owner_ASC',
  OwnerDesc = 'owner_DESC',
  TransitSpeedAsc = 'transitSpeed_ASC',
  TransitSpeedDesc = 'transitSpeed_DESC',
  YearOfConstructionAsc = 'yearOfConstruction_ASC',
  YearOfConstructionDesc = 'yearOfConstruction_DESC',
  AccommodationAsc = 'accommodation_ASC',
  AccommodationDesc = 'accommodation_DESC',
  AfterdeckAsc = 'afterdeck_ASC',
  AfterdeckDesc = 'afterdeck_DESC',
  BeamAsc = 'beam_ASC',
  BeamDesc = 'beam_DESC',
  CargoCapacityAsc = 'cargoCapacity_ASC',
  CargoCapacityDesc = 'cargoCapacity_DESC',
  ClassificationAsc = 'classification_ASC',
  ClassificationDesc = 'classification_DESC',
  CraneCapacityAsc = 'craneCapacity_ASC',
  CraneCapacityDesc = 'craneCapacity_DESC',
  ForedeckSpaceAsc = 'foredeckSpace_ASC',
  ForedeckSpaceDesc = 'foredeckSpace_DESC',
  DesignAsc = 'design_ASC',
  DesignDesc = 'design_DESC',
  EngineTypeAsc = 'engineType_ASC',
  EngineTypeDesc = 'engineType_DESC',
  FenderAsc = 'fender_ASC',
  FenderDesc = 'fender_DESC',
  FlagAsc = 'flag_ASC',
  FlagDesc = 'flag_DESC',
  TotalDeckAsc = 'totalDeck_ASC',
  TotalDeckDesc = 'totalDeck_DESC',
  FreshWaterCapacityAsc = 'freshWaterCapacity_ASC',
  FreshWaterCapacityDesc = 'freshWaterCapacity_DESC',
  FuelCapacityAsc = 'fuelCapacity_ASC',
  FuelCapacityDesc = 'fuelCapacity_DESC',
  HullTypeAsc = 'hullType_ASC',
  HullTypeDesc = 'hullType_DESC',
  ImoAsc = 'imo_ASC',
  ImoDesc = 'imo_DESC',
  LengthOverallAsc = 'lengthOverall_ASC',
  LengthOverallDesc = 'lengthOverall_DESC',
  MmsiAsc = 'mmsi_ASC',
  MmsiDesc = 'mmsi_DESC',
  MinDraftAsc = 'minDraft_ASC',
  MinDraftDesc = 'minDraft_DESC',
  MaxDraftAsc = 'maxDraft_ASC',
  MaxDraftDesc = 'maxDraft_DESC',
  MaxSpeedAsc = 'maxSpeed_ASC',
  MaxSpeedDesc = 'maxSpeed_DESC',
  Crew12hrAsc = 'crew12hr_ASC',
  Crew12hrDesc = 'crew12hr_DESC',
  Crew14hrAsc = 'crew14hr_ASC',
  Crew14hrDesc = 'crew14hr_DESC',
  Crew24hrAsc = 'crew24hr_ASC',
  Crew24hrDesc = 'crew24hr_DESC',
  NumberOfPaxAsc = 'numberOfPax_ASC',
  NumberOfPaxDesc = 'numberOfPax_DESC',
  PropulsionTypeAsc = 'propulsionType_ASC',
  PropulsionTypeDesc = 'propulsionType_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC'
}

export type ILoginMutationVariables = {
  data: ILoginUserInput
};


export type ILoginMutation = (
  { __typename?: 'Mutation' }
  & { login: (
    { __typename?: 'AuthPayload' }
    & Pick<IAuthPayload, 'token'>
    & { user: (
      { __typename?: 'User' }
      & Pick<IUser, 'id' | 'firstName'>
    ) }
  ) }
);

export type ICreateUserMutationVariables = {
  data: ICreateUserInput
};


export type ICreateUserMutation = (
  { __typename?: 'Mutation' }
  & { createUser: (
    { __typename?: 'AuthPayload' }
    & Pick<IAuthPayload, 'token'>
    & { user: (
      { __typename?: 'User' }
      & Pick<IUser, 'id' | 'firstName'>
    ) }
  ) }
);

export type IMeQueryVariables = {};


export type IMeQuery = (
  { __typename?: 'Query' }
  & { me: (
    { __typename?: 'User' }
    & Pick<IUser, 'id' | 'firstName' | 'lastName' | 'email' | 'phone' | 'address' | 'userType' | 'isActivated' | 'createdAt'>
  ) }
);

export type IVesselsQueryVariables = {
  query: Scalars['String']
};


export type IVesselsQuery = (
  { __typename?: 'Query' }
  & { vessels: Array<(
    { __typename?: 'Vessel' }
    & Pick<IVessel, 'id' | 'vesselName' | 'port' | 'createdAt'>
  )> }
);


export const LoginDocument = gql`
    mutation Login($data: LoginUserInput!) {
  login(data: $data) {
    token
    user {
      id
      firstName
    }
  }
}
    `;
export type ILoginMutationFn = ApolloReactCommon.MutationFunction<ILoginMutation, ILoginMutationVariables>;
export type LoginComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<ILoginMutation, ILoginMutationVariables>, 'mutation'>;

    export const LoginComponent = (props: LoginComponentProps) => (
      <ApolloReactComponents.Mutation<ILoginMutation, ILoginMutationVariables> mutation={LoginDocument} {...props} />
    );
    
export type ILoginProps<TChildProps = {}> = ApolloReactHoc.MutateProps<ILoginMutation, ILoginMutationVariables> & TChildProps;
export function withLogin<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  ILoginMutation,
  ILoginMutationVariables,
  ILoginProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, ILoginMutation, ILoginMutationVariables, ILoginProps<TChildProps>>(LoginDocument, {
      alias: 'login',
      ...operationOptions
    });
};

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<ILoginMutation, ILoginMutationVariables>) {
        return ApolloReactHooks.useMutation<ILoginMutation, ILoginMutationVariables>(LoginDocument, baseOptions);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = ApolloReactCommon.MutationResult<ILoginMutation>;
export type LoginMutationOptions = ApolloReactCommon.BaseMutationOptions<ILoginMutation, ILoginMutationVariables>;
export const CreateUserDocument = gql`
    mutation CreateUser($data: CreateUserInput!) {
  createUser(data: $data) {
    token
    user {
      id
      firstName
    }
  }
}
    `;
export type ICreateUserMutationFn = ApolloReactCommon.MutationFunction<ICreateUserMutation, ICreateUserMutationVariables>;
export type CreateUserComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<ICreateUserMutation, ICreateUserMutationVariables>, 'mutation'>;

    export const CreateUserComponent = (props: CreateUserComponentProps) => (
      <ApolloReactComponents.Mutation<ICreateUserMutation, ICreateUserMutationVariables> mutation={CreateUserDocument} {...props} />
    );
    
export type ICreateUserProps<TChildProps = {}> = ApolloReactHoc.MutateProps<ICreateUserMutation, ICreateUserMutationVariables> & TChildProps;
export function withCreateUser<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  ICreateUserMutation,
  ICreateUserMutationVariables,
  ICreateUserProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, ICreateUserMutation, ICreateUserMutationVariables, ICreateUserProps<TChildProps>>(CreateUserDocument, {
      alias: 'createUser',
      ...operationOptions
    });
};

/**
 * __useCreateUserMutation__
 *
 * To run a mutation, you first call `useCreateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMutation, { data, loading, error }] = useCreateUserMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateUserMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<ICreateUserMutation, ICreateUserMutationVariables>) {
        return ApolloReactHooks.useMutation<ICreateUserMutation, ICreateUserMutationVariables>(CreateUserDocument, baseOptions);
      }
export type CreateUserMutationHookResult = ReturnType<typeof useCreateUserMutation>;
export type CreateUserMutationResult = ApolloReactCommon.MutationResult<ICreateUserMutation>;
export type CreateUserMutationOptions = ApolloReactCommon.BaseMutationOptions<ICreateUserMutation, ICreateUserMutationVariables>;
export const MeDocument = gql`
    query Me {
  me {
    id
    firstName
    lastName
    email
    phone
    address
    userType
    isActivated
    createdAt
  }
}
    `;
export type MeComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<IMeQuery, IMeQueryVariables>, 'query'>;

    export const MeComponent = (props: MeComponentProps) => (
      <ApolloReactComponents.Query<IMeQuery, IMeQueryVariables> query={MeDocument} {...props} />
    );
    
export type IMeProps<TChildProps = {}> = ApolloReactHoc.DataProps<IMeQuery, IMeQueryVariables> & TChildProps;
export function withMe<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  IMeQuery,
  IMeQueryVariables,
  IMeProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, IMeQuery, IMeQueryVariables, IMeProps<TChildProps>>(MeDocument, {
      alias: 'me',
      ...operationOptions
    });
};

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<IMeQuery, IMeQueryVariables>) {
        return ApolloReactHooks.useQuery<IMeQuery, IMeQueryVariables>(MeDocument, baseOptions);
      }
export function useMeLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<IMeQuery, IMeQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<IMeQuery, IMeQueryVariables>(MeDocument, baseOptions);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = ApolloReactCommon.QueryResult<IMeQuery, IMeQueryVariables>;
export const VesselsDocument = gql`
    query Vessels($query: String!) {
  vessels(query: $query) {
    id
    vesselName
    port
    createdAt
  }
}
    `;
export type VesselsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<IVesselsQuery, IVesselsQueryVariables>, 'query'> & ({ variables: IVesselsQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const VesselsComponent = (props: VesselsComponentProps) => (
      <ApolloReactComponents.Query<IVesselsQuery, IVesselsQueryVariables> query={VesselsDocument} {...props} />
    );
    
export type IVesselsProps<TChildProps = {}> = ApolloReactHoc.DataProps<IVesselsQuery, IVesselsQueryVariables> & TChildProps;
export function withVessels<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  IVesselsQuery,
  IVesselsQueryVariables,
  IVesselsProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, IVesselsQuery, IVesselsQueryVariables, IVesselsProps<TChildProps>>(VesselsDocument, {
      alias: 'vessels',
      ...operationOptions
    });
};

/**
 * __useVesselsQuery__
 *
 * To run a query within a React component, call `useVesselsQuery` and pass it any options that fit your needs.
 * When your component renders, `useVesselsQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useVesselsQuery({
 *   variables: {
 *      query: // value for 'query'
 *   },
 * });
 */
export function useVesselsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<IVesselsQuery, IVesselsQueryVariables>) {
        return ApolloReactHooks.useQuery<IVesselsQuery, IVesselsQueryVariables>(VesselsDocument, baseOptions);
      }
export function useVesselsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<IVesselsQuery, IVesselsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<IVesselsQuery, IVesselsQueryVariables>(VesselsDocument, baseOptions);
        }
export type VesselsQueryHookResult = ReturnType<typeof useVesselsQuery>;
export type VesselsLazyQueryHookResult = ReturnType<typeof useVesselsLazyQuery>;
export type VesselsQueryResult = ApolloReactCommon.QueryResult<IVesselsQuery, IVesselsQueryVariables>;