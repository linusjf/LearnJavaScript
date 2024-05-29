#!/usr/bin/env ts-node
/* eslint-disable no-unused-vars */
type User = {
  name: string; age : number;
};

function isAdult(user: User): boolean { return user.age >= 18; }

const justine: User = {
  name : "Justine",
  age : 23
};

const isJustineAnAdult: boolean = isAdult(justine);
