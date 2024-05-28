#!/usr/bin/env ts-node
interface IPerson {
  name: string;
  age: number;
  breath(): void;
}

interface IManager extends IPerson {
  managerId: number;
  managePeople(people: IPerson[]): void;
}

interface ISampleClassInterface {
  sampleVariable: string;
  sampleMethod(): void;
  optionalVariable?: string;
}

class SampleClass implements ISampleClassInterface {
  public sampleVariable: string;
  private answerToLifeTheUniverseAndEverything: number;
  constructor() {
    this.sampleVariable = "string value";
    this.answerToLifeTheUniverseAndEverything = 42;
  }
  public sampleMethod(): any {
    return this.answer;
  }
  private answer(q: any): number {
    return this.answerToLifeTheUniverseAndEverything;
  }
}

interface Connector {
  doConnect(): boolean;
}

export class WifiConnector implements Connector {
  public doConnect(): boolean {
    console.log("Connecting via wifi");
    console.log("Get password");
    console.log("Lease an IP for 24 hours");
    console.log("Connected");
    return true;
  }
}

export class System {
  constructor(private connector: Connector) {
    // dependency injection
    connector.doConnect();
  }
}

export class BluetoothConnector implements Connector {
  public doConnect(): boolean {
    console.log("Connecting via Bluetooth");
    console.log("Pair with PIN");
    console.log("Connected");
    return true;
  }
}

interface JQuery {
  pluginFunctionThatDoesNothing(): void;
  // create chainable function
  manipulateDOM(start: HTMLElement): JQuery;
}

interface IKickable {
  kick(distance: number): void;
}
class Ball {
  kick(distance: number): void {
    console.log("Kicked", distance, "meters!");
  }
}

const kickable: IKickable = new Ball();
kickable.kick(40);

interface Pet {
  species: string;
  age: number;
}

function checkCompatible(petOne: Pet, petTwo: Pet) {
  if (
    petOne.species === petTwo.species &&
    Math.abs(petOne.age - petTwo.age) <= 5
  ) {
    return true;
  }
}
