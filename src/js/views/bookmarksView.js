import View from './view.js';
import icons from 'url:../../img/icons.svg';

class BookmarksView extends View {
  _parentElementSelector = '.bookmarks__list';
  _errorMessage = 'No bookmarks yet. Find a nice recipe and bookmark it :)';
  _message = '';

  addHandlerRender(handler) {
    ['hashchange', 'load'].forEach(ev =>
      window.addEventListener(ev, handler)
    );
  }

  _generateMarkup() {
    return this._data
      .map(
        result => `
      <li class="preview">
        <a class="preview__link" href="#${result.id}">
          <figure class="preview__fig">
            <img src="${result.image}" alt="${result.title}" />
          </figure>
          <div class="preview__data">
            <h4 class="preview__title">
              ${result.title}
            </h4>
            <p class="preview__publisher">
              ${result.publisher}
            </p>
            ${
              result.key
                ? `<div class="preview__user-generated">
                <svg>
                  <use href="${icons}#icon-user"></use>
                </svg>
              </div>`
                : ''
            }
          </div>
        </a>
      </li>
    `
      )
      .join('');
  }
}

export default new BookmarksView();
