function renderTodos(todos=[], node) {
    node.innerHTML = null;
    movies.slice(itemPerpage * (currentPage - 1), currentPage * itemPerpage).forEach((todo) => {
        node.appendChild(createCloneTodo(todo));
    });
};


function renderPagination() {
    paginationEl.innerHTML = null;
    for(let i=1; i<= Math.ceil(movies.length / itemPerpage); i++) {
        let templatePageItem = document.querySelector('#pagination-item');
        let pageItem = templatePageItem.content.cloneNode(true);

        let itemEl = pageItem.querySelector('.page-item');
        if(i == currentPage) {
            itemEl.classList.add('active');
        }else{
            itemEl.classList.remove('active');
        }

        let linkEl = pageItem.querySelector('.page-link');
        linkEl.textContent = i;
        linkEl.dataset.pageId = i;
        linkEl.dataset.task = 'page';
        paginationEl.appendChild(pageItem);
    }
}
function renderMovies(movies=[], node) {
    node.innerHTML = null;

    movies.forEach((movie) => {
        let movieItemEl =  cloneAndRender(movie);
        node.appendChild(movieItemEl);
    })
};