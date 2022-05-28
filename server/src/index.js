const express = require("express");
const app = express();
const Usercontroller = require("./controllers/user.controller")
const {register, login} = require("./controllers/auth.controller");
const productCntroller = require("./controllers/product.controller");
app.use(express.json());


app.use("/users", Usercontroller)

app.post("/register",register);
app.get('/register', register)

app.post("/login", login);
app.get('/login', login)
app.use("/products", productCntroller)
module.exports = app;