import { NextFunction, Request, Response } from "express";

function usernameSenhaValidaMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { username, senha } = req.body;

  if (!username || !senha) {
    return res.status(400).send({
      ok: false,
      message: "Username ou senha não encontrados!",
    });
  }

  next();
}

export default usernameSenhaValidaMiddleware;
