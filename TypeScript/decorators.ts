function addMetadataTarget(target: any) { 
  // Add some metadata 
  target.__customMetadata = {
    someKey: "someValue" 
  }; 
  // Return target return target; 
}

function getMetadataFromClass(target: any) { 
  return target.__customMetadata; 
} 

function getMetadataFromInstance(target: any) { 
  return target.constructor.__customMetadata; 
} 

function addMetadata(metadata: any) { 
  return function log(target: any) { 
    // Add metadata 
    target.__customMetadata = metadata; 
    // Return target 
    return target;
  }
}

function log<T>(target: T) { 
  // Do something with target 
  console.log(target); 
  // Return target 
  return target; 
}

@addMetadataTarget
@log
class Person { 
  private _name: string; 
  public constructor(name: string) {
    this._name = name; 
  } 
  public greet() { 
    return this._name; 
  } 
} 

console.log(getMetadataFromClass(Person));

let person1 = new Person("John"); 
let person2 = new Person("Lisa"); 
console.log(getMetadataFromInstance(person1)); 
console.log(getMetadataFromInstance(person2));

/*function getMetadataFromClass(target: any) { 
  return target.__customMetadata; 
} */
@addMetadata({ guid: "417c6ec7-ec05-4954-a3c6-73a0d7f9f5bf" })
class Individual { 
  private _name: string; 
  public constructor(name: string) {
    this._name = name; 
  } 
  public greet() { 
    return this._name; 
  } 
} 
console.log(getMetadataFromClass(Individual)); 
