import { Router } from "express";

import userPasswordMiddleware from "../middlewares/user.password.middleware";
import validaTokenMiddleware from "../middlewares/validaToken.middleware";
import { UsuarioController } from "../controllers/usuario.controller";

export const UsuarioRoutes = () => {
  const router = Router();

  router.post("/", userPasswordMiddleware, new UsuarioController().create);

  router.get("/", validaTokenMiddleware, new UsuarioController().list);

  router.get("/getId", validaTokenMiddleware, new UsuarioController().listById);

  router.put("/:id", validaTokenMiddleware, new UsuarioController().update);

  router.delete("/:id", validaTokenMiddleware, new UsuarioController().delete);

  return router;
};
