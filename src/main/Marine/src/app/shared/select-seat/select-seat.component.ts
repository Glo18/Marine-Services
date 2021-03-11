import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Seat } from '../../models/seat.model';
import { Journey } from '../../models/journey.model';
import { Journey_Route } from '../../models/route.model';
import { Router } from '@angular/router';
import { Ship } from '../../models/ship.model';
import { SelectShipService } from '../../services/selectShip.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'select-seat',
  templateUrl: './select-seat.component.html',
  styleUrls: ['./select-seat.component.css']
})
export class SelectSeatComponent implements OnInit ,OnDestroy{
  @Input('ship') ship:Ship;
  @Output('closeModal') closeModal = new EventEmitter()
showSeatList:Seat[]=[];
total=0;
fillupSeat=[];
alert=false;

subscription:Subscription;
  constructor(
    private route:Router,
    private ShipService:SelectShipService
  ) { }

  ngOnInit() {
this.getbookSeat();
  }

  Seat(e) {
   let seats=[];
   seats= this.showSeatList.map(iteam=>{
     return iteam.seatNo
   })
    let id = document.getElementById(e);

    if((this.fillupSeat.indexOf(String(e))<0) && (seats.indexOf(e)<0)){
      if((this.showSeatList.length!=4)) {
        id.innerHTML = `   <img src="" alt="">`

        let seat={
          seatNo:e,
          fare:this.ship.fare,
          seatClass:'economy'
        }
        this.totalFare(seat.fare);
        this.showList(seat);
      }
      else{
        this.alert=true;
      }
    }

  }

  showList(seat){
      this.showSeatList.push(seat)
  }

  totalFare(fare){
    this.total+=fare;
  }

  confirmJourney(){
    let route:Journey_Route= JSON.parse(localStorage.getItem("route"))

    let seats=[];
  seats= this.showSeatList.map(iteam=>{
    return iteam.seatNo
  });

  let journey :Journey={
    ship:this.ship,
    seats:seats,
    fare:Number(this.total),
    journey_route:route
  }

localStorage.setItem("journey",JSON.stringify(journey))
this.route.navigate(['user-form']);
this.closeModal.emit();
  }


  getbookSeat(){

    let route:Journey_Route= JSON.parse(localStorage.getItem("route"))
    let shipid=this.ship.$key;
    let key = String(new Date(route.date).getTime());
    console.log(shipid,key)
    this.subscription=this.ShipService.getFillupseat(key,shipid)
    .subscribe(res=>{
      for(key in res){
        for(let i in res[key].seats){
          this.fillupSeat.push(res[key].seats[i])
          this.changeSeatColor(res[key].seats[i])
        }
      }
    })
  }

  changeSeatColor(seatNo){
    let id= document.getElementById(seatNo)
    id.innerHTML=`  <img src="">`
    id.removeEventListener("click",this.Seat);


  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
