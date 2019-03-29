import { GraphQLString, GraphQLID, GraphQLBoolean } from "graphql";

export const UserFields = {
  id: {
    type: GraphQLID,
    // resolve: get data from database
    resolve: obj => obj.id
  },
  username: {
    type: GraphQLString,
    resolve: obj => obj.username
  },
  email: {
    type: GraphQLString,
    resolve: obj => obj.email
  },
  password: {
    type: GraphQLString,
    resolve: obj => obj.password
  },
  avatar: {
    type: GraphQLString,
    resolve: obj => obj.avatar
  },
  hasAvatar: {
    type: GraphQLBoolean,
    resolve: obj => obj.hasAvatar
  }
};
