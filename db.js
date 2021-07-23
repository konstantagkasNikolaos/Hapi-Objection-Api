const knex = require("knex");

const db = knex({
  client: "mysql",
  connection: {
    host: "localhost",
    user: "root",
    password: "123456",
    database: "testDB",
  },
});

module.exports = db;
