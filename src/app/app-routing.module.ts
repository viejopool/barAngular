import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', 
loadChildren: () => import('@modules/dashboard/dashboard.module').then(m => m.DashboardModule),
data:{titulo:'inicio'} 
},
{ path: '**', pathMatch: 'full', redirectTo: '' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
