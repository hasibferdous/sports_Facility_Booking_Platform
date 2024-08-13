import cors from "cors";
import express, { Application, Request, Response } from "express";
import globalErrorhandler from "./app/middlewares/globalErrorhandler";
import notFound from "./app/middlewares/notFound";
import router from "./app/routes";

const app: Application = express();

//parsers
app.use(express.json());
app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.send("Sports Facility Booking Server is running successfully !");
});

// application routes
app.use("/api", router);

// Global Error handler middleware
app.use(globalErrorhandler);

// Not found middleware
app.use(notFound);

export default app;
