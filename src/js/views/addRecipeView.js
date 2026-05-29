import icons from 'url:../../img/icons.svg';

class AddRecipeView {
  _windowSelector = '.add-recipe-window';
  _overlaySelector = '.overlay';
  _openSelector = '.nav__btn--add-recipe';
  _closeSelector = '.btn--close-modal';
  _formSelector = '.upload';

  get _window() {
    return document.querySelector(this._windowSelector);
  }

  get _overlay() {
    return document.querySelector(this._overlaySelector);
  }

  get _form() {
    return this._window?.querySelector(this._formSelector);
  }

  toggleWindow() {
    this._window?.classList.toggle('hidden');
    this._overlay?.classList.toggle('hidden');
  }

  addHandlerOpenWindow() {
    document.querySelector(this._openSelector)?.addEventListener('click', () => {
      this.toggleWindow();
    });
    document.querySelector(this._closeSelector)?.addEventListener('click', () => {
      this.toggleWindow();
    });
    this._overlay?.addEventListener('click', () => this.toggleWindow());
  }

  addHandlerUpload(handler) {
    this._form?.addEventListener('submit', function (e) {
      e.preventDefault();
      handler();
    });
  }

  getRecipe() {
    const dataArr = [...this._form.querySelectorAll('input')].map(el => el.value);

    const ingredients = dataArr
      .slice(6)
      .map(ing => {
        const ingArr = ing.split(',').map(el => el.trim());
        if (!ingArr[2]) return null;

        return {
          quantity: ingArr[0] ? +ingArr[0] : null,
          unit: ingArr[1] || '',
          description: ingArr[2],
        };
      })
      .filter(ing => ing !== null);

    return {
      title: dataArr[0],
      source_url: dataArr[1],
      image_url: dataArr[2],
      publisher: dataArr[3],
      cooking_time: +dataArr[4],
      servings: +dataArr[5],
      ingredients,
    };
  }

  renderSpinner() {
    this._clearStatus();
    this._window?.insertAdjacentHTML(
      'beforeend',
      `
      <div class="spinner upload-spinner">
        <svg><use href="${icons}#icon-loader"></use></svg>
      </div>
    `
    );
  }

  renderError(message) {
    this._clearStatus();
    this._window?.insertAdjacentHTML(
      'beforeend',
      `
      <div class="error upload-error">
        <div>
          <svg><use href="${icons}#icon-alert-triangle"></use></svg>
        </div>
        <p>${message}</p>
      </div>
    `
    );
  }

  renderMessage(message) {
    this._clearStatus();
    this._window?.insertAdjacentHTML(
      'beforeend',
      `
      <div class="message upload-message">
        <div>
          <svg><use href="${icons}#icon-smile"></use></svg>
        </div>
        <p>${message}</p>
      </div>
    `
    );
  }

  clearStatus() {
    this._clearStatus();
  }

  _clearStatus() {
    this._window
      ?.querySelectorAll('.upload-spinner, .upload-error, .upload-message')
      .forEach(el => el.remove());
  }
}

export default new AddRecipeView();
