import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BebidasporletraRoutingModule } from './bebidasporletra-routing.module';
import { ListarporletraComponent } from './components/listarporletra/listarporletra.component';
import {SharedModule} from '@shared/shared.module'
// import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';

@NgModule({
  declarations: [
    ListarporletraComponent
  ],
  imports: [
    CommonModule,
    BebidasporletraRoutingModule,
    SharedModule
    // NzBreadCrumbModule
  ]
})
export class BebidasporletraModule { }
