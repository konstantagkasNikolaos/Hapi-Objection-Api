"use strict";

const Hapi = require("@hapi/hapi");
const {
  findAll,
  findOne,
  create,
  update,
  deleteCustomer,
  deleteAll,
} = require("./handlers");

const init = async () => {
  const server = Hapi.server({
    port: 3000,
    host: "localhost",
  });

  server.route({
    method: "GET",
    path: "/customers",
    handler: findAll,
  });

  server.route({
    method: "GET",
    path: "/customers/{customerId}",
    handler: findOne,
  });

  server.route({
    method: "POST",
    path: "/customers",
    handler: create,
  });

  server.route({
    method: "PUT",
    path: "/customers/{customerId}",
    handler: update,
  });

  server.route({
    method: "DELETE",
    path: "/customers/{customerId}",
    handler: deleteCustomer,
  });

  server.route({
    method: "DELETE",
    path: "/customers",
    handler: deleteAll,
  });

  server.ext("onRequest", function (request, h) {
    console.log("called", `${request.method} ${request.url.href}`);
    return h.continue;
  });

  await server.start();
  console.log("Server running on %s", server.info.uri);
};

process.on("unhandledRejection", (err) => {
  console.log(err);
  process.exit(1);
});

init();
