const Boom = require("@hapi/boom");
const Customer = require("./model");

async function findAll() {
  try {
    return await Customer.query();
  } catch (error) {
    console.log("find all ERROR", error);
    return Boom.badImplementation("Error inside find all");
  }
}

async function findOne(request, h) {
  const id = request.params.customerId;
  try {
    customerById = await Customer.query().findById(id);
    if (customerById === undefined) {
      return Boom.notFound(`Customer with id:${id} not found`);
    }
    return customerById;
  } catch (error) {
    console.log("findOne ERROR:", error);
    return Boom.badImplementation("Error inside findOne");
  }
}

async function create(request, h) {
  const { email, name, active } = request.payload;
  try {
    const insertCustomer = await Customer.query().insert({
      email,
      name,
      active,
    });
    return `Customer with id:${insertCustomer.id} was created`;
  } catch (error) {
    console.log("create ERROR", error);
    return Boom.badImplementation("Error inside create");
  }
}

async function update(request, h) {
  const id = request.params.customerId;
  const { email, name, active } = request.payload;
  try {
    const updateCustomer = await Customer.query()
      .findById(id)
      .patch({ email, name, active });
    if (updateCustomer === 1) {
      return `Customer with id:${id} was updated`;
    } else {
      return `something else happend: ${updateCustomer}`;
    }
  } catch (error) {
    console.log("update ERROR", error);
    return Boom.badImplementation("Error inside update");
  }
}

async function deleteCustomer(request, h) {
  const id = request.params.customerId;
  try {
    await Customer.query().deleteById(id);
    return `Customer with id:${id} was deleted`;
  } catch (error) {
    console.log("delete customer ERROR", error);
    return Boom.badImplementation("Error inside delete customer");
  }
}

async function deleteAll() {
  try {
    await Customer.query().delete();
    return "All customers were deleted";
  } catch (error) {
    console.log("delete all ERROR", error);
    return Boom.badImplementation("Error inside delete all");
  }
}

module.exports = {
  findAll,
  findOne,
  create,
  update,
  deleteAll,
  deleteCustomer,
};
