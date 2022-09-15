// create sequelize connection
const Sequelize = require("sequelize");
// bring in dotenv
require("dotenv").config();
// hook up sequelize
const sequelize = new Sequelize(
	process.env.DB_NAME,
	process.env.DB_USER,
	process.env.DB_PASSWORD,
	{
		host: "localhost",
		dialect: "mysql",
		port: 3306,
	}
);
// emport sequelize
module.exports = sequelize;
