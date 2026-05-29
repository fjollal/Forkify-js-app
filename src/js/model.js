import {async} from 'regenerator-runtime';
import {getJSON} from './helpers.js';
import { API_URL,RES_PER_PAGE } from './config.js';

export const state = {
  recipe: {},
  search:{
    query:'',
    results:[],
    page=1,
    resultsPerPage:RES_PER_PAGE,
  }
};

export const loadRecipe = async function (id) {
  try {
    const data = await getJSON(`${API_URL}${id}`);

    const { recipe } = data.data;
    state.recipe = {
      id: recipe.id,
      title: recipe.title,
      publisher: recipe.publisher,
      sourceUrl: recipe.source_url,
      image: recipe.image_url,
      servings: recipe.servings,
      cookingTime: recipe.cooking_time,
      ingredients: recipe.ingredients,
    };
  } catch (err) {
    throw err;
  }
};
export const LoadSearchResults=async function(query){
    try{
        state.search.query=query;
        const data=await getJSON(`${API_URL}?search=${query}`)

        state.search.results=data.data.recipes.map(rec=>{
            return{
                 id: recipe.id,
                title: recipe.title,
                publisher: recipe.publisher,
                sourceUrl: recipe.source_url,
                image: recipe.image_url,
            }
        });
        console.log(state.search.results);
    }catch(err){
        throw err;
    }
}
LoadSearchResults('pizza');

export const getSeachResultsPage=function(page=state.search.page){
    const start=(page-1)*state.search.resultsPerPage;
    const end=page*state.search.resultsPerPage-1;

    return state.search.results.slice(start,end);
}