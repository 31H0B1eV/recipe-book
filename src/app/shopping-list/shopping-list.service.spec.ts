/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { ShoppingListService } from './shopping-list.service';

describe('Service: ShoppingList', () => {
  beforeEach(() => {
    addProviders([ShoppingListService]);
  });

  it('should ...',
    inject([ShoppingListService],
      (service: ShoppingListService) => {
        expect(service).toBeTruthy();
      }));
});
