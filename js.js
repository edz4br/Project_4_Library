let myLibrary = []
let addInput = document.querySelectorAll('input')
let addButton = document.querySelector('.add')
let checkbox = document.getElementById('checkbox')

//

function Book(name, author, pages) {
    name: name
    author: author
    pages: pages
    return { name, author, pages }
}

function addBookToLibrary(name, author, pages) {
    myLibrary.push(Book(name, author, pages))
}

function createBookInPage() {
    let list = document.querySelector('.bookList')
    let deleteButton = document.createElement('button')
    deleteButton.textContent = 'Remove'
    deleteButton.classList.add('delete')
    let readButton = document.createElement('button')
    readButton.classList.add('read')
    readButton.classList.add('unread')
    if(checkbox.checked === true){
        readButton.textContent = 'Read'
        readButton.classList.toggle('unread')
    }else if(checkbox.checked === false){
        readButton.textContent = 'Not read'
    }
    let value = myLibrary[myLibrary.length - 1]
    let book = document.createElement('div')
    book.classList.add('book')
    let name = document.createElement('p')
    let author = document.createElement('p')
    let pages = document.createElement('p')
    name.textContent = "Name: " + value.name
    author.textContent = "Author: " + value.author
    pages.textContent = "Nº of pages: " + value.pages
    book.appendChild(name)
    book.appendChild(author)
    book.appendChild(pages)
    book.appendChild(readButton)
    book.appendChild(deleteButton)
    list.appendChild(book)
    readButton.addEventListener('click', () => {
        if(readButton.textContent === 'Read'){
            readButton.textContent = 'Not Read'
            readButton.classList.toggle('unread')
        }else{
            readButton.textContent = 'Read'
            readButton.classList.toggle('unread')
        }
    })
    deleteButton.addEventListener('click', () => {
        book.remove()
    })
}

addButton.addEventListener('click', () => {
    let name = document.querySelector('#name')
    let author = document.querySelector('#author')
    let pages = document.querySelector('#pages')
    if (name.value === '' || author.value === '' || pages.value === 0 || pages.value === '') {
        return alert("Fill all the boxes.")
    }
    if (isNaN(pages.value)) {
        return alert('Invalid info on pages box.')
    }
    addBookToLibrary(name.value, author.value, pages.value)
    createBookInPage()
    name.value = ''
    author.value = ''
    pages.value = ''
    checkbox.checked = false
})

//