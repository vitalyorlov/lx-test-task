const { DataSource } = require('apollo-datasource');

class UserAPI extends DataSource {
  constructor({ store }) {
    super();
    this.store = store;
  }

  /**
   * This is a function that gets called by ApolloServer when being setup.
   * This function gets called with the datasource config including things
   * like caches and context. We'll assign this.context to the request context
   * here, so we can know about the user making requests
   */
  initialize(config) {
    this.context = config.context;
  }

  /**
   * User can be called with an argument that includes email, but it doesn't
   * have to be. If the user is already on the context, it will use that user
   * instead
   */
  async getAllUsers() {
    return this.store.users.findAll();
  }

  async addUser(user) {
    return this.store.users.create(user);
  }

  async removeUser(id) {
    return !!this.store.users.destroy({ where: { id } });
  }

  async getUserById(id) {
    return this.store.users.findByPk(id);
  }
}

module.exports = UserAPI;
