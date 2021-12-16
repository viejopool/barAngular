import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarporletraComponent } from './components/listarporletra/listarporletra.component';

const routes: Routes = [{path:'',component:ListarporletraComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BebidasporletraRoutingModule { }
