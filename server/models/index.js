const User = require("./User");
const Gym = require("./Gym");

User.hasOne(Gym, {
	foreignKey: "user_id",
	onDelete: "CASCADE",
});

Gym.belongsTo(User, {
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
module.exports = { User, Gym };
