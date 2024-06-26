#!/usr/bin/env ts-node
/* eslint-disable no-unused-vars */
const numbers: number[] = [1, 2, 3, 4, 5];
const sum: number = numbers.reduce((acc, curr) => acc + curr, 0);
// Output: 15
console.log(sum);

const nestedArray: number[][] = [
  [1, 2],
  [3, 4],
  [5, 6]
];
const flattenedArray: number[] = nestedArray.reduce(
  (acc, curr) => acc.concat(curr),
  []
);
// Output: [1, 2, 3, 4, 5, 6]
console.log(flattenedArray);

interface Persona {
  name: string;
  age: number;
}

const people: Persona[] = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 25 },
  { name: "Dave", age: 30 }
];

type GroupedByAge = Record<number, Persona[]>;

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
  { id: 1, name: "Laptop", price: 999 },
  { id: 2, name: "Phone", price: 699 },
  { id: 3, name: "Tablet", price: 499 }
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

const fruits: string[] = [
  "apple",
  "banana",
  "apple",
  "orange",
  "banana",
  "apple"
];

type FruitCount = Record<string, number>;
const fruitCounts: FruitCount = fruits.reduce((acc, curr) => {
  acc[curr] = (acc[curr] || 0) + 1;
  return acc;
}, {} as FruitCount);

/*
Output:
{
  'apple': 3,
  'banana': 2,
  'orange': 1
}
*/
console.log(fruitCounts);

type MathFn = (_x: number) => number;
const add5: MathFn = (x) => x + 5;
const multiply3: MathFn = (x) => x * 3;
const subtract2: MathFn = (x) => x - 2;

const composedFunctions: MathFn[] = [add5, multiply3, subtract2];

const resultA: number = composedFunctions.reduce((acc, curr) => curr(acc), 10);
// Output: 43
console.log(resultA);

interface Status {
  count: number;
  todos: string[];
}

interface Action {
  type: string;
  payload?: any;
}

const initialState: Status = {
  count: 0,
  todos: [] as string[]
};

const actions: Action[] = [
  { type: "INCREMENT_COUNT" },
  { type: "ADD_TODO", payload: "Learn Array.reduce()" },
  { type: "INCREMENT_COUNT" },
  { type: "ADD_TODO", payload: "Master TypeScript" }
];

const reducer = (state: Status, action: Action): Status => {
  switch (action.type) {
    case "INCREMENT_COUNT":
      return { ...state, count: state.count + 1 };
    case "ADD_TODO":
      return { ...state, todos: [...state.todos, action.payload] };
    default:
      return state;
  }
};

const finalState: Status = actions.reduce(reducer, initialState);
/*
Output:
{
  count: 2,
  todos: ['Learn Array.reduce()', 'Master TypeScript']
}
*/
console.log(finalState);

const numerals: number[] = [1, 2, 3, 2, 4, 3, 5, 1, 6];

const uniqueNumbers: number[] = numerals.reduce((acc, curr) => {
  if (!acc.includes(curr)) {
    acc.push(curr);
  }
  return acc;
}, [] as number[]);

// Output: [1, 2, 3, 4, 5, 6]
console.log(uniqueNumbers);

const grades: number[] = [85, 90, 92, 88, 95];

const average: number = grades.reduce((acc, curr, index, array) => {
  acc += curr;
  if (index === array.length - 1) {
    return acc / array.length;
  }
  return acc;
}, 0);

// Output: 90
console.log(average);
