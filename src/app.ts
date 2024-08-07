import express from "express";
import userRouter from "./routes/userRoute";
import productRouter from "./routes/productsRoute";
import { errorHandler } from "./middlewares/errorHandler";

const app = express();

app.use(express.json());
app.use("/api", userRouter);
app.use("/api", productRouter);

app.use(errorHandler);

export default app;
