import { commitMutation } from "react-relay";
import graphql from "babel-plugin-relay/macro";

import environment from "./../environment";

const mutation = graphql`
  mutation DeleteUserMutation($userId: String!) {
    deleteUser(userId: $userId) {
      user_id
    }
  }
`;

export default (payload, onError: Function, onCompleted: Function) =>
  commitMutation(environment, {
    mutation,
    variables: { userId: payload },
    onCompleted,
    onError
  });
