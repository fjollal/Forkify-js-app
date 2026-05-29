import { getJSON, sendJSON } from './helpers.js';
import { API_URL, RES_PER_PAGE, KEY } from './config.js';

export const state = {
  recipe: {},
  search: {
    query: '',
    results: [],
    page: 1,
    resultsPerPage: RES_PER_PAGE,
  },
  bookmarks: [],
};

const createRecipeObject = function (data) {
  const { recipe } = data.data;
  return {
    id: recipe.id,
    title: recipe.title,
    publisher: recipe.publisher,
    sourceUrl: recipe.source_url,
    image: recipe.image_url,
    servings: recipe.servings,
    cookingTime: recipe.cooking_time,
    ingredients: recipe.ingredients,
    ...(recipe.key ? { key: recipe.key } : {}),
  };
};

export const loadRecipe = async function (id) {
  const data = await getJSON(`${API_URL}${id}`);
  state.recipe = createRecipeObject(data);
};

export const loadSearchResults = async function (query) {
  state.search.query = query;
  state.search.page = 1;

  const data = await getJSON(
    `${API_URL}?search=${encodeURIComponent(query)}`
  );

  if (!data?.data?.recipes) throw new Error('Invalid API response');

  state.search.results = data.data.recipes.map(rec => ({
    id: rec.id,
    title: rec.title,
    publisher: rec.publisher,
    image: rec.image_url,
  }));
};

export const getSearchResultsPage = function (page = state.search.page) {
  state.search.page = page;

  const start = (page - 1) * state.search.resultsPerPage;
  const end = page * state.search.resultsPerPage;

  return state.search.results.slice(start, end);
};

export const updateServings = function (newServings) {
  state.recipe.ingredients.forEach(ing => {
    ing.quantity = (ing.quantity * newServings) / state.recipe.servings;
  });

  state.recipe.servings = newServings;
};

export const addBookmark = function (recipe) {
  if (state.bookmarks.some(b => b.id === recipe.id)) return;
  state.bookmarks.push(recipe);
  persistBookmarks();
};

export const deleteBookmark = function (id) {
  const index = state.bookmarks.findIndex(el => el.id === id);
  if (index === -1) return;
  state.bookmarks.splice(index, 1);
  persistBookmarks();
};

const persistBookmarks = function () {
  localStorage.setItem('bookmarks', JSON.stringify(state.bookmarks));
};

export const initBookmarks = function () {
  const storage = localStorage.getItem('bookmarks');
  if (storage) state.bookmarks = JSON.parse(storage);
};

export const setBookmarked = function () {
  if (!state.recipe.id) return;
  state.recipe.bookmarked = state.bookmarks.some(
    b => b.id === state.recipe.id
  );
};

export const uploadRecipe = async function (newRecipe) {
  if (!KEY)
    throw new Error(
      'Add your API key in src/js/config.js — get one free at https://forkify-api.jonas.io/v2'
    );

  const data = await sendJSON(`${API_URL}?key=${KEY}`, newRecipe);
  state.recipe = createRecipeObject(data);
  addBookmark(state.recipe);
};
