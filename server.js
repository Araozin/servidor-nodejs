import express, { request, response } from "express";

const app = express();
app.use(express.json());

const users = [];

app.post("/user", (req, res) => {
  users.push(req.body);

  res.status(201).json(req.body);
});

app.get("/user", (req, res) => {
  res.json(users)
  
    res.status(200);
});

app.listen(3000);
// Criar nossa api de users
// listar users
// Listar users
