const User = require('./User');
const Gym = require('./Gym');


User.hasOne(Gym,{
    foreignKey: "user_id",
    onDelete: 'CASCADE',
})



Gym.belongsTo(User,{
    foreignKey:"user_id",

})


module.exports = {User,Gym}