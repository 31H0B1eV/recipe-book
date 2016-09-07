import { Ingredient } from "../recipes/shared/ingredient";

export class ShoppingListService {

  private items: Ingredient[];

  constructor() { }

  getItems() {
    return this.items;
  }

  addItems(items: Ingredient[]) {
    /* pushing multiple items into array */
    Array.prototype.push.apply(this.items, items);
  }
}
