
async function main() {

    let response = await fetch('http://localhost:3001/listBooks')
    let books = await response.json()

    books.forEach(renderBookForm)
}

function renderBookForm(book) {
    let bookForm = document.querySelector('.container')
    // creating list item, setting text for Li to be the book title
    let bookLi = document.createElement('li')
    bookLi.textContent = book.title
    // creating textbox using input element setting value into book qty
    let bookQuantity = document.createElement('input')
    bookQuantity.value = book.quantity
    // appendng textbox to li
    bookLi.append(bookQuantity)

    let saveButton = document.createElement('button')
    saveButton.textContent = 'Save'

    // adding an event listener to save button
    saveButton.addEventListener('click',() => {
        let response = fetch('http://localhost:3001/updateBook',{
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                id: book.id, 
                quantity: bookQuantity.value
            })
        })
        console.log(response)
    })
    bookLi.append(saveButton)
    // append li to the book form (div)
    bookForm.append(bookLi)

}

main()

// --------------------

// Retrieve a list of books from the server
// let response = await fetch('http://127.0.0.1:3000/listBooks'

// )

// Display a list of book titles to the admin


// Place a text input next to each book title