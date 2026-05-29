import * as model from './model.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import resultsView from './views/resultsView.js';
import paginationView from './views/paginationView.js';
import bookmarksView from './views/bookmarksView.js';
import addRecipeView from './views/addRecipeView.js';
import 'core-js/stable';
import 'regenerator-runtime/runtime';

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);
    if (!id) return;

    recipeView.renderSpinner();
    await model.loadRecipe(id);
    model.setBookmarked();
    recipeView.render(model.state.recipe);

    if (model.state.search.results.length)
      resultsView.render(model.getSearchResultsPage());
  } catch (err) {
    console.error(err);
    recipeView.renderError(err.message);
  }
};

const controlSearchResults = async function () {
  const query = searchView.getQuery();

  if (!query) {
    resultsView.renderMessage('Please type a recipe name or ingredient.');
    return;
  }

  try {
    resultsView.renderSpinner();
    recipeView.renderSpinner();

    await model.loadSearchResults(query);

    if (!model.state.search.results.length) {
      resultsView.renderError();
      recipeView.renderMessage();
      return;
    }

    resultsView.render(model.getSearchResultsPage());
    paginationView.render(model.state.search);

    const firstId = model.state.search.results[0].id;
    await model.loadRecipe(firstId);
    model.setBookmarked();
    recipeView.render(model.state.recipe);

    window.location.hash = firstId;
    resultsView.render(model.getSearchResultsPage());
    searchView.clearInput();
  } catch (err) {
    console.error(err);
    resultsView.renderError(err.message);
    recipeView.renderError(err.message);
  }
};

const controlPagination = function (goToPage) {
  resultsView.render(model.getSearchResultsPage(goToPage));
  paginationView.render(model.state.search);
};

const controlServings = function (newServings) {
  model.updateServings(newServings);
  recipeView.update(model.state.recipe);
};

const controlBookmarks = function () {
  bookmarksView.render(model.state.bookmarks);
};

const controlAddBookmark = function () {
  if (!model.state.recipe.id) return;

  if (model.state.bookmarks.some(b => b.id === model.state.recipe.id))
    model.deleteBookmark(model.state.recipe.id);
  else model.addBookmark(model.state.recipe);

  model.setBookmarked();
  bookmarksView.render(model.state.bookmarks);
  recipeView.render(model.state.recipe);
};

const controlAddRecipe = async function () {
  try {
    addRecipeView.renderSpinner();

    const newRecipe = addRecipeView.getRecipe();
    await model.uploadRecipe(newRecipe);

    addRecipeView.clearStatus();
    addRecipeView.toggleWindow();

    model.setBookmarked();
    recipeView.render(model.state.recipe);
    bookmarksView.render(model.state.bookmarks);

    window.location.hash = model.state.recipe.id;
  } catch (err) {
    console.error(err);
    addRecipeView.renderError(err.message);
  }
};

const init = function () {
  bookmarksView.addHandlerRender(controlBookmarks);
  recipeView.addHandlerRender(controlRecipes);
  recipeView.addHandlerUpdateServings(controlServings);
  recipeView.addHandlerBookmark(controlAddBookmark);
  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addHandlerClick(controlPagination);
  addRecipeView.addHandlerOpenWindow();
  addRecipeView.addHandlerUpload(controlAddRecipe);

  model.initBookmarks();
  bookmarksView.render(model.state.bookmarks);
  resultsView.renderMessage();
};

init();
