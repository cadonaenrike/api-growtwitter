import { Prisma } from "@prisma/client";

export interface Seguidor {
  id_usuario_segue: string;
  id_usuario_seguido: string;
}

export type CriaSeguidorDto = Prisma.SeguidorCreateInput;
export type AtualizaSeguidorDto = Prisma.SeguidorUpdateInput;
