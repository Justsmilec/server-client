import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EquipmentService } from '../equipments/equipment.service';
import { Equipment } from '../models/equipment';
import { EquipmentsDto } from '../models/equipments-dto';
import { Attribute } from '../models/attribute';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {
 equipmentDto: EquipmentsDto;
 equipment:Equipment;
  nestedForm: FormGroup;
  constructor(private _fb: FormBuilder,private equipmentService:EquipmentService) { 
    
  }

  ngOnInit() {
    this.nestedForm = this._fb.group({
      id: [null, Validators.required],
      name: ['', [Validators.required, Validators.minLength(2)]],
      state: ['', Validators.required],
      type: ['', Validators.required],
      location: ['', Validators.required],

      attribute: this._fb.array([this.addAttributeGroup()])
    });
  }

  

  addAttributeGroup() {
    return this._fb.group({

      attributeId: [null, Validators.required],
      name: ['', Validators.required],
      min: ['', Validators.required],
      max: ['', Validators.required],
      current: ['', Validators.required],
      equipmentId: ['', Validators.required],

    });
  }



  
  addAttribute() {
    this.attributeArray.push(this.addAttributeGroup());
  }
  removeAttribute(index) {
    this.attributeArray.removeAt(index);
  }
  get attributeArray() {
    return <FormArray>this.nestedForm.get('attribute');
  }

  get id() {
    return this.nestedForm.get('id');
  }

  get name() {
    return this.nestedForm.get('name');
  }
  get state() {
    return this.nestedForm.get('state');
  }
  get type() {
    return this.nestedForm.get('type');
  }
  get location() {
    return this.nestedForm.get('location');
  }

 

  submitHandler() {

this.equipmentDto=this.nestedForm.value;
this.equipmentDto.id="1"





this.equipmentService.addEquipment(this.equipmentDto).subscribe(data=>console.log(data));      
  console.log(this.equipmentDto);
   
  }



  










  }




 
 

 
 


 













  

