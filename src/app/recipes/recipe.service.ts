import { Injectable } from '@angular/core';
import { Recipe } from "./recipe";
import { Ingredient } from "./shared/ingredient";

@Injectable()
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe("Schnitzel", "Very Tasty", "https://upload.wikimedia.org/wikipedia/commons/a/ae/Wiener-Schnitzel02.jpg", [
      new Ingredient('French Fries', 2),
      new Ingredient('Pork Meat', 1)
    ]),
    new Recipe("Summer Salad", "Okayish", "http://thedivinemissmommy.com/wp-content/uploads/2012/07/ALDI-Summer-Salad-Watermelon-Feta-Mango-Raspberry-Dressing-e1341203561130.jpg", [
      new Ingredient('Tomato', 2),
      new Ingredient('Salad', 1)
    ]),
    new Recipe("Sushi", "Very Tasty", "http://img.tyt.by/n/afisha/03/a/obshchaya_kartinka_sushi.jpg", [
      new Ingredient('Fish', 2)
    ])
  ];

  constructor() { }

  getRecipes() {
    return this.recipes;
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }

  deleteRecipe(recipe: Recipe) {
    this.recipes.splice(this.recipes.indexOf(recipe), 1);
  }

}
