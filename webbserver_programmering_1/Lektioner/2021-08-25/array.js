// a + b = c
// let a = 4
// let b = 5
// let c = a + b
//
// console.log('c = ', c)
//
// let numberOfBooks = 4
// let price = 124
// let sum = numberOfBooks * price
// console.log('sum = ', sum)

// index    [0  1  2]
// 3 böcker, 2, 4, 5
let books = [2, 4, 5]
let price2 = [59, 29, 34]

function multiplyBooksWithPrice(index) {
    return books[index] * price2[index]
}

for (let index = 0; index < books.length; index++) {
    console.log(multiplyBooksWithPrice(index))
}

function calculateTotalPrice() {
    let sum = 0
    for (let i = 0; i < books.length; i++) {
        sum += multiplyBooksWithPrice(i)
    }
    return sum
}

console.log(calculateTotalPrice())

// console.log(multiplyBooksWithPrice(1))
// console.log(multiplyBooksWithPrice(2))
// console.log(books[1] * price2[1])
// console.log(books[2] * price2[2])
