import { Router } from "express";
import validaTokenMiddleware from "../middlewares/validaToken.middleware";
import { RetweetController } from "../controllers/retweet.controller";

export const RetweetRoutes = () => {
  const router = Router();
  const retweetController = new RetweetController();

  // Listar todos os retweets
  router.get("/", validaTokenMiddleware, retweetController.listAll);

  // Criar um novo retweet
  router.post("/", validaTokenMiddleware, retweetController.create);

  // Atualizar um retweet existente
  router.put("/", validaTokenMiddleware, retweetController.update);

  // Excluir um retweet
  router.delete(
    "/:id_retweet/:id_usuario",
    validaTokenMiddleware,
    retweetController.delete
  );

  return router;
};
