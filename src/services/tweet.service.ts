import repository from "../database/prisma.database";
import { ResponseDto } from "../dtos/response.dto";
import { CriaTweetDto, AtualizaTweetDto } from "../dtos/tweet.dto";
import { Tweet } from "../models/tweet.model";

class TweetService {
  public async listAll(): Promise<ResponseDto> {
    const data = await repository.tweet.findMany({
      include: {
        Like: true,
        Retweet: true,
      },
    });

    return {
      code: 200,
      message: "Tweets listados com sucesso",
      data,
    };
  }

  public async create(data: CriaTweetDto) {
    const tweet = new Tweet(data.id_usuario, data.conteudo);

    const criaTweet = await repository.tweet.create({
      data: {
        id_usuario: tweet.id_usuario,
        conteudo: tweet.conteudo,
        id_tweet: tweet.id_tweet,
      },
    });

    return criaTweet;
  }

  public async update(data: AtualizaTweetDto): Promise<ResponseDto> {
    const tweet = await repository.tweet.findUnique({
      where: {
        id_tweet: data.id_tweet,
        id_usuario: data.id_usuario,
      },
    });

    if (!tweet) {
      return {
        code: 404,
        message: "Tweet não encontrado",
      };
    }

    const atualizaTweet = await repository.tweet.update({
      where: {
        id_tweet: data.id_tweet,
        id_usuario: data.id_usuario,
      },
      data: {
        conteudo: data.conteudo,
      },
    });

    return {
      code: 200,
      message: "Tweet atualizado com sucesso!",
      data: atualizaTweet,
    };
  }

  public async delete(
    id_tweet: string,
    id_usuario: string
  ): Promise<ResponseDto> {
    const tweet = await repository.tweet.findUnique({
      where: {
        id_tweet,
        id_usuario,
      },
    });

    if (!tweet) {
      return {
        code: 404,
        message: "Tweet não encontrado",
      };
    }

    await repository.tweet.delete({
      where: {
        id_tweet,
        id_usuario,
      },
    });

    return {
      code: 200,
      message: "Tweet excluído com sucesso!",
    };
  }
}

export default new TweetService();
