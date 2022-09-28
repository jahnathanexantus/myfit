const router = require('express').Router();

const userRoutes = require('./userRoutes');
const gymRoutes = require('./gymRoutes');
const imageRoutes = require('./imageRoutes');



router.use('/user', userRoutes);
router.use('/gym', gymRoutes);
router.use('/image',imageRoutes)


module.exports = router;
