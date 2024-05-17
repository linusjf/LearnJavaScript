#!/usr/bin/env ts-node
const numbers: number[] = [ 1, 2, 3, 4, 5 ];
const sum: number = numbers.reduce((acc, curr) => acc + curr, 0);
// Output: 15
console.log(sum);

const nestedArray: number[][] = [ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ] ];
const flattenedArray: number[] =
    nestedArray.reduce((acc, curr) => acc.concat(curr), []);
// Output: [1, 2, 3, 4, 5, 6]
console.log(flattenedArray);

interface Person {
  name: string;
  age: number;
}

const people: Person[] = [
  {name : "Alice", age : 25}, {name : "Bob", age : 30},
  {name : "Charlie", age : 25}, {name : "Dave", age : 30}
];

type GroupedByAge = Record<number, Person[]>;

const groupedByAge: GroupedByAge = people.reduce((acc, curr) => {
  if (!acc[curr.age]) {
    acc[curr.age] = [];
  }
  acc[curr.age].push(curr);
  return acc;
}, {} as GroupedByAge);

/*
Output:
{
  '25': [{ name: 'Alice', age: 25 }, { name: 'Charlie', age: 25 }],
  '30': [{ name: 'Bob', age: 30 }, { name: 'Dave', age: 30 }]
}
*/
console.log(groupedByAge);

interface Product {
  id: number;
  name: string;
  price: number;
}

const products: Product[] = [
  {id : 1, name : "Laptop", price : 999},
  {id : 2, name : "Phone", price : 699},
  {id : 3, name : "Tablet", price : 499},
];

type ProductMap = Record<number, Product>;
const productMap: ProductMap = products.reduce((acc, curr) => {
  acc[curr.id] = curr;
  return acc;
}, {} as ProductMap);

/*
Output:
{
  '1': { id: 1, name: 'Laptop', price: 999 },
  '2': { id: 2, name: 'Phone', price: 699 },
  '3': { id: 3, name: 'Tablet', price: 499 }
}
*/
console.log(productMap);

// Accessing a product by ID
const laptop: Product = productMap[1];
// Output: { id: 1, name: 'Laptop', price: 999 }
console.log(laptop);
