// get model and datatype from sequelize
const { Model, DataTypes } = require("sequelize");
// get sequelize from config
var bcrypt = require("bcrypt");
const sequelize = require("../config/connection");

// create class
class User extends Model {}

// build model
User.init(
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			allowull: false,
			autoIncrement: true,
		},
		email: {
			type: DataTypes.STRING,

			allowull: false,
			
		},
		firstname: {
			type: DataTypes.STRING,
			allowNull: false,
			// defaultValue: "John "
		},
		lastname: {
			type: DataTypes.STRING,
			allowNull: false,
			// defaultValue: "John "
		},
		
		password: {
			type: DataTypes.STRING,
			allowNull: false
			},

		
	},
	{
		sequelize,
		timestamps: false,
		freezeTableName: true,
		underscored: true,
		modelName: "user",
	}
);
// User.method.generateHash = function(password) {
// 	return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
// };

// User.methods.validPassword = function(password) {
//     return bcrypt.compareSync(password, this.local.password);
// };


module.exports = User;
