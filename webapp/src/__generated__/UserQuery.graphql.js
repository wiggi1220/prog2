/**
 * @flow
 * @relayHash ba55cf327a9327945e4e583254f3328b
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type UserQueryVariables = {|
  user_id?: ?string
|};
export type UserQueryResponse = {|
  +user: ?{|
    +username: ?string,
    +email: ?string,
    +avatar: ?string,
  |}
|};
export type UserQuery = {|
  variables: UserQueryVariables,
  response: UserQueryResponse,
|};
*/


/*
query UserQuery(
  $user_id: String
) {
  user(userId: $user_id) {
    username
    email
    avatar
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "user_id",
    "type": "String",
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
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "username",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "email",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "avatar",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "UserQuery",
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
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/)
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "UserQuery",
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
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
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
    "name": "UserQuery",
    "id": null,
    "text": "query UserQuery(\n  $user_id: String\n) {\n  user(userId: $user_id) {\n    username\n    email\n    avatar\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '806c7349d352b75c38629f5ec44c581b';
module.exports = node;
