/**
 * @flow
 * @relayHash a72b4b268fbc6e8384146499cadeebfe
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
  +authentificateUser: ?{|
    +access_token: ?string
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
  authentificateUser(payload: $loginData) {
    access_token
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
    "name": "authentificateUser",
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
    "text": "mutation LoginMutation(\n  $loginData: AuthentificationInput\n) {\n  authentificateUser(payload: $loginData) {\n    access_token\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '15bff2fe1b588cb64a914db583ac8779';
module.exports = node;
