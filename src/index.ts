import express from "express";
import dotenv from "dotenv";
import router from "./routers/router";

dotenv.config();

const app = express();
const PORTA = process.env.PORT;
app.use(express.json());
app.use("/api", router);

app.listen(PORTA, () => {
  console.log(`Servidor em execução na porta: ${PORTA}`);
});
