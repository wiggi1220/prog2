import { Environment, Network, RecordSource, Store } from "relay-runtime";

// Define a function that fetches the results of an operation (query/mutation/etc)
// and returns its results as a Promise:
function fetchQuery(operation, variables, cacheConfig, uploadables) {
  console.log("variables", variables);
  return fetch("http://localhost:8000/", {
    method: "POST",
    headers: {
      Authorization: sessionStorage.getItem("access_token"),
      "content-type": "application/json"
    },
    body: JSON.stringify({
      query: operation.text, // GraphQL text from input
      variables
    })
  }).then(response => {
    return response.json();
  });
}

const source = new RecordSource();
const store = new Store(source);
const network = Network.create(fetchQuery); // see note below
const handlerProvider = null;

export default new Environment({
  handlerProvider, // Can omit.
  network,
  store
});
