const bookName = document.querySelector('#bookname');
const author = document.querySelector('#author');
const year = document.querySelector('#year');
const btn = document.querySelector('.btn');
const bookList = document.querySelector('#bookList');

btn.addEventListener('click',function (form) {
    form.preventDefault();
    console.log('hello world');
    if (bookName.value === '' || author.value === '' || year.value === '') {
        alert('fill up all field');
    } else {
        const newRow = document.createElement('tr');

        const newBookName = document.createElement('td');
        newBookName.innerHTML = bookName.value;
        newRow.appendChild(newBookName);

        const newAuthorName = document.createElement('td');
        newAuthorName.innerHTML = author.value;
        newRow.appendChild(newAuthorName);

        const newYear = document.createElement('td');
        newYear.innerHTML = year.value;
        newRow.appendChild(newYear);
        
        bookList.appendChild(newRow);
        
    }
});
