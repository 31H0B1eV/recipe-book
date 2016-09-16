import { Injectable } from '@angular/core';
import { Recipe } from "./recipe";
import { Ingredient } from "./shared/ingredient";
import { Headers, Http } from "@angular/http";

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
    ]),
    new Recipe("Barbecue", "Very Tasty", "http://i2.cdn.turner.com/cnnnext/dam/assets/151110103345-bbq-franklin-austin-texas-super-169.jpg", [
      new Ingredient('Bow', 1),
      new Ingredient('Meat', 10)
    ])
  ];

  constructor(private http: Http) { }

  getRecipes() {
    return this.recipes;
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }

  deleteRecipe(recipe: Recipe) {
    this.recipes.splice(this.recipes.indexOf(recipe), 1);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
  }

  editRecipe(oldRecipe: Recipe, newRecipe: Recipe) {
    this.recipes[this.recipes.indexOf(oldRecipe)] = newRecipe;
  }

  storeData() {
    const body = JSON.stringify(this.recipes);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.post('https://recipebook-a3ce3.firebaseio.com/recipes.json', body, {headers: headers});
  }

  fetchData() {

  }
}
