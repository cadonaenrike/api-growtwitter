import { Router } from "express";
import { TweetController } from "../controllers/tweet.controller";
import validaTokenMiddleware from "../middlewares/validaToken.middleware";

export const TweetRoutes = () => {
  const router = Router();
  const tweetController = new TweetController();

  // Listar todos os tweets
  router.get("/", validaTokenMiddleware, tweetController.listAll);

  // Criar um novo tweet
  router.post("/", validaTokenMiddleware, tweetController.create);

  // Atualizar um tweet existente
  router.put("/", validaTokenMiddleware, tweetController.update);

  // Excluir um tweet
  router.delete(
    "/:id_tweet/:id_usuario",
    validaTokenMiddleware,
    tweetController.delete
  );

  return router;
};
