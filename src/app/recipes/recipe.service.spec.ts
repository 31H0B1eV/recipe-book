/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { RecipeService } from './recipe.service';

describe('Service: Recipe', () => {
  beforeEach(() => {
    addProviders([RecipeService]);
  });

  it('should ...',
    inject([RecipeService],
      (service: RecipeService) => {
        expect(service).toBeTruthy();
      }));
});
