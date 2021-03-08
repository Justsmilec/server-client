import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Equipment } from '../models/equipment';
import { EquipmentService } from '../equipments/equipment.service';

@Component({
  selector: 'app-equipment-home',
  templateUrl: './equipment-home.component.html',
  styleUrls: ['./equipment-home.component.css']
})
export class EquipmentHomeComponent implements OnInit {



  constructor(   public dialog: MatDialog,
    private service:EquipmentService) { }
  dialogR:any
  appliances:Equipment[];
  problems:any[];
  tobeEdit:any;
  ngOnInit(): void {
    this.getAllApp();
    
  }

  getAllApp(){
    return this.service.getEquipments().subscribe(
      data=>{
        this.appliances=data;
        console.log(this.appliances[0].attributes);
       
        
      }
    )
  }

  findproblems(current:number,min:number,max:number):boolean{
   if(current<=min||current>=max){
     return true;
   }
   return false
  }

 
  increaseTemp(oneattr, templateRef){
    console.log(oneattr)
    this.tobeEdit=oneattr
    this.dialogR = this.dialog.open(templateRef)

  } 

  increase(id){
    console.log(id)
    return this.service.increaseV(id).subscribe(
      data=>{
        this.appliances=data;
      }
    )

  }

  decreaseTemp(oneattr, templateRef){
    console.log(oneattr)
    this.tobeEdit=oneattr
    this.dialogR = this.dialog.open(templateRef)

  } 

  decrease(id){
    console.log(id)
    return this.service.decreaseV(id).subscribe(
      data=>{
        this.appliances=data;
      }
    )

  }

}
