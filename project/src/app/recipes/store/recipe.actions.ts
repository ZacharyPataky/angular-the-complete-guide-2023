import { Action } from "@ngrx/store";
import { Recipe } from "../recipe.model";

export type RecipesActions =
  | SetRecipes
  | FetchRecipes;

export const SET_RECIPES = '[Recipes] Set Recipes';
export const FETCH_RECIPES = '[Recipes] Fetch Recipes';

export class SetRecipes implements Action {
  readonly type = SET_RECIPES;
  constructor(
    public payload: Recipe[]
  ) { }
}

export class FetchRecipes implements Action {
  readonly type = FETCH_RECIPES;
}
