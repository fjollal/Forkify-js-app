class SearchView {
  _parentElementSelector = '.search';

  get _parentElement() {
    return document.querySelector(this._parentElementSelector);
  }

  getQuery() {
    const field = this._parentElement?.querySelector('.search__field');
    if (!field) return '';
    return field.value.trim();
  }

  clearInput() {
    const field = this._parentElement?.querySelector('.search__field');
    if (field) field.value = '';
  }

  addHandlerSearch(handler) {
    const form = this._parentElement;
    if (!form) return;

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      handler();
    });
  }
}

export default new SearchView();
