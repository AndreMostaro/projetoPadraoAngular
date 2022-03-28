import { MessageService } from 'primeng/api';
import { ModelService } from 'src/services/model.service';
import { Component, OnInit } from '@angular/core';
import { Model } from 'src/models/model';

@Component({
  selector: 'app-listar-id',
  templateUrl: './listar-id.component.html',
  styleUrls: ['./listar-id.component.scss']
})
export class ListarIdComponent implements OnInit {

  submitted = false;
  isClosed = true;

  id: string = "";
  modelObject: Model | any;

  constructor(private modelService: ModelService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.clearModel();
  }

  getListarPorIdModel(): void {
    if (this.id) {
      this.modelService.listarPorIdModel(this.id).toPromise().then((res) => {
        this.modelObject = res;
        this.modelObject.id = res.id;
        this.modelObject.nome = res.nome;
        //this.modelObject.dataNascimento = new Date(res.dataNascimento);
        this.modelObject.cpf = res.cpf;
        this.modelObject.email = res.email;
        this.modelObject.ativoInativo = res.ativoInativo;
      }).catch((error) => {
        this.clearModel();
        if (error.status == 404) {
          this.messageService.add({severity: 'warn', summary: 'Atenção!', detail: 'ID não existe na base de dados.', life: 10000});
        } else if (error.status == 500) {
          this.messageService.add({severity: 'error', summary: 'Erro!', detail: 'Erro interno. Entre em contato com o administrador.', life: 10000});
        }
      })
    }
  }


  clearModel(): void {
    this.isClosed = true;

    this.modelObject = {
      id: undefined,
      nome: undefined,
      cpf: undefined,
      //dataNascimento: undefined,
      email: undefined,
      ativoInativo: undefined
      }
  }

  searchModel(): void {
    this.submitted = true;
    this.clearModel();
    this.getListarPorIdModel();

    this.isClosed = false;

  }

}
