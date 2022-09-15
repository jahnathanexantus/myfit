const express = require("express");
const routes = require("./routes");
var cors = require('cors')
const sequelize = require("./config/connection");

const app = express();
const PORT = process.env.PORT || 3001;


app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// turn on routes
app.use(routes);

// turn on connection to db and server
sequelize.sync({ force: true }).then(() => {
	app.listen(PORT, () => console.log("Now listening"));
});
