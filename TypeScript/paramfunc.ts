function foo(constructorFunc: { 
  new() 
}) { 
  new constructorFunc(); 
}

interface IConstructor { 
  new();
}
function foonew(constructorFunc: IConstructor) { 
  new constructorFunc(); 
}

interface INumberConstructor {
  new(num: number); 
} 
function foonum(constructorFunc: INumberConstructor) { 
  new constructorFunc(1); 
}

interface ITConstructor<T, U> { 
  new(item: T): U; 
} 
function foogeneric<T, U>(constructorFunc: ITConstructor<T, U>, 
                          item: T): U { 
                            return new constructorFunc(item); 
}

function foofunc(func: { (): void }) { 
  func(); 
} 
function fooconstr(constructorWithParamsFunc: { (num: number): void }) { 
  new constructorWithParamsFunc(1); 
}

interface IFunction { 
  (): void; 
} 
function fooifunc(func: IFunction ) { 
  func(); 
}
interface INumberFunction { 
  (num: number): string; 
}
function foonfunc(func: INumberFunction ) { 
  return func(1); 
}
interface ITFunc<T, U> { 
  (item: T): U; 
} 
function fooigeneric<T, U>(func: ITFunc<T, U>, item: T): U { 
  return func(item); 
}
