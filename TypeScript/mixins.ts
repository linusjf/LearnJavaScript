#!/usr/bin/env ts-node
class Flies {
  fly() {
    console.log("Is it a bird? Is it a plane?");
  }
}
class Climbs {
  climb() {
    console.log("My spider sense is tingling.");
  }
}

class Bulletproof {
  deflect() {
    console.log("My wings are a shield of steel.");
  }
}

class BeetleGuy implements Climbs, Bulletproof {
  climb!:() => void;
  deflect!:() => void;
}

applyMixins(BeetleGuy,[Climbs,Bulletproof]);

function applyMixins(derivedCtor:any,baseCtors:any[]) {
  baseCtors.forEach(baseCtor => {
    Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
      if (name!=="constructor") {
        derivedCtor.prototype[name] = baseCtor.prototype[name];}
    });
  });
}
