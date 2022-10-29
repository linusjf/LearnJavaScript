interface IStatus<U> { 
  code: U; 
} 
interface IEvents<T> { 
  list: T[]; 
  emit(event: T): void; 
  getAll(): T[]; 
}
class State<T> implements IEvents<T> { 
  list: T[]; 
  constructor() { 
    this.list = []; 
  } 
  emit(event: T): void { 
    this.list.push(event); 
  } 
  getAll(): T[] { 
    return this.list; 
  } 
}
interface Code {
message:string;
status:number;
}
const s = new State<IStatus<number>>();
s.emit({ code: 200 }); 
//s.emit({ code: '500' }); 
s.getAll().forEach(event => console.log(event.code)); 
const s2 = new State<IStatus<Code>>();
s2.emit({ code: { message: 'OK', status: 200 } }); 
s2.getAll().map(event => event.code).forEach(event => { 
  console.log(event.message); 
  console.log(event.status); 
});

interface IResult<T> { 
  wasSuccessful: boolean; 
  error: T;
  clone(): IResult<T>;
}

var response: IResult<string> = {
 wasSuccessful:true,
 error:"",
 clone() {
   var copy : IResult<string> = {
     wasSuccessful:this.wasSuccessful,
     error:this.error,
     clone: this.clone,
   }
   return copy;
 },
}
var error: string = response.error;
var copy: IResult<string> = response.clone();
console.log(error);
console.log(copy);
copy.wasSuccessful = false;
copy.error = "error";
console.log(copy.clone());

interface IRunnable<T, U> { 
  run(input: T): U; 
} 

var runnable: IRunnable<string, number> = {
  run(input:string):number {
    return input.length;
  }
} 

var input:string = "Input";
var result: number = runnable.run(input);
console.log(result);

class Result<T> implements IResult<T> { 
  constructor(public wasSuccessful: boolean, public error: T) {
  }
  public clone (): IResult<T> { 
  return new Result<T>(this.wasSuccessful, this.error); 
  }
}

class StringResult implements IResult<string> { 
  constructor(public wasSuccessful: boolean, public error: string) { 
  } 
  public clone (): IResult<string> { 
    return new StringResult(this.wasSuccessful, this.error); 
  } 
}

// Compiler infers T to string 
let r1 = new Result(false, 'error: 42');
// Compiler infers T to number 
let r2 = new Result(false, 42); 
//let r3 = new Result<string>(true, null); 
// Explicitly set T to string 
//let r4 = new Result<string>(true, 4); 
// Compilation error because 4 is not a string

