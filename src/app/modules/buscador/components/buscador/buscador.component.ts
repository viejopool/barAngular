import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CoctelbdService } from '@shared/services/coctelbd.service';
import { Subscription } from 'rxjs';
import { map,mergeAll } from 'rxjs/operators';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit,OnDestroy {
  busquedaForm:FormGroup;
  arrBebidas:string[];
  suscripcion:Subscription;
  filteredOptions: string[];
  inputValue:string;
  cargar:boolean;

  constructor(private _coctelService:CoctelbdService,private fb:FormBuilder) {
    this.busquedaForm=new FormGroup({});
    this.arrBebidas=[];
    this.inputValue=''
    this.filteredOptions=[]
    this.suscripcion=new Subscription()
    this.cargar=false
   }

  ngOnInit(): void {
    this.busquedaForm=this.fb.group({
      bebida:['',Validators.required]
    })
   this.suscripcion.add(this._coctelService.obtenerTodasBebidas().pipe(map(bebidas=>bebidas?.drinks),
   mergeAll(),map((tragos:any)=>tragos.strDrink)).subscribe(data=>{
      this.arrBebidas.push(data)
     // console.log(this.arrBebidas)
   }
   ))
  }
  submitForm(){
    // console.log(this.busquedaForm.controls.bebida.value)
   this.suscripcion.add(this._coctelService.buscarBebida(this.busquedaForm.controls.bebida.value)
    .pipe(map(trago=>trago.drinks)).subscribe(data=>{
       this._coctelService.setListaBebidas(data)
       this.cargar=true
       this.busquedaForm.reset() 
    }))
  }
  onChange(value: string): void {
    this.filteredOptions = this.arrBebidas.filter(option => option.toLowerCase().indexOf(value?.toLowerCase()) !== -1)
  }
  ngOnDestroy():void{
    this.suscripcion.unsubscribe()
  }
}
