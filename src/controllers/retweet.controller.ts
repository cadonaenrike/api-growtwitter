import { Request, Response } from "express";
import RetweetService from "../services/retweet.service";
import { CriaRetweetDto, AtualizaRetweetDto } from "../dtos/retweet.dto";
import retweetService from "../services/retweet.service";
import { TweetDto } from "../dtos/tweet.dto";

export class RetweetController {
  public async listAll(req: Request, res: Response) {
    const result = await retweetService.listAll();
    return res.status(result.code).send(result);
  }
  public async listByIdTwitter(req: Request, res: Response) {
    try {
      const response = await RetweetService.listByIdTwitte(req.params.id_tweet);
      return res.status(201).json({
        ok: true,
        message: "Retweet encontrado com sucesso!",
        data: response,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        ok: false,
        message: "Erro ao encontrar o Tweet",
        data: null,
      });
    }
  }

  public async create(req: Request, res: Response) {
    try {
      const data: CriaRetweetDto = req.body;
      console.log(data);
      const response = await RetweetService.create({
        id_tweet: data.id_tweet,
        id_usuario: req.body.id_usuario,
        conteudo: data.conteudo,
      });
      return res.status(201).json({
        ok: true,
        message: "Retweet criado com sucesso!",
        data: response,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        ok: false,
        message: "Erro ao criar Retweet",
        data: null,
      });
    }
  }

  public async update(req: Request, res: Response) {
    try {
      const data: AtualizaRetweetDto = req.body;
      const response = await RetweetService.update(data);
      return res.status(200).json({
        ok: true,
        message: "Retweet atualizado com sucesso!",
        data: response.data,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        ok: false,
        message: "Erro ao atualizar Retweet",
        data: null,
      });
    }
  }

  public async delete(req: Request, res: Response) {
    try {
      const { id_retweet, id_usuario } = req.params;
      const response = await RetweetService.delete(id_retweet, id_usuario);
      return res.status(200).json({
        ok: true,
        message: "Retweet excluído com sucesso!",
        data: response.data,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        ok: false,
        message: "Erro ao excluir Retweet",
        data: null,
      });
    }
  }
}
