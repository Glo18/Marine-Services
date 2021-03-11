import { Component, OnInit } from '@angular/core';
import { SelectShipService } from '../../services/selectShip.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Journey_Route } from '../../models/route.model';

@Component({
  selector: '.select-ship',
  templateUrl: './select-ship.component.html',
  styleUrls: ['./select-ship.component.css']
})
export class SelectShipComponent implements OnInit {

pnumber=1;

place:Place[]=[];

  constructor(
    private ShipService:SelectShipService,
    private router:Router
  ) {
   this.place[0]=new Place()
   }

  ngOnInit() {

  }



  SearchShip(form: NgForm) {
    let leaving_form = form.value.leaving_form;
    let destination;


    this.place.filter(iteam=>{
      if(iteam.key==form.value.going_to){
        destination=iteam.value
      }
    })

    let date = form.value.depart_date;
    let route:Journey_Route = {
      leaving_form: leaving_form,
      going_to: destination,
      date:date
    }
    localStorage.setItem("route", JSON.stringify(route))
    let routeId = form.value.going_to;
    this.ShipService.getRoueId(routeId);
    this.router.navigate(['search']);
  }

  leave(e){

    let leavingfrom=e.target.value;
    console.log(leavingfrom)
    if(leavingfrom=='Alaska'){
      this.place= [
        {key:'1109001', value:'Maldives'} ,
        {key:'1109002', value:'Seychelles'} ,
        {key:'1109004', value:'Peru'} ,
        {key:'1109005', value:'Florida'},
        {key:'1109006', value:'Scotland'}

      ]
  }
  else if(leavingfrom=='Greece'){
    this.place= [
      {key:'2209002', value:'Zealand'} ,
      {key:'2209001', value:'India'} ,
      {key:'2209003', value:'SA'} ,


    ]
  }
  else if(leavingfrom=='Maldives'){
    this.place= [
      {key:'3309003', value:'Florida'} ,
      {key:'3309001', value:'Alaska'} ,
      {key:'3309002', value:'Seychelles'} ,

    ]
  }

}


}
export class Place {
  key:string;
  value:string;
}
