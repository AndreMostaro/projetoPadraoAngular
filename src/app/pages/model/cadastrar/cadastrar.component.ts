import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Model } from 'src/models/model';
import { ModelService } from 'src/services/model.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.scss']
})
export class CadastrarComponent implements OnInit {

  modelObject: Model | any;

  constructor(
    private modelService: ModelService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,

  ) { }

  ngOnInit(): void {
    this.clearModelObject();
  }

  clearModelObject(): void {
    this.modelObject = {
      nome: undefined,
      cpf: undefined,
      email: undefined,
    }

  }

  cadastrarModel(): void {
    this.modelService.cadastrarModel(this.modelObject).toPromise().then(() => {
      this.messageService.add({severity: 'success', summary: 'Sucesso!', detail: 'Model incluída com sucesso.', life: 3000});
    }).catch((error) => {
      if (error.status == 400) {
        error.error.forEach((erro: any) => {
          this.messageService.add({severity: 'warn', summary: 'Atenção!', detail: `Erro no campo ${erro.campo}. ${erro.mensagem}`, life: 10000});
        })
      } else if (error.status == 404) {
        error.error.forEach((erro: any) => {
          this.messageService.add({severity: 'warn', summary: 'Atenção!', detail: `Erro no campo ${erro.campo}. ${erro.mensagem}`, life: 10000});
        })
      } else if (error.status == 500) {
        this.messageService.add({severity: 'error', summary: 'Erro!', detail: 'Erro interno. Entre em contato com o administrador.', life: 10000});
      }
    })
  }

  limparForm(): void {
    this.confirmationService.confirm({
      message: `Todos as alterações serão perdidas, deseja prosseguir?`,
      header: 'Confirmação',
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: 'Sim',
      rejectLabel: 'Não',
      acceptButtonStyleClass: 'p-button-rounded p-button-success',
      rejectButtonStyleClass: 'p-button-rounded p-button-warning',
      accept: () => {
        this.clearModelObject();
      },
      reject: () => {
      }
    });
  }



}
