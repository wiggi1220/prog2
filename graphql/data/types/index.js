import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLScalarType
} from "graphql";
import { UserFields } from "../fields";

export const AuthentificationInputType = new GraphQLInputObjectType({
  name: "AuthentificationInput",
  fields: {
    username: { type: GraphQLString },
    email: { type: GraphQLString },
    password: { type: new GraphQLNonNull(GraphQLString) }
  }
});
export const UserType = new GraphQLObjectType({
  name: "User",
  fields: UserFields
});

export const AvatarOutputType = new GraphQLObjectType({
  name: "AvatarOutput",
  fields: {
    avatar: {
      type: GraphQLString,
      resolve: obj => obj.avatar
    }
  }
});

export const RegistrationOutputType = new GraphQLObjectType({
  name: "RegistrationOutput",
  fields: {
    access_token: {
      type: GraphQLString,
      resolve: obj => obj.access_token
    },
    ...UserFields
  }
});

export const RegistrationInputType = new GraphQLInputObjectType({
  name: "RegistrationInput",
  fields: {
    username: { type: GraphQLString },
    email: { type: GraphQLString },
    password: { type: GraphQLString }
  }
});

export const DeleteInputType = new GraphQLInputObjectType({
  name: "DeleteInput",
  fields: {
    user_id: { type: GraphQLString }
  }
});

export const DeleteUpdateOutputType = new GraphQLObjectType({
  name: "DeleteOutput",
  fields: {
    user_id: {
      type: GraphQLString,
      resolve: obj => obj.user_id
    }
  }
});
