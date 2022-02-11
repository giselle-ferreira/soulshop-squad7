const { Router } = require("express");
const produtosRoutes = require("./produtosRoutes");
const cuponsRoutes = require('./cuponsRoutes')
const router = Router();

router.get("/", (req, res) => {
  res.render("home");
});

router.use(produtosRoutes);
router.use(cuponsRoutes)

router.use((req, res, next) => {
  res.render("404");
});

module.exports = router;
