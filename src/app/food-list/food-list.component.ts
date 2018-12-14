import { Component, OnInit, Renderer2 } from "@angular/core";
import { Food } from "../model/food";
import { DataserviceService } from "../services/dataservice.service";

@Component({
  selector: "app-food-list",
  templateUrl: "./food-list.component.html",
  styleUrls: ["./food-list.component.css"]
})
export class FoodListComponent implements OnInit {
  foods: Food[];
  food = new Food();

  constructor(private dataService: DataserviceService, private renderer: Renderer2) {
    renderer.listen('document', 'submit', () => this.getFoods());
  }
  

  ngOnInit() {
    this.getFoods();
  }

  getFoods(): void {
    this.dataService.getFoods().subscribe(foods => (this.foods = foods));
  }
  newFood(){
    this.dataService.createNewFood(this.food).subscribe(newFood => console.log(newFood))
  }
}
