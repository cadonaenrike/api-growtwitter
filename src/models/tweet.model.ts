import { v4 as createUuid } from "uuid";

export class Tweet {
  private _id_tweet: string;
  private _conteudo: string;

  constructor(private _id_usuario: string, conteudo: string) {
    this._id_tweet = createUuid();
    this._conteudo = conteudo;
  }

  public get id_tweet() {
    return this._id_tweet;
  }

  public get id_usuario() {
    return this._id_usuario;
  }

  public get conteudo() {
    return this._conteudo;
  }

  public toJson() {
    return {
      id_tweet: this._id_tweet,
      id_usuario: this._id_usuario,
      conteudo: this._conteudo,
    };
  }
}
