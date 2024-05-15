interface mango {
    name: string,
    age: number,
    email: string,
    address?: {
        city: 'New York',
        country: 'USA'
    }
}

export const poly: mango = {
    name: 'Mango',
    age: 30,
    email: 'john@example.com'
};

function greet(mango: mango){
    console.log(`Hello: ${mango.name} ${mango.age} ${mango.email}`)
}
export {greet}