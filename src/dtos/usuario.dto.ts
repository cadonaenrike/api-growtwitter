export interface CriaUsuarioDto {
  nome: string;
  email: string;
  username: string;
  senha: string;
}

export interface AtualizaUsuarioDto {
  id_usuario: string;
  nome: string;
  username: string;
  email: string;
  senha: string;
  token?: string | null;
}
