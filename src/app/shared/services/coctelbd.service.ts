import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, merge, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CoctelbdService {

  url:string;
  listaBebidas:BehaviorSubject<any>;
  cargarComponente:BehaviorSubject<boolean>;

  constructor(private http:HttpClient) {
    this.url=environment.url
    this.listaBebidas=new BehaviorSubject<any>({});
    this.cargarComponente=new BehaviorSubject<boolean>(false)
   }
   obtenerPorCategoria(categoria:string):Observable<any>{
     return this.http.get<any>(`${this.url}filter.php?c=${categoria}`)
   }
   obtenerPorLetra(letra:string):Observable<any>{
    return this.http.get<any>(`${this.url}search.php?f=${letra}`)
   }
   obtenerCategorias():Observable<any>{
     return this.http.get<any>(`${this.url}list.php?c=list`)
   }
   obtenerTodasBebidas():Observable<any>{
     let conAlchol= this.http.get<any>(`${this.url}filter.php?a=Alcoholic`)
     let sinAlchol= this.http.get<any>(`${this.url}filter.php?a=Non_Alcoholic`)
     return merge(conAlchol,sinAlchol)
   }
   buscarBebida(bebida:string):Observable<any>{
    return this.http.get<any>(`${this.url}search.php?s=${bebida}`)
   }
   setListaBebidas(bebidas:any){
     this.listaBebidas.next(bebidas)
   }
   getListaBebidas():Observable<any>{
    return this.listaBebidas.asObservable()
   }
   setCargarComponente(estado:boolean){
    this.cargarComponente.next(estado)
   }
   getCargarComponente():Observable<boolean>{
     return this.cargarComponente.asObservable()
   }

}
