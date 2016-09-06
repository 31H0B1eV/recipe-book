/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { ShoppingListComponent } from './shopping-list.component';

describe('Component: ShoppingList', () => {
  it('should create an instance', () => {
    let component = new ShoppingListComponent();
    expect(component).toBeTruthy();
  });
});
