import { Application, Router } from "express";
import resourceController from "../controllers/resource.controller";

const resourceRoutes = (app: Application) => {
  const router = Router();
  router.post("/", resourceController.create);
  router.get("/", resourceController.getAll);
  router.get("/:id", resourceController.getById);
  router.patch("/:id", resourceController.updateById);
  router.delete("/:id", resourceController.deleteById);
  app.use("/api/resources", router);
};

export default resourceRoutes;
