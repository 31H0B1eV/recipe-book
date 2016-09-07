import { Injectable } from '@angular/core';
import { Recipe } from "./recipe";

@Injectable()
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe("Schnitzel", "Very Tasty", "https://upload.wikimedia.org/wikipedia/commons/a/ae/Wiener-Schnitzel02.jpg", []),
    new Recipe("Summer Salad", "Okayish", "http://thedivinemissmommy.com/wp-content/uploads/2012/07/ALDI-Summer-Salad-Watermelon-Feta-Mango-Raspberry-Dressing-e1341203561130.jpg", [])
  ];

  constructor() { }

  getRecipes() {
    return this.recipes;
  }

}
