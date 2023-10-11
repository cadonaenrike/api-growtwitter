import { Request, Response } from "express";
import usuarioService from "../services/usuario.service";

export class UsuarioController {
  public async list(req: Request, res: Response) {
    const result = await usuarioService.listandoTodos();

    return res.status(result.code).send(result);
  }

  public async create(req: Request, res: Response) {
    try {
      const { nome, email, username, senha } = req.body;

      const result = await usuarioService.create({
        nome,
        email,
        username,
        senha,
      });
      if (result != null) {
        return res.status(201).send({
          ok: true,
          message: "Usuario criado com sucesso!",
          data: result,
        });
      } else {
        res.status(500).send({
          ok: false,
          message: "Username ja esta em uso tente outro!",
        });
      }
    } catch (error: any) {
      res.status(500).send({
        ok: false,
        message: error.toString(),
      });
    }
  }

  public async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const result = await usuarioService.delete(id);

      return res.status(result.code).send(result);
    } catch (error: any) {
      res.status(500).send({
        ok: false,
        message: error.toString(),
      });
    }
  }

  public async update(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { nome, email, username, senha } = req.body;

      const result = await usuarioService.update({
        id_usuario: id,
        nome,
        email,
        username,
        senha,
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
