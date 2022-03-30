import { DetalhesModel } from "./detalhes";
import { EditarModel } from "./editar";

export interface Model {
  id: string,
  nome: string,
  //dataNascimento: Date,
  cpf: string,
  email: string,
  ativoInativo: string,
  detalhesModel: DetalhesModel[],
  editarModel: EditarModel[],
}
