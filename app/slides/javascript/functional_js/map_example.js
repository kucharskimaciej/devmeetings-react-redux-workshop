const array = [1, 2, 3, 4, 5]

function squareNumber(num) {
    return num * num
}

const squared = array.map(squareNumber)

squared // [1, 4, 9, 16, 25]
array // [1, 2, 3, 4, 5]


const doubled = array.map(function(num) { return num * 2 }) // [2, 4, 6, 8, 10]


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

const titles = books.map(function(book) {
    return book.name;
})

titles // ["JavaScript: The Definitive Guide", "Eloquent JavaScript", "JavaScript: The Good Parts"]

