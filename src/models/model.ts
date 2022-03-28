import { DetalhesModel } from "./detalhes-model";

export interface Model {
  idModel: string,
  nome: string,
  //dataNascimento: Date,
  cpf: string,
  email: string,
  detalhesModel: DetalhesModel[],
}
