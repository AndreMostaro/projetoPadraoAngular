import { Model } from './../models/model';
import { DatePipe } from '@angular/common';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { RestApiService } from './rest-api.service';
import { AbstractService } from './abstract.service';

@Injectable({
  providedIn: 'root',
})
export class ModelService extends AbstractService<object> {

  constructor(http: RestApiService, private datepipe: DatePipe) {
    super(http);
  }

  public cadastrarModel(model: Model): Observable<any> {
    const modelJSON = model
    // FORMATAÇÃO PARA DATE TIME
    //modelJSON.dataNascimento = this.datepipe.transform(model.dataNascimento, 'yyyy-MM-dd hh:mm');
    const url = `http://localhost:8080/api/models/cadastrar`;
    return this.http.sendPost(url, modelJSON);
  }

  public listarTodosModel(): Observable<any>  {
    const url = `http://localhost:8080/api/models/listar-todos`;
    return this.http.sendGet(url);
  }

  public listarPorIdModel(id: string): Observable<any> {
    const url = `http://localhost:8080/api/models/listar/${id}`;
    return this.http.sendGet(url);
  }

  public atualizarModel(): Observable<any> {
    const url = `http://localhost:8080/api/models/atualizar`;
    return this.http.sendPut(url);
  }

  public deletarPorIdModel(id: string): Observable<any> {
    const url = `http://localhost:8080/api/models/deletar/${id}`;
    return this.http.sendDelete(url);
  }

  public ativarPorIdModel(id: string): Observable<any> {
    const url = `http://localhost:8080/api/models/ativar/${id}`;
    return this.http.sendPut(url);
  }
}
