import { Request, Response } from "express";
import likeService from "../services/like.service"; // Certifique-se de importar o serviço correto
import { Like } from "../models/like.model"; // Certifique-se de importar o modelo correto

export class LikeController {
  public async listAll(req: Request, res: Response) {
    const result = await likeService.listAll();
    console.log(result);
    return res.status(result.code).send(result);
  }

  public async create(req: Request, res: Response) {
    try {
      const { id_usuario, id_tweet } = req.body;

      const likeData = new Like(id_usuario, id_tweet);
      const result = await likeService.create(likeData);

      return res.status(201).send({
        ok: true,
        message: "Like criado com sucesso!",
        data: result,
      });
    } catch (error: any) {
      res.status(500).send({
        ok: false,
        message: error.toString(),
      });
    }
  }

  public async delete(req: Request, res: Response) {
    try {
      const { id_like, id_usuario } = req.params;

      const result = await likeService.delete(id_like, id_usuario);

      return res.status(result.code).send(result);
    } catch (error: any) {
      res.status(500).send({
        ok: false,
        message: error.toString(),
      });
    }
  }
}
