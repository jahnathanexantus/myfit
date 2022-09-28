// get model and datatype from sequelize
const { Model, DataTypes } = require("sequelize");
// get sequelize from config

const sequelize = require("../config/connection");

// create class
class Image extends Model {}

// build model
Image.init(
	{
		filetype: {
			type: DataTypes.STRING,
		},
		filename: {
			type: DataTypes.STRING,
		},
		
		
		user_id:{
            type:DataTypes.INTEGER,
            references:{
                model: 'user',
                key: 'id'
            }
        }
	},
	{
		sequelize,
		timestamps: false,
		freezeTableName: true,
		underscored: true,
		modelName: "image",
	}
);

module.exports = Image;
