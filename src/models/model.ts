import { DetalhesModel } from "./detalhes-model";

export interface Model {
  id: string,
  nome: string,
  //dataNascimento: Date,
  cpf: string,
  email: string,
  ativoInativo: string,
  detalhesModel: DetalhesModel[],
}
