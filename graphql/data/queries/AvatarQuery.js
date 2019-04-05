import connector from "../../utils/connector";
import { GraphQLString } from "graphql";
import { AvatarOutputType } from "../types";

export default {
  type: AvatarOutputType,
  args: {
    userId: {
      type: GraphQLString
    }
  },
  resolve: async (obj, { userId }, context) => {
    const url = `http://localhost:3000/api/users/${userId}/avatar`;
    const file_adress = await connector("GET", url, context.access_token);

    return file_adress;
  }
};
