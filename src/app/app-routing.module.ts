import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { AtivarIdComponent } from './pages/model/ativar-id/ativar-id.component';
import { CadastrarComponent } from './pages/model/cadastrar/cadastrar.component';
import { DeletarIdComponent } from './pages/model/deletar-id/deletar-id.component';
import { ListarIdComponent } from './pages/model/listar-id/listar-id.component';
import { ListarTodosComponent } from './pages/model/listar-todos/listar-todos.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'cadastrar', component: CadastrarComponent},
  { path: 'listar-todos', component: ListarTodosComponent},
  { path: 'listar-id', component: ListarIdComponent},
  { path: 'deletar-id', component: DeletarIdComponent},
  { path: 'ativar-id', component: AtivarIdComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
