import connector from "../../utils/connector";
import { GraphQLString } from "graphql";
import { UserType } from "../types";

export default {
  type: UserType,
  args: {
    userId: {
      type: GraphQLString
    }
  },
  resolve: async (obj, { userId }, context) => {
    const url = `http://localhost:3000/api/users/${userId}`;
    const urlAvatar = `http://localhost:3000/api/users/avatar/${userId}`;
    const user = Promise.all([
      connector("GET", url, context.access_token),
      connector("GET", urlAvatar, context.access_token)
    ]).then(values => {
      values[0].avatar = values[1].uri;
      return values[0];
    });
    return user;
  }
  // const user = await connector("GET", url, context.access_token);
  // return user;
};
