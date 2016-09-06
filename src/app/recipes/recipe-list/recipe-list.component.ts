import {Component, Output, EventEmitter} from '@angular/core';
import {Recipe} from "../recipe";

@Component({
  selector: 'rb-recipe-list',
  templateUrl: 'recipe-list.component.html'
})
export class RecipeListComponent {

  recipes: Recipe[] = [
    new Recipe("Schnitzel", "Very Tasty", "https://upload.wikimedia.org/wikipedia/commons/a/ae/Wiener-Schnitzel02.jpg", []),
    new Recipe("Summer Salad", "Okayish", "http://thedivinemissmommy.com/wp-content/uploads/2012/07/ALDI-Summer-Salad-Watermelon-Feta-Mango-Raspberry-Dressing-e1341203561130.jpg", [])
  ];

  @Output() recipeSelected = new EventEmitter<Recipe>();

  onSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe)
  }
}
