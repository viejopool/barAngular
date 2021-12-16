import { Component, OnDestroy, OnInit } from '@angular/core';
import { CoctelbdService } from '@shared/services/coctelbd.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-listabusqueda',
  templateUrl: './listabusqueda.component.html',
  styleUrls: ['./listabusqueda.component.css']
})
export class ListabusquedaComponent implements OnInit,OnDestroy {
  listaBebidas:any[];
  suscripcion:Subscription;

  constructor(private _coctelService:CoctelbdService) { 
    this.listaBebidas=[]
    this.suscripcion=new Subscription()
  }
  ngOnInit(): void {
    this.suscripcion.add(this._coctelService.getListaBebidas().subscribe(data=>this.listaBebidas=data))
  }
  ngOnDestroy(): void {
    this.suscripcion.unsubscribe()
  }
}
