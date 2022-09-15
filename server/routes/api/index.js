const router = require('express').Router();

const userRoutes = require('./userRoutes');
const gymRoutes = require('./gymRoutes');

router.use('/user', userRoutes);
router.use('/gym', gymRoutes);

module.exports = router;
