import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
 
    constructor(private router :Router)
    {}
    send(){
      alert("your message will be sended and the problem will sort it  and replay will send to your email. ")
      this.router.navigateByUrl('')
    }
  }


