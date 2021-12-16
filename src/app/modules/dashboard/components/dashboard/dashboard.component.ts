import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CoctelbdService } from '@shared/services/coctelbd.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit,OnDestroy {
  listCategorias:any[];
  suscripcion:Subscription;
  display:boolean;
  
  constructor(private _coctelService:CoctelbdService, private ruta:Router) {
    this.listCategorias=[]
    this.suscripcion=new Subscription()
    this.display=false
   }

  ngOnInit(): void {
    this.suscripcion.add(
      this._coctelService.obtenerCategorias().subscribe(data=>this.listCategorias=data.drinks)
    )
  }
  selectCategoria($event:any){
    // console.log($event.target.innerText)
    this.suscripcion.add(this._coctelService.obtenerPorCategoria($event.target.innerText).subscribe(data=>{
        this._coctelService.setListaBebidas(data.drinks)
        this.display=true
    }))
  }
  displayRutaFalse(){
    this._coctelService.setCargarComponente(false)
  }
  irPorLetra(){
    this.display=false
    this.displayRutaFalse()
    this.ruta.navigateByUrl('/por-letra')
  }
  irBuscar(){
    this.display=false
    this.displayRutaFalse()
    this.ruta.navigateByUrl('/buscar')
  }
  ngOnDestroy():void{
    this.suscripcion.unsubscribe()
  }
}
