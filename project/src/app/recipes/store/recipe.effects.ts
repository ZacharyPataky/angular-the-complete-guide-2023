import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { map, switchMap } from "rxjs/operators";
import { Recipe } from "../recipe.model";

import * as RecipesActions from './recipe.actions';

@Injectable()
export class RecipeEffects {

  @Effect()
  fetchRecipes = this.actions$
    .pipe(
      ofType(RecipesActions.FETCH_RECIPES),
      switchMap(fetchAction => {
        return this.http.get<Recipe[]>(
          'https://ng-course-recipe-book-38956-default-rtdb.firebaseio.com/recipes.json'
        )
      }),
      map(recipes => {
        return recipes.map(recipe => {
          return {
            ...recipe,
            ingredients: recipe.ingredients ? recipe.ingredients : []
          };
        });
      }),
      map(recipes => {
        return new RecipesActions.SetRecipes(recipes);
      })
    );

  constructor(
    private actions$: Actions,
    private http: HttpClient
  ) { }

}
