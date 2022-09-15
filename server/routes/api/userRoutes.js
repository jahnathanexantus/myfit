// create router express
const router = require('express').Router();
// get user model
const {User,Gym} = require('../../models');





// create "get" all route
router.get("/", async (req,res) => {
    try{
        const userData = await User.findAll({
          include:[{model:Gym}]
        })
        res.status(200).json(userData)
      
    }catch(err){
        res.status(400).json(err)
    }
    
});
router.get("/:id", async (req,res) => {
  try{
      const userData = await User.findByPk(req.params.id,{
        include:[{model:Gym}]
      });

      if(!userData){
        res.status(404).json({message:"there's no user found with that id"});
        return
      }
      res.status(200).json(userData)
      
  }catch(err){
      res.status(400).json(err)
  }
  
});

// create "post" route
router.post("/", async (req,res)=>{
  
    try{
        const userData = await User.create(req.body)
        
        res.status(200).json(userData)
        
    }catch(err){
      
        res.status(400).json(err)
        
    }
});

// create "delete" route
router.delete("/:id", async (req,res)=>{
    try{
        const userData = await User.destroy({
            where: {id: req.params.id}
        })
        res.status(200).json(userData)
    }catch(err){res.status(400).json(err)}
});

// create "update" route
router.put('/:id', async (req, res) => {
    try {
      const userData = await User.update(req.body, {
        where: {
          id: req.params.id,
        },
      });
      if (!userData[0]) {
        res.status(404).json({ message: 'No Advocate with this id!' });
        return;
      }
      res.status(200).json(userData);
    } catch (err) {
      res.status(400).json(err);
    }
  });

  module.exports = router;