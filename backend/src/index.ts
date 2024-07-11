import { app, server } from "./middlewares/server";
import express from "express";
import "express-async-errors";
import "./middlewares/socket";
import userRouter from "./routes/userRoutes";
import therapistRouter from "./routes/therapistRoutes";
import callRouter from "./routes/callRoutes";
import cartRouter from "./routes/cartRoutes";
import transactionRouter from "./routes/transactionRoutes";
import errorHandler from "./middlewares/errorHandler";
const cors = require("cors");
import "dotenv/config";

const PORT = process.env.PORT || 3001;
const corsOptions = {
  origin: [
    "https://click-help.vercel.app",
    "http://localhost:5173",
    "https://clickhelp.org",
    "https://clickhelp-sandbox.vercel.app",
  ],
};

app.use(express.json());
app.use(cors(corsOptions));

app.use("/user", userRouter);
app.use("/therapist", therapistRouter);
app.use("/call", callRouter);
app.use("/cart", cartRouter);
app.use("/transactions", transactionRouter);

// pasta estática de imagens
app.use("/uploads", express.static("./uploads"));
app.use(errorHandler);

server.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}!`);
});