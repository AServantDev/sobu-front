import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataserviceService } from '../services/dataservice.service';
import { Food } from '../model/food';

@Component({
  selector: 'app-food-detail',
  templateUrl: './food-detail.component.html',
  styleUrls: ['./food-detail.component.css']
})
export class FoodDetailComponent implements OnInit {

  food: Food;

  constructor(private route: ActivatedRoute, private dataService: DataserviceService) { }

  ngOnInit() {
    this.getOneFood();
  }

  getOneFood(){
    const idFood = +this.route.snapshot.paramMap.get("idFood");
    this.dataService.getFood(idFood).subscribe(food => this.food = food )
  }

}
