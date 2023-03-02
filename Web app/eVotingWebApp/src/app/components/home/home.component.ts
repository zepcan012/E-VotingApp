import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';


import { Router } from '@angular/router';
import { MessagingService } from 'src/app/services/messaging.service';
import firebase from 'firebase/compat/app';
import 'firebase/compat/messaging';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user$ = this.authService.currentUser$;

  title = 'push-notification';
  message: any;

  constructor(private authService: AuthenticationService, private messagingService: MessagingService) { }

  ngOnInit(): void {

    this.messagingService.requestPermission()
    this.messagingService.receiveMessage()
    this.message = this.messagingService.currentMessage
  }

}
