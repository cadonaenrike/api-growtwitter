import { v4 as createUuid } from "uuid";

export class Like {
  private _id_like: string;
  private _id_usuario: string;
  private _id_tweet: string;

  constructor(id_usuario: string, id_tweet: string) {
    this._id_usuario = id_usuario;
    this._id_tweet = id_tweet;
    this._id_like = createUuid();
  }

  public get id_like() {
    return this._id_like;
  }

  public get id_usuario() {
    return this._id_usuario;
  }

  public get id_tweet() {
    return this._id_tweet;
  }

  public toJson() {
    return {
      id_like: this._id_like,
      id_usuario: this._id_usuario,
      id_tweet: this._id_tweet,
    };
  }
}
