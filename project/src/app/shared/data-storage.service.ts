import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor(
    private http: HttpClient,
    private recipeService: RecipeService
  ) { }

  storeRecipes(): void {
    const recipes = this.recipeService.getRecipes();
    this.http.put(
      'https://ng-course-recipe-book-38956-default-rtdb.firebaseio.com/recipes.json',
      recipes
    ).subscribe(response => {
      console.log(response);
    });
  }

  fetchRecipes(): void {
    this.http.get<Recipe[]>('https://ng-course-recipe-book-38956-default-rtdb.firebaseio.com/recipes.json')
      .subscribe(recipes => {
        this.recipeService.setRecipes(recipes);
      });
  }

}
