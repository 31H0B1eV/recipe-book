import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from "@angular/core";

import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { RecipesComponent } from "./recipes/recipes.component";
import { RECIPE_ROUTES } from "./recipes/recipe.routes";

const appRoutes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  { path: 'recipes', component: RecipesComponent, children: RECIPE_ROUTES },
  { path: 'shopping-list', component: ShoppingListComponent }
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);