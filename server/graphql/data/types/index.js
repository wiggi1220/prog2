import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInputObjectType,
  GraphQLNonNull
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
    file_adress: {
      type: GraphQLString,
      resolve: obj => obj.uri
    }
  }
});

export const RegistrationOutputType = new GraphQLObjectType({
  name: "RegistrationOutput",
  fields: {
    access_token: {
      type: GraphQLString,
      resolve: obj => obj.access_token
    }
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