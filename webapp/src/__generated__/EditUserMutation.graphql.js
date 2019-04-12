/**
 * @flow
 * @relayHash 9e0d3b66931b522b3dd24c2ce371e6f2
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
export type EditUserMutationVariables = {|
  userId: string,
  newerUser?: ?RegistrationInput,
|};
export type EditUserMutationResponse = {|
  +updateUser: ?{|
    +user_id: ?string
  |}
|};
export type EditUserMutation = {|
  variables: EditUserMutationVariables,
  response: EditUserMutationResponse,
|};
*/


/*
mutation EditUserMutation(
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
    "name": "EditUserMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "EditUserMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "EditUserMutation",
    "id": null,
    "text": "mutation EditUserMutation(\n  $userId: String!\n  $newerUser: RegistrationInput\n) {\n  updateUser(userId: $userId, payload: $newerUser) {\n    user_id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'c278df62c368cb3c1c63fa5e5423f04c';
module.exports = node;
