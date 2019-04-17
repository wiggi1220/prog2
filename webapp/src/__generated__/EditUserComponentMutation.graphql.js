/**
 * @flow
 * @relayHash d9d86e61c8ad7dd46601d0712a33db0b
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type RegistrationInput = {|
  username?: ?string,
  email?: ?string,
  password?: ?string,
|};
export type EditUserComponentMutationVariables = {|
  userId: string,
  newerUser?: ?RegistrationInput,
|};
export type EditUserComponentMutationResponse = {|
  +updateUser: ?{|
    +user_id: ?string
  |}
|};
export type EditUserComponentMutation = {|
  variables: EditUserComponentMutationVariables,
  response: EditUserComponentMutationResponse,
|};
*/


/*
mutation EditUserComponentMutation(
  $userId: String!
  $newerUser: RegistrationInput
) {
  updateUser(userId: $userId, payload: $newerUser) {
    user_id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "userId",
    "type": "String!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "newerUser",
    "type": "RegistrationInput",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "updateUser",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "payload",
        "variableName": "newerUser",
        "type": "RegistrationInput"
      },
      {
        "kind": "Variable",
        "name": "userId",
        "variableName": "userId",
        "type": "String!"
      }
    ],
    "concreteType": "DeleteOutput",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "user_id",
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
    "name": "EditUserComponentMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "EditUserComponentMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "EditUserComponentMutation",
    "id": null,
    "text": "mutation EditUserComponentMutation(\n  $userId: String!\n  $newerUser: RegistrationInput\n) {\n  updateUser(userId: $userId, payload: $newerUser) {\n    user_id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'b080d11b928d3556116ece03e14c5e45';
module.exports = node;
