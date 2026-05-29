import {async} from 'regenerator-runtime';
import icons from 'url:../../img/icons.svg';

class PagiantionView extends View{
    _parentElement=document.querySelector('.pagination');

    addHandlerClick(handler){
        _this._parentElement.addEventListener('click',function(e){
            const btn=e.target.closest('.btn--inline')
        })
        const goToPage=btn.dataset.goto;

        if(!btn) return;
        handler();
    }

    _generateMarkup(){
        const currentPage=this._data.page;
        const numPages=Math.ceil(this._data.results.length/this._data.resultsPerPage);

        if(this._data.page===1 && numPages>1){
            return `
            <button data-goto="${currentPage + 1}" class="btn--inline pagination__btn--next">
            <span>Page ${currentPage + 1}</span>
            <svg class="search__icon">
            <use href="src/img/${icons}#icon-arrow-right"></use>
            </svg>
            </button>
            `
        }

        if(this._data.page===numPages && numPages>1){
            return `
                <button class="btn--inline pagination__btn--prev">
                    <svg class="search__icon">
                    <use href="src/img/${icons}#icon-arrow-left"></use>
                    </svg>
                    <span>Page ${currentPage - 1}</span>
                </button>
            `
        }

        if(this._data.page<numPages){
            return `
            <button class="btn--inline pagination__btn--next">
                <span>Page ${currentPage + 1}</span>
                <svg class="search__icon">
                <use href="src/img/${icons}#icon-arrow-right"></use>
                </svg>
             </button>
             <button class="btn--inline pagination__btn--prev">
                <svg class="search__icon">
                <use href="src/img/${icons}#icon-arrow-left"></use>
                </svg>
                <span>Page ${currentPage - 1}</span>
            </button>
            `
        }
        return ``;
    }
}

export default new PagiantionView();