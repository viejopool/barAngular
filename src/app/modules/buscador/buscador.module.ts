import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuscadorRoutingModule } from './buscador-routing.module';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { NzFormModule } from 'ng-zorro-antd/form';
import {ReactiveFormsModule} from '@angular/forms';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import {SharedModule} from '@shared/shared.module'
import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';

@NgModule({
  declarations: [
    BuscadorComponent
  ],
  imports: [
    CommonModule,
    BuscadorRoutingModule,
    NzIconModule,
    NzFormModule,
    ReactiveFormsModule,
    NzInputModule,
    NzButtonModule,
    SharedModule,
    NzAutocompleteModule
  ]
})
export class BuscadorModule { }
