import connector from "../../utils/connector";
import { RegistrationOutputType, RegistrationInputType } from "../types";

export default {
  // Type of Output Fields
  type: RegistrationOutputType,
  args: {
    // Type of Input Fields
    newUser: {
      type: RegistrationInputType
    }
  },
  resolve: async (obj, req) => {
    const url = `http://localhost:3000/api/users`;
    const access_token = await connector("POST", url, null, req.newUser);
    return access_token;
  }
};
