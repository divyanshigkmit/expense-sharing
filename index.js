require("dotenv").config();

const app = require("./app");
const { sequelize } = require("./models");
const redis = require("./helper/redis.helper");

const startServer = async function () {
  try {
    await sequelize.authenticate();
    console.log("... Microservice db ✔");
    await redis.connect();
    console.log("... Redis db ✔");
    app.listen(process.env.SERVER_PORT);
    console.log(`--- Server started on ${process.env.SERVER_PORT} ---\n\n`);
  } catch (err) {
    console.log("server setup failed", err);
    console.log("Error: ", err.message);
  }
};

startServer();
