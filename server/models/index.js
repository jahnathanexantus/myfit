const User = require('./User');
const Gym = require('./Gym');


User.hasOne(Gym,{
    foreignKey: "advocate_id",
    onDelete: 'CASCADE',
})



Gym.belongsTo(User,{
    foreignKey:"advocate_id",

})


module.exports = {Advocate,Inventory}