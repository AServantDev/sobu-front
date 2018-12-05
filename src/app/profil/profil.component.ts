import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { MatTableDataSource } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
import { DataserviceService } from '../services/dataservice.service';
import { AuthService } from '../core/auth.service';
import { TokenStorage } from '../core/token.storage';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  
  user : User; 
  
  displayedColumns = ['username', 'kcalPerDay', 'carbsPerDays', 'heigth', 'weight', 'fatsPerDay', 'protPerDay'];
  dataSource = new MatTableDataSource<User>();
  constructor(private route: ActivatedRoute, private router: Router, private dataService: DataserviceService, private token : TokenStorage) {
  }
  ngOnInit(): void {
   this.getUser();
   
   console.log(this.token.getToken());
  }


  getUser(): void {
    const id = 3;
    console.log(id);
    this.dataService.getUser(id).subscribe(user => this.user = user);
  }


//   public AccountModel GetUserClaims()
// {
//     var identityClaims = (ClaimsIdentity)User.Identity;
//     IEnumerable<Claim> claims = identityClaims.Claims;
//     AccountModel model = new AccountModel()
//     {
//         UserName = identityClaims.FindFirst("Username").Value,
//         Email = identityClaims.FindFirst("Email").Value,
//         FirstName = identityClaims.FindFirst("FirstName").Value,
//         LastName = identityClaims.FindFirst("LastName").Value,
//         LoggedOn = identityClaims.FindFirst("LoggedOn").Value
//     };
//     return model;
// }
  
}
