import { gql } from 'apollo-server-express';

const typeDefs = gql`
    type Schema {
        id: ID!
        name: String!
        folders: [UserFolder]!
    }
    type UserFolder {
        id: ID!
        name: String!
        charts: [UserChart]!
    }
    type UserChart {
        id: ID!
        name: String
    }
    type Query {
        getAllSchemas: [Schema]
        getAllFoldersFromSchema(id: ID!): [UserFolder]
        getSchemaData(id: ID!): Schema
    }
`;

export default typeDefs;