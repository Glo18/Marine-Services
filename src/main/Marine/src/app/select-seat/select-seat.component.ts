import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Seat } from '../models/seat.model';
import { Journey } from '../models/journey.model';
import { Journey_Route } from '../models/route.model';
import { Router } from '@angular/router';
import { Bus } from '../models/ship.model';
import { SelectBusService } from '../services/selectShip.service';

@Component({
  selector: 'app-select-seat',
  templateUrl: './select-seat.component.html',
  styleUrls: ['./select-seat.component.css']
})
export class SelectSeatComponent implements OnInit {
@Input('bus') bus:Bus;
  @Output('closeModal') closeModal = new EventEmitter()
  showSeatList:Seat[]=[];
  total=0;
  fillUpSeat=[];
  alert=false;

  constructor(
   private route:Router,
      private ShipService:SelectShipService
  ) { }

  ngOnInit() {
  this.getBookSeat();
    }

    Seat(e) {
       let seats=[];
       seats= this.showSeatList.map(iteam=>{
         return iteam.seatNo
       })
        let id = document.getElementById(e);

        if((this.fillupSeat.indexOf(String(e))<0) && (seats.indexOf(e)<0)){
          if((this.showSeatList.length!=4)) {


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


      getbookSeat(){

        let shipid=this.ship.$key;
        let key = String(new Date(route.date).getTime());
        console.log(shipid,key)
        this.subscription=this.ShipService.getFillupseat(key,shipid)
          for(key in res){
            for(let i in res[key].seats){
              this.fillupSeat.push(res[key].seats[i])
              this.changeSeatColor(res[key].seats[i])
            }
          }
        )
      }

      changeSeatColor(seatNo){
        let id= document.getElementById(seatNo)
       }


}
