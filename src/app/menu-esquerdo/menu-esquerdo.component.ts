import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu-esquerdo',
  templateUrl: './menu-esquerdo.component.html',
  styleUrls: ['./menu-esquerdo.component.scss']
})
export class MenuEsquerdoComponent implements OnInit {

  sideMenuBoolean: boolean = false;
  itens: MenuItem[] = [];

  constructor() { }

  ngOnInit(): void {

    this.itens = [
      {
        label: 'Home',
        items: [
          {
            label: 'Home',
            routerLink:'/home'
          },
        ],
      },
      {
        label: 'Model',
        items: [
          {
            label: 'Cadastrar',
            routerLink: '/cadastrar'
          },
          {
            label: 'Listar Todos',
            routerLink: '/listar-todos'
          },
          {
            label: 'Listar por ID',
            routerLink: '/listar-id'
          },
          {
            label: 'Atualizar',
            routerLink: '/atualizar'
          },
          {
            label: 'Deletar por ID',
            routerLink: '/deletar-id'
          },
          {
            label: 'Ativar por ID',
            routerLink: '/ativar-id'
          },
        ],
      },
      {
        label: 'Relacionamento',
        items: [
          {
            label: 'Cadastrar',
            routerLink: '/cadastrar'
          },
          {
            label: 'Listar Todos',
            routerLink: '/listar-todos'
          },
          {
            label: 'Listar por ID',
            routerLink: '/listar-id'
          },
        ],
      },
    ]
  }
}
