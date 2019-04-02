/**
 * @flow
 * @relayHash 013aad89c3d96022291a5e425eb87479
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type AuthentificationInput = {|
  username?: ?string,
  email?: ?string,
  password: string,
|};
export type LoginMutationVariables = {|
  loginData?: ?AuthentificationInput
|};
export type LoginMutationResponse = {|
  +currUser: ?{|
    +access_token: ?string,
    +id: ?string,
    +username: ?string,
    +avatar: ?string,
    +hasAvatar: ?boolean,
    +email: ?string,
  |}
|};
export type LoginMutation = {|
  variables: LoginMutationVariables,
  response: LoginMutationResponse,
|};
*/


/*
mutation LoginMutation(
  $loginData: AuthentificationInput
) {
  currUser(payload: $loginData) {
    access_token
    id
    username
    avatar
    hasAvatar
    email
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "loginData",
    "type": "AuthentificationInput",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "currUser",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "payload",
        "variableName": "loginData",
        "type": "AuthentificationInput"
      }
    ],
    "concreteType": "RegistrationOutput",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "access_token",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "id",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "username",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "avatar",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "hasAvatar",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "email",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "LoginMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "LoginMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "LoginMutation",
    "id": null,
    "text": "mutation LoginMutation(\n  $loginData: AuthentificationInput\n) {\n  currUser(payload: $loginData) {\n    access_token\n    id\n    username\n    avatar\n    hasAvatar\n    email\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '223b31b27e9f180293979130c0abf6d5';
module.exports = node;
