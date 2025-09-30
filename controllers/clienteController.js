const Cliente = require("../models/Cliente");

// Listar todos
exports.index = async (req, res) => {
  const clientes = await Cliente.findAll(); 
  res.render("cliente/index", {clientes});
};

exports.save = async (req, res) => {

  const { nome, cpf, email} = req.body;

  await Cliente.create({ nome, cpf, email });

  res.redirect("/clientes");
};

exports.new = (req, res) => {
  
  res.render("cliente/new");
};

exports.edit = async (req, res) => {
  const cliente = await Cliente.findByPk(req.params.id);
  res.render("cliente/edit", { cliente });
};

exports.update = async (req, res) => {
  const {nome, cpf, email } = req.body;
  await Cliente.update({ nome, cpf, email }, {
    where: { id: req.params.id }
  });
  res.redirect("/clientes");
};

exports.delete = async (req, res) => {
  await Cliente.destroy({ where: { id: req.params.id }});
  res.redirect("/clientes");
};
