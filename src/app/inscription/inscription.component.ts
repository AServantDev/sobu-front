import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../services/dataservice.service';
import { User } from '../model/user';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  user = new User();
  constructor(private dataservice: DataserviceService) { }

  ngOnInit() {
  }

  newUser(){
    this.dataservice.createNewUser(this.user).subscribe(newUser => console.log(newUser))
  }
}
