import "reflect-metadata"
import express from "express" 

const app = express();

app.listen(3000, () => console.log("app rodando na porta 3000"))