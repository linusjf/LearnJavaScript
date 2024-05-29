#!/usr/bin/env ts-node
/* eslint-disable no-unused-vars */
const enum NinjaActivity {
  Espionage,
  Sabotage,
  Assassination
}
const myFavoriteNinjaActivity = NinjaActivity.Espionage;
console.log(myFavoriteNinjaActivity);
console.log(NinjaActivity["Sabotage"]);

enum PirateActivity {
  Boarding,
  Drinking,
  Fencing
}
const myFavoritePirateActivity = PirateActivity.Boarding;
console.log(myFavoritePirateActivity);
console.log(PirateActivity["Drinking"]);
console.log(PirateActivity[myFavoritePirateActivity]);
enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday
}
const bestDay: Day = Day.Saturday;
console.log(bestDay);
enum TenPlus {
  Ten = 10,
  Eleven,
  Twelve
}
console.log(TenPlus);
enum MyOddSet {
  Three = 3,
  Five = 5,
  Seven = 7,
  Nine = 9
}
console.log(MyOddSet);
enum MimeTypes {
  JPEG = < any > "image/jpeg",
  PNG = < any > "image/png",
  PDF = < any > "application/pdf"
}
console.log(MimeTypes);
enum MyType {
  Value = 3,
  ValueEx = 30,
  ValueEx2 = 300
}
console.log(MyType);
enum FancyType {
  OneArr = <any>[ 1 ],
  TwoArr = <any>[ 2, 2 ],
  ThreeArr = <any>[ 3, 3, 3 ]
}
console.log(FancyType);
enum SomeEnum {
  A,
  B
}
const enumValues: Array<string> = [];
for (const value in SomeEnum) {
  if (typeof SomeEnum[value] === "number") {
    enumValues.push(value);
  }
}
enumValues.forEach((v) => console.log(v));

enum SrcEnum {
  value1 = < any > "value1",
  value2 = < any > "value2"
}

enum AdditionToSourceEnum {
  value3 = < any > "value3",
  value4 = < any > "value4"
}
// we need this type for TypeScript to resolve the types correctly
type TestEnumType = SrcEnum|AdditionToSourceEnum;
// and we need this value "instance" to use values
const TstEnum = Object.assign({}, SrcEnum, AdditionToSourceEnum);

function check(test: TestEnumType) { return test === TstEnum.value2; }
console.log(TstEnum.value1);
console.log(TstEnum.value2 === < any > "value2");
console.log(check(TstEnum.value2));
console.log(check(TstEnum.value3));
