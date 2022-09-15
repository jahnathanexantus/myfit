// get model and datatype from sequelize
const { Model, DataTypes } = require("sequelize");
// get sequelize from config

const sequelize = require("../config/connection");

// create class
class Gym extends Model {}

// build model
Gym.init(
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			allowull: false,
			autoIncrement: true,
		},
		name: {
			type: DataTypes.STRING,

			allowull: false,
			
		},
		address: {
			type: DataTypes.STRING,
			allowNull: false,
			// defaultValue: "John "
		},

		
		gym_id:{
            type:DataTypes.INTEGER,
            references:{
                model: 'gym',
                key: 'id'
            }
        }
	},
	{
		sequelize,
		timestamps: false,
		freezeTableName: true,
		underscored: true,
		modelName: "gym",
	}
);

module.exports = Gym;
