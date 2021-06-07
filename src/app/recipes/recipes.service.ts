import { Injectable } from '@angular/core';

import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private recipes: Recipe[] = [
    {
      id: 'Item001',
      title: 'Sambar Rice',
      imageUrl: "https://4.bp.blogspot.com/-4709xAHdv9M/WFgqGnSHxoI/AAAAAAAACEs/yBs7-EXK3Rwu8urF-0zdJQxKwI7Sl7lFgCLcB/s1600/how%2Bto%2Bmake%2Bsambar%2Bsadam.JPG",
      ingredients: ['Rice', 'Sambar']
    },
    {
      id: 'Item002',
      title: 'Curd Rice',
      imageUrl: "https://www.vegrecipesofindia.com/wp-content/uploads/2016/07/curd-rice-2.jpg",
      ingredients: ['Rice', 'Curd']
    },
    {
      id: 'Item003',
      title: 'Rasam Rice',
      imageUrl: "https://s3-ap-south-1.amazonaws.com/betterbutterbucket-silver/subhashni-venkatesh15177622165a7736a8fd848.jpg",
      ingredients: ['Rice', 'Rasam']
    },
    {
      id: 'Item004',
      title: 'Ghee Rice',
      imageUrl: "https://www.ruchikrandhap.com/wp-content/uploads/2018/07/Ghee-Rice2-1.jpg",
      ingredients: ['Rice', 'Ghee']
    },
    {
      id: 'Item005',
      title: 'Lemon Rice',
      imageUrl: "https://www.flavourstreat.com/wp-content/uploads/2020/12/turmeric-lemon-rice-recipe-02.jpg",
      ingredients: ['Rice', 'Lemon']
    }

  ];


  constructor() { }

  getAllRecipes()
  {
    return [...this.recipes];
  }

  getRecipe(recipeId: string)
  {
    return {
      ...this.recipes.find(recipe => {
      return recipe.id === recipeId;
    })
    };
  }

  deleteRecipe(recipeId: string) {
    this.recipes = this.recipes.filter(recipe =>{
      return recipe.id !== recipeId;
    });
  }
}
