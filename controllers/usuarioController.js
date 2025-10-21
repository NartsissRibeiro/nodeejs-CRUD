const Usuario = require("../models/Usuario");

exports.index = async (req, res) => {
  const usuarios = await Usuario.findAll(); 
  res.render("usuario/index", {usuarios});
};

exports.save = async (req, res) => {

  const { nome, email, senha} = req.body;

  await Usuario.create({ nome, email, senha});

  res.redirect("/usuarios");
};

exports.new = (req, res) => {
  
  res.render("usuario/new");
};

exports.edit = async (req, res) => {
  const usuario = await Usuario.findByPk(req.params.id);
  res.render("usuario/edit", { usuario });
};

exports.update = async (req, res) => {
  const {nome, email, senha } = req.body;
  await Usuario.update({ nome, email, senha }, {
    where: { id: req.params.id }
  });
  res.redirect("/usuarios");
};

exports.delete = async (req, res) => {
  await Usuario.destroy({ where: { id: req.params.id }});
  res.redirect("/usuarios");
};

exports.loginForm = (req, res) => {
  res.render("usuario/login");
};

exports.login = async (req, res) => {
  const { email, senha } = req.body;
  const usuario = await Usuario.findOne({ where: { email }});

  if (!usuario) {
    return res.send("Usuário não encontrado!");
  }

  if (usuario.senha !== senha){
    return res.send("Senha incorreta!");
  }

  req.session.usuario = {
    id: usuario.id,
    nome: usuario.nome,
    email: usuario.email
  };

  res.redirect("/");
};

exports.logout = (req, res) => {
  req.session.destroy(() => {
    res.redirect("/login");
  });
};