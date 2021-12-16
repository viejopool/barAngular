import { Component, OnDestroy, OnInit } from '@angular/core';
import { CoctelbdService } from '@shared/services/coctelbd.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-letras',
  templateUrl: './letras.component.html',
  styleUrls: ['./letras.component.css']
})
export class LetrasComponent implements OnInit,OnDestroy {
  letras:string[];
  suscripcion:Subscription;

  constructor(private _coctelService:CoctelbdService) {
    this.letras=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    this.suscripcion=new Subscription();
   }
  

  ngOnInit(): void {
    
  }
  selectLetra($event:any){
    // console.log($event.target.innerText)
    this.suscripcion.add(
    this._coctelService.obtenerPorLetra($event.target.innerText).subscribe(data=>{
      // console.log(data.drinks)
      this._coctelService.setListaBebidas(data.drinks);
      this._coctelService.setCargarComponente(true);
    }))
  }
  ngOnDestroy(): void {
    this.suscripcion.unsubscribe()
  }
  

}
