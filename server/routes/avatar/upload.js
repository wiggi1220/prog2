import { saveProfilePic } from "../../middleware/user";

exports.plugin = {
  name: "uploadAvatar",
  version: "1.0.0",
  register: async (server, options) => {
    server.route({
      method: "POST",
      path: "/api/users/avatar",
      options: {
        payload: {
          maxBytes: 1000 * 1000,
          output: "stream",
          parse: true,
          allow: "multipart/form-data"
        }
      },
      handler: async (request, h) => {
        await saveProfilePic(request);

        return h
          .response({ status: "success" })
          .type("application/json")
          .code(200);
      }
    });
  }
};
