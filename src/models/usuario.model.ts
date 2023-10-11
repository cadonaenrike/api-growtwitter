import { v4 as createUuid } from "uuid";
import { Tweet } from "./tweet.model";

export class Usuario {
  private id_usuario: string;

  constructor(
    private _nome: string,
    private _email: string,
    private _username: string,
    private _senha: string
  ) {
    this.id_usuario = createUuid();
  }

  public get id() {
    return this.id_usuario;
  }

  public get nome() {
    return this._nome;
  }

  public get email() {
    return this._email;
  }

  public get username() {
    return this._username;
  }

  public get senha() {
    return this._senha;
  }

  public toJson() {
    return {
      id: this.id_usuario,
      nome: this._nome,
      email: this._email,
      username: this._username,
      senha: this._senha,
    };
  }
}
