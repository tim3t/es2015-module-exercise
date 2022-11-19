import fruits from './foods.js';
import { choice, remove } from './helpers.js';

let randomFruit = choice(fruits);
console.log(`I'd like one ${randomFruit}, please`);
console.log(`Here you go: ${randomFruit}`);
console.log(`Delicious! May I have another?`);

let rest = remove(randomFruit, fruits);

console.log(`I'm sorry, we're all out. We have ${rest.length} left.`);
