import * as model from './model.js';
import recipeView from './views/recipeView.js';
import searchViews from './views/recipeView.js'
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import resultsView from './views/resultsView.js';

if(module.hot){
  module.hot.accept();
}



const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);
    if (!id) return;

    recipeView.renderSpinner();

    //Loading recipe
    await model.loadRecipe(id);

      //Rendering recipe
    recipeView.render(model.state.recipe);
  } catch (err) {
    console.error(err);
    recipeView.renderError(`${err.message}`);
  }
};

const controlSearchResults=async function(){
  try{
    resultsView.renderSpinner();
    //Get search query
    const query=searchViews.getQuery();

    if(!query) return;

    //Load search results
    await model.LoadSearchResults(query);

    //Render results
    console.log(model.state.search.results);
    resultsView.render(model.state.search.results);
  }catch(err){
    throw err;
  }
}
controlSearchResults();


const init = function () {
  recipeView.addHandlerRender(controlRecipes);
  searchView.addHandlerSearch(controlSearchResults)
};

init();

