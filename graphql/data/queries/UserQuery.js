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
    const urlAvatar = `http://localhost:3000/api/users/${userId}/avatar`;
    const user = await connector("GET", url, context.access_token);

    if (!user) {
      return {};
    }
    if (user.hasAvatar) {
      user.avatar = urlAvatar;
    } else {
      user.avatar = null;
    }
    return user;
  }
  // const user = await connector("GET", url, context.access_token);
  // return user;
};
