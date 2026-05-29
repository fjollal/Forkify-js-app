import * as model from './model.js';
import recipeView from './views/recipeView.js';
import 'core-js/stable';
import 'regenerator-runtime/runtime';

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

const init = function () {
  recipeView.addHandlerRender(controlRecipes);
};

init();

