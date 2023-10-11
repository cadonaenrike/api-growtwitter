export interface CriaRetweetDto {
  id_tweet: string;
  id_usuario: string;
  conteudo?: string;
}

export interface AtualizaRetweetDto {
  id_retweet: string;
  id_tweet: string;
  id_usuario: string;
  conteudo: string;
}
