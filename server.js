import express, { request, response } from "express";
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const app = express();
app.use(express.json());

// Mandar dados para o banco
app.post("/user", async (req, res) => {
  await prisma.user.create({
    data:{
      email: req.body.email,
      name: req.body.name,
      age: req.body.age
    }
  })

  res.status(201).json(req.body);
});
// Pega os dados do Banco e listar
app.get("/user", async (req, res) => {

let users = []
if(req.query){
  users = await prisma.user.findMany({
    where:{
      name: req.query.name
    }
  })
} else {
  users = await prisma.user.findMany()
}
    res.status(200).json(users);
});
//Mandar uma atualização para o banco de dados
app.put("/user/:id", async (req, res) => {
  await prisma.user.update({
    where: {
      id: req.params.id
    },
    data:{
      email: req.body.email,
      name: req.body.name,
      age: req.body.age
    }
  })
  res.status(201).json(req.body);
});

//deletar uma linha no banco de dados
app.delete('/user/:id', async (req, res) => {
  await prisma.user.delete({
    where: {
      id: req.params.id
    }
  })
  res.status(200).json({message: 'Deletado com sucesso'})
  
}) 


app.listen(3000);

//Mandar, pegar, atualizar e deletar [CRUD]