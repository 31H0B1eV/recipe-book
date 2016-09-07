import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Recipe } from "../recipe";
import { RecipeService } from "../recipe.service";

@Component({
  selector: 'rb-recipe-list',
  templateUrl: 'recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [];

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
  }

  @Output() recipeSelected = new EventEmitter<Recipe>();

  onSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe)
  }
}
