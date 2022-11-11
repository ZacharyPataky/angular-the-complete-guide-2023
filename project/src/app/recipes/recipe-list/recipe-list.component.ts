import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('Test Recipe Title - 1', 'Test Recipe Description - 1', 'https://cdn.loveandlemons.com/wp-content/uploads/2020/03/pantry-recipes-2.jpg'),
    new Recipe('Test Recipe Title - 2', 'Test Recipe Description - 2', 'https://cdn.loveandlemons.com/wp-content/uploads/2020/03/pantry-recipes-2.jpg'),
    new Recipe('Test Recipe Title - 3', 'Test Recipe Description - 3', 'https://cdn.loveandlemons.com/wp-content/uploads/2020/03/pantry-recipes-2.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
    // Empty
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
