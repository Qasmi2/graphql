"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_graphql_1 = __importDefault(require("express-graphql"));
const graphql_tools_1 = require("graphql-tools");
const products_service_1 = require("./products/products.service");
const users_service_1 = require("./users/users.service");
const app = express_1.default();
const port = 3000;
// typeDefs : The definition of our schema of what we can expect from queries and mutations
//--> Query  : A GraphQL query is the client application request to retrieve data from database or legacy API's.
//--> Mutations : Our requests that are going to affect any data that we have on our own server.
let typeDefs = [`

    type Query {
        hello: String,
        test: String,
    }

    type Mutation {
        hello(message: String) : String
    }

`];
let helloMessage = 'hello world';
let testingMessage = 'very good';
// Resolvers - Instead of the expectation of fields or required parameters, here we define the functions and behaviors of how should the queries and mutations would work.
let resolvers = {
    Query: {
        hello: () => helloMessage,
        test: () => testingMessage
    },
    Mutation: {
        hello: (_, helloData) => {
            helloMessage = helloData.message;
            return helloMessage;
        }
    }
};
let productsService = new products_service_1.ProductsService();
let usersService = new users_service_1.UsersService();
typeDefs += productsService.configTypeDefs();
typeDefs += usersService.configTypeDefs();
productsService.configResolvers(resolvers);
usersService.configResolvers(resolvers);
app.use('/graphql', express_graphql_1.default({
    schema: graphql_tools_1.makeExecutableSchema({ typeDefs, resolvers }),
    graphiql: true
}));
app.listen(port, () => {
    console.log(`Node Typscript gRaphQL API Listing start on port ${port}`);
});
