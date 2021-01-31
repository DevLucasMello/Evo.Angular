import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FuncionariosComponent } from './funcionarios/funcionarios.component';
import { DepartamentosComponent } from './departamentos/departamentos.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PerfilComponent } from './perfil/perfil.component';
import { SharedComponent } from './shared/shared.component';
import { UtilComponent } from './util/util.component';
import { DepartamentosDetalhesComponent } from './departamentos/departamentos-detalhes/departamentos-detalhes.component';
import { DepartamentosFuncionariosComponent } from './departamentos/departamentos-funcionarios/departamentos-funcionarios.component';


@NgModule({
  declarations: [
    AppComponent,
    FuncionariosComponent,
    DepartamentosComponent,
    UsuariosComponent,
    DashboardComponent,
    PerfilComponent,
    SharedComponent,
    UtilComponent,
    DepartamentosFuncionariosComponent,
    DepartamentosDetalhesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
