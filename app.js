const express = require("express");
const session = require("express-session");
const app     = express();

const clienteRoutes = require("./routes/clienteRoutes");
const usuarioRoutes = require("./routes/usuarioRoutes");

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.use(session({
  secret: "segredo_super_secreto",
  resave: false,
  saveUnintialized: false

}
)
);

app.use((req, res, next) => {
  res.locals.usuariologado = req.session.usuario;
  next();
});

app.get("/", (req, res) => {
  res.render("index"); // Renderiza views/index.ejs
});

// Rotas
app.use("/", clienteRoutes);
app.use("/", usuarioRoutes);

app.listen(4000, () => console.log("Servidor rodando na porta 4000"));