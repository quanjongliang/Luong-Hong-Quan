import bodyParser from "body-parser";
import dotenv from "dotenv";
import express, { Express } from "express";
import { AppExceptionHandlerMiddleware } from "./middlewares";
import resourceRoutes from "./routes/resource.routes";
dotenv.config();

const app: Express = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
const port = process.env.PORT || 3000;
app.use(AppExceptionHandlerMiddleware);

resourceRoutes(app);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
