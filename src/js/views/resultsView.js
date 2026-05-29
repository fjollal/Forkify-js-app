import View from './view.js';

class resultsView extends View{
    _parentElement=document.querySelector('.results');
    _errorMessage='No recipes were found for your query.Please try again.'
    _message='Successfully loaded recipe.';

    _generateMarkup(){
        return this._data.map(this._generateMarkUpPreview).join('');

    }
    _generateMarkUpPreview(results){
        return`
            <li class="preview">
                    <a class="preview__link" href="#${results.id}">
                      <figure class="preview__fig">
                        <img src="${results.image}" alt="${results.title}" />
                      </figure>
                      <div class="preview__data">
                        <h4 class="preview__name">
                          ${results.title}
                        </h4>
                        <p class="preview__author">
                          ${results.publisher}
                        </p>
                      </div>
                    </a>
             </li>
        `;
    }
}

export default new resultsviews();