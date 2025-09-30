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
