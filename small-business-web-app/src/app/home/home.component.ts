import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { Food } from '../shared/modules/food';
import { defineComponents, IgcRatingComponent } from 'igniteui-webcomponents'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  foods: Food[] = [];
  constructor(private foodService: FoodService) { }

  ngOnInit(): void {
    this.foods = this.foodService.getAll();
  }

}

defineComponents(IgcRatingComponent);
