const mongoose = require("mongoose")

mongoose
  .connect("mongodb://localhost:27017/fastify_db", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log("Database connected successfully!"))
  .catch((err) => console.log(err))
