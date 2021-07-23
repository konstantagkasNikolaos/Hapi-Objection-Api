const { Model } = require("objection");
const db = require("./db");

Model.knex(db);

class Customer extends Model {
  static get tableName() {
    return "customers";
  }
}

module.exports = Customer;
