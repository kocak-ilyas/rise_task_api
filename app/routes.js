const router = require("express/lib/router")();

const priorityController = require("./controllers/priorityController.js");

router.use((req, _res, next) => {
  req.connection.setNoDelay(true);
  next();
});

router.get("/get_priority", priorityController.index);

module.exports = router;
