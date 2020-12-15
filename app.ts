import express from 'express'; 
import graphqlHTTP from 'express-graphql';
import { makeExecutableSchema } from 'graphql-tools';

import { ProductsService } from './products/products.service';
import { UsersService } from './users/users.service';


const app: express.Application = express();

const port = 3000;

// typeDefs : The definition of our schema of what we can expect from queries and mutations
    //--> Query  : A GraphQL query is the client application request to retrieve data from database or legacy API's.
    //--> Mutations : Our requests that are going to affect any data that we have on our own server.

let typeDefs: any = [`

    type Query {
        hello: String,
        test: String,
    }

    type Mutation {
        hello(message: String) : String
    }

`];

let helloMessage: String ='hello world';
let testingMessage: String ='very good';

// Resolvers - Instead of the expectation of fields or required parameters, here we define the functions and behaviors of how should the queries and mutations would work.

let resolvers = {
    Query: {
        hello: ()=> helloMessage,
        test: ()=> testingMessage
    },
    Mutation: {
        hello: (_: any, helloData: any) =>{
            helloMessage = helloData.message;
            return helloMessage;
        }
    }
};

let productsService = new ProductsService();
let usersService    = new UsersService();

typeDefs += productsService.configTypeDefs();
typeDefs += usersService.configTypeDefs();

productsService.configResolvers(resolvers);
usersService.configResolvers(resolvers);




app.use('/graphql',graphqlHTTP({
    schema: makeExecutableSchema({typeDefs,resolvers}),
    graphiql: true
    })
);

app.listen(port, ()=>{
    console.log(`Node Typscript gRaphQL API Listing start on port ${port}`)
})