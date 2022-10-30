class StaticTest {
  static countInstance:number = 0;
  constructor() {
    StaticTest.countInstance++;
  }
}
new StaticTest();
new StaticTest();
console.log(StaticTest.countInstance);
