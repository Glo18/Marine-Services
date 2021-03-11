import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Ship } from "../models/ship.model";
import {BehaviorSubject} from 'rxjs'

@Injectable()

export class SelectShipService {
    private Root_url = "https://bdshipticket.firebaseio.com/";


    private routeId= new BehaviorSubject <string> ('');
    castId=this.routeId.asObservable();

    constructor(
        private http: HttpClient,
    ) { }

    getShip(routeId) {
       return this.http.get(this.Root_url + 'ships/'+routeId+'.json');
    }

    getRoueId(routeId){
        this.routeId.next(routeId)
    }


    getFillupseat(key,shipID){

       return  this.http.get(this.Root_url+'booking/'+key+'/'+shipID+'/seat_booking.json')
        //console.log(this.Root_url+'booking/'+key+'/'+shipID+'.json')
    }

    getRoute(key){
        return  this.http.get(this.Root_url+'routes/'+key+'.json')
    }
}
