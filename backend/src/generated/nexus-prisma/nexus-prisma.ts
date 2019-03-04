// GENERATED TYPES FOR NEXUS-PRISMA. /!\ DO NOT EDIT MANUALLY

import { core } from 'nexus'
import { GraphQLResolveInfo } from 'graphql'
import * as prisma from '../prisma-client'

declare global {
  interface NexusPrismaGen extends NexusPrismaTypes {}
}

export interface NexusPrismaTypes {
  objectTypes: {
    fields: {
      Query: QueryObject
      User: UserObject
      Post: PostObject
      SetCard: SetCardObject
      Pictures: PicturesObject
      UserConnection: UserConnectionObject
      PageInfo: PageInfoObject
      UserEdge: UserEdgeObject
      AggregateUser: AggregateUserObject
      SetCardConnection: SetCardConnectionObject
      SetCardEdge: SetCardEdgeObject
      AggregateSetCard: AggregateSetCardObject
      PicturesConnection: PicturesConnectionObject
      PicturesEdge: PicturesEdgeObject
      AggregatePictures: AggregatePicturesObject
      PostConnection: PostConnectionObject
      PostEdge: PostEdgeObject
      AggregatePost: AggregatePostObject
      Mutation: MutationObject
      BatchPayload: BatchPayloadObject
      Subscription: SubscriptionObject
      UserSubscriptionPayload: UserSubscriptionPayloadObject
      UserPreviousValues: UserPreviousValuesObject
      SetCardSubscriptionPayload: SetCardSubscriptionPayloadObject
      SetCardPreviousValues: SetCardPreviousValuesObject
      PicturesSubscriptionPayload: PicturesSubscriptionPayloadObject
      PicturesPreviousValues: PicturesPreviousValuesObject
      PostSubscriptionPayload: PostSubscriptionPayloadObject
      PostPreviousValues: PostPreviousValuesObject
    }
    fieldsDetails: {
      Query: QueryFieldDetails
      User: UserFieldDetails
      Post: PostFieldDetails
      SetCard: SetCardFieldDetails
      Pictures: PicturesFieldDetails
      UserConnection: UserConnectionFieldDetails
      PageInfo: PageInfoFieldDetails
      UserEdge: UserEdgeFieldDetails
      AggregateUser: AggregateUserFieldDetails
      SetCardConnection: SetCardConnectionFieldDetails
      SetCardEdge: SetCardEdgeFieldDetails
      AggregateSetCard: AggregateSetCardFieldDetails
      PicturesConnection: PicturesConnectionFieldDetails
      PicturesEdge: PicturesEdgeFieldDetails
      AggregatePictures: AggregatePicturesFieldDetails
      PostConnection: PostConnectionFieldDetails
      PostEdge: PostEdgeFieldDetails
      AggregatePost: AggregatePostFieldDetails
      Mutation: MutationFieldDetails
      BatchPayload: BatchPayloadFieldDetails
      Subscription: SubscriptionFieldDetails
      UserSubscriptionPayload: UserSubscriptionPayloadFieldDetails
      UserPreviousValues: UserPreviousValuesFieldDetails
      SetCardSubscriptionPayload: SetCardSubscriptionPayloadFieldDetails
      SetCardPreviousValues: SetCardPreviousValuesFieldDetails
      PicturesSubscriptionPayload: PicturesSubscriptionPayloadFieldDetails
      PicturesPreviousValues: PicturesPreviousValuesFieldDetails
      PostSubscriptionPayload: PostSubscriptionPayloadFieldDetails
      PostPreviousValues: PostPreviousValuesFieldDetails
    }
  }
  inputTypes: {
    fields: {
      UserWhereUniqueInput: UserWhereUniqueInputInputObject
      PostWhereInput: PostWhereInputInputObject
      UserWhereInput: UserWhereInputInputObject
      SetCardWhereInput: SetCardWhereInputInputObject
      PicturesWhereInput: PicturesWhereInputInputObject
      SetCardWhereUniqueInput: SetCardWhereUniqueInputInputObject
      PicturesWhereUniqueInput: PicturesWhereUniqueInputInputObject
      PostWhereUniqueInput: PostWhereUniqueInputInputObject
      UserCreateInput: UserCreateInputInputObject
      PostCreateManyWithoutAuthorInput: PostCreateManyWithoutAuthorInputInputObject
      PostCreateWithoutAuthorInput: PostCreateWithoutAuthorInputInputObject
      UserCreatepermissionsInput: UserCreatepermissionsInputInputObject
      SetCardCreateOneWithoutEscortInput: SetCardCreateOneWithoutEscortInputInputObject
      SetCardCreateWithoutEscortInput: SetCardCreateWithoutEscortInputInputObject
      PicturesCreateManyWithoutSetCardInput: PicturesCreateManyWithoutSetCardInputInputObject
      PicturesCreateWithoutSetCardInput: PicturesCreateWithoutSetCardInputInputObject
      UserUpdateInput: UserUpdateInputInputObject
      PostUpdateManyWithoutAuthorInput: PostUpdateManyWithoutAuthorInputInputObject
      PostUpdateWithWhereUniqueWithoutAuthorInput: PostUpdateWithWhereUniqueWithoutAuthorInputInputObject
      PostUpdateWithoutAuthorDataInput: PostUpdateWithoutAuthorDataInputInputObject
      PostUpsertWithWhereUniqueWithoutAuthorInput: PostUpsertWithWhereUniqueWithoutAuthorInputInputObject
      PostScalarWhereInput: PostScalarWhereInputInputObject
      PostUpdateManyWithWhereNestedInput: PostUpdateManyWithWhereNestedInputInputObject
      PostUpdateManyDataInput: PostUpdateManyDataInputInputObject
      UserUpdatepermissionsInput: UserUpdatepermissionsInputInputObject
      SetCardUpdateOneWithoutEscortInput: SetCardUpdateOneWithoutEscortInputInputObject
      SetCardUpdateWithoutEscortDataInput: SetCardUpdateWithoutEscortDataInputInputObject
      PicturesUpdateManyWithoutSetCardInput: PicturesUpdateManyWithoutSetCardInputInputObject
      PicturesUpdateWithWhereUniqueWithoutSetCardInput: PicturesUpdateWithWhereUniqueWithoutSetCardInputInputObject
      PicturesUpdateWithoutSetCardDataInput: PicturesUpdateWithoutSetCardDataInputInputObject
      PicturesUpsertWithWhereUniqueWithoutSetCardInput: PicturesUpsertWithWhereUniqueWithoutSetCardInputInputObject
      PicturesScalarWhereInput: PicturesScalarWhereInputInputObject
      PicturesUpdateManyWithWhereNestedInput: PicturesUpdateManyWithWhereNestedInputInputObject
      PicturesUpdateManyDataInput: PicturesUpdateManyDataInputInputObject
      SetCardUpsertWithoutEscortInput: SetCardUpsertWithoutEscortInputInputObject
      UserUpdateManyMutationInput: UserUpdateManyMutationInputInputObject
      SetCardCreateInput: SetCardCreateInputInputObject
      UserCreateOneWithoutProfileInput: UserCreateOneWithoutProfileInputInputObject
      UserCreateWithoutProfileInput: UserCreateWithoutProfileInputInputObject
      SetCardUpdateInput: SetCardUpdateInputInputObject
      UserUpdateOneRequiredWithoutProfileInput: UserUpdateOneRequiredWithoutProfileInputInputObject
      UserUpdateWithoutProfileDataInput: UserUpdateWithoutProfileDataInputInputObject
      UserUpsertWithoutProfileInput: UserUpsertWithoutProfileInputInputObject
      SetCardUpdateManyMutationInput: SetCardUpdateManyMutationInputInputObject
      PicturesCreateInput: PicturesCreateInputInputObject
      SetCardCreateOneWithoutPicturesInput: SetCardCreateOneWithoutPicturesInputInputObject
      SetCardCreateWithoutPicturesInput: SetCardCreateWithoutPicturesInputInputObject
      PicturesUpdateInput: PicturesUpdateInputInputObject
      SetCardUpdateOneRequiredWithoutPicturesInput: SetCardUpdateOneRequiredWithoutPicturesInputInputObject
      SetCardUpdateWithoutPicturesDataInput: SetCardUpdateWithoutPicturesDataInputInputObject
      SetCardUpsertWithoutPicturesInput: SetCardUpsertWithoutPicturesInputInputObject
      PicturesUpdateManyMutationInput: PicturesUpdateManyMutationInputInputObject
      PostCreateInput: PostCreateInputInputObject
      UserCreateOneWithoutPostsInput: UserCreateOneWithoutPostsInputInputObject
      UserCreateWithoutPostsInput: UserCreateWithoutPostsInputInputObject
      PostUpdateInput: PostUpdateInputInputObject
      UserUpdateOneRequiredWithoutPostsInput: UserUpdateOneRequiredWithoutPostsInputInputObject
      UserUpdateWithoutPostsDataInput: UserUpdateWithoutPostsDataInputInputObject
      UserUpsertWithoutPostsInput: UserUpsertWithoutPostsInputInputObject
      PostUpdateManyMutationInput: PostUpdateManyMutationInputInputObject
      UserSubscriptionWhereInput: UserSubscriptionWhereInputInputObject
      SetCardSubscriptionWhereInput: SetCardSubscriptionWhereInputInputObject
      PicturesSubscriptionWhereInput: PicturesSubscriptionWhereInputInputObject
      PostSubscriptionWhereInput: PostSubscriptionWhereInputInputObject
    }
  }
  enumTypes: {
    PostOrderByInput: PostOrderByInputValues,
    Permission: PermissionValues,
    PicturesOrderByInput: PicturesOrderByInputValues,
    UserOrderByInput: UserOrderByInputValues,
    SetCardOrderByInput: SetCardOrderByInputValues,
    MutationType: MutationTypeValues,
  }
}

// Types for Query

type QueryObject =
  | QueryFields
  | { name: 'user', args?: QueryUserArgs[] | false, alias?: string  } 
  | { name: 'users', args?: QueryUsersArgs[] | false, alias?: string  } 
  | { name: 'usersConnection', args?: QueryUsersConnectionArgs[] | false, alias?: string  } 
  | { name: 'setCard', args?: QuerySetCardArgs[] | false, alias?: string  } 
  | { name: 'setCards', args?: QuerySetCardsArgs[] | false, alias?: string  } 
  | { name: 'setCardsConnection', args?: QuerySetCardsConnectionArgs[] | false, alias?: string  } 
  | { name: 'pictures', args?: QueryPicturesArgs[] | false, alias?: string  } 
  | { name: 'pictureses', args?: QueryPicturesesArgs[] | false, alias?: string  } 
  | { name: 'picturesesConnection', args?: QueryPicturesesConnectionArgs[] | false, alias?: string  } 
  | { name: 'post', args?: QueryPostArgs[] | false, alias?: string  } 
  | { name: 'posts', args?: QueryPostsArgs[] | false, alias?: string  } 
  | { name: 'postsConnection', args?: QueryPostsConnectionArgs[] | false, alias?: string  } 
  | { name: 'node', args?: QueryNodeArgs[] | false, alias?: string  } 

type QueryFields =
  | 'user'
  | 'users'
  | 'usersConnection'
  | 'setCard'
  | 'setCards'
  | 'setCardsConnection'
  | 'pictures'
  | 'pictureses'
  | 'picturesesConnection'
  | 'post'
  | 'posts'
  | 'postsConnection'
  | 'node'


type QueryUserArgs =
  | 'where'
type QueryUsersArgs =
  | 'where'
  | 'orderBy'
  | 'skip'
  | 'after'
  | 'before'
  | 'first'
  | 'last'
type QueryUsersConnectionArgs =
  | 'where'
  | 'orderBy'
  | 'skip'
  | 'after'
  | 'before'
  | 'first'
  | 'last'
type QuerySetCardArgs =
  | 'where'
type QuerySetCardsArgs =
  | 'where'
  | 'orderBy'
  | 'skip'
  | 'after'
  | 'before'
  | 'first'
  | 'last'
type QuerySetCardsConnectionArgs =
  | 'where'
  | 'orderBy'
  | 'skip'
  | 'after'
  | 'before'
  | 'first'
  | 'last'
type QueryPicturesArgs =
  | 'where'
type QueryPicturesesArgs =
  | 'where'
  | 'orderBy'
  | 'skip'
  | 'after'
  | 'before'
  | 'first'
  | 'last'
type QueryPicturesesConnectionArgs =
  | 'where'
  | 'orderBy'
  | 'skip'
  | 'after'
  | 'before'
  | 'first'
  | 'last'
type QueryPostArgs =
  | 'where'
type QueryPostsArgs =
  | 'where'
  | 'orderBy'
  | 'skip'
  | 'after'
  | 'before'
  | 'first'
  | 'last'
type QueryPostsConnectionArgs =
  | 'where'
  | 'orderBy'
  | 'skip'
  | 'after'
  | 'before'
  | 'first'
  | 'last'
type QueryNodeArgs =
  | 'id'
  

export interface QueryFieldDetails {
  user: {
    type: 'User'
    args: Record<QueryUserArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"Query">,
      args: { where: UserWhereUniqueInput }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.User | null> | prisma.User | null
  }
  users: {
    type: 'User'
    args: Record<QueryUsersArgs, core.NexusArgDef<string>>
    description: string
    list: true
    nullable: false
    resolve: (
      root: core.RootValue<"Query">,
      args: { where?: UserWhereInput | null, orderBy?: prisma.UserOrderByInput | null, skip?: number | null, after?: string | null, before?: string | null, first?: number | null, last?: number | null }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.User[]> | prisma.User[]
  }
  usersConnection: {
    type: 'UserConnection'
    args: Record<QueryUsersConnectionArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"Query">,
      args: { where?: UserWhereInput | null, orderBy?: prisma.UserOrderByInput | null, skip?: number | null, after?: string | null, before?: string | null, first?: number | null, last?: number | null }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.UserConnection> | prisma.UserConnection
  }
  setCard: {
    type: 'SetCard'
    args: Record<QuerySetCardArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"Query">,
      args: { where: SetCardWhereUniqueInput }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.SetCard | null> | prisma.SetCard | null
  }
  setCards: {
    type: 'SetCard'
    args: Record<QuerySetCardsArgs, core.NexusArgDef<string>>
    description: string
    list: true
    nullable: false
    resolve: (
      root: core.RootValue<"Query">,
      args: { where?: SetCardWhereInput | null, orderBy?: prisma.SetCardOrderByInput | null, skip?: number | null, after?: string | null, before?: string | null, first?: number | null, last?: number | null }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.SetCard[]> | prisma.SetCard[]
  }
  setCardsConnection: {
    type: 'SetCardConnection'
    args: Record<QuerySetCardsConnectionArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"Query">,
      args: { where?: SetCardWhereInput | null, orderBy?: prisma.SetCardOrderByInput | null, skip?: number | null, after?: string | null, before?: string | null, first?: number | null, last?: number | null }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.SetCardConnection> | prisma.SetCardConnection
  }
  pictures: {
    type: 'Pictures'
    args: Record<QueryPicturesArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"Query">,
      args: { where: PicturesWhereUniqueInput }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Pictures | null> | prisma.Pictures | null
  }
  pictureses: {
    type: 'Pictures'
    args: Record<QueryPicturesesArgs, core.NexusArgDef<string>>
    description: string
    list: true
    nullable: false
    resolve: (
      root: core.RootValue<"Query">,
      args: { where?: PicturesWhereInput | null, orderBy?: prisma.PicturesOrderByInput | null, skip?: number | null, after?: string | null, before?: string | null, first?: number | null, last?: number | null }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Pictures[]> | prisma.Pictures[]
  }
  picturesesConnection: {
    type: 'PicturesConnection'
    args: Record<QueryPicturesesConnectionArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"Query">,
      args: { where?: PicturesWhereInput | null, orderBy?: prisma.PicturesOrderByInput | null, skip?: number | null, after?: string | null, before?: string | null, first?: number | null, last?: number | null }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.PicturesConnection> | prisma.PicturesConnection
  }
  post: {
    type: 'Post'
    args: Record<QueryPostArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"Query">,
      args: { where: PostWhereUniqueInput }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Post | null> | prisma.Post | null
  }
  posts: {
    type: 'Post'
    args: Record<QueryPostsArgs, core.NexusArgDef<string>>
    description: string
    list: true
    nullable: false
    resolve: (
      root: core.RootValue<"Query">,
      args: { where?: PostWhereInput | null, orderBy?: prisma.PostOrderByInput | null, skip?: number | null, after?: string | null, before?: string | null, first?: number | null, last?: number | null }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Post[]> | prisma.Post[]
  }
  postsConnection: {
    type: 'PostConnection'
    args: Record<QueryPostsConnectionArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"Query">,
      args: { where?: PostWhereInput | null, orderBy?: prisma.PostOrderByInput | null, skip?: number | null, after?: string | null, before?: string | null, first?: number | null, last?: number | null }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.PostConnection> | prisma.PostConnection
  }
  node: {
    type: 'Node'
    args: Record<QueryNodeArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"Query">,
      args: { id: string }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Node | null> | prisma.Node | null
  }
}
  

// Types for User

type UserObject =
  | UserFields
  | { name: 'id', args?: [] | false, alias?: string  } 
  | { name: 'email', args?: [] | false, alias?: string  } 
  | { name: 'nickname', args?: [] | false, alias?: string  } 
  | { name: 'password', args?: [] | false, alias?: string  } 
  | { name: 'name', args?: [] | false, alias?: string  } 
  | { name: 'posts', args?: UserPostsArgs[] | false, alias?: string  } 
  | { name: 'permissions', args?: [] | false, alias?: string  } 
  | { name: 'profile', args?: [] | false, alias?: string  } 

type UserFields =
  | 'id'
  | 'email'
  | 'nickname'
  | 'password'
  | 'name'
  | 'posts'
  | 'permissions'
  | 'profile'


type UserPostsArgs =
  | 'where'
  | 'orderBy'
  | 'skip'
  | 'after'
  | 'before'
  | 'first'
  | 'last'
  

export interface UserFieldDetails {
  id: {
    type: 'ID'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
  email: {
    type: 'String'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
  nickname: {
    type: 'String'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
  password: {
    type: 'String'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
  name: {
    type: 'String'
    args: {}
    description: string
    list: undefined
    nullable: true
    resolve: undefined
  }
  posts: {
    type: 'Post'
    args: Record<UserPostsArgs, core.NexusArgDef<string>>
    description: string
    list: true
    nullable: false
    resolve: (
      root: core.RootValue<"User">,
      args: { where?: PostWhereInput | null, orderBy?: prisma.PostOrderByInput | null, skip?: number | null, after?: string | null, before?: string | null, first?: number | null, last?: number | null }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Post[]> | prisma.Post[]
  }
  permissions: {
    type: 'Permission'
    args: {}
    description: string
    list: true
    nullable: false
    resolve: (
      root: core.RootValue<"User">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Permission[]> | prisma.Permission[]
  }
  profile: {
    type: 'SetCard'
    args: {}
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"User">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.SetCard | null> | prisma.SetCard | null
  }
}
  

// Types for Post

type PostObject =
  | PostFields
  | { name: 'id', args?: [] | false, alias?: string  } 
  | { name: 'createdAt', args?: [] | false, alias?: string  } 
  | { name: 'updatedAt', args?: [] | false, alias?: string  } 
  | { name: 'published', args?: [] | false, alias?: string  } 
  | { name: 'title', args?: [] | false, alias?: string  } 
  | { name: 'content', args?: [] | false, alias?: string  } 
  | { name: 'author', args?: [] | false, alias?: string  } 

type PostFields =
  | 'id'
  | 'createdAt'
  | 'updatedAt'
  | 'published'
  | 'title'
  | 'content'
  | 'author'



  

export interface PostFieldDetails {
  id: {
    type: 'ID'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
  createdAt: {
    type: 'DateTime'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
  updatedAt: {
    type: 'DateTime'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
  published: {
    type: 'Boolean'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
  title: {
    type: 'String'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
  content: {
    type: 'String'
    args: {}
    description: string
    list: undefined
    nullable: true
    resolve: undefined
  }
  author: {
    type: 'User'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"Post">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.User> | prisma.User
  }
}
  

// Types for SetCard

type SetCardObject =
  | SetCardFields
  | { name: 'id', args?: [] | false, alias?: string  } 
  | { name: 'aliasName', args?: [] | false, alias?: string  } 
  | { name: 'pictures', args?: SetCardPicturesArgs[] | false, alias?: string  } 
  | { name: 'age', args?: [] | false, alias?: string  } 
  | { name: 'escort', args?: [] | false, alias?: string  } 

type SetCardFields =
  | 'id'
  | 'aliasName'
  | 'pictures'
  | 'age'
  | 'escort'


type SetCardPicturesArgs =
  | 'where'
  | 'orderBy'
  | 'skip'
  | 'after'
  | 'before'
  | 'first'
  | 'last'
  

export interface SetCardFieldDetails {
  id: {
    type: 'ID'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
  aliasName: {
    type: 'String'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
  pictures: {
    type: 'Pictures'
    args: Record<SetCardPicturesArgs, core.NexusArgDef<string>>
    description: string
    list: true
    nullable: false
    resolve: (
      root: core.RootValue<"SetCard">,
      args: { where?: PicturesWhereInput | null, orderBy?: prisma.PicturesOrderByInput | null, skip?: number | null, after?: string | null, before?: string | null, first?: number | null, last?: number | null }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Pictures[]> | prisma.Pictures[]
  }
  age: {
    type: 'Int'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
  escort: {
    type: 'User'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"SetCard">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.User> | prisma.User
  }
}
  

// Types for Pictures

type PicturesObject =
  | PicturesFields
  | { name: 'id', args?: [] | false, alias?: string  } 
  | { name: 'createdAt', args?: [] | false, alias?: string  } 
  | { name: 'updatedAt', args?: [] | false, alias?: string  } 
  | { name: 'url', args?: [] | false, alias?: string  } 
  | { name: 'setCard', args?: [] | false, alias?: string  } 

type PicturesFields =
  | 'id'
  | 'createdAt'
  | 'updatedAt'
  | 'url'
  | 'setCard'



  

export interface PicturesFieldDetails {
  id: {
    type: 'ID'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
  createdAt: {
    type: 'DateTime'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
  updatedAt: {
    type: 'DateTime'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
  url: {
    type: 'String'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
  setCard: {
    type: 'SetCard'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"Pictures">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.SetCard> | prisma.SetCard
  }
}
  

// Types for UserConnection

type UserConnectionObject =
  | UserConnectionFields
  | { name: 'pageInfo', args?: [] | false, alias?: string  } 
  | { name: 'edges', args?: [] | false, alias?: string  } 
  | { name: 'aggregate', args?: [] | false, alias?: string  } 

type UserConnectionFields =
  | 'pageInfo'
  | 'edges'
  | 'aggregate'



  

export interface UserConnectionFieldDetails {
  pageInfo: {
    type: 'PageInfo'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"UserConnection">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.PageInfo> | prisma.PageInfo
  }
  edges: {
    type: 'UserEdge'
    args: {}
    description: string
    list: true
    nullable: false
    resolve: (
      root: core.RootValue<"UserConnection">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.UserEdge[]> | prisma.UserEdge[]
  }
  aggregate: {
    type: 'AggregateUser'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"UserConnection">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.AggregateUser> | prisma.AggregateUser
  }
}
  

// Types for PageInfo

type PageInfoObject =
  | PageInfoFields
  | { name: 'hasNextPage', args?: [] | false, alias?: string  } 
  | { name: 'hasPreviousPage', args?: [] | false, alias?: string  } 
  | { name: 'startCursor', args?: [] | false, alias?: string  } 
  | { name: 'endCursor', args?: [] | false, alias?: string  } 

type PageInfoFields =
  | 'hasNextPage'
  | 'hasPreviousPage'
  | 'startCursor'
  | 'endCursor'



  

export interface PageInfoFieldDetails {
  hasNextPage: {
    type: 'Boolean'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
  hasPreviousPage: {
    type: 'Boolean'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
  startCursor: {
    type: 'String'
    args: {}
    description: string
    list: undefined
    nullable: true
    resolve: undefined
  }
  endCursor: {
    type: 'String'
    args: {}
    description: string
    list: undefined
    nullable: true
    resolve: undefined
  }
}
  

// Types for UserEdge

type UserEdgeObject =
  | UserEdgeFields
  | { name: 'node', args?: [] | false, alias?: string  } 
  | { name: 'cursor', args?: [] | false, alias?: string  } 

type UserEdgeFields =
  | 'node'
  | 'cursor'



  

export interface UserEdgeFieldDetails {
  node: {
    type: 'User'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"UserEdge">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.User> | prisma.User
  }
  cursor: {
    type: 'String'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
}
  

// Types for AggregateUser

type AggregateUserObject =
  | AggregateUserFields
  | { name: 'count', args?: [] | false, alias?: string  } 

type AggregateUserFields =
  | 'count'



  

export interface AggregateUserFieldDetails {
  count: {
    type: 'Int'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
}
  

// Types for SetCardConnection

type SetCardConnectionObject =
  | SetCardConnectionFields
  | { name: 'pageInfo', args?: [] | false, alias?: string  } 
  | { name: 'edges', args?: [] | false, alias?: string  } 
  | { name: 'aggregate', args?: [] | false, alias?: string  } 

type SetCardConnectionFields =
  | 'pageInfo'
  | 'edges'
  | 'aggregate'



  

export interface SetCardConnectionFieldDetails {
  pageInfo: {
    type: 'PageInfo'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"SetCardConnection">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.PageInfo> | prisma.PageInfo
  }
  edges: {
    type: 'SetCardEdge'
    args: {}
    description: string
    list: true
    nullable: false
    resolve: (
      root: core.RootValue<"SetCardConnection">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.SetCardEdge[]> | prisma.SetCardEdge[]
  }
  aggregate: {
    type: 'AggregateSetCard'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"SetCardConnection">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.AggregateSetCard> | prisma.AggregateSetCard
  }
}
  

// Types for SetCardEdge

type SetCardEdgeObject =
  | SetCardEdgeFields
  | { name: 'node', args?: [] | false, alias?: string  } 
  | { name: 'cursor', args?: [] | false, alias?: string  } 

type SetCardEdgeFields =
  | 'node'
  | 'cursor'



  

export interface SetCardEdgeFieldDetails {
  node: {
    type: 'SetCard'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"SetCardEdge">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.SetCard> | prisma.SetCard
  }
  cursor: {
    type: 'String'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
}
  

// Types for AggregateSetCard

type AggregateSetCardObject =
  | AggregateSetCardFields
  | { name: 'count', args?: [] | false, alias?: string  } 

type AggregateSetCardFields =
  | 'count'



  

export interface AggregateSetCardFieldDetails {
  count: {
    type: 'Int'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
}
  

// Types for PicturesConnection

type PicturesConnectionObject =
  | PicturesConnectionFields
  | { name: 'pageInfo', args?: [] | false, alias?: string  } 
  | { name: 'edges', args?: [] | false, alias?: string  } 
  | { name: 'aggregate', args?: [] | false, alias?: string  } 

type PicturesConnectionFields =
  | 'pageInfo'
  | 'edges'
  | 'aggregate'



  

export interface PicturesConnectionFieldDetails {
  pageInfo: {
    type: 'PageInfo'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"PicturesConnection">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.PageInfo> | prisma.PageInfo
  }
  edges: {
    type: 'PicturesEdge'
    args: {}
    description: string
    list: true
    nullable: false
    resolve: (
      root: core.RootValue<"PicturesConnection">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.PicturesEdge[]> | prisma.PicturesEdge[]
  }
  aggregate: {
    type: 'AggregatePictures'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"PicturesConnection">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.AggregatePictures> | prisma.AggregatePictures
  }
}
  

// Types for PicturesEdge

type PicturesEdgeObject =
  | PicturesEdgeFields
  | { name: 'node', args?: [] | false, alias?: string  } 
  | { name: 'cursor', args?: [] | false, alias?: string  } 

type PicturesEdgeFields =
  | 'node'
  | 'cursor'



  

export interface PicturesEdgeFieldDetails {
  node: {
    type: 'Pictures'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"PicturesEdge">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Pictures> | prisma.Pictures
  }
  cursor: {
    type: 'String'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
}
  

// Types for AggregatePictures

type AggregatePicturesObject =
  | AggregatePicturesFields
  | { name: 'count', args?: [] | false, alias?: string  } 

type AggregatePicturesFields =
  | 'count'



  

export interface AggregatePicturesFieldDetails {
  count: {
    type: 'Int'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
}
  

// Types for PostConnection

type PostConnectionObject =
  | PostConnectionFields
  | { name: 'pageInfo', args?: [] | false, alias?: string  } 
  | { name: 'edges', args?: [] | false, alias?: string  } 
  | { name: 'aggregate', args?: [] | false, alias?: string  } 

type PostConnectionFields =
  | 'pageInfo'
  | 'edges'
  | 'aggregate'



  

export interface PostConnectionFieldDetails {
  pageInfo: {
    type: 'PageInfo'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"PostConnection">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.PageInfo> | prisma.PageInfo
  }
  edges: {
    type: 'PostEdge'
    args: {}
    description: string
    list: true
    nullable: false
    resolve: (
      root: core.RootValue<"PostConnection">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.PostEdge[]> | prisma.PostEdge[]
  }
  aggregate: {
    type: 'AggregatePost'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"PostConnection">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.AggregatePost> | prisma.AggregatePost
  }
}
  

// Types for PostEdge

type PostEdgeObject =
  | PostEdgeFields
  | { name: 'node', args?: [] | false, alias?: string  } 
  | { name: 'cursor', args?: [] | false, alias?: string  } 

type PostEdgeFields =
  | 'node'
  | 'cursor'



  

export interface PostEdgeFieldDetails {
  node: {
    type: 'Post'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"PostEdge">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Post> | prisma.Post
  }
  cursor: {
    type: 'String'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
}
  

// Types for AggregatePost

type AggregatePostObject =
  | AggregatePostFields
  | { name: 'count', args?: [] | false, alias?: string  } 

type AggregatePostFields =
  | 'count'



  

export interface AggregatePostFieldDetails {
  count: {
    type: 'Int'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
}
  

// Types for Mutation

type MutationObject =
  | MutationFields
  | { name: 'createUser', args?: MutationCreateUserArgs[] | false, alias?: string  } 
  | { name: 'updateUser', args?: MutationUpdateUserArgs[] | false, alias?: string  } 
  | { name: 'updateManyUsers', args?: MutationUpdateManyUsersArgs[] | false, alias?: string  } 
  | { name: 'upsertUser', args?: MutationUpsertUserArgs[] | false, alias?: string  } 
  | { name: 'deleteUser', args?: MutationDeleteUserArgs[] | false, alias?: string  } 
  | { name: 'deleteManyUsers', args?: MutationDeleteManyUsersArgs[] | false, alias?: string  } 
  | { name: 'createSetCard', args?: MutationCreateSetCardArgs[] | false, alias?: string  } 
  | { name: 'updateSetCard', args?: MutationUpdateSetCardArgs[] | false, alias?: string  } 
  | { name: 'updateManySetCards', args?: MutationUpdateManySetCardsArgs[] | false, alias?: string  } 
  | { name: 'upsertSetCard', args?: MutationUpsertSetCardArgs[] | false, alias?: string  } 
  | { name: 'deleteSetCard', args?: MutationDeleteSetCardArgs[] | false, alias?: string  } 
  | { name: 'deleteManySetCards', args?: MutationDeleteManySetCardsArgs[] | false, alias?: string  } 
  | { name: 'createPictures', args?: MutationCreatePicturesArgs[] | false, alias?: string  } 
  | { name: 'updatePictures', args?: MutationUpdatePicturesArgs[] | false, alias?: string  } 
  | { name: 'updateManyPictureses', args?: MutationUpdateManyPicturesesArgs[] | false, alias?: string  } 
  | { name: 'upsertPictures', args?: MutationUpsertPicturesArgs[] | false, alias?: string  } 
  | { name: 'deletePictures', args?: MutationDeletePicturesArgs[] | false, alias?: string  } 
  | { name: 'deleteManyPictureses', args?: MutationDeleteManyPicturesesArgs[] | false, alias?: string  } 
  | { name: 'createPost', args?: MutationCreatePostArgs[] | false, alias?: string  } 
  | { name: 'updatePost', args?: MutationUpdatePostArgs[] | false, alias?: string  } 
  | { name: 'updateManyPosts', args?: MutationUpdateManyPostsArgs[] | false, alias?: string  } 
  | { name: 'upsertPost', args?: MutationUpsertPostArgs[] | false, alias?: string  } 
  | { name: 'deletePost', args?: MutationDeletePostArgs[] | false, alias?: string  } 
  | { name: 'deleteManyPosts', args?: MutationDeleteManyPostsArgs[] | false, alias?: string  } 

type MutationFields =
  | 'createUser'
  | 'updateUser'
  | 'updateManyUsers'
  | 'upsertUser'
  | 'deleteUser'
  | 'deleteManyUsers'
  | 'createSetCard'
  | 'updateSetCard'
  | 'updateManySetCards'
  | 'upsertSetCard'
  | 'deleteSetCard'
  | 'deleteManySetCards'
  | 'createPictures'
  | 'updatePictures'
  | 'updateManyPictureses'
  | 'upsertPictures'
  | 'deletePictures'
  | 'deleteManyPictureses'
  | 'createPost'
  | 'updatePost'
  | 'updateManyPosts'
  | 'upsertPost'
  | 'deletePost'
  | 'deleteManyPosts'


type MutationCreateUserArgs =
  | 'data'
type MutationUpdateUserArgs =
  | 'data'
  | 'where'
type MutationUpdateManyUsersArgs =
  | 'data'
  | 'where'
type MutationUpsertUserArgs =
  | 'where'
  | 'create'
  | 'update'
type MutationDeleteUserArgs =
  | 'where'
type MutationDeleteManyUsersArgs =
  | 'where'
type MutationCreateSetCardArgs =
  | 'data'
type MutationUpdateSetCardArgs =
  | 'data'
  | 'where'
type MutationUpdateManySetCardsArgs =
  | 'data'
  | 'where'
type MutationUpsertSetCardArgs =
  | 'where'
  | 'create'
  | 'update'
type MutationDeleteSetCardArgs =
  | 'where'
type MutationDeleteManySetCardsArgs =
  | 'where'
type MutationCreatePicturesArgs =
  | 'data'
type MutationUpdatePicturesArgs =
  | 'data'
  | 'where'
type MutationUpdateManyPicturesesArgs =
  | 'data'
  | 'where'
type MutationUpsertPicturesArgs =
  | 'where'
  | 'create'
  | 'update'
type MutationDeletePicturesArgs =
  | 'where'
type MutationDeleteManyPicturesesArgs =
  | 'where'
type MutationCreatePostArgs =
  | 'data'
type MutationUpdatePostArgs =
  | 'data'
  | 'where'
type MutationUpdateManyPostsArgs =
  | 'data'
  | 'where'
type MutationUpsertPostArgs =
  | 'where'
  | 'create'
  | 'update'
type MutationDeletePostArgs =
  | 'where'
type MutationDeleteManyPostsArgs =
  | 'where'
  

export interface MutationFieldDetails {
  createUser: {
    type: 'User'
    args: Record<MutationCreateUserArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"Mutation">,
      args: { data: UserCreateInput }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.User> | prisma.User
  }
  updateUser: {
    type: 'User'
    args: Record<MutationUpdateUserArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"Mutation">,
      args: { data: UserUpdateInput, where: UserWhereUniqueInput }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.User | null> | prisma.User | null
  }
  updateManyUsers: {
    type: 'BatchPayload'
    args: Record<MutationUpdateManyUsersArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"Mutation">,
      args: { data: UserUpdateManyMutationInput, where?: UserWhereInput | null }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.BatchPayload> | prisma.BatchPayload
  }
  upsertUser: {
    type: 'User'
    args: Record<MutationUpsertUserArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"Mutation">,
      args: { where: UserWhereUniqueInput, create: UserCreateInput, update: UserUpdateInput }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.User> | prisma.User
  }
  deleteUser: {
    type: 'User'
    args: Record<MutationDeleteUserArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"Mutation">,
      args: { where: UserWhereUniqueInput }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.User | null> | prisma.User | null
  }
  deleteManyUsers: {
    type: 'BatchPayload'
    args: Record<MutationDeleteManyUsersArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"Mutation">,
      args: { where?: UserWhereInput | null }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.BatchPayload> | prisma.BatchPayload
  }
  createSetCard: {
    type: 'SetCard'
    args: Record<MutationCreateSetCardArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"Mutation">,
      args: { data: SetCardCreateInput }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.SetCard> | prisma.SetCard
  }
  updateSetCard: {
    type: 'SetCard'
    args: Record<MutationUpdateSetCardArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"Mutation">,
      args: { data: SetCardUpdateInput, where: SetCardWhereUniqueInput }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.SetCard | null> | prisma.SetCard | null
  }
  updateManySetCards: {
    type: 'BatchPayload'
    args: Record<MutationUpdateManySetCardsArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"Mutation">,
      args: { data: SetCardUpdateManyMutationInput, where?: SetCardWhereInput | null }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.BatchPayload> | prisma.BatchPayload
  }
  upsertSetCard: {
    type: 'SetCard'
    args: Record<MutationUpsertSetCardArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"Mutation">,
      args: { where: SetCardWhereUniqueInput, create: SetCardCreateInput, update: SetCardUpdateInput }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.SetCard> | prisma.SetCard
  }
  deleteSetCard: {
    type: 'SetCard'
    args: Record<MutationDeleteSetCardArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"Mutation">,
      args: { where: SetCardWhereUniqueInput }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.SetCard | null> | prisma.SetCard | null
  }
  deleteManySetCards: {
    type: 'BatchPayload'
    args: Record<MutationDeleteManySetCardsArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"Mutation">,
      args: { where?: SetCardWhereInput | null }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.BatchPayload> | prisma.BatchPayload
  }
  createPictures: {
    type: 'Pictures'
    args: Record<MutationCreatePicturesArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"Mutation">,
      args: { data: PicturesCreateInput }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Pictures> | prisma.Pictures
  }
  updatePictures: {
    type: 'Pictures'
    args: Record<MutationUpdatePicturesArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"Mutation">,
      args: { data: PicturesUpdateInput, where: PicturesWhereUniqueInput }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Pictures | null> | prisma.Pictures | null
  }
  updateManyPictureses: {
    type: 'BatchPayload'
    args: Record<MutationUpdateManyPicturesesArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"Mutation">,
      args: { data: PicturesUpdateManyMutationInput, where?: PicturesWhereInput | null }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.BatchPayload> | prisma.BatchPayload
  }
  upsertPictures: {
    type: 'Pictures'
    args: Record<MutationUpsertPicturesArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"Mutation">,
      args: { where: PicturesWhereUniqueInput, create: PicturesCreateInput, update: PicturesUpdateInput }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Pictures> | prisma.Pictures
  }
  deletePictures: {
    type: 'Pictures'
    args: Record<MutationDeletePicturesArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"Mutation">,
      args: { where: PicturesWhereUniqueInput }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Pictures | null> | prisma.Pictures | null
  }
  deleteManyPictureses: {
    type: 'BatchPayload'
    args: Record<MutationDeleteManyPicturesesArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"Mutation">,
      args: { where?: PicturesWhereInput | null }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.BatchPayload> | prisma.BatchPayload
  }
  createPost: {
    type: 'Post'
    args: Record<MutationCreatePostArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"Mutation">,
      args: { data: PostCreateInput }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Post> | prisma.Post
  }
  updatePost: {
    type: 'Post'
    args: Record<MutationUpdatePostArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"Mutation">,
      args: { data: PostUpdateInput, where: PostWhereUniqueInput }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Post | null> | prisma.Post | null
  }
  updateManyPosts: {
    type: 'BatchPayload'
    args: Record<MutationUpdateManyPostsArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"Mutation">,
      args: { data: PostUpdateManyMutationInput, where?: PostWhereInput | null }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.BatchPayload> | prisma.BatchPayload
  }
  upsertPost: {
    type: 'Post'
    args: Record<MutationUpsertPostArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"Mutation">,
      args: { where: PostWhereUniqueInput, create: PostCreateInput, update: PostUpdateInput }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Post> | prisma.Post
  }
  deletePost: {
    type: 'Post'
    args: Record<MutationDeletePostArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"Mutation">,
      args: { where: PostWhereUniqueInput }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Post | null> | prisma.Post | null
  }
  deleteManyPosts: {
    type: 'BatchPayload'
    args: Record<MutationDeleteManyPostsArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"Mutation">,
      args: { where?: PostWhereInput | null }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.BatchPayload> | prisma.BatchPayload
  }
}
  

// Types for BatchPayload

type BatchPayloadObject =
  | BatchPayloadFields
  | { name: 'count', args?: [] | false, alias?: string  } 

type BatchPayloadFields =
  | 'count'



  

export interface BatchPayloadFieldDetails {
  count: {
    type: 'Long'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
}
  

// Types for Subscription

type SubscriptionObject =
  | SubscriptionFields
  | { name: 'user', args?: SubscriptionUserArgs[] | false, alias?: string  } 
  | { name: 'setCard', args?: SubscriptionSetCardArgs[] | false, alias?: string  } 
  | { name: 'pictures', args?: SubscriptionPicturesArgs[] | false, alias?: string  } 
  | { name: 'post', args?: SubscriptionPostArgs[] | false, alias?: string  } 

type SubscriptionFields =
  | 'user'
  | 'setCard'
  | 'pictures'
  | 'post'


type SubscriptionUserArgs =
  | 'where'
type SubscriptionSetCardArgs =
  | 'where'
type SubscriptionPicturesArgs =
  | 'where'
type SubscriptionPostArgs =
  | 'where'
  

export interface SubscriptionFieldDetails {
  user: {
    type: 'UserSubscriptionPayload'
    args: Record<SubscriptionUserArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"Subscription">,
      args: { where?: UserSubscriptionWhereInput | null }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.UserSubscriptionPayload | null> | prisma.UserSubscriptionPayload | null
  }
  setCard: {
    type: 'SetCardSubscriptionPayload'
    args: Record<SubscriptionSetCardArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"Subscription">,
      args: { where?: SetCardSubscriptionWhereInput | null }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.SetCardSubscriptionPayload | null> | prisma.SetCardSubscriptionPayload | null
  }
  pictures: {
    type: 'PicturesSubscriptionPayload'
    args: Record<SubscriptionPicturesArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"Subscription">,
      args: { where?: PicturesSubscriptionWhereInput | null }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.PicturesSubscriptionPayload | null> | prisma.PicturesSubscriptionPayload | null
  }
  post: {
    type: 'PostSubscriptionPayload'
    args: Record<SubscriptionPostArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"Subscription">,
      args: { where?: PostSubscriptionWhereInput | null }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.PostSubscriptionPayload | null> | prisma.PostSubscriptionPayload | null
  }
}
  

// Types for UserSubscriptionPayload

type UserSubscriptionPayloadObject =
  | UserSubscriptionPayloadFields
  | { name: 'mutation', args?: [] | false, alias?: string  } 
  | { name: 'node', args?: [] | false, alias?: string  } 
  | { name: 'updatedFields', args?: [] | false, alias?: string  } 
  | { name: 'previousValues', args?: [] | false, alias?: string  } 

type UserSubscriptionPayloadFields =
  | 'mutation'
  | 'node'
  | 'updatedFields'
  | 'previousValues'



  

export interface UserSubscriptionPayloadFieldDetails {
  mutation: {
    type: 'MutationType'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"UserSubscriptionPayload">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.MutationType> | prisma.MutationType
  }
  node: {
    type: 'User'
    args: {}
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"UserSubscriptionPayload">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.User | null> | prisma.User | null
  }
  updatedFields: {
    type: 'String'
    args: {}
    description: string
    list: true
    nullable: false
    resolve: undefined
  }
  previousValues: {
    type: 'UserPreviousValues'
    args: {}
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"UserSubscriptionPayload">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.UserPreviousValues | null> | prisma.UserPreviousValues | null
  }
}
  

// Types for UserPreviousValues

type UserPreviousValuesObject =
  | UserPreviousValuesFields
  | { name: 'id', args?: [] | false, alias?: string  } 
  | { name: 'email', args?: [] | false, alias?: string  } 
  | { name: 'nickname', args?: [] | false, alias?: string  } 
  | { name: 'password', args?: [] | false, alias?: string  } 
  | { name: 'name', args?: [] | false, alias?: string  } 
  | { name: 'permissions', args?: [] | false, alias?: string  } 

type UserPreviousValuesFields =
  | 'id'
  | 'email'
  | 'nickname'
  | 'password'
  | 'name'
  | 'permissions'



  

export interface UserPreviousValuesFieldDetails {
  id: {
    type: 'ID'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
  email: {
    type: 'String'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
  nickname: {
    type: 'String'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
  password: {
    type: 'String'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
  name: {
    type: 'String'
    args: {}
    description: string
    list: undefined
    nullable: true
    resolve: undefined
  }
  permissions: {
    type: 'Permission'
    args: {}
    description: string
    list: true
    nullable: false
    resolve: (
      root: core.RootValue<"UserPreviousValues">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Permission[]> | prisma.Permission[]
  }
}
  

// Types for SetCardSubscriptionPayload

type SetCardSubscriptionPayloadObject =
  | SetCardSubscriptionPayloadFields
  | { name: 'mutation', args?: [] | false, alias?: string  } 
  | { name: 'node', args?: [] | false, alias?: string  } 
  | { name: 'updatedFields', args?: [] | false, alias?: string  } 
  | { name: 'previousValues', args?: [] | false, alias?: string  } 

type SetCardSubscriptionPayloadFields =
  | 'mutation'
  | 'node'
  | 'updatedFields'
  | 'previousValues'



  

export interface SetCardSubscriptionPayloadFieldDetails {
  mutation: {
    type: 'MutationType'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"SetCardSubscriptionPayload">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.MutationType> | prisma.MutationType
  }
  node: {
    type: 'SetCard'
    args: {}
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"SetCardSubscriptionPayload">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.SetCard | null> | prisma.SetCard | null
  }
  updatedFields: {
    type: 'String'
    args: {}
    description: string
    list: true
    nullable: false
    resolve: undefined
  }
  previousValues: {
    type: 'SetCardPreviousValues'
    args: {}
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"SetCardSubscriptionPayload">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.SetCardPreviousValues | null> | prisma.SetCardPreviousValues | null
  }
}
  

// Types for SetCardPreviousValues

type SetCardPreviousValuesObject =
  | SetCardPreviousValuesFields
  | { name: 'id', args?: [] | false, alias?: string  } 
  | { name: 'aliasName', args?: [] | false, alias?: string  } 
  | { name: 'age', args?: [] | false, alias?: string  } 

type SetCardPreviousValuesFields =
  | 'id'
  | 'aliasName'
  | 'age'



  

export interface SetCardPreviousValuesFieldDetails {
  id: {
    type: 'ID'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
  aliasName: {
    type: 'String'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
  age: {
    type: 'Int'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
}
  

// Types for PicturesSubscriptionPayload

type PicturesSubscriptionPayloadObject =
  | PicturesSubscriptionPayloadFields
  | { name: 'mutation', args?: [] | false, alias?: string  } 
  | { name: 'node', args?: [] | false, alias?: string  } 
  | { name: 'updatedFields', args?: [] | false, alias?: string  } 
  | { name: 'previousValues', args?: [] | false, alias?: string  } 

type PicturesSubscriptionPayloadFields =
  | 'mutation'
  | 'node'
  | 'updatedFields'
  | 'previousValues'



  

export interface PicturesSubscriptionPayloadFieldDetails {
  mutation: {
    type: 'MutationType'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"PicturesSubscriptionPayload">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.MutationType> | prisma.MutationType
  }
  node: {
    type: 'Pictures'
    args: {}
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"PicturesSubscriptionPayload">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Pictures | null> | prisma.Pictures | null
  }
  updatedFields: {
    type: 'String'
    args: {}
    description: string
    list: true
    nullable: false
    resolve: undefined
  }
  previousValues: {
    type: 'PicturesPreviousValues'
    args: {}
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"PicturesSubscriptionPayload">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.PicturesPreviousValues | null> | prisma.PicturesPreviousValues | null
  }
}
  

// Types for PicturesPreviousValues

type PicturesPreviousValuesObject =
  | PicturesPreviousValuesFields
  | { name: 'id', args?: [] | false, alias?: string  } 
  | { name: 'createdAt', args?: [] | false, alias?: string  } 
  | { name: 'updatedAt', args?: [] | false, alias?: string  } 
  | { name: 'url', args?: [] | false, alias?: string  } 

type PicturesPreviousValuesFields =
  | 'id'
  | 'createdAt'
  | 'updatedAt'
  | 'url'



  

export interface PicturesPreviousValuesFieldDetails {
  id: {
    type: 'ID'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
  createdAt: {
    type: 'DateTime'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
  updatedAt: {
    type: 'DateTime'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
  url: {
    type: 'String'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
}
  

// Types for PostSubscriptionPayload

type PostSubscriptionPayloadObject =
  | PostSubscriptionPayloadFields
  | { name: 'mutation', args?: [] | false, alias?: string  } 
  | { name: 'node', args?: [] | false, alias?: string  } 
  | { name: 'updatedFields', args?: [] | false, alias?: string  } 
  | { name: 'previousValues', args?: [] | false, alias?: string  } 

type PostSubscriptionPayloadFields =
  | 'mutation'
  | 'node'
  | 'updatedFields'
  | 'previousValues'



  

export interface PostSubscriptionPayloadFieldDetails {
  mutation: {
    type: 'MutationType'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"PostSubscriptionPayload">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.MutationType> | prisma.MutationType
  }
  node: {
    type: 'Post'
    args: {}
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"PostSubscriptionPayload">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Post | null> | prisma.Post | null
  }
  updatedFields: {
    type: 'String'
    args: {}
    description: string
    list: true
    nullable: false
    resolve: undefined
  }
  previousValues: {
    type: 'PostPreviousValues'
    args: {}
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"PostSubscriptionPayload">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.PostPreviousValues | null> | prisma.PostPreviousValues | null
  }
}
  

// Types for PostPreviousValues

type PostPreviousValuesObject =
  | PostPreviousValuesFields
  | { name: 'id', args?: [] | false, alias?: string  } 
  | { name: 'createdAt', args?: [] | false, alias?: string  } 
  | { name: 'updatedAt', args?: [] | false, alias?: string  } 
  | { name: 'published', args?: [] | false, alias?: string  } 
  | { name: 'title', args?: [] | false, alias?: string  } 
  | { name: 'content', args?: [] | false, alias?: string  } 

type PostPreviousValuesFields =
  | 'id'
  | 'createdAt'
  | 'updatedAt'
  | 'published'
  | 'title'
  | 'content'



  

export interface PostPreviousValuesFieldDetails {
  id: {
    type: 'ID'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
  createdAt: {
    type: 'DateTime'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
  updatedAt: {
    type: 'DateTime'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
  published: {
    type: 'Boolean'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
  title: {
    type: 'String'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
  content: {
    type: 'String'
    args: {}
    description: string
    list: undefined
    nullable: true
    resolve: undefined
  }
}
  


export interface UserWhereUniqueInput {
  id?: string | null
  email?: string | null
  nickname?: string | null
}
export type UserWhereUniqueInputInputObject =
  | Extract<keyof UserWhereUniqueInput, string>
  | { name: 'id', alias?: string  } 
  | { name: 'email', alias?: string  } 
  | { name: 'nickname', alias?: string  } 
  
export interface PostWhereInput {
  id?: string | null
  id_not?: string | null
  id_in?: string[]
  id_not_in?: string[]
  id_lt?: string | null
  id_lte?: string | null
  id_gt?: string | null
  id_gte?: string | null
  id_contains?: string | null
  id_not_contains?: string | null
  id_starts_with?: string | null
  id_not_starts_with?: string | null
  id_ends_with?: string | null
  id_not_ends_with?: string | null
  createdAt?: string | null
  createdAt_not?: string | null
  createdAt_in?: string[]
  createdAt_not_in?: string[]
  createdAt_lt?: string | null
  createdAt_lte?: string | null
  createdAt_gt?: string | null
  createdAt_gte?: string | null
  updatedAt?: string | null
  updatedAt_not?: string | null
  updatedAt_in?: string[]
  updatedAt_not_in?: string[]
  updatedAt_lt?: string | null
  updatedAt_lte?: string | null
  updatedAt_gt?: string | null
  updatedAt_gte?: string | null
  published?: boolean | null
  published_not?: boolean | null
  title?: string | null
  title_not?: string | null
  title_in?: string[]
  title_not_in?: string[]
  title_lt?: string | null
  title_lte?: string | null
  title_gt?: string | null
  title_gte?: string | null
  title_contains?: string | null
  title_not_contains?: string | null
  title_starts_with?: string | null
  title_not_starts_with?: string | null
  title_ends_with?: string | null
  title_not_ends_with?: string | null
  content?: string | null
  content_not?: string | null
  content_in?: string[]
  content_not_in?: string[]
  content_lt?: string | null
  content_lte?: string | null
  content_gt?: string | null
  content_gte?: string | null
  content_contains?: string | null
  content_not_contains?: string | null
  content_starts_with?: string | null
  content_not_starts_with?: string | null
  content_ends_with?: string | null
  content_not_ends_with?: string | null
  author?: UserWhereInput | null
  AND?: PostWhereInput[]
  OR?: PostWhereInput[]
  NOT?: PostWhereInput[]
}
export type PostWhereInputInputObject =
  | Extract<keyof PostWhereInput, string>
  | { name: 'id', alias?: string  } 
  | { name: 'id_not', alias?: string  } 
  | { name: 'id_in', alias?: string  } 
  | { name: 'id_not_in', alias?: string  } 
  | { name: 'id_lt', alias?: string  } 
  | { name: 'id_lte', alias?: string  } 
  | { name: 'id_gt', alias?: string  } 
  | { name: 'id_gte', alias?: string  } 
  | { name: 'id_contains', alias?: string  } 
  | { name: 'id_not_contains', alias?: string  } 
  | { name: 'id_starts_with', alias?: string  } 
  | { name: 'id_not_starts_with', alias?: string  } 
  | { name: 'id_ends_with', alias?: string  } 
  | { name: 'id_not_ends_with', alias?: string  } 
  | { name: 'createdAt', alias?: string  } 
  | { name: 'createdAt_not', alias?: string  } 
  | { name: 'createdAt_in', alias?: string  } 
  | { name: 'createdAt_not_in', alias?: string  } 
  | { name: 'createdAt_lt', alias?: string  } 
  | { name: 'createdAt_lte', alias?: string  } 
  | { name: 'createdAt_gt', alias?: string  } 
  | { name: 'createdAt_gte', alias?: string  } 
  | { name: 'updatedAt', alias?: string  } 
  | { name: 'updatedAt_not', alias?: string  } 
  | { name: 'updatedAt_in', alias?: string  } 
  | { name: 'updatedAt_not_in', alias?: string  } 
  | { name: 'updatedAt_lt', alias?: string  } 
  | { name: 'updatedAt_lte', alias?: string  } 
  | { name: 'updatedAt_gt', alias?: string  } 
  | { name: 'updatedAt_gte', alias?: string  } 
  | { name: 'published', alias?: string  } 
  | { name: 'published_not', alias?: string  } 
  | { name: 'title', alias?: string  } 
  | { name: 'title_not', alias?: string  } 
  | { name: 'title_in', alias?: string  } 
  | { name: 'title_not_in', alias?: string  } 
  | { name: 'title_lt', alias?: string  } 
  | { name: 'title_lte', alias?: string  } 
  | { name: 'title_gt', alias?: string  } 
  | { name: 'title_gte', alias?: string  } 
  | { name: 'title_contains', alias?: string  } 
  | { name: 'title_not_contains', alias?: string  } 
  | { name: 'title_starts_with', alias?: string  } 
  | { name: 'title_not_starts_with', alias?: string  } 
  | { name: 'title_ends_with', alias?: string  } 
  | { name: 'title_not_ends_with', alias?: string  } 
  | { name: 'content', alias?: string  } 
  | { name: 'content_not', alias?: string  } 
  | { name: 'content_in', alias?: string  } 
  | { name: 'content_not_in', alias?: string  } 
  | { name: 'content_lt', alias?: string  } 
  | { name: 'content_lte', alias?: string  } 
  | { name: 'content_gt', alias?: string  } 
  | { name: 'content_gte', alias?: string  } 
  | { name: 'content_contains', alias?: string  } 
  | { name: 'content_not_contains', alias?: string  } 
  | { name: 'content_starts_with', alias?: string  } 
  | { name: 'content_not_starts_with', alias?: string  } 
  | { name: 'content_ends_with', alias?: string  } 
  | { name: 'content_not_ends_with', alias?: string  } 
  | { name: 'author', alias?: string  } 
  | { name: 'AND', alias?: string  } 
  | { name: 'OR', alias?: string  } 
  | { name: 'NOT', alias?: string  } 
  
export interface UserWhereInput {
  id?: string | null
  id_not?: string | null
  id_in?: string[]
  id_not_in?: string[]
  id_lt?: string | null
  id_lte?: string | null
  id_gt?: string | null
  id_gte?: string | null
  id_contains?: string | null
  id_not_contains?: string | null
  id_starts_with?: string | null
  id_not_starts_with?: string | null
  id_ends_with?: string | null
  id_not_ends_with?: string | null
  email?: string | null
  email_not?: string | null
  email_in?: string[]
  email_not_in?: string[]
  email_lt?: string | null
  email_lte?: string | null
  email_gt?: string | null
  email_gte?: string | null
  email_contains?: string | null
  email_not_contains?: string | null
  email_starts_with?: string | null
  email_not_starts_with?: string | null
  email_ends_with?: string | null
  email_not_ends_with?: string | null
  nickname?: string | null
  nickname_not?: string | null
  nickname_in?: string[]
  nickname_not_in?: string[]
  nickname_lt?: string | null
  nickname_lte?: string | null
  nickname_gt?: string | null
  nickname_gte?: string | null
  nickname_contains?: string | null
  nickname_not_contains?: string | null
  nickname_starts_with?: string | null
  nickname_not_starts_with?: string | null
  nickname_ends_with?: string | null
  nickname_not_ends_with?: string | null
  password?: string | null
  password_not?: string | null
  password_in?: string[]
  password_not_in?: string[]
  password_lt?: string | null
  password_lte?: string | null
  password_gt?: string | null
  password_gte?: string | null
  password_contains?: string | null
  password_not_contains?: string | null
  password_starts_with?: string | null
  password_not_starts_with?: string | null
  password_ends_with?: string | null
  password_not_ends_with?: string | null
  name?: string | null
  name_not?: string | null
  name_in?: string[]
  name_not_in?: string[]
  name_lt?: string | null
  name_lte?: string | null
  name_gt?: string | null
  name_gte?: string | null
  name_contains?: string | null
  name_not_contains?: string | null
  name_starts_with?: string | null
  name_not_starts_with?: string | null
  name_ends_with?: string | null
  name_not_ends_with?: string | null
  posts_every?: PostWhereInput | null
  posts_some?: PostWhereInput | null
  posts_none?: PostWhereInput | null
  profile?: SetCardWhereInput | null
  AND?: UserWhereInput[]
  OR?: UserWhereInput[]
  NOT?: UserWhereInput[]
}
export type UserWhereInputInputObject =
  | Extract<keyof UserWhereInput, string>
  | { name: 'id', alias?: string  } 
  | { name: 'id_not', alias?: string  } 
  | { name: 'id_in', alias?: string  } 
  | { name: 'id_not_in', alias?: string  } 
  | { name: 'id_lt', alias?: string  } 
  | { name: 'id_lte', alias?: string  } 
  | { name: 'id_gt', alias?: string  } 
  | { name: 'id_gte', alias?: string  } 
  | { name: 'id_contains', alias?: string  } 
  | { name: 'id_not_contains', alias?: string  } 
  | { name: 'id_starts_with', alias?: string  } 
  | { name: 'id_not_starts_with', alias?: string  } 
  | { name: 'id_ends_with', alias?: string  } 
  | { name: 'id_not_ends_with', alias?: string  } 
  | { name: 'email', alias?: string  } 
  | { name: 'email_not', alias?: string  } 
  | { name: 'email_in', alias?: string  } 
  | { name: 'email_not_in', alias?: string  } 
  | { name: 'email_lt', alias?: string  } 
  | { name: 'email_lte', alias?: string  } 
  | { name: 'email_gt', alias?: string  } 
  | { name: 'email_gte', alias?: string  } 
  | { name: 'email_contains', alias?: string  } 
  | { name: 'email_not_contains', alias?: string  } 
  | { name: 'email_starts_with', alias?: string  } 
  | { name: 'email_not_starts_with', alias?: string  } 
  | { name: 'email_ends_with', alias?: string  } 
  | { name: 'email_not_ends_with', alias?: string  } 
  | { name: 'nickname', alias?: string  } 
  | { name: 'nickname_not', alias?: string  } 
  | { name: 'nickname_in', alias?: string  } 
  | { name: 'nickname_not_in', alias?: string  } 
  | { name: 'nickname_lt', alias?: string  } 
  | { name: 'nickname_lte', alias?: string  } 
  | { name: 'nickname_gt', alias?: string  } 
  | { name: 'nickname_gte', alias?: string  } 
  | { name: 'nickname_contains', alias?: string  } 
  | { name: 'nickname_not_contains', alias?: string  } 
  | { name: 'nickname_starts_with', alias?: string  } 
  | { name: 'nickname_not_starts_with', alias?: string  } 
  | { name: 'nickname_ends_with', alias?: string  } 
  | { name: 'nickname_not_ends_with', alias?: string  } 
  | { name: 'password', alias?: string  } 
  | { name: 'password_not', alias?: string  } 
  | { name: 'password_in', alias?: string  } 
  | { name: 'password_not_in', alias?: string  } 
  | { name: 'password_lt', alias?: string  } 
  | { name: 'password_lte', alias?: string  } 
  | { name: 'password_gt', alias?: string  } 
  | { name: 'password_gte', alias?: string  } 
  | { name: 'password_contains', alias?: string  } 
  | { name: 'password_not_contains', alias?: string  } 
  | { name: 'password_starts_with', alias?: string  } 
  | { name: 'password_not_starts_with', alias?: string  } 
  | { name: 'password_ends_with', alias?: string  } 
  | { name: 'password_not_ends_with', alias?: string  } 
  | { name: 'name', alias?: string  } 
  | { name: 'name_not', alias?: string  } 
  | { name: 'name_in', alias?: string  } 
  | { name: 'name_not_in', alias?: string  } 
  | { name: 'name_lt', alias?: string  } 
  | { name: 'name_lte', alias?: string  } 
  | { name: 'name_gt', alias?: string  } 
  | { name: 'name_gte', alias?: string  } 
  | { name: 'name_contains', alias?: string  } 
  | { name: 'name_not_contains', alias?: string  } 
  | { name: 'name_starts_with', alias?: string  } 
  | { name: 'name_not_starts_with', alias?: string  } 
  | { name: 'name_ends_with', alias?: string  } 
  | { name: 'name_not_ends_with', alias?: string  } 
  | { name: 'posts_every', alias?: string  } 
  | { name: 'posts_some', alias?: string  } 
  | { name: 'posts_none', alias?: string  } 
  | { name: 'profile', alias?: string  } 
  | { name: 'AND', alias?: string  } 
  | { name: 'OR', alias?: string  } 
  | { name: 'NOT', alias?: string  } 
  
export interface SetCardWhereInput {
  id?: string | null
  id_not?: string | null
  id_in?: string[]
  id_not_in?: string[]
  id_lt?: string | null
  id_lte?: string | null
  id_gt?: string | null
  id_gte?: string | null
  id_contains?: string | null
  id_not_contains?: string | null
  id_starts_with?: string | null
  id_not_starts_with?: string | null
  id_ends_with?: string | null
  id_not_ends_with?: string | null
  aliasName?: string | null
  aliasName_not?: string | null
  aliasName_in?: string[]
  aliasName_not_in?: string[]
  aliasName_lt?: string | null
  aliasName_lte?: string | null
  aliasName_gt?: string | null
  aliasName_gte?: string | null
  aliasName_contains?: string | null
  aliasName_not_contains?: string | null
  aliasName_starts_with?: string | null
  aliasName_not_starts_with?: string | null
  aliasName_ends_with?: string | null
  aliasName_not_ends_with?: string | null
  pictures_every?: PicturesWhereInput | null
  pictures_some?: PicturesWhereInput | null
  pictures_none?: PicturesWhereInput | null
  age?: number | null
  age_not?: number | null
  age_in?: number[]
  age_not_in?: number[]
  age_lt?: number | null
  age_lte?: number | null
  age_gt?: number | null
  age_gte?: number | null
  escort?: UserWhereInput | null
  AND?: SetCardWhereInput[]
  OR?: SetCardWhereInput[]
  NOT?: SetCardWhereInput[]
}
export type SetCardWhereInputInputObject =
  | Extract<keyof SetCardWhereInput, string>
  | { name: 'id', alias?: string  } 
  | { name: 'id_not', alias?: string  } 
  | { name: 'id_in', alias?: string  } 
  | { name: 'id_not_in', alias?: string  } 
  | { name: 'id_lt', alias?: string  } 
  | { name: 'id_lte', alias?: string  } 
  | { name: 'id_gt', alias?: string  } 
  | { name: 'id_gte', alias?: string  } 
  | { name: 'id_contains', alias?: string  } 
  | { name: 'id_not_contains', alias?: string  } 
  | { name: 'id_starts_with', alias?: string  } 
  | { name: 'id_not_starts_with', alias?: string  } 
  | { name: 'id_ends_with', alias?: string  } 
  | { name: 'id_not_ends_with', alias?: string  } 
  | { name: 'aliasName', alias?: string  } 
  | { name: 'aliasName_not', alias?: string  } 
  | { name: 'aliasName_in', alias?: string  } 
  | { name: 'aliasName_not_in', alias?: string  } 
  | { name: 'aliasName_lt', alias?: string  } 
  | { name: 'aliasName_lte', alias?: string  } 
  | { name: 'aliasName_gt', alias?: string  } 
  | { name: 'aliasName_gte', alias?: string  } 
  | { name: 'aliasName_contains', alias?: string  } 
  | { name: 'aliasName_not_contains', alias?: string  } 
  | { name: 'aliasName_starts_with', alias?: string  } 
  | { name: 'aliasName_not_starts_with', alias?: string  } 
  | { name: 'aliasName_ends_with', alias?: string  } 
  | { name: 'aliasName_not_ends_with', alias?: string  } 
  | { name: 'pictures_every', alias?: string  } 
  | { name: 'pictures_some', alias?: string  } 
  | { name: 'pictures_none', alias?: string  } 
  | { name: 'age', alias?: string  } 
  | { name: 'age_not', alias?: string  } 
  | { name: 'age_in', alias?: string  } 
  | { name: 'age_not_in', alias?: string  } 
  | { name: 'age_lt', alias?: string  } 
  | { name: 'age_lte', alias?: string  } 
  | { name: 'age_gt', alias?: string  } 
  | { name: 'age_gte', alias?: string  } 
  | { name: 'escort', alias?: string  } 
  | { name: 'AND', alias?: string  } 
  | { name: 'OR', alias?: string  } 
  | { name: 'NOT', alias?: string  } 
  
export interface PicturesWhereInput {
  id?: string | null
  id_not?: string | null
  id_in?: string[]
  id_not_in?: string[]
  id_lt?: string | null
  id_lte?: string | null
  id_gt?: string | null
  id_gte?: string | null
  id_contains?: string | null
  id_not_contains?: string | null
  id_starts_with?: string | null
  id_not_starts_with?: string | null
  id_ends_with?: string | null
  id_not_ends_with?: string | null
  createdAt?: string | null
  createdAt_not?: string | null
  createdAt_in?: string[]
  createdAt_not_in?: string[]
  createdAt_lt?: string | null
  createdAt_lte?: string | null
  createdAt_gt?: string | null
  createdAt_gte?: string | null
  updatedAt?: string | null
  updatedAt_not?: string | null
  updatedAt_in?: string[]
  updatedAt_not_in?: string[]
  updatedAt_lt?: string | null
  updatedAt_lte?: string | null
  updatedAt_gt?: string | null
  updatedAt_gte?: string | null
  url?: string | null
  url_not?: string | null
  url_in?: string[]
  url_not_in?: string[]
  url_lt?: string | null
  url_lte?: string | null
  url_gt?: string | null
  url_gte?: string | null
  url_contains?: string | null
  url_not_contains?: string | null
  url_starts_with?: string | null
  url_not_starts_with?: string | null
  url_ends_with?: string | null
  url_not_ends_with?: string | null
  setCard?: SetCardWhereInput | null
  AND?: PicturesWhereInput[]
  OR?: PicturesWhereInput[]
  NOT?: PicturesWhereInput[]
}
export type PicturesWhereInputInputObject =
  | Extract<keyof PicturesWhereInput, string>
  | { name: 'id', alias?: string  } 
  | { name: 'id_not', alias?: string  } 
  | { name: 'id_in', alias?: string  } 
  | { name: 'id_not_in', alias?: string  } 
  | { name: 'id_lt', alias?: string  } 
  | { name: 'id_lte', alias?: string  } 
  | { name: 'id_gt', alias?: string  } 
  | { name: 'id_gte', alias?: string  } 
  | { name: 'id_contains', alias?: string  } 
  | { name: 'id_not_contains', alias?: string  } 
  | { name: 'id_starts_with', alias?: string  } 
  | { name: 'id_not_starts_with', alias?: string  } 
  | { name: 'id_ends_with', alias?: string  } 
  | { name: 'id_not_ends_with', alias?: string  } 
  | { name: 'createdAt', alias?: string  } 
  | { name: 'createdAt_not', alias?: string  } 
  | { name: 'createdAt_in', alias?: string  } 
  | { name: 'createdAt_not_in', alias?: string  } 
  | { name: 'createdAt_lt', alias?: string  } 
  | { name: 'createdAt_lte', alias?: string  } 
  | { name: 'createdAt_gt', alias?: string  } 
  | { name: 'createdAt_gte', alias?: string  } 
  | { name: 'updatedAt', alias?: string  } 
  | { name: 'updatedAt_not', alias?: string  } 
  | { name: 'updatedAt_in', alias?: string  } 
  | { name: 'updatedAt_not_in', alias?: string  } 
  | { name: 'updatedAt_lt', alias?: string  } 
  | { name: 'updatedAt_lte', alias?: string  } 
  | { name: 'updatedAt_gt', alias?: string  } 
  | { name: 'updatedAt_gte', alias?: string  } 
  | { name: 'url', alias?: string  } 
  | { name: 'url_not', alias?: string  } 
  | { name: 'url_in', alias?: string  } 
  | { name: 'url_not_in', alias?: string  } 
  | { name: 'url_lt', alias?: string  } 
  | { name: 'url_lte', alias?: string  } 
  | { name: 'url_gt', alias?: string  } 
  | { name: 'url_gte', alias?: string  } 
  | { name: 'url_contains', alias?: string  } 
  | { name: 'url_not_contains', alias?: string  } 
  | { name: 'url_starts_with', alias?: string  } 
  | { name: 'url_not_starts_with', alias?: string  } 
  | { name: 'url_ends_with', alias?: string  } 
  | { name: 'url_not_ends_with', alias?: string  } 
  | { name: 'setCard', alias?: string  } 
  | { name: 'AND', alias?: string  } 
  | { name: 'OR', alias?: string  } 
  | { name: 'NOT', alias?: string  } 
  
export interface SetCardWhereUniqueInput {
  id?: string | null
  aliasName?: string | null
}
export type SetCardWhereUniqueInputInputObject =
  | Extract<keyof SetCardWhereUniqueInput, string>
  | { name: 'id', alias?: string  } 
  | { name: 'aliasName', alias?: string  } 
  
export interface PicturesWhereUniqueInput {
  id?: string | null
}
export type PicturesWhereUniqueInputInputObject =
  | Extract<keyof PicturesWhereUniqueInput, string>
  | { name: 'id', alias?: string  } 
  
export interface PostWhereUniqueInput {
  id?: string | null
}
export type PostWhereUniqueInputInputObject =
  | Extract<keyof PostWhereUniqueInput, string>
  | { name: 'id', alias?: string  } 
  
export interface UserCreateInput {
  email?: string
  nickname?: string
  password?: string
  name?: string | null
  posts?: PostCreateManyWithoutAuthorInput | null
  permissions?: UserCreatepermissionsInput | null
  profile?: SetCardCreateOneWithoutEscortInput | null
}
export type UserCreateInputInputObject =
  | Extract<keyof UserCreateInput, string>
  | { name: 'email', alias?: string  } 
  | { name: 'nickname', alias?: string  } 
  | { name: 'password', alias?: string  } 
  | { name: 'name', alias?: string  } 
  | { name: 'posts', alias?: string  } 
  | { name: 'permissions', alias?: string  } 
  | { name: 'profile', alias?: string  } 
  
export interface PostCreateManyWithoutAuthorInput {
  create?: PostCreateWithoutAuthorInput[]
  connect?: PostWhereUniqueInput[]
}
export type PostCreateManyWithoutAuthorInputInputObject =
  | Extract<keyof PostCreateManyWithoutAuthorInput, string>
  | { name: 'create', alias?: string  } 
  | { name: 'connect', alias?: string  } 
  
export interface PostCreateWithoutAuthorInput {
  published?: boolean | null
  title?: string
  content?: string | null
}
export type PostCreateWithoutAuthorInputInputObject =
  | Extract<keyof PostCreateWithoutAuthorInput, string>
  | { name: 'published', alias?: string  } 
  | { name: 'title', alias?: string  } 
  | { name: 'content', alias?: string  } 
  
export interface UserCreatepermissionsInput {
  set?: prisma.Permission[]
}
export type UserCreatepermissionsInputInputObject =
  | Extract<keyof UserCreatepermissionsInput, string>
  | { name: 'set', alias?: string  } 
  
export interface SetCardCreateOneWithoutEscortInput {
  create?: SetCardCreateWithoutEscortInput | null
  connect?: SetCardWhereUniqueInput | null
}
export type SetCardCreateOneWithoutEscortInputInputObject =
  | Extract<keyof SetCardCreateOneWithoutEscortInput, string>
  | { name: 'create', alias?: string  } 
  | { name: 'connect', alias?: string  } 
  
export interface SetCardCreateWithoutEscortInput {
  aliasName?: string
  pictures?: PicturesCreateManyWithoutSetCardInput | null
  age?: number
}
export type SetCardCreateWithoutEscortInputInputObject =
  | Extract<keyof SetCardCreateWithoutEscortInput, string>
  | { name: 'aliasName', alias?: string  } 
  | { name: 'pictures', alias?: string  } 
  | { name: 'age', alias?: string  } 
  
export interface PicturesCreateManyWithoutSetCardInput {
  create?: PicturesCreateWithoutSetCardInput[]
  connect?: PicturesWhereUniqueInput[]
}
export type PicturesCreateManyWithoutSetCardInputInputObject =
  | Extract<keyof PicturesCreateManyWithoutSetCardInput, string>
  | { name: 'create', alias?: string  } 
  | { name: 'connect', alias?: string  } 
  
export interface PicturesCreateWithoutSetCardInput {
  url?: string
}
export type PicturesCreateWithoutSetCardInputInputObject =
  | Extract<keyof PicturesCreateWithoutSetCardInput, string>
  | { name: 'url', alias?: string  } 
  
export interface UserUpdateInput {
  email?: string | null
  nickname?: string | null
  password?: string | null
  name?: string | null
  posts?: PostUpdateManyWithoutAuthorInput | null
  permissions?: UserUpdatepermissionsInput | null
  profile?: SetCardUpdateOneWithoutEscortInput | null
}
export type UserUpdateInputInputObject =
  | Extract<keyof UserUpdateInput, string>
  | { name: 'email', alias?: string  } 
  | { name: 'nickname', alias?: string  } 
  | { name: 'password', alias?: string  } 
  | { name: 'name', alias?: string  } 
  | { name: 'posts', alias?: string  } 
  | { name: 'permissions', alias?: string  } 
  | { name: 'profile', alias?: string  } 
  
export interface PostUpdateManyWithoutAuthorInput {
  create?: PostCreateWithoutAuthorInput[]
  delete?: PostWhereUniqueInput[]
  connect?: PostWhereUniqueInput[]
  set?: PostWhereUniqueInput[]
  disconnect?: PostWhereUniqueInput[]
  update?: PostUpdateWithWhereUniqueWithoutAuthorInput[]
  upsert?: PostUpsertWithWhereUniqueWithoutAuthorInput[]
  deleteMany?: PostScalarWhereInput[]
  updateMany?: PostUpdateManyWithWhereNestedInput[]
}
export type PostUpdateManyWithoutAuthorInputInputObject =
  | Extract<keyof PostUpdateManyWithoutAuthorInput, string>
  | { name: 'create', alias?: string  } 
  | { name: 'delete', alias?: string  } 
  | { name: 'connect', alias?: string  } 
  | { name: 'set', alias?: string  } 
  | { name: 'disconnect', alias?: string  } 
  | { name: 'update', alias?: string  } 
  | { name: 'upsert', alias?: string  } 
  | { name: 'deleteMany', alias?: string  } 
  | { name: 'updateMany', alias?: string  } 
  
export interface PostUpdateWithWhereUniqueWithoutAuthorInput {
  where?: PostWhereUniqueInput
  data?: PostUpdateWithoutAuthorDataInput
}
export type PostUpdateWithWhereUniqueWithoutAuthorInputInputObject =
  | Extract<keyof PostUpdateWithWhereUniqueWithoutAuthorInput, string>
  | { name: 'where', alias?: string  } 
  | { name: 'data', alias?: string  } 
  
export interface PostUpdateWithoutAuthorDataInput {
  published?: boolean | null
  title?: string | null
  content?: string | null
}
export type PostUpdateWithoutAuthorDataInputInputObject =
  | Extract<keyof PostUpdateWithoutAuthorDataInput, string>
  | { name: 'published', alias?: string  } 
  | { name: 'title', alias?: string  } 
  | { name: 'content', alias?: string  } 
  
export interface PostUpsertWithWhereUniqueWithoutAuthorInput {
  where?: PostWhereUniqueInput
  update?: PostUpdateWithoutAuthorDataInput
  create?: PostCreateWithoutAuthorInput
}
export type PostUpsertWithWhereUniqueWithoutAuthorInputInputObject =
  | Extract<keyof PostUpsertWithWhereUniqueWithoutAuthorInput, string>
  | { name: 'where', alias?: string  } 
  | { name: 'update', alias?: string  } 
  | { name: 'create', alias?: string  } 
  
export interface PostScalarWhereInput {
  id?: string | null
  id_not?: string | null
  id_in?: string[]
  id_not_in?: string[]
  id_lt?: string | null
  id_lte?: string | null
  id_gt?: string | null
  id_gte?: string | null
  id_contains?: string | null
  id_not_contains?: string | null
  id_starts_with?: string | null
  id_not_starts_with?: string | null
  id_ends_with?: string | null
  id_not_ends_with?: string | null
  createdAt?: string | null
  createdAt_not?: string | null
  createdAt_in?: string[]
  createdAt_not_in?: string[]
  createdAt_lt?: string | null
  createdAt_lte?: string | null
  createdAt_gt?: string | null
  createdAt_gte?: string | null
  updatedAt?: string | null
  updatedAt_not?: string | null
  updatedAt_in?: string[]
  updatedAt_not_in?: string[]
  updatedAt_lt?: string | null
  updatedAt_lte?: string | null
  updatedAt_gt?: string | null
  updatedAt_gte?: string | null
  published?: boolean | null
  published_not?: boolean | null
  title?: string | null
  title_not?: string | null
  title_in?: string[]
  title_not_in?: string[]
  title_lt?: string | null
  title_lte?: string | null
  title_gt?: string | null
  title_gte?: string | null
  title_contains?: string | null
  title_not_contains?: string | null
  title_starts_with?: string | null
  title_not_starts_with?: string | null
  title_ends_with?: string | null
  title_not_ends_with?: string | null
  content?: string | null
  content_not?: string | null
  content_in?: string[]
  content_not_in?: string[]
  content_lt?: string | null
  content_lte?: string | null
  content_gt?: string | null
  content_gte?: string | null
  content_contains?: string | null
  content_not_contains?: string | null
  content_starts_with?: string | null
  content_not_starts_with?: string | null
  content_ends_with?: string | null
  content_not_ends_with?: string | null
  AND?: PostScalarWhereInput[]
  OR?: PostScalarWhereInput[]
  NOT?: PostScalarWhereInput[]
}
export type PostScalarWhereInputInputObject =
  | Extract<keyof PostScalarWhereInput, string>
  | { name: 'id', alias?: string  } 
  | { name: 'id_not', alias?: string  } 
  | { name: 'id_in', alias?: string  } 
  | { name: 'id_not_in', alias?: string  } 
  | { name: 'id_lt', alias?: string  } 
  | { name: 'id_lte', alias?: string  } 
  | { name: 'id_gt', alias?: string  } 
  | { name: 'id_gte', alias?: string  } 
  | { name: 'id_contains', alias?: string  } 
  | { name: 'id_not_contains', alias?: string  } 
  | { name: 'id_starts_with', alias?: string  } 
  | { name: 'id_not_starts_with', alias?: string  } 
  | { name: 'id_ends_with', alias?: string  } 
  | { name: 'id_not_ends_with', alias?: string  } 
  | { name: 'createdAt', alias?: string  } 
  | { name: 'createdAt_not', alias?: string  } 
  | { name: 'createdAt_in', alias?: string  } 
  | { name: 'createdAt_not_in', alias?: string  } 
  | { name: 'createdAt_lt', alias?: string  } 
  | { name: 'createdAt_lte', alias?: string  } 
  | { name: 'createdAt_gt', alias?: string  } 
  | { name: 'createdAt_gte', alias?: string  } 
  | { name: 'updatedAt', alias?: string  } 
  | { name: 'updatedAt_not', alias?: string  } 
  | { name: 'updatedAt_in', alias?: string  } 
  | { name: 'updatedAt_not_in', alias?: string  } 
  | { name: 'updatedAt_lt', alias?: string  } 
  | { name: 'updatedAt_lte', alias?: string  } 
  | { name: 'updatedAt_gt', alias?: string  } 
  | { name: 'updatedAt_gte', alias?: string  } 
  | { name: 'published', alias?: string  } 
  | { name: 'published_not', alias?: string  } 
  | { name: 'title', alias?: string  } 
  | { name: 'title_not', alias?: string  } 
  | { name: 'title_in', alias?: string  } 
  | { name: 'title_not_in', alias?: string  } 
  | { name: 'title_lt', alias?: string  } 
  | { name: 'title_lte', alias?: string  } 
  | { name: 'title_gt', alias?: string  } 
  | { name: 'title_gte', alias?: string  } 
  | { name: 'title_contains', alias?: string  } 
  | { name: 'title_not_contains', alias?: string  } 
  | { name: 'title_starts_with', alias?: string  } 
  | { name: 'title_not_starts_with', alias?: string  } 
  | { name: 'title_ends_with', alias?: string  } 
  | { name: 'title_not_ends_with', alias?: string  } 
  | { name: 'content', alias?: string  } 
  | { name: 'content_not', alias?: string  } 
  | { name: 'content_in', alias?: string  } 
  | { name: 'content_not_in', alias?: string  } 
  | { name: 'content_lt', alias?: string  } 
  | { name: 'content_lte', alias?: string  } 
  | { name: 'content_gt', alias?: string  } 
  | { name: 'content_gte', alias?: string  } 
  | { name: 'content_contains', alias?: string  } 
  | { name: 'content_not_contains', alias?: string  } 
  | { name: 'content_starts_with', alias?: string  } 
  | { name: 'content_not_starts_with', alias?: string  } 
  | { name: 'content_ends_with', alias?: string  } 
  | { name: 'content_not_ends_with', alias?: string  } 
  | { name: 'AND', alias?: string  } 
  | { name: 'OR', alias?: string  } 
  | { name: 'NOT', alias?: string  } 
  
export interface PostUpdateManyWithWhereNestedInput {
  where?: PostScalarWhereInput
  data?: PostUpdateManyDataInput
}
export type PostUpdateManyWithWhereNestedInputInputObject =
  | Extract<keyof PostUpdateManyWithWhereNestedInput, string>
  | { name: 'where', alias?: string  } 
  | { name: 'data', alias?: string  } 
  
export interface PostUpdateManyDataInput {
  published?: boolean | null
  title?: string | null
  content?: string | null
}
export type PostUpdateManyDataInputInputObject =
  | Extract<keyof PostUpdateManyDataInput, string>
  | { name: 'published', alias?: string  } 
  | { name: 'title', alias?: string  } 
  | { name: 'content', alias?: string  } 
  
export interface UserUpdatepermissionsInput {
  set?: prisma.Permission[]
}
export type UserUpdatepermissionsInputInputObject =
  | Extract<keyof UserUpdatepermissionsInput, string>
  | { name: 'set', alias?: string  } 
  
export interface SetCardUpdateOneWithoutEscortInput {
  create?: SetCardCreateWithoutEscortInput | null
  update?: SetCardUpdateWithoutEscortDataInput | null
  upsert?: SetCardUpsertWithoutEscortInput | null
  delete?: boolean | null
  disconnect?: boolean | null
  connect?: SetCardWhereUniqueInput | null
}
export type SetCardUpdateOneWithoutEscortInputInputObject =
  | Extract<keyof SetCardUpdateOneWithoutEscortInput, string>
  | { name: 'create', alias?: string  } 
  | { name: 'update', alias?: string  } 
  | { name: 'upsert', alias?: string  } 
  | { name: 'delete', alias?: string  } 
  | { name: 'disconnect', alias?: string  } 
  | { name: 'connect', alias?: string  } 
  
export interface SetCardUpdateWithoutEscortDataInput {
  aliasName?: string | null
  pictures?: PicturesUpdateManyWithoutSetCardInput | null
  age?: number | null
}
export type SetCardUpdateWithoutEscortDataInputInputObject =
  | Extract<keyof SetCardUpdateWithoutEscortDataInput, string>
  | { name: 'aliasName', alias?: string  } 
  | { name: 'pictures', alias?: string  } 
  | { name: 'age', alias?: string  } 
  
export interface PicturesUpdateManyWithoutSetCardInput {
  create?: PicturesCreateWithoutSetCardInput[]
  delete?: PicturesWhereUniqueInput[]
  connect?: PicturesWhereUniqueInput[]
  set?: PicturesWhereUniqueInput[]
  disconnect?: PicturesWhereUniqueInput[]
  update?: PicturesUpdateWithWhereUniqueWithoutSetCardInput[]
  upsert?: PicturesUpsertWithWhereUniqueWithoutSetCardInput[]
  deleteMany?: PicturesScalarWhereInput[]
  updateMany?: PicturesUpdateManyWithWhereNestedInput[]
}
export type PicturesUpdateManyWithoutSetCardInputInputObject =
  | Extract<keyof PicturesUpdateManyWithoutSetCardInput, string>
  | { name: 'create', alias?: string  } 
  | { name: 'delete', alias?: string  } 
  | { name: 'connect', alias?: string  } 
  | { name: 'set', alias?: string  } 
  | { name: 'disconnect', alias?: string  } 
  | { name: 'update', alias?: string  } 
  | { name: 'upsert', alias?: string  } 
  | { name: 'deleteMany', alias?: string  } 
  | { name: 'updateMany', alias?: string  } 
  
export interface PicturesUpdateWithWhereUniqueWithoutSetCardInput {
  where?: PicturesWhereUniqueInput
  data?: PicturesUpdateWithoutSetCardDataInput
}
export type PicturesUpdateWithWhereUniqueWithoutSetCardInputInputObject =
  | Extract<keyof PicturesUpdateWithWhereUniqueWithoutSetCardInput, string>
  | { name: 'where', alias?: string  } 
  | { name: 'data', alias?: string  } 
  
export interface PicturesUpdateWithoutSetCardDataInput {
  url?: string | null
}
export type PicturesUpdateWithoutSetCardDataInputInputObject =
  | Extract<keyof PicturesUpdateWithoutSetCardDataInput, string>
  | { name: 'url', alias?: string  } 
  
export interface PicturesUpsertWithWhereUniqueWithoutSetCardInput {
  where?: PicturesWhereUniqueInput
  update?: PicturesUpdateWithoutSetCardDataInput
  create?: PicturesCreateWithoutSetCardInput
}
export type PicturesUpsertWithWhereUniqueWithoutSetCardInputInputObject =
  | Extract<keyof PicturesUpsertWithWhereUniqueWithoutSetCardInput, string>
  | { name: 'where', alias?: string  } 
  | { name: 'update', alias?: string  } 
  | { name: 'create', alias?: string  } 
  
export interface PicturesScalarWhereInput {
  id?: string | null
  id_not?: string | null
  id_in?: string[]
  id_not_in?: string[]
  id_lt?: string | null
  id_lte?: string | null
  id_gt?: string | null
  id_gte?: string | null
  id_contains?: string | null
  id_not_contains?: string | null
  id_starts_with?: string | null
  id_not_starts_with?: string | null
  id_ends_with?: string | null
  id_not_ends_with?: string | null
  createdAt?: string | null
  createdAt_not?: string | null
  createdAt_in?: string[]
  createdAt_not_in?: string[]
  createdAt_lt?: string | null
  createdAt_lte?: string | null
  createdAt_gt?: string | null
  createdAt_gte?: string | null
  updatedAt?: string | null
  updatedAt_not?: string | null
  updatedAt_in?: string[]
  updatedAt_not_in?: string[]
  updatedAt_lt?: string | null
  updatedAt_lte?: string | null
  updatedAt_gt?: string | null
  updatedAt_gte?: string | null
  url?: string | null
  url_not?: string | null
  url_in?: string[]
  url_not_in?: string[]
  url_lt?: string | null
  url_lte?: string | null
  url_gt?: string | null
  url_gte?: string | null
  url_contains?: string | null
  url_not_contains?: string | null
  url_starts_with?: string | null
  url_not_starts_with?: string | null
  url_ends_with?: string | null
  url_not_ends_with?: string | null
  AND?: PicturesScalarWhereInput[]
  OR?: PicturesScalarWhereInput[]
  NOT?: PicturesScalarWhereInput[]
}
export type PicturesScalarWhereInputInputObject =
  | Extract<keyof PicturesScalarWhereInput, string>
  | { name: 'id', alias?: string  } 
  | { name: 'id_not', alias?: string  } 
  | { name: 'id_in', alias?: string  } 
  | { name: 'id_not_in', alias?: string  } 
  | { name: 'id_lt', alias?: string  } 
  | { name: 'id_lte', alias?: string  } 
  | { name: 'id_gt', alias?: string  } 
  | { name: 'id_gte', alias?: string  } 
  | { name: 'id_contains', alias?: string  } 
  | { name: 'id_not_contains', alias?: string  } 
  | { name: 'id_starts_with', alias?: string  } 
  | { name: 'id_not_starts_with', alias?: string  } 
  | { name: 'id_ends_with', alias?: string  } 
  | { name: 'id_not_ends_with', alias?: string  } 
  | { name: 'createdAt', alias?: string  } 
  | { name: 'createdAt_not', alias?: string  } 
  | { name: 'createdAt_in', alias?: string  } 
  | { name: 'createdAt_not_in', alias?: string  } 
  | { name: 'createdAt_lt', alias?: string  } 
  | { name: 'createdAt_lte', alias?: string  } 
  | { name: 'createdAt_gt', alias?: string  } 
  | { name: 'createdAt_gte', alias?: string  } 
  | { name: 'updatedAt', alias?: string  } 
  | { name: 'updatedAt_not', alias?: string  } 
  | { name: 'updatedAt_in', alias?: string  } 
  | { name: 'updatedAt_not_in', alias?: string  } 
  | { name: 'updatedAt_lt', alias?: string  } 
  | { name: 'updatedAt_lte', alias?: string  } 
  | { name: 'updatedAt_gt', alias?: string  } 
  | { name: 'updatedAt_gte', alias?: string  } 
  | { name: 'url', alias?: string  } 
  | { name: 'url_not', alias?: string  } 
  | { name: 'url_in', alias?: string  } 
  | { name: 'url_not_in', alias?: string  } 
  | { name: 'url_lt', alias?: string  } 
  | { name: 'url_lte', alias?: string  } 
  | { name: 'url_gt', alias?: string  } 
  | { name: 'url_gte', alias?: string  } 
  | { name: 'url_contains', alias?: string  } 
  | { name: 'url_not_contains', alias?: string  } 
  | { name: 'url_starts_with', alias?: string  } 
  | { name: 'url_not_starts_with', alias?: string  } 
  | { name: 'url_ends_with', alias?: string  } 
  | { name: 'url_not_ends_with', alias?: string  } 
  | { name: 'AND', alias?: string  } 
  | { name: 'OR', alias?: string  } 
  | { name: 'NOT', alias?: string  } 
  
export interface PicturesUpdateManyWithWhereNestedInput {
  where?: PicturesScalarWhereInput
  data?: PicturesUpdateManyDataInput
}
export type PicturesUpdateManyWithWhereNestedInputInputObject =
  | Extract<keyof PicturesUpdateManyWithWhereNestedInput, string>
  | { name: 'where', alias?: string  } 
  | { name: 'data', alias?: string  } 
  
export interface PicturesUpdateManyDataInput {
  url?: string | null
}
export type PicturesUpdateManyDataInputInputObject =
  | Extract<keyof PicturesUpdateManyDataInput, string>
  | { name: 'url', alias?: string  } 
  
export interface SetCardUpsertWithoutEscortInput {
  update?: SetCardUpdateWithoutEscortDataInput
  create?: SetCardCreateWithoutEscortInput
}
export type SetCardUpsertWithoutEscortInputInputObject =
  | Extract<keyof SetCardUpsertWithoutEscortInput, string>
  | { name: 'update', alias?: string  } 
  | { name: 'create', alias?: string  } 
  
export interface UserUpdateManyMutationInput {
  email?: string | null
  nickname?: string | null
  password?: string | null
  name?: string | null
  permissions?: UserUpdatepermissionsInput | null
}
export type UserUpdateManyMutationInputInputObject =
  | Extract<keyof UserUpdateManyMutationInput, string>
  | { name: 'email', alias?: string  } 
  | { name: 'nickname', alias?: string  } 
  | { name: 'password', alias?: string  } 
  | { name: 'name', alias?: string  } 
  | { name: 'permissions', alias?: string  } 
  
export interface SetCardCreateInput {
  aliasName?: string
  pictures?: PicturesCreateManyWithoutSetCardInput | null
  age?: number
  escort?: UserCreateOneWithoutProfileInput
}
export type SetCardCreateInputInputObject =
  | Extract<keyof SetCardCreateInput, string>
  | { name: 'aliasName', alias?: string  } 
  | { name: 'pictures', alias?: string  } 
  | { name: 'age', alias?: string  } 
  | { name: 'escort', alias?: string  } 
  
export interface UserCreateOneWithoutProfileInput {
  create?: UserCreateWithoutProfileInput | null
  connect?: UserWhereUniqueInput | null
}
export type UserCreateOneWithoutProfileInputInputObject =
  | Extract<keyof UserCreateOneWithoutProfileInput, string>
  | { name: 'create', alias?: string  } 
  | { name: 'connect', alias?: string  } 
  
export interface UserCreateWithoutProfileInput {
  email?: string
  nickname?: string
  password?: string
  name?: string | null
  posts?: PostCreateManyWithoutAuthorInput | null
  permissions?: UserCreatepermissionsInput | null
}
export type UserCreateWithoutProfileInputInputObject =
  | Extract<keyof UserCreateWithoutProfileInput, string>
  | { name: 'email', alias?: string  } 
  | { name: 'nickname', alias?: string  } 
  | { name: 'password', alias?: string  } 
  | { name: 'name', alias?: string  } 
  | { name: 'posts', alias?: string  } 
  | { name: 'permissions', alias?: string  } 
  
export interface SetCardUpdateInput {
  aliasName?: string | null
  pictures?: PicturesUpdateManyWithoutSetCardInput | null
  age?: number | null
  escort?: UserUpdateOneRequiredWithoutProfileInput | null
}
export type SetCardUpdateInputInputObject =
  | Extract<keyof SetCardUpdateInput, string>
  | { name: 'aliasName', alias?: string  } 
  | { name: 'pictures', alias?: string  } 
  | { name: 'age', alias?: string  } 
  | { name: 'escort', alias?: string  } 
  
export interface UserUpdateOneRequiredWithoutProfileInput {
  create?: UserCreateWithoutProfileInput | null
  update?: UserUpdateWithoutProfileDataInput | null
  upsert?: UserUpsertWithoutProfileInput | null
  connect?: UserWhereUniqueInput | null
}
export type UserUpdateOneRequiredWithoutProfileInputInputObject =
  | Extract<keyof UserUpdateOneRequiredWithoutProfileInput, string>
  | { name: 'create', alias?: string  } 
  | { name: 'update', alias?: string  } 
  | { name: 'upsert', alias?: string  } 
  | { name: 'connect', alias?: string  } 
  
export interface UserUpdateWithoutProfileDataInput {
  email?: string | null
  nickname?: string | null
  password?: string | null
  name?: string | null
  posts?: PostUpdateManyWithoutAuthorInput | null
  permissions?: UserUpdatepermissionsInput | null
}
export type UserUpdateWithoutProfileDataInputInputObject =
  | Extract<keyof UserUpdateWithoutProfileDataInput, string>
  | { name: 'email', alias?: string  } 
  | { name: 'nickname', alias?: string  } 
  | { name: 'password', alias?: string  } 
  | { name: 'name', alias?: string  } 
  | { name: 'posts', alias?: string  } 
  | { name: 'permissions', alias?: string  } 
  
export interface UserUpsertWithoutProfileInput {
  update?: UserUpdateWithoutProfileDataInput
  create?: UserCreateWithoutProfileInput
}
export type UserUpsertWithoutProfileInputInputObject =
  | Extract<keyof UserUpsertWithoutProfileInput, string>
  | { name: 'update', alias?: string  } 
  | { name: 'create', alias?: string  } 
  
export interface SetCardUpdateManyMutationInput {
  aliasName?: string | null
  age?: number | null
}
export type SetCardUpdateManyMutationInputInputObject =
  | Extract<keyof SetCardUpdateManyMutationInput, string>
  | { name: 'aliasName', alias?: string  } 
  | { name: 'age', alias?: string  } 
  
export interface PicturesCreateInput {
  url?: string
  setCard?: SetCardCreateOneWithoutPicturesInput
}
export type PicturesCreateInputInputObject =
  | Extract<keyof PicturesCreateInput, string>
  | { name: 'url', alias?: string  } 
  | { name: 'setCard', alias?: string  } 
  
export interface SetCardCreateOneWithoutPicturesInput {
  create?: SetCardCreateWithoutPicturesInput | null
  connect?: SetCardWhereUniqueInput | null
}
export type SetCardCreateOneWithoutPicturesInputInputObject =
  | Extract<keyof SetCardCreateOneWithoutPicturesInput, string>
  | { name: 'create', alias?: string  } 
  | { name: 'connect', alias?: string  } 
  
export interface SetCardCreateWithoutPicturesInput {
  aliasName?: string
  age?: number
  escort?: UserCreateOneWithoutProfileInput
}
export type SetCardCreateWithoutPicturesInputInputObject =
  | Extract<keyof SetCardCreateWithoutPicturesInput, string>
  | { name: 'aliasName', alias?: string  } 
  | { name: 'age', alias?: string  } 
  | { name: 'escort', alias?: string  } 
  
export interface PicturesUpdateInput {
  url?: string | null
  setCard?: SetCardUpdateOneRequiredWithoutPicturesInput | null
}
export type PicturesUpdateInputInputObject =
  | Extract<keyof PicturesUpdateInput, string>
  | { name: 'url', alias?: string  } 
  | { name: 'setCard', alias?: string  } 
  
export interface SetCardUpdateOneRequiredWithoutPicturesInput {
  create?: SetCardCreateWithoutPicturesInput | null
  update?: SetCardUpdateWithoutPicturesDataInput | null
  upsert?: SetCardUpsertWithoutPicturesInput | null
  connect?: SetCardWhereUniqueInput | null
}
export type SetCardUpdateOneRequiredWithoutPicturesInputInputObject =
  | Extract<keyof SetCardUpdateOneRequiredWithoutPicturesInput, string>
  | { name: 'create', alias?: string  } 
  | { name: 'update', alias?: string  } 
  | { name: 'upsert', alias?: string  } 
  | { name: 'connect', alias?: string  } 
  
export interface SetCardUpdateWithoutPicturesDataInput {
  aliasName?: string | null
  age?: number | null
  escort?: UserUpdateOneRequiredWithoutProfileInput | null
}
export type SetCardUpdateWithoutPicturesDataInputInputObject =
  | Extract<keyof SetCardUpdateWithoutPicturesDataInput, string>
  | { name: 'aliasName', alias?: string  } 
  | { name: 'age', alias?: string  } 
  | { name: 'escort', alias?: string  } 
  
export interface SetCardUpsertWithoutPicturesInput {
  update?: SetCardUpdateWithoutPicturesDataInput
  create?: SetCardCreateWithoutPicturesInput
}
export type SetCardUpsertWithoutPicturesInputInputObject =
  | Extract<keyof SetCardUpsertWithoutPicturesInput, string>
  | { name: 'update', alias?: string  } 
  | { name: 'create', alias?: string  } 
  
export interface PicturesUpdateManyMutationInput {
  url?: string | null
}
export type PicturesUpdateManyMutationInputInputObject =
  | Extract<keyof PicturesUpdateManyMutationInput, string>
  | { name: 'url', alias?: string  } 
  
export interface PostCreateInput {
  published?: boolean | null
  title?: string
  content?: string | null
  author?: UserCreateOneWithoutPostsInput
}
export type PostCreateInputInputObject =
  | Extract<keyof PostCreateInput, string>
  | { name: 'published', alias?: string  } 
  | { name: 'title', alias?: string  } 
  | { name: 'content', alias?: string  } 
  | { name: 'author', alias?: string  } 
  
export interface UserCreateOneWithoutPostsInput {
  create?: UserCreateWithoutPostsInput | null
  connect?: UserWhereUniqueInput | null
}
export type UserCreateOneWithoutPostsInputInputObject =
  | Extract<keyof UserCreateOneWithoutPostsInput, string>
  | { name: 'create', alias?: string  } 
  | { name: 'connect', alias?: string  } 
  
export interface UserCreateWithoutPostsInput {
  email?: string
  nickname?: string
  password?: string
  name?: string | null
  permissions?: UserCreatepermissionsInput | null
  profile?: SetCardCreateOneWithoutEscortInput | null
}
export type UserCreateWithoutPostsInputInputObject =
  | Extract<keyof UserCreateWithoutPostsInput, string>
  | { name: 'email', alias?: string  } 
  | { name: 'nickname', alias?: string  } 
  | { name: 'password', alias?: string  } 
  | { name: 'name', alias?: string  } 
  | { name: 'permissions', alias?: string  } 
  | { name: 'profile', alias?: string  } 
  
export interface PostUpdateInput {
  published?: boolean | null
  title?: string | null
  content?: string | null
  author?: UserUpdateOneRequiredWithoutPostsInput | null
}
export type PostUpdateInputInputObject =
  | Extract<keyof PostUpdateInput, string>
  | { name: 'published', alias?: string  } 
  | { name: 'title', alias?: string  } 
  | { name: 'content', alias?: string  } 
  | { name: 'author', alias?: string  } 
  
export interface UserUpdateOneRequiredWithoutPostsInput {
  create?: UserCreateWithoutPostsInput | null
  update?: UserUpdateWithoutPostsDataInput | null
  upsert?: UserUpsertWithoutPostsInput | null
  connect?: UserWhereUniqueInput | null
}
export type UserUpdateOneRequiredWithoutPostsInputInputObject =
  | Extract<keyof UserUpdateOneRequiredWithoutPostsInput, string>
  | { name: 'create', alias?: string  } 
  | { name: 'update', alias?: string  } 
  | { name: 'upsert', alias?: string  } 
  | { name: 'connect', alias?: string  } 
  
export interface UserUpdateWithoutPostsDataInput {
  email?: string | null
  nickname?: string | null
  password?: string | null
  name?: string | null
  permissions?: UserUpdatepermissionsInput | null
  profile?: SetCardUpdateOneWithoutEscortInput | null
}
export type UserUpdateWithoutPostsDataInputInputObject =
  | Extract<keyof UserUpdateWithoutPostsDataInput, string>
  | { name: 'email', alias?: string  } 
  | { name: 'nickname', alias?: string  } 
  | { name: 'password', alias?: string  } 
  | { name: 'name', alias?: string  } 
  | { name: 'permissions', alias?: string  } 
  | { name: 'profile', alias?: string  } 
  
export interface UserUpsertWithoutPostsInput {
  update?: UserUpdateWithoutPostsDataInput
  create?: UserCreateWithoutPostsInput
}
export type UserUpsertWithoutPostsInputInputObject =
  | Extract<keyof UserUpsertWithoutPostsInput, string>
  | { name: 'update', alias?: string  } 
  | { name: 'create', alias?: string  } 
  
export interface PostUpdateManyMutationInput {
  published?: boolean | null
  title?: string | null
  content?: string | null
}
export type PostUpdateManyMutationInputInputObject =
  | Extract<keyof PostUpdateManyMutationInput, string>
  | { name: 'published', alias?: string  } 
  | { name: 'title', alias?: string  } 
  | { name: 'content', alias?: string  } 
  
export interface UserSubscriptionWhereInput {
  mutation_in?: prisma.MutationType[]
  updatedFields_contains?: string | null
  updatedFields_contains_every?: string[]
  updatedFields_contains_some?: string[]
  node?: UserWhereInput | null
  AND?: UserSubscriptionWhereInput[]
  OR?: UserSubscriptionWhereInput[]
  NOT?: UserSubscriptionWhereInput[]
}
export type UserSubscriptionWhereInputInputObject =
  | Extract<keyof UserSubscriptionWhereInput, string>
  | { name: 'mutation_in', alias?: string  } 
  | { name: 'updatedFields_contains', alias?: string  } 
  | { name: 'updatedFields_contains_every', alias?: string  } 
  | { name: 'updatedFields_contains_some', alias?: string  } 
  | { name: 'node', alias?: string  } 
  | { name: 'AND', alias?: string  } 
  | { name: 'OR', alias?: string  } 
  | { name: 'NOT', alias?: string  } 
  
export interface SetCardSubscriptionWhereInput {
  mutation_in?: prisma.MutationType[]
  updatedFields_contains?: string | null
  updatedFields_contains_every?: string[]
  updatedFields_contains_some?: string[]
  node?: SetCardWhereInput | null
  AND?: SetCardSubscriptionWhereInput[]
  OR?: SetCardSubscriptionWhereInput[]
  NOT?: SetCardSubscriptionWhereInput[]
}
export type SetCardSubscriptionWhereInputInputObject =
  | Extract<keyof SetCardSubscriptionWhereInput, string>
  | { name: 'mutation_in', alias?: string  } 
  | { name: 'updatedFields_contains', alias?: string  } 
  | { name: 'updatedFields_contains_every', alias?: string  } 
  | { name: 'updatedFields_contains_some', alias?: string  } 
  | { name: 'node', alias?: string  } 
  | { name: 'AND', alias?: string  } 
  | { name: 'OR', alias?: string  } 
  | { name: 'NOT', alias?: string  } 
  
export interface PicturesSubscriptionWhereInput {
  mutation_in?: prisma.MutationType[]
  updatedFields_contains?: string | null
  updatedFields_contains_every?: string[]
  updatedFields_contains_some?: string[]
  node?: PicturesWhereInput | null
  AND?: PicturesSubscriptionWhereInput[]
  OR?: PicturesSubscriptionWhereInput[]
  NOT?: PicturesSubscriptionWhereInput[]
}
export type PicturesSubscriptionWhereInputInputObject =
  | Extract<keyof PicturesSubscriptionWhereInput, string>
  | { name: 'mutation_in', alias?: string  } 
  | { name: 'updatedFields_contains', alias?: string  } 
  | { name: 'updatedFields_contains_every', alias?: string  } 
  | { name: 'updatedFields_contains_some', alias?: string  } 
  | { name: 'node', alias?: string  } 
  | { name: 'AND', alias?: string  } 
  | { name: 'OR', alias?: string  } 
  | { name: 'NOT', alias?: string  } 
  
export interface PostSubscriptionWhereInput {
  mutation_in?: prisma.MutationType[]
  updatedFields_contains?: string | null
  updatedFields_contains_every?: string[]
  updatedFields_contains_some?: string[]
  node?: PostWhereInput | null
  AND?: PostSubscriptionWhereInput[]
  OR?: PostSubscriptionWhereInput[]
  NOT?: PostSubscriptionWhereInput[]
}
export type PostSubscriptionWhereInputInputObject =
  | Extract<keyof PostSubscriptionWhereInput, string>
  | { name: 'mutation_in', alias?: string  } 
  | { name: 'updatedFields_contains', alias?: string  } 
  | { name: 'updatedFields_contains_every', alias?: string  } 
  | { name: 'updatedFields_contains_some', alias?: string  } 
  | { name: 'node', alias?: string  } 
  | { name: 'AND', alias?: string  } 
  | { name: 'OR', alias?: string  } 
  | { name: 'NOT', alias?: string  } 
  

export type PostOrderByInputValues =
  | 'id_ASC'
  | 'id_DESC'
  | 'createdAt_ASC'
  | 'createdAt_DESC'
  | 'updatedAt_ASC'
  | 'updatedAt_DESC'
  | 'published_ASC'
  | 'published_DESC'
  | 'title_ASC'
  | 'title_DESC'
  | 'content_ASC'
  | 'content_DESC'
  
export type PermissionValues =
  | 'ADMIN'
  | 'USER'
  | 'ESCORT'
  | 'AGENT'
  
export type PicturesOrderByInputValues =
  | 'id_ASC'
  | 'id_DESC'
  | 'createdAt_ASC'
  | 'createdAt_DESC'
  | 'updatedAt_ASC'
  | 'updatedAt_DESC'
  | 'url_ASC'
  | 'url_DESC'
  
export type UserOrderByInputValues =
  | 'id_ASC'
  | 'id_DESC'
  | 'email_ASC'
  | 'email_DESC'
  | 'nickname_ASC'
  | 'nickname_DESC'
  | 'password_ASC'
  | 'password_DESC'
  | 'name_ASC'
  | 'name_DESC'
  | 'createdAt_ASC'
  | 'createdAt_DESC'
  | 'updatedAt_ASC'
  | 'updatedAt_DESC'
  
export type SetCardOrderByInputValues =
  | 'id_ASC'
  | 'id_DESC'
  | 'aliasName_ASC'
  | 'aliasName_DESC'
  | 'age_ASC'
  | 'age_DESC'
  | 'createdAt_ASC'
  | 'createdAt_DESC'
  | 'updatedAt_ASC'
  | 'updatedAt_DESC'
  
export type MutationTypeValues =
  | 'CREATED'
  | 'UPDATED'
  | 'DELETED'
  
  