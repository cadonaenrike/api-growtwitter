import { NextFunction, Request, Response } from "express";

import usuarioService from "../services/usuario.service";

async function validaTokenMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { token } = req.headers;

    if (!token) {
      return res.status(401).send({
        message: "Falha na autenticação de Token (Token não informado)",
      });
    }

    const user = await usuarioService.TrazToken(token as string);

    if (!user) {
      return res.status(401).send({
        message: "Falha na autenticação de Token! (Token Invalido) ",
      });
    }

    next();
  } catch (error) {
    return res.status(500).send({
      message: error,
    });
  }
}

export default validaTokenMiddleware;
