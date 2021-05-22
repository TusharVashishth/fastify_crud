const UserController = require("../controllers/UserController")

// const routes = async (fastify, options) => {
//   fastify.get("/user", UserController.store(req, reply))
// }

const routes = [
  {
    method: "POST",
    url: "/api/user",
    handler: UserController.store,
  },
  {
    method: "GET",
    url: "/api/user",
    handler: UserController.index,
  },
  {
    method: "GET",
    url: "/api/user/:id",
    handler: UserController.show,
  },
  {
    method: "DELETE",
    url: "/api/user/:id",
    handler: UserController.destroy,
  },
]
module.exports = routes
