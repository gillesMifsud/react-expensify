const person = {
    name: 'Yin',
    age: '36',
    location: {
        city: 'Stras',
        temp: 30
    }
}

 // This creates 2 var person.age and person.name
 const { name, age } = person;
 console.log(`${name} is ${age}`);
 
 // This changes the name var to firstname and sets default value of Anonymous
 const { name: firstname = 'Anonymous' } = person;
 
const { city, temp: temperature } = person.location;
if (city && temperature) {
    console.log(`It's ${temperature} in ${city}`);
}

const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
}

const { name: publisherName = 'Self-Published'} = book.publisher;
console.log(publisherName);