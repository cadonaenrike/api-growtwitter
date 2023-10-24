import express, { Request, Response } from "express";
import cors from "cors";
import { UsuarioRoutes } from "./routes/usuario.routes";
import { ResponseDto } from "./dtos/response.dto";
import { authRoutes } from "./routes/auth.routes";
import { TweetRoutes } from "./routes/tweet.routes";
import { SeguidorRoutes } from "./routes/seguidor.routes";
import { LikeRoutes } from "./routes/like.routes";
import { RetweetRoutes } from "./routes/retweet.routes";

const app = express();
app.use(express.json());
app.use(cors());

app.use("/usuario", UsuarioRoutes());
app.use("/auth", authRoutes());
app.use("/twitter", TweetRoutes());
app.use("/seguidor", SeguidorRoutes());
app.use("/like", LikeRoutes());
app.use("/retweet", RetweetRoutes());
app.listen(3333, () => {
  console.log("API está rodando na porta 3333");
});

app.get("/", (req: Request, res: Response) => {
  const response: ResponseDto = {
    code: 200,
    message: "API esta rodando passe a rota desejada!",
  };

  return res.status(response.code).send(response);
});
