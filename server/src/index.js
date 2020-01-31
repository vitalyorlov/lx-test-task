const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');

const { createStore } = require('./utils');

const UserAPI = require('./datasources/user');

const store = createStore();

const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => ({
        userAPI: new UserAPI({ store })
    })
});

server
    .listen({ port: process.env.PORT || 4000 })
    .then(({ url }) => {
        console.log(`🚀 app running at ${url}`)
    });
