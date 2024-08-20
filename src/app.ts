import express from "express";
import morgan from "morgan";
import cors from "cors";
import userRouter from "./routes/userRoute";
import productRouter from "./routes/productsRoute";
import categoryRouter from "./routes/categoriesRoute";
import { errorHandler } from "./middlewares/errorHandler";
import sizesRouter from "./routes/sizeRoute";
import combinationRouter from "./routes/combinationRoute";

const app = express();

app.use(morgan("dev"));
app.use(express.json());

// Configuración de CORS para aceptar peticiones de cualquier origen
app.use(cors({
  origin: '*',  // Permite todos los orígenes
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: false,  // Desactiva el envío de cookies con la solicitud
}));

app.use("/api", userRouter);
app.use("/api", productRouter);
app.use("/api", categoryRouter);
app.use("/api", sizesRouter);
app.use("/api", combinationRouter);
app.use(errorHandler);

export default app;
