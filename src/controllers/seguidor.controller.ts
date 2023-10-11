import { Request, Response } from "express";
import SeguidorService from "../services/seguidor.service";

export class SeguidorController {
  public async listarTodos(req: Request, res: Response) {
    const result = await SeguidorService.listAll();

    return res.status(result.code).send(result);
  }

  public async seguir(req: Request, res: Response) {
    try {
      const { id_paraSeguir, id_deQuemVaiSeguir } = req.body;

      const result = await SeguidorService.seguir({
        id_usuario_segue: id_paraSeguir,
        id_usuario_seguido: id_deQuemVaiSeguir,
      });

      return res.status(result.code).send(result);
    } catch (error: any) {
      res.status(500).send({
        ok: false,
        message: error.toString(),
      });
    }
  }

  public async deixarDeSeguir(req: Request, res: Response) {
    try {
      const { id_usuarioQueSegue, id_usuarioVaiDeixarDeseguir } = req.body;

      const result = await SeguidorService.deixarDeSeguir({
        id_usuario_segue: id_usuarioQueSegue,
        id_usuario_seguido: id_usuarioVaiDeixarDeseguir,
      });

      return res.status(result.code).send(result);
    } catch (error: any) {
      res.status(500).send({
        ok: false,
        message: error.toString(),
      });
    }
  }
}
