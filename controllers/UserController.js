const User = require("../models/User")

const index = async (req, reply) => {
  const users = await User.find()
  try {
    reply.send(users)
  } catch (error) {
    reply.send({ status: 400, message: "Something went wrong!" })
  }
}

const show = async (req, reply) => {
  try {
    const id = req.params.id
    let user = await User.findById(id)
    reply.send(user)
  } catch (error) {
    reply.send({ status: 400, message: "Something went wrong!" })
  }
}

const store = (req, reply) => {
  const { name, email, password } = req.body
  const user = new User({ name, email, password })
  try {
    user.save()
    reply.send({ status: "200", message: "User Created successfully" })
  } catch (err) {
    reply.send({ status: 400, message: "Something went wrong!" })
  }
}

const destroy = async (req, reply) => {
  try {
    const id = req.params.id
    await User.findByIdAndDelete(id)
    reply.send({ status: "200", message: "User deleted successfully" })
  } catch (error) {
    reply.send({ status: 400, message: "Something went wrong!" })
  }
}

module.exports = { index, show, store, destroy }
