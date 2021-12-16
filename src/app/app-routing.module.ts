import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', loadChildren: () => import('@modules/dashboard/dashboard.module').then(m => m.DashboardModule) },
// {path:'cocteles',loadChildren:()=>import('@modules/cocteles/cocteles.module').then(m=>m.CoctelesModule)},
// {path:'bebidas',loadChildren:()=>import('@modules/bebidas/bebidas.module').then(m=>m.BebidasModule)},
{ path: '**', pathMatch: 'full', redirectTo: '' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
