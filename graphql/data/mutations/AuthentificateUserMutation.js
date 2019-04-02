import connector from "../../utils/connector";
import { RegistrationOutputType, AuthentificationInputType } from "../types";

export default {
  // Type of Output Fields
  type: RegistrationOutputType,
  args: {
    // Type of Input Fields
    payload: {
      type: AuthentificationInputType
    }
  },
  resolve: async (obj, req) => {
    const url = `http://localhost:3000/api/users/login`;
    const user = await connector("POST", url, null, req.payload);
    console.log("user", user);
    return user;
  }
};
