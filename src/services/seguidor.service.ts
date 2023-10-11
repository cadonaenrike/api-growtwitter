import repository from "../database/prisma.database";
import { ResponseDto } from "../dtos/response.dto";
import { CriaSeguidorDto, AtualizaSeguidorDto } from "../dtos/seguidor.dto";

class SeguidorService {
  public async listAll(): Promise<ResponseDto> {
    const data = await repository.seguidor.findMany({
      include: {
        seguindo: {
          include: {
            seguindo: true, // Inclui os usuários seguidos pelos seguidores
          },
        },
        seguidores: {
          include: {
            seguidores: true, // Inclui os seguidores dos usuários seguidos
          },
        },
      },
    });
    return {
      code: 200,
      message: "Seguidores listados com sucesso",
      data,
    };
  }

  public async seguir(data: CriaSeguidorDto): Promise<ResponseDto> {
    const { id_usuario_segue, id_usuario_seguido } = data;

    const seguidor = await repository.seguidor.create({
      data: {
        id_usuario_segue,
        id_usuario_seguido,
      },
    });

    return {
      code: 201,
      message: "Usuário seguido com sucesso!",
      data: seguidor,
    };
  }

  public async deixarDeSeguir(data: AtualizaSeguidorDto): Promise<ResponseDto> {
    const { id_usuario_segue, id_usuario_seguido } = data;

    const seguidor = await repository.seguidor.findFirst({
      where: {
        id_usuario_segue,
        id_usuario_seguido,
      },
    });

    if (!seguidor) {
      return {
        code: 404,
        message: "Você não está seguindo esse usuário",
      };
    }

    await repository.seguidor.deleteMany({
      where: {
        id_usuario_segue,
        id_usuario_seguido,
      },
    });

    return {
      code: 200,
      message: "Deixou de seguir o usuário com sucesso!",
    };
  }
}

export default new SeguidorService();
