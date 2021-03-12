import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Comments } from './comments';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  bookingURL: string = 'http://localhost:4567/'

  constructor(private httpClient: HttpClient) { }

  createComments(comments: Comments){
    return this.httpClient.post(`${this.bookingURL}/comments/new`,comments)
  }
  getComments() {
    return this.httpClient.get<Comments[]>(`${this.bookingURL}/comments`)
  }
  getCommentsById(id: number){
    return this.httpClient.get(`${this.bookingURL}/comments/${id}`)
  }
}
