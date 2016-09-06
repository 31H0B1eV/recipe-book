/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { RecipeListComponent } from './recipe-list.component';

describe('Component: RecipeList', () => {
  it('should create an instance', () => {
    let component = new RecipeListComponent();
    expect(component).toBeTruthy();
  });
});
