const express = require("express");
const router = express.Router();
const usuarioController = require("../controllers/usuarioController.js");

const authMiddleware = require("../middlewares/authMiddleware");

router.get("/usuarios", authMiddleware, usuarioController.index);
router.get("/usuarios/new", authMiddleware, usuarioController.new);
router.post("/usuarios", authMiddleware, usuarioController.save);
router.get("/usuarios/edit/:id", authMiddleware, usuarioController.edit);
router.post("/usuarios/update/:id", authMiddleware, usuarioController.update);
router.get("/usuarios/delete/:id", authMiddleware, usuarioController.delete);

router.get("/login", usuarioController.loginForm);
router.post("/login", usuarioController.login);
router.get("/logout", usuarioController.logout);


module.exports = router;
