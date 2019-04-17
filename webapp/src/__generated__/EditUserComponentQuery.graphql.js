/**
 * @flow
 * @relayHash 23d93881104167023a1cc5c8a525f06b
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type EditUser_user$ref = any;
export type EditUserComponentQueryVariables = {|
  user_id: string
|};
export type EditUserComponentQueryResponse = {|
  +user: ?{|
    +$fragmentRefs: EditUser_user$ref
  |}
|};
export type EditUserComponentQuery = {|
  variables: EditUserComponentQueryVariables,
  response: EditUserComponentQueryResponse,
|};
*/


/*
query EditUserComponentQuery(
  $user_id: String!
) {
  user(userId: $user_id) {
    ...EditUser_user
    id
  }
}

fragment EditUser_user on User {
  username
  email
  id
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "user_id",
    "type": "String!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "userId",
    "variableName": "user_id",
    "type": "String"
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "EditUserComponentQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "user",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "User",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "EditUser_user",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "EditUserComponentQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "user",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "User",
        "plural": false,
        "selections": [
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
            "name": "email",
            "args": null,
            "storageKey": null
          },
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
    "operationKind": "query",
    "name": "EditUserComponentQuery",
    "id": null,
    "text": "query EditUserComponentQuery(\n  $user_id: String!\n) {\n  user(userId: $user_id) {\n    ...EditUser_user\n    id\n  }\n}\n\nfragment EditUser_user on User {\n  username\n  email\n  id\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '1f4c83f4fb32d01433d396173864e745';
module.exports = node;
