import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarporletraComponent } from './components/listarporletra/listarporletra.component';

const routes: Routes = [{path:'por-letra',component:ListarporletraComponent,data:{titulo:'Bebidas por letra'}}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BebidasporletraRoutingModule { }
