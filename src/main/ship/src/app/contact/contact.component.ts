import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  name: String;
  email: String;
  password: String;

  constructor() { }

  ngOnInit() {}

  submitForm() {
    // const message = 'My name is ${this.name}. My email is ${this.email}. My message is ${this.message}';
    // alert('I am submitting the form!');
  }

}
