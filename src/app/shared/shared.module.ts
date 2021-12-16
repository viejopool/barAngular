import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LetrasComponent } from './components/letras/letras.component';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { ListabusquedaComponent } from './components/listabusqueda/listabusqueda.component';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzBackTopModule } from 'ng-zorro-antd/back-top';
import { VolverInicioComponent } from './components/volver-inicio/volver-inicio.component';

@NgModule({
  declarations: [
    LetrasComponent,
    ListabusquedaComponent,
    VolverInicioComponent,
  ],
  imports: [
    CommonModule,
    NzBreadCrumbModule,
    NzCardModule,
    NzListModule,
    NzGridModule,
    NzBackTopModule,
  ],
  exports: [LetrasComponent, ListabusquedaComponent, VolverInicioComponent],
})
export class SharedModule {}
