import { Attribute } from "@angular/core";

export class EquipmentsDto {

    id:string;
    name:string;
    state:number;
    typeName:string;
    locationName:string;
    attribute:Attribute[];
}
