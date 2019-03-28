import connector from "../../utils/connector";
import { GraphQLString, GraphQLNonNull } from "graphql";
import { DeleteUpdateOutputType } from "../types/index";

export default {
  // Type of Output Fields
  type: DeleteUpdateOutputType,
  args: {
    // Type of Input Fields
    userId: {
      type: new GraphQLNonNull(GraphQLString)
    }
  },
  resolve: async (obj, { userId }, context) => {
    const url = `http://localhost:3000/api/users/${userId}`;
    const deletedUserId = await connector("DELETE", url, context.access_token);
    console.log("TCL: deletedUserId", deletedUserId);
    return deletedUserId;
  }
};
