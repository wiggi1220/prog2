import {
  GraphQLID,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLList,
  GraphQLNonNull,
  GraphQLInputObjectType
} from "graphql";
import UserQuery from "./queries/UserQuery";
import UserListQuery from "./queries/UserListQuery";
import RegisterUserMutation from "./mutations/RegisterUserMutation";
import DeleteMessageMutation from "./mutations/DeleteUserMutation";
import UpdateUserMutation from "./mutations/UpdateUserMutation";
import AuthentificateUserMutation from "./mutations/AuthentificateUserMutation";
import { AvatarOutputType } from "./types";
import AvatarQuery from "./queries/AvatarQuery";

const Query = new GraphQLObjectType({
  name: "Query",
  fields: {
    //name of these fields is constructor name in graphiql
    user: UserQuery,
    userList: UserListQuery,
    avatar: AvatarQuery
  }
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    registerUser: RegisterUserMutation,
    deleteUser: DeleteMessageMutation,
    updateUser: UpdateUserMutation,
    currUser: AuthentificateUserMutation
  }
});

export default new GraphQLSchema({
  query: Query,
  mutation: Mutation
});
