var todoForm = document.querySelector('.main-container');
var todoInput = document.querySelector('.form-control');

todoForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const id = movies.length > 0 ? movies[movies.length - 1].id+ 1: 0;
    const moviesTodo = {
        id, 
        title: todoInput.value, 
    } 
    movies.push(moviesTodo);
    todoInput.value = '';
    renderMovies(movies);
})

var moviesRow = document.querySelector('[data-element=movie-container]');

function cloneAndRender(movie) {
    let singleMovieTemplate = document.querySelector('#movie-item');
    let movieItemElClone = singleMovieTemplate.content.cloneNode(true);

    let movieImageEl = movieItemElClone.querySelector('[data-element=movie-img]');
    movieImageEl.src = movie.imageUrl;
    movieImageEl.style.height = '300px';
    movieImageEl.addEventListener('error', () => {
        movieImageEl.src = 'http://picsum.photos/200/200';
    })

    movieItemElClone.querySelector('[data-element=movie-id]').textContent = `id: ` + movie.id;
    movieItemElClone.querySelector('[data-element=movie-title]').textContent = `Title: ` + movie.title;
    movieItemElClone.querySelector('[data-element=movie-director]').textContent = `Director: ` + movie.director;
    // movieItemElClone.querySelector('[data-element=movie-actors]').textContent = `Actors:` + movie.actors;
    movieItemElClone.querySelector('[data-element=movie-description]').textContent = `Text: ` + movie.description.split(' ').slice(0, 20).join(' ') + '...';
    movieItemElClone.querySelector('[data-element=movie-year]').textContent = `Year: ` + movie.year;
    return movieItemElClone;
}
// renderMovies(movies, moviesRow);

var todoListEl = document.querySelector('.todo-list');
todoListEl.addEventListener('change', (evnet) => {

})
// var checkBoxChecked = document.querySelector('.todo-is-completed').checked = true

todoListEl.addEventListener('click', (event) => {
    if(event.target.dataset.task === 'delete') {
        console.log(`Deleted: ` + event.target.dataset.todoId);
        movies = movies.filter(movie => movie.id != event.target.dataset.todoId)
        renderTodos(movies, todoListEl);
        // if(event.target.checked){
        // }
    }
})

function createCloneTodo(todo) {
    let templateTodoEl = document.querySelector('#todo-item');
    let cloneTodoItem = templateTodoEl.content.cloneNode(true);
    
    cloneTodoItem.querySelector('.todo-id').textContent = 'id: ' + todo.id;
    cloneTodoItem.querySelector('.todo-title').textContent = todo.title;
    cloneTodoItem.querySelector('.todo-year').textContent = todo.year + '-y.';

    let deleteBtn = cloneTodoItem.querySelector('.todo-delete-btn');
    deleteBtn.dataset.todoId = todo.id;
    deleteBtn.dataset.task = 'delete';
    return cloneTodoItem;
}

renderTodos(movies, todoListEl);

//Pagination
var itemPerpage = 10;
var currentPage = 1;

renderTodos(movies, todoListEl);

var paginationEl = document.querySelector('.todo-pagination');

paginationEl.addEventListener('click', (event) => {
    console.log(event.target.dataset.pageId);
    if(event.target.dataset.task == 'page') {
        currentPage = event.target.dataset.pageId;
        renderTodos(movies, todoListEl)
        renderPagination()
    }
})

renderPagination();