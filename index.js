const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');

import typeDefs from './api/schema';
import resolvers from './api/resolvers';

const server = new ApolloServer({ typeDefs, resolvers });
const app = express();
server.applyMiddleware({ app });

app.listen({ port: 4000 }, () => 
    console.log(`Server running at http://localhost:4000${server.graphqlPath}`));
