import connector from "../../utils/connector";
import { GraphQLObjectType, GraphQLString, GraphQLList } from "graphql";
import { UserType } from "../types";

export default {
  type: new GraphQLList(UserType),
  resolve: async (obj, params, context) => {
    const url = "http://localhost:3000/api/users";
    const userList = await connector("GET", url, context.access_token);
    return userList;
  }
};
