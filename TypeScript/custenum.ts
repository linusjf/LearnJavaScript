#!/usr/bin/env ts-node
// @ts-nocheck
class Enum {
  constructor(protected value: string) {}
  public toString() {
    return String(this.value);
  }
  public is(value: Enum | string) {
    return (this.value = value.toString());
  }
}

class SourceEnum extends Enum {
  public static value1 = new SourceEnum("value1");
  public static value2 = new SourceEnum("value2");
}

class TestEnum extends SourceEnum {
  public static value3 = new TestEnum("value3");
  public static value4 = new TestEnum("value4");
}

function checkEnum(test: TestEnum) {
  return test === TestEnum.value2;
}
const value1 = TestEnum.value1;
console.log(value1 + ", hello");
console.log(value1.toString() === "value1");
console.log(value1.is("value1"));
console.log(!TestEnum.value3.is(TestEnum.value3));
console.log(checkEnum(TestEnum.value2));
// this works but perhaps your TSLint would complain
// attention! does not work with ===
// use .is() instead
console.log(TestEnum.value1 == <any>"value1");
