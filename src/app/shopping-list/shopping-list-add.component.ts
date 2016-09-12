import { Component, Input, OnChanges } from '@angular/core';
import { Ingredient } from "../recipes/shared/ingredient";
import { ShoppingListService } from "./shopping-list.service";

@Component({
  selector: 'rb-shopping-list-add',
  templateUrl: 'shopping-list-add.component.html',
  styles: []
})
export class ShoppingListAddComponent implements OnChanges {

  @Input() item: Ingredient;
  isAdd = true;

  constructor(private sls: ShoppingListService) { }

  ngOnChanges(changes): void {
    this.isAdd = changes.item.currentValue === null;
  }

  onSubmit(ingredient: Ingredient) {
    if(!this.isAdd) {

    } else {
      this.item = new Ingredient(ingredient.name, ingredient.amount);
      this.sls.addItem(this.item);
    }
  }

}
