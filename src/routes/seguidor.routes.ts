import { Router } from "express";
import { SeguidorController } from "../controllers/seguidor.controller";
import validaTokenMiddleware from "../middlewares/validaToken.middleware";

export const SeguidorRoutes = () => {
  const router = Router();
  const controller = new SeguidorController();

  router.get("/", validaTokenMiddleware, controller.listarTodos);
  router.post("/seguir", controller.seguir);
  router.post(
    "/deixar-de-seguir",
    validaTokenMiddleware,
    controller.deixarDeSeguir
  );

  return router;
};
