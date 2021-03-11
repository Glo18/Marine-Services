import { Component, OnInit } from '@angular/core';
import { SelectShipService } from '../services/selectShip.service';
import { Subscription } from 'rxjs';
import { Ship } from '../models/ship.model';
// import { BsModalService } from 'ngx-bootstrap/modal';
// import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ship-search-result',
  templateUrl: './ship-search-result.component.html',
  styleUrls: ['./ship-search-result.component.css']
})
export class ShipSearchResultComponent implements OnInit {
subscription:Subscription;
ships:Ship[]=[];
// modalRef: BsModalRef;
route=new Object()

  constructor(
  private ShipService:SelectShipService,
//       private modalService: BsModalService,
      private router:Router
      ) { }

  ngOnInit() {
  this.route=JSON.parse(localStorage.getItem("route"));
      if(!this.route) {
        this.router.navigate([''])
      }
     this.subscription= this.ShipService.castId.subscribe(
        res=>this.getAllShip(res)
      )
    }

getAllShip(res){
    let ship=new Object();
    this.ShipService.getShip(res)
    .subscribe(
      res=>{
        for(let key in res){
          ship=res[key];
          ship['$key']=key;


       this.ships.push(ship as Ship);


        }
      }
    )

  }
ngOnDestroy() {
  this.subscription.unsubscribe();
}
//
// openModal(template: TemplateRef<any>,ship) {
//   this.modalRef = this.modalService.show(template);
//   // let journey={
//   //   route:this.route,
//   //   bus_info:bus,
//   //   seats:
//   // }

// }
// closeModal (){
//   this.modalRef.hide();
//
//   }

}
