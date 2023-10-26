import { Request, Response } from "express";
import tweetService from "../services/tweet.service";
import { stringify } from "uuid";

export class TweetController {
  public async listAll(req: Request, res: Response) {
    const { usuario_id } = req.query;
    const usuarioIdString: string = usuario_id as string;
    const result = await tweetService.listAll(usuarioIdString);
    return res.status(result.code).send(result);
  }

  public async create(req: Request, res: Response) {
    try {
      const { id_usuario, conteudo } = req.body;

      const result = await tweetService.create({ id_usuario, conteudo });

      return res.status(201).send({
        ok: true,
        message: "Tweet criado com sucesso!",
        data: result,
      });
    } catch (error: any) {
      res.status(500).send({
        ok: false,
        message: error.toString(),
      });
    }
  }

  public async update(req: Request, res: Response) {
    try {
      const { id_tweet, id_usuario, conteudo } = req.body;

      const result = await tweetService.update({
        id_tweet,
        id_usuario,
        conteudo,
      });

      return res.status(result.code).send(result);
    } catch (error: any) {
      res.status(500).send({
        ok: false,
        message: error.toString(),
      });
    }
  }

  public async delete(req: Request, res: Response) {
    try {
      const { id_tweet, id_usuario } = req.params;

      const result = await tweetService.delete(id_tweet, id_usuario);

      return res.status(result.code).send(result);
    } catch (error: any) {
      res.status(500).send({
        ok: false,
        message: error.toString(),
      });
    }
  }
}
