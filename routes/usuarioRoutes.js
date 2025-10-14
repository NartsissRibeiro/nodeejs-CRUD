const express = require("express");
const router = express.Router();
const usuarioController = require("../controllers/usuarioController.js");

router.get("/usuarios", usuarioController.index);
router.get("/usuarios/new", usuarioController.new);
router.post("/usuarios", usuarioController.save);
router.get("/usuarios/edit/:id", usuarioController.edit);
router.post("/usuarios/update/:id", usuarioController.update);
router.get("/usuarios/delete/:id", usuarioController.delete);

//login
router.get("/login", usuarioController.loginForm);
router.post("/login", usuarioController.login);
router.get("/login", usuarioController.logout);


module.exports = router;
