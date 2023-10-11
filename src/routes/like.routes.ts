import express from "express";
import { LikeController } from "../controllers/like.controller"; // Certifique-se de importar o controlador correto

export const LikeRoutes = () => {
  const router = express.Router();
  const likeController = new LikeController();

  // Rota para listar todos os likes
  router.get("/", likeController.listAll);

  // Rota para criar um like
  router.post("/", likeController.create);

  // Rota para excluir um like
  router.delete("/:id_like/:id_usuario", likeController.delete);

  return router;
};
