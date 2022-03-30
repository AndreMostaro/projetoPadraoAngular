
import { ModelService } from 'src/services/model.service';

import { Component, OnInit } from '@angular/core';
import { DetalhesModel } from 'src/models/detalhes';
import { EditarModel } from 'src/models/editar';
import { MockDetalhes } from './mock-data-detalhes';
import { Model } from 'src/models/model';

@Component({
  selector: 'app-listar-todos',
  templateUrl: './listar-todos.component.html',
  styleUrls: ['./listar-todos.component.scss']
})
export class ListarTodosComponent implements OnInit {

  submitted = false;
  detalhesDialog = false;
  editarDialog = false;

  id: string = "";
  //modelObject: Model | any;

  modelList: Model[] = [];
  modelDetalhesList: DetalhesModel[] = [];
  modelEditarList: EditarModel[] = [];

  constructor(private modelService: ModelService) {}

  ngOnInit(): void {
    this.modelService.listarTodosModel().toPromise().then((res: any) => {
      this.modelList = res as Model[];
      this.modelList.forEach((model) => {
        //model.valorCotacao = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(model.valorCotacao);
        //model.margemDisponivel = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(model.margemDisponivel);
      });
    });
  }

  openDetalhesDialog(model: Model): void {
    this.modelDetalhesList = model.detalhesModel;
    this.detalhesDialog = true;
  }

  hideDetalhesDialog(): void {
    this.detalhesDialog = false;
  }

  openEditarDialog(model: Model): void {
    this.modelEditarList = model.editarModel;
    this.editarDialog = true;
  }

  hideEditarDialog(): void {
    this.editarDialog = false;
  }

  deleteDeletarModel(): void {
    this.modelService.deletarPorIdModel(this.id);
  }

  putAtivarModel(): void {
    this.modelService.ativarPorIdModel(this.id);
  }

}
