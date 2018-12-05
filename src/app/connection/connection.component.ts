import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { TokenStorage } from '../core/token.storage';
import {AuthService } from '../core/auth.service';
import { MatDialog } from '@angular/material';
@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.css']
})
export class ConnectionComponent  {
  
  
  
  constructor( private router: Router,public dialog: MatDialog, private authService: AuthService, private token: TokenStorage) { }

  /* connectUser(){
     this.dataservice.connectUser(this.user.email, this.user.password).subscribe(connectUser => console.log(connectUser))
  }*/
  // getUserByMailAndPassword(){
  //   console.log( this.user.email)
  //   console.log( this.user.password)
    

  //   this.dataservice.getUserByMailAndPassword(this.user).subscribe(userToGet=> this.user = userToGet )
  // }

  username: string;
  password: string;
  

  login(): void {
    console.log(this.username, this.password);
    this.authService.attemptAuth(this.username, this.password).subscribe(
      data => {
        this.token.saveToken(data.token);
        console.log(this.token.getToken());
        this.router.navigate(['profil']);
      }
    );
}
  
}
