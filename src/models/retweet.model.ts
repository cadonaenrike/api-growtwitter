import { v4 as createUuid } from "uuid";
export class Retweet {
  private _id_retweet: string;
  private _id_tweet: string;
  private _id_usuario: string;
  private _conteudo: string;

  constructor(id_tweet: string, id_usuario: string, conteudo: string = "") {
    this._id_retweet = createUuid();
    this._id_tweet = id_tweet;
    this._id_usuario = id_usuario;
    this._conteudo = conteudo;
  }

  public get id_retweet() {
    return this._id_retweet;
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
      id_retweet: this._id_retweet,
      id_tweet: this._id_tweet,
      id_usuario: this._id_usuario,
      conteudo: this._conteudo,
    };
  }
}
