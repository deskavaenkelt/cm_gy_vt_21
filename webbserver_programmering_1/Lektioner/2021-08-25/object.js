let person = {
    name: 'Lars',
    city: 'Göteborg',
    children: ['barn 1', 'barn 2'],
    allInfo: function () {
        return this.name + ' bor i ' + this.city
    }
}

console.log(person)
console.log('person.name =', person.name)
console.log('person.city =', person.city)
console.log('person.allInfo() =', person.allInfo())
console.log('person.children[0] =', person.children[0])
console.log('person.children[1] =', person.children[1])

console.log('----------------------------------')

let persons = [
    {
        name: 'Lars',
        city: 'Göteborg'
    },
    {
        name: 'Marcus',
        city: 'Lilla Edet'
    }
]

console.log('persons =', persons)
console.log('persons[0] =', persons[0])
console.log('persons[1] =', persons[1])
console.log('persons[1].name =', persons[1].name)
