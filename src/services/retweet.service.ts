import repository from "../database/prisma.database";
import { ResponseDto } from "../dtos/response.dto";
import { CriaRetweetDto, AtualizaRetweetDto } from "../dtos/retweet.dto";
import { Retweet } from "../models/retweet.model";

class RetweetService {
  public async listAll(): Promise<ResponseDto> {
    const data = await repository.retweet.findMany({
      include: {
        Tweet: true,
      },
    });
    return {
      code: 200,
      message: "Retweets listados com sucesso",
      data,
    };
  }

  public async create(data: CriaRetweetDto) {
    const retweet = new Retweet(
      data.id_tweet,
      data.id_usuario,
      data.conteudo || ""
    );

    const criaRetweet = await repository.retweet.create({
      data: {
        id_retweet: retweet.id_retweet,
        id_tweet: retweet.id_tweet,
        id_usuario: retweet.id_usuario,
        conteudo: retweet.conteudo,
      },
    });

    return criaRetweet;
  }

  public async update(data: AtualizaRetweetDto): Promise<ResponseDto> {
    const retweet = await repository.retweet.findUnique({
      where: {
        id_retweet: data.id_retweet,
        id_tweet: data.id_tweet,
        id_usuario: data.id_usuario,
      },
    });

    if (!retweet) {
      return {
        code: 404,
        message: "Retweet não encontrado",
      };
    }

    const atualizaRetweet = await repository.retweet.update({
      where: {
        id_retweet: data.id_retweet,
      },
      data: {
        conteudo: data.conteudo,
      },
    });

    return {
      code: 200,
      message: "Retweet atualizado com sucesso!",
      data: atualizaRetweet,
    };
  }

  public async delete(
    id_retweet: string,
    id_usuario: string
  ): Promise<ResponseDto> {
    const retweet = await repository.retweet.findUnique({
      where: {
        id_retweet,
        id_usuario,
      },
    });

    if (!retweet) {
      return {
        code: 404,
        message: "Retweet não encontrado",
      };
    }

    await repository.retweet.delete({
      where: {
        id_retweet,
      },
    });

    return {
      code: 200,
      message: "Retweet excluído com sucesso!",
    };
  }
}

export default new RetweetService();
