import { Injectable } from "@angular/core";
import { Journey } from "../models/journey.model";
import { HttpClient } from "@angular/common/http";
import { UserService } from "./user.service";
import { User } from "../models/user.model";
import { Router } from "@angular/router";
import { BehaviorSubject } from "rxjs";

@Injectable()

export class BookingService {

    journey_info= new BehaviorSubject('')
    cast= this.journey_info.asObservable();
    private USerId;
    private Root_Url = "https://bdshipticket.firebaseio.com/"
    constructor(
        private http: HttpClient,
        private UserService: UserService,
        private router: Router
    ) { }


    async seatBooking(journey: Journey, user) {
        let shipID = journey.ship.$key;
        let booking = new Object()
        let key = new Date(journey.journey_route.date).getTime();
        await this.createUserID(user).subscribe(
            res => {
                booking = {
                    user_id: Object.values(res)[0],
                    seats: journey.seats
                }
                this.chekBookingDate_ShipInfo(key, journey, booking, shipID)
            });

    }





    private async createBookingDate(journey: Journey, key, booking, shipID) {

        await this.create(journey, key, shipID, booking)
        // await this.createBooking(booking, key,busID)

    }

    private async  create(journey: Journey, key, shipID, booking) {
        let location = journey.journey_route.leaving_form + ' to ' + journey.journey_route.going_to;
        this.http.put(this.Root_Url + 'booking/' + key + '/' + shipID + '.json', {

            ship: {
                location: location,
                name: journey.ship.name,
                coach_type: journey.ship.coach_type,
                nfareame: journey.ship.fare,
                time: journey.ship.time,
                seat: journey.ship.seat
            }
        })
            .subscribe(res => {
                this.createBooking(booking, key, shipID);
            },
                error => console.log(error))
    }

    private CheckShipID(shipID, key, booking, journey) {
        let shipIDArray = [];
        this.http.get(this.Root_Url + 'booking/' + key + '.json')
            .subscribe(res => {
                for (let key in res) {
                    shipIDArray.push(key)
                }
                if (shipIDArray.indexOf(String(shipID)) > -1) {
                    this.createBooking(booking, key, shipID);
                }
                else {
                    this.create(journey, key, shipID, booking);
                }
            });
    }

    private async chekBookingDate_ShipInfo(key, journey, booking, shipID) {

        let keys = [];
        this.http.get(this.Root_Url + 'booking.json')
            .subscribe(
                res => {
                    for (let key in res) {
                        keys.push(key)
                    }
                    if (keys.indexOf(String(key)) > -1) {
                        this.CheckShipID(shipID, key, booking, journey)
                    }
                    else {
                        this.createBookingDate(journey, key, booking, shipID);
                    }
                }
            );
    }

    private createBooking(booking, key, shipID) {
let tketID;
        this.http.post(this.Root_Url + 'booking/' + key + '/' + shipID + '/seat_booking.json', booking)
            .subscribe(res => {
                for(let key in res){
                    tketID= res[key]
                }
                this.createPrintView(tketID);
            },
                err => console.log(err));


    }

    private createUserID(user) {
        localStorage.setItem("user",JSON.stringify(user))
        return this.UserService.createUser(user)

    }


    createPrintView (tketID){

        let journey= JSON.parse(localStorage.getItem("journey"));
        let user= JSON.parse(localStorage.getItem("user"));
        let Ticket= {
            ticketId:tketID,
            journey:journey,
            user:user
        }
        this.getJourneyInfo(Ticket);
        this.router.navigate(['print']);
    }

    getJourneyInfo(Ticket){
        this.journey_info.next(Ticket);
        localStorage.removeItem("journey");
        localStorage.removeItem("route");
        localStorage.removeItem("user");
    }


}
