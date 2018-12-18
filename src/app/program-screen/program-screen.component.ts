import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../services/dataservice.service';
import { ShredProgram } from '../model/shredProgram';
import { User } from '../model/user';
import { BuildProgram } from '../model/buildProgram';
import { Token } from '@angular/compiler';
import { TokenStorage } from '../core/token.storage';
import {AuthService } from '../core/auth.service';

@Component({
  selector: 'app-program-screen',
  templateUrl: './program-screen.component.html',
  styleUrls: ['./program-screen.component.css']
})
export class ProgramScreenComponent implements OnInit {
  shred = new ShredProgram();
  build =new BuildProgram();

  user: User;
  username: String;
  test: string;
  
  constructor(private dataService: DataserviceService,private authService: AuthService, private token: TokenStorage) { }

  ngOnInit() {

    this.getUser();
  }

  getUser(): void {
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const username = currentUser.username;
    console.log(username);
    this.dataService.getUserByUsername(username).subscribe(user => this.user = user);
  }

  getToken(){
    this.test = localStorage.getItem("token");
    console.log(this.test)

  }

  subscribeShred(){
    this.dataService.subscribeShred(this.user.id, this.shred).subscribe(newShred => console.log(newShred))
  }

  subscribeBuild(){
    this.dataService.subscribeBuild(this.user.id, this.build).subscribe(newBuild => console.log(newBuild))
  }

}
