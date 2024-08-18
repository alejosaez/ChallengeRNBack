import express from "express";
import morgan from "morgan";
import userRouter from "./routes/userRoute";
import productRouter from "./routes/productsRoute";
import categoryRouter from "./routes/categoriesRoute";
import { errorHandler } from "./middlewares/errorHandler";
import sizesRouter from "./routes/sizeRoute";

const app = express();

app.use(morgan("dev"));
app.use(express.json());

app.use("/api", userRouter);
app.use("/api", productRouter);
app.use("/api", categoryRouter);
app.use("/api", sizesRouter);

app.use(errorHandler);

export default app;
