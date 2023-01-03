import { Action } from '@ngrx/store';
import { Ingredient } from 'src/app/shared/ingredient.model';

export type ShoppingListActions =
  | AddIngredient
  | AddIngredients
  | UpdateIngredient
  | DeleteIngredient;

export const ADD_INGREDIENT = 'ADD_INGREDIENT';
export class AddIngredient implements Action {
  readonly type = ADD_INGREDIENT;
  // payload: Ingredient;

  constructor(
    public payload: Ingredient
  ) { }
};

export const ADD_INGREDIENTS = 'ADD_INGREDIENTS';
export class AddIngredients implements Action {
  readonly type = ADD_INGREDIENTS;

  constructor(
    public payload: Ingredient[]
  ) { }
}

export const UPDATE_INGREDIENT = 'UPDATE_INGREDIENT';
export class UpdateIngredient implements Action {
  readonly type = UPDATE_INGREDIENT;

  constructor(
    public payload: {
      index: number,
      ingredient: Ingredient
    }
  ) { }
}

export const DELETE_INGREDIENT = 'DELETE_INGREDIENT';
export class DeleteIngredient implements Action {
  readonly type = DELETE_INGREDIENT;

  constructor(
    public payload: number
  ) { }
}
