import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { CoctelbdService } from '@shared/services/coctelbd.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-listarporletra',
  templateUrl: './listarporletra.component.html',
  styleUrls: ['./listarporletra.component.css']
})
export class ListarporletraComponent implements OnInit,OnDestroy {
  load:boolean;
  //@ViewChild("listaBebidas") listaBebidas :ElementRef | undefined;
   suscripcion:Subscription; 

  constructor(private _coctelService:CoctelbdService) {
    this.load=false;
    this.suscripcion=new Subscription()
    //console.log(this.listaBebidas)
   }
  

  ngOnInit(): void {
   this.suscripcion.add(this._coctelService.getCargarComponente().subscribe(data=>this.load=data))
   //this.suscripcion.add(this._coctelService.getListaBebidas().subscribe(data=>))
  }
  ngOnDestroy(): void {
    this.suscripcion.unsubscribe()
  }

}
