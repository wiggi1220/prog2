/**
 * @flow
 * @relayHash 3dcfb37081b260b8596fe98a6e4df371
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
export type RegisterMutationVariables = {|
  newUser?: ?RegistrationInput
|};
export type RegisterMutationResponse = {|
  +registerUser: ?{|
    +access_token: ?string
  |}
|};
export type RegisterMutation = {|
  variables: RegisterMutationVariables,
  response: RegisterMutationResponse,
|};
*/


/*
mutation RegisterMutation(
  $newUser: RegistrationInput
) {
  registerUser(newUser: $newUser) {
    access_token
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "newUser",
    "type": "RegistrationInput",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "newUser",
    "variableName": "newUser",
    "type": "RegistrationInput"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "access_token",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "RegisterMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "registerUser",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "RegistrationOutput",
        "plural": false,
        "selections": [
          (v2/*: any*/)
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "RegisterMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "registerUser",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "RegistrationOutput",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "mutation",
    "name": "RegisterMutation",
    "id": null,
    "text": "mutation RegisterMutation(\n  $newUser: RegistrationInput\n) {\n  registerUser(newUser: $newUser) {\n    access_token\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '622108d14f79b2ca0c9311ad3cc2e742';
module.exports = node;
