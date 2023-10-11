import repository from "../database/prisma.database";
import { ResponseDto } from "../dtos/response.dto";
import { Like } from "../models/like.model"; // Certifique-se de importar a classe correta do modelo Like

class LikeService {
  public async listAll(): Promise<ResponseDto> {
    const data = await repository.like.findMany();

    return {
      code: 200,
      message: "Likes listados com sucesso",
      data,
    };
  }

  public async create(data: Like): Promise<ResponseDto> {
    const criaLike = await repository.like.create({
      data: {
        id_like: data.id_like,
        id_usuario: data.id_usuario,
        id_tweet: data.id_tweet,
      },
    });

    return {
      code: 200,
      message: "Like criado com sucesso!",
      data: criaLike,
    };
  }

  public async delete(
    id_like: string,
    id_usuario: string
  ): Promise<ResponseDto> {
    const like = await repository.like.findUnique({
      where: {
        id_like,
        id_usuario,
      },
    });

    if (!like) {
      return {
        code: 404,
        message: "Like não encontrado",
      };
    }

    await repository.like.delete({
      where: {
        id_like,
        id_usuario,
      },
    });

    return {
      code: 200,
      message: "Like excluído com sucesso!",
    };
  }
}

export default new LikeService();
