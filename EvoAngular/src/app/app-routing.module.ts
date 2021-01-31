import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DepartamentosComponent } from './departamentos/departamentos.component';
import { FuncionariosComponent } from './funcionarios/funcionarios.component';
import { Departamento } from './Models/Departamento';
import { PerfilComponent } from './perfil/perfil.component';

const routes: Routes = [
  { path: 'departamentos', component: DepartamentosComponent},
  { path: 'funcionarios', component: FuncionariosComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'perfil', component: PerfilComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
