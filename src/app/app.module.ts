import { DatePipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { DividerModule } from 'primeng/divider';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { PanelModule } from 'primeng/panel';
import { PanelMenuModule } from 'primeng/panelmenu';
import { SidebarModule } from 'primeng/sidebar';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { RestApiService } from 'src/services/rest-api.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuEsquerdoComponent } from './menu-esquerdo/menu-esquerdo.component';
import { HomeComponent } from './pages/home/home.component';
import { CadastrarComponent } from './pages/model/cadastrar/cadastrar.component';
import { ListarIdComponent } from './pages/model/listar-id/listar-id.component';
import { ListarTodosComponent } from './pages/model/listar-todos/listar-todos.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuEsquerdoComponent,
    HomeComponent,
    CadastrarComponent,
    ListarTodosComponent,
    ListarIdComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    InputTextModule,
    HttpClientModule,
    SidebarModule,
    ButtonModule,
    DividerModule,
    PanelModule,
    TableModule,
    FormsModule,
    PanelMenuModule,
    CalendarModule,
    DialogModule,
    ToastModule,
    ConfirmDialogModule,
    ToolbarModule,
    DropdownModule,
  ],
  providers: [
    RestApiService,
    MessageService,
    ConfirmationService,
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
