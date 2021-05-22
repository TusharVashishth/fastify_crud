const fastify = require("fastify")({ logger: true })
const PORT = 5000

fastify.register(require("fastify-formbody"))
require("./db/index")

fastify.get("/", (req, rep) => {
  try {
    rep.send({ msg: "Hello" })
  } catch (error) {
    rep.send(error)
  }
})

const routes = require("./routes/index")
routes.forEach((route, index) => {
  fastify.route(route)
})

fastify.listen(PORT, () => console.log(`Server is running on Port ${PORT}..`))
