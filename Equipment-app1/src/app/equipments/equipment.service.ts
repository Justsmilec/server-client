import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Equipment } from '../models/equipment';


import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { EquipmentsDto } from '../models/equipments-dto';


const url='http://localhost:8080/home/'

@Injectable({
  providedIn: 'root'
})
export class EquipmentService {
 

  constructor( private http:HttpClient) {
      
  }
//ktu


  addEquipment(equipment:EquipmentsDto){
  return this.http.post(url +'add/appliaces/', equipment)
  }

  
  getEquipments():Observable<any>{
    return this.http.get(url+'all');
  }

  changeStatus(id:string):Observable<any>{
    return this.http.put(url+'changeStatus/'+`${id}`,null);
  }
  

  increaseV(id:string):Observable<any>{
    return this.http.put(url+"increaseAttr/"+`${id}`,null);
  }

  decreaseV(id:string):Observable<any>{
    return this.http.put(url+"decreaseAttr/"+`${id}`,null);
  }

 

 

}

