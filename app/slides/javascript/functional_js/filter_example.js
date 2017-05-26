const array = [1, 2, 3, 4, 5]

function biggerThan3(num) {
    return num > 3;
}

const selectedNumbers = array.filter(biggerThan3)

selectedNumbers // [4, 5]
array // [1, 2, 3, 4, 5]

const books = [
    {
        name: "JavaScript: The Definitive Guide",
        description: `Since 1996, JavaScript: The Definitive Guide...`,
        price: 28.89
    },
    {
        name: "Eloquent JavaScript",
        description: `JavaScript lies at the heart...`,
        price: 21.22
    },
    {
        name: "JavaScript: The Good Parts",
        description: `Most programming languages...`,
        price: 16.59
    }
]

const expensiveBooks = books.filter(function(book) {
    return book.price > 20;
})

const titlesOfExpensiveBooks = books
    .filter(function(book) { return book.price > 20 })
    .map(function(book) { return book.name });

titlesOfExpensiveBooks // ["JavaScript: The Definitive Guide", "Eloquent JavaScript"]

