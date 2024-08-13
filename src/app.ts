import cors from "cors";
import express, { Application, Request, Response } from "express";
import globalErrorhandler from "./app/middlewares/globalErrorhandler";
import notFound from "./app/middlewares/notFound";

const app: Application = express();

//parsers
app.use(express.json());
app.use(cors());

const test = (req: Request, res: Response) => {
  const a = 10;
  res.send(a);
};

app.get("/", test);

// Global Error handler middleware
app.use(globalErrorhandler);

// Not found middleware
app.use(notFound);

export default app;
