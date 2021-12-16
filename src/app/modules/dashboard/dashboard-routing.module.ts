import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [{path:'',component:DashboardComponent,children:[
{path:'por-letra',loadChildren:()=>import('@modules/bebidasporletra/bebidasporletra.module').then(m=>m.BebidasporletraModule)},
{path:'buscar',loadChildren:()=>import('@modules/buscador/buscador.module').then(m=>m.BuscadorModule)}
]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
