const router = require('express').Router();
const userRoutes = require('Develop/server/routes/api/user-routes');

router.use('/users', userRoutes);

module.exports = router;
