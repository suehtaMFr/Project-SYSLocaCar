import express from 'express'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const PORTA = process.env.PORT
app.use(express.json())

app.listen(PORTA, ()=>{
    console.log(`Servidor em execução na porta: ${PORTA}`)
})

console.log("Olá, mundo!");

const soma = (a: number, b: number): number => a + b;

console.log(soma(1, 2));
