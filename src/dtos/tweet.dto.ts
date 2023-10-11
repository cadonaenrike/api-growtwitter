export interface CriaTweetDto {
  id_usuario: string;
  conteudo: string;
}

export interface AtualizaTweetDto {
  id_tweet: string;
  id_usuario: string;
  conteudo: string;
}
