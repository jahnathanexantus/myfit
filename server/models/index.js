const User = require("./User");
const Gym = require("./Gym");
const Image = require("./Image");

User.hasOne(Gym, {
	foreignKey: "user_id",
	onDelete: "CASCADE",
});

Gym.belongsTo(User, {
	foreignKey: "user_id",
});

User.hasMany(Image,{
	foreignKey: "user_id",
	onDelete: "CASCADE",
});   

Image.belongsTo(User, {
	foreignKey: "user_id",
});

User.belongsToMany(User, {
	as: "User",
	foreignKey: "userid",
	through: "Follow",
});

User.belongsToMany(User, {
	as: "Followed",
	foreignKey: "FollowedId",
	through: "Follow",
});
module.exports = { User, Gym, Image };
