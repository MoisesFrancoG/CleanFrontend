import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './pages/employee-list/employee-list.component';
import { EmployeeFormComponent } from './pages/employee-form/employee-form.component';

const routes: Routes = [
  { path: '', component: EmployeeListComponent },  // Listar empleados
  { path: 'new', component: EmployeeFormComponent },  // Crear empleado
  { path: 'edit/:id', component: EmployeeFormComponent } // Editar empleado
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeesRoutingModule { }
