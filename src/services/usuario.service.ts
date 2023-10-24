import repository from "../database/prisma.database";
import { ResponseDto } from "../dtos/response.dto";
import { AtualizaUsuarioDto, CriaUsuarioDto } from "../dtos/usuario.dto";
import { Usuario } from "../models/usuario.model";
import * as bcrypt from "bcrypt";

class UsuarioService {
  // traz todos usuarios e seus tweet e seguidores e quem segue
  public async listandoTodos(): Promise<ResponseDto> {
    const data = await repository.usuario.findMany({
      include: {
        Tweet: true,
        seguidores: {
          include: {
            seguidores: true,
          },
        },
        seguindo: {
          include: {
            seguindo: true,
          },
        },
      },
    });

    return {
      code: 200,
      message: "Usuarios listados com sucesso",
      data,
    };
  }

  public async TrazNomeSenha(username: string, senha: string) {
    const usuario = await repository.usuario.findUnique({
      where: {
        username: username,
      },
    });
    const validasenha = await bcrypt.compare(usuario!.senha, senha);
    if (!validasenha) {
      return usuario;
    } else {
      return false;
    }
  }

  public async TrazToken(token: string) {
    const user = await repository.usuario.findUnique({
      where: {
        token: token,
      },
    });

    return user;
  }

  public async create(data: CriaUsuarioDto) {
    const usuario = new Usuario(
      data.nome,
      data.email,
      data.username,
      data.senha
    );

    const verificaUsername = await repository.usuario.findUnique({
      where: {
        username: data.username,
      },
    });

    if (verificaUsername) {
      return {
        code: 400,
        message: "Usuário já existe!",
      };
    } else {
      const senhaHash = await bcrypt.hash(data.senha, 10);

      const criaUsuario = await repository.usuario.create({
        data: {
          nome: usuario.nome,
          email: usuario.email,
          username: usuario.username,
          senha: senhaHash,
          id_usuario: usuario.id,
        },
      });

      return criaUsuario;
    }
  }

  public async delete(id_usuario: string): Promise<ResponseDto> {
    // 1- verificar se usuario existe
    const usuario = await repository.usuario.findUnique({
      where: {
        id_usuario,
      },
    });

    if (!usuario) {
      return {
        code: 404,
        message: "usuario nâo encontrado",
      };
    }

    // 2- deletar o usuario
    await repository.usuario.delete({
      where: {
        id_usuario,
      },
    });

    return {
      code: 200,
      message: "Usuario Excluido com sucesso!",
    };
  }

  public async update(data: AtualizaUsuarioDto): Promise<ResponseDto> {
    const usuario = await repository.usuario.findUnique({
      where: {
        id_usuario: data.id_usuario,
      },
    });

    if (!usuario) {
      return {
        code: 404,
        message: "Usuario não Encontrado",
      };
    }

    const senhaHash = await bcrypt.hash(data.senha, 10);

    const atualizaUsuario = await repository.usuario.update({
      where: {
        id_usuario: data.id_usuario,
      },

      data: {
        nome: data.nome,
        email: data.email,
        username: data.username,
        senha: senhaHash,
        token: data.token,
      },
    });

    return {
      code: 200,
      message: "Usuario Atualizado com sucesso!",
      data: atualizaUsuario,
    };
  }
}

export default new UsuarioService();
