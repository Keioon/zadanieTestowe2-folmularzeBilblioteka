// import Book from './components/Book.js';

const appStart = () => {
  let booksList = [];
  const bookElem = document.querySelector('.bookForm');
  const initData = () => {
    if (JSON.parse(localStorage.getItem('myData')) !== null) {
      booksList = JSON.parse(localStorage.getItem('myData'));
      console.log(`Fetch 'myData' from localstorage`);
    } else {
      console.log(`There is no 'myData' to download in localstorage`);
    }

    createTable(booksList);
  };
  
  const addBook = () => {
    document.querySelector('.addBtn').addEventListener('click', (e) => {
      e.preventDefault();
      const book = {};
      book.title = bookElem.querySelector('input[ name="title"]').value;
      book.autor = bookElem.querySelector('input[ name="autor"]').value;
      book.priority = bookElem.querySelector('input[ name="priority"]').value;
      book.type = bookElem.querySelector('select').value;
      if(book.title.length < 1 || book.autor.length < 3 || book.priority < 0 || book.priority > 5) {
        window.alert('You dont gived title or autor or priority');
      } else {
        booksList.push(book);
        localStorage.setItem('myData', JSON.stringify(booksList));
        createTable(book);
      }
      
      bookElem.querySelector('input[ name="title"]').value = '';
      bookElem.querySelector('input[ name="autor"]').value = '';
      bookElem.querySelector('input[ name="priority"]').value = '';
    });
  };

  const createTable = (list) => {
    let li = list;
    const booksTab = document.querySelector('.booksTable');

    const elemCreate = (li) => {
      const tr = document.createElement('tr');
      const title = document.createElement('td');
      title.innerHTML = li.title;
      const autor = document.createElement('td');
      autor.innerHTML = li.autor;
      const priority = document.createElement('td');
      priority.innerHTML = li.priority;
      const type = document.createElement('td');
      type.innerHTML = li.type;
      tr.appendChild(title);
      tr.appendChild(autor);
      tr.appendChild(priority);
      tr.appendChild(type);
      booksTab.appendChild(tr);
    };


    if(list.length > 1) {
      list.forEach(elem => {
        console.log(elem);
        elemCreate(elem);
      });
    } else if(li.length == 1) {
      console.log(li[0]);
      elemCreate(li[0]);
    } else if(li != '') {
      console.log(li);
      elemCreate(li);
    } 
  };

  addBook();
  initData();
};

appStart();