// @flow
/* eslint-disable no-console, no-shadow */
import express from "express";
import graphQLHTTP from "express-graphql";
import chalk from "chalk";
import config from "./config/environment";
import schema from "./data/schema";
import cors from "cors";

// Launch GraphQL
const graphql = express();
graphql.use(cors());

graphql.use(
  "/",
  graphQLHTTP(req => ({
    graphiql: true,
    pretty: true,
    schema,
    context: {
      access_token: req.headers.authorization
    }
  }))
);
graphql.listen(config.graphql.port, () =>
  console.log(
    chalk.green(`GraphQL is listening on port ${config.graphql.port}`)
  )
);
