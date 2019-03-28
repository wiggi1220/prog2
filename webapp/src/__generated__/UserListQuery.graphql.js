/**
 * @flow
 * @relayHash 6f1c762c86268ffc32e7e3adcbaf2bd1
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type UserListQueryVariables = {||};
export type UserListQueryResponse = {|
  +userList: ?$ReadOnlyArray<?{|
    +id: ?string
  |}>
|};
export type UserListQuery = {|
  variables: UserListQueryVariables,
  response: UserListQueryResponse,
|};
*/


/*
query UserListQuery {
  userList {
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "userList",
    "storageKey": null,
    "args": null,
    "concreteType": "User",
    "plural": true,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "id",
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
    "name": "UserListQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "UserListQuery",
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "UserListQuery",
    "id": null,
    "text": "query UserListQuery {\n  userList {\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '9f116a709b243c37ae6b798def38d729';
module.exports = node;
