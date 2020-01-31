module.exports = {
    Query: {
        allUsers: (_, __, { dataSources }) => dataSources.userAPI.getAllUsers(),
    },
    Mutation: {
        addUser: async (_, { name, email, status }, { dataSources }) => {
            return dataSources.userAPI.addUser({ name, email, status });
        },
        removeUser: async (_, { id }, { dataSources }) => {
            const removedUser = await dataSources.userAPI.getUserById(id);
            await dataSources.userAPI.removeUser(id);
            return removedUser;
        }
    },
};
