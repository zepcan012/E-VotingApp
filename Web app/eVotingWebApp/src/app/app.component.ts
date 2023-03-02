import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './services/authentication.service';


import { environment } from "../environments/environment";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
//import{getMessaging} from "firebase/messaging";
//import{getToken} from "firebase/messaging";
//import{onMessage} from "firebase/messaging";

import { MessagingService } from './services/messaging.service';
import firebase from 'firebase/compat/app';
import 'firebase/compat/messaging';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})
export class AppComponent implements OnInit {
  //title = 'push-notification';
  //message: any;

  constructor(public authService: AuthenticationService, private router: Router, private messagingService: MessagingService){

  }
  //title = 'af-notification';
  //message:any = null;
  ngOnInit(){
    
    //this.requestPermission();
    //this.listen();

    //this.messagingService.requestPermission()
    //this.messagingService.receiveMessage()
    //this.message = this.messagingService.currentMessage
  }
  
  /*requestPermission() {
    const messaging = getMessaging();
    getToken(messaging, 
     { vapidKey: environment.firebase.vapidKey}).then(
       (currentToken) => {
         if (currentToken) {
           console.log("We got the token.....");
           console.log(currentToken);
         } else {
           console.log('No registration token available. Request permission to generate one.');
         }
     }).catch((err) => {
        console.log('An error occurred while retrieving token. ', err);
    });
  }
  listen() {
    const messaging = getMessaging();
    onMessage(messaging, (payload) => {
      console.log('Message received. ', payload);
      this.message=payload;
    });
  }*/











  

  logout(){
    this.authService.logout().subscribe(() =>{
      this.router.navigate(['']);
    });
  }
}


