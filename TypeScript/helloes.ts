#!/usr/bin/env ts-node
export function hello(name: string) { console.log(`Hello, ${name}`); }
function helloES(name: string) { console.log(`Hola, ${name}`); }
export {helloES};
export default hello;
