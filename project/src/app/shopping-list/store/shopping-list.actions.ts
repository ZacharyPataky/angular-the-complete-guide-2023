import { Action } from '@ngrx/store';
import { Ingredient } from 'src/app/shared/ingredient.model';

export const ADD_INGREDIENT = 'ADD_INGREDIENT';
export class addIngredient implements Action {
  readonly type = ADD_INGREDIENT;
  payload: Ingredient;
};
