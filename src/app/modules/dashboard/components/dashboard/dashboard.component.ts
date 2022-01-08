import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivationEnd, Router } from '@angular/router';
import { CoctelbdService } from '@shared/services/coctelbd.service';
import { Subscription } from 'rxjs';
import { filter,map } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit,OnDestroy {
  titulo:string;
  listCategorias:any[];
  suscripcion:Subscription;
  display:boolean;
  
  constructor(private _coctelService:CoctelbdService, private ruta:Router,private titleService:Title) {
    this.titulo=''
    this.listCategorias=[]
    this.suscripcion=new Subscription()
    this.display=false
    this.getDataRuta()
   }

  ngOnInit(): void {
    this.suscripcion.add(
      this._coctelService.obtenerCategorias().subscribe(data=>this.listCategorias=data.drinks)
    )
    
  }
  getDataRuta(){
    this.ruta.events.pipe(filter((evento:any)=>evento instanceof ActivationEnd),
    filter((fch:ActivationEnd)=>fch.snapshot.firstChild===null),
    map(titulo=>titulo.snapshot.data))
    .subscribe(data=>{
      this.titulo=data.titulo
      this.titleService.setTitle(`Bar de Moe - ${this.titulo}`)
    })
  }
  selectCategoria($event:any){
    this.titulo='Lista de Bebidas'
    this.titleService.setTitle(`Bar de Moe - ${this.titulo}`)    
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
