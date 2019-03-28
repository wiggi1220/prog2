import connector from "../../utils/connector";
import { DeleteUpdateOutputType, RegistrationInputType } from "../types";
import { GraphQLNonNull, GraphQLString } from "graphql";

export default {
  // Type of Output Fields
  type: DeleteUpdateOutputType,
  args: {
    // Type of Input Fields
    userId: {
      type: new GraphQLNonNull(GraphQLString)
    },
    payload: {
      type: RegistrationInputType
    }
  },
  resolve: async (obj, req, context) => {
    const url = `http://localhost:3000/api/users/${req.userId}`;
    const user_id = await connector(
      "POST",
      url,
      context.access_token,
      req.payload
    );
    return user_id;
  }
};
