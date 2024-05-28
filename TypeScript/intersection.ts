#!/usr/bin/env ts-node
interface Knife {
  cut(): void;
}
interface BottleOpener {
  openBottle(): void;
}
interface Screwdriver {
  turnScrew(): void;
}
type SwissArmyKnife = Knife & BottleOpener & Screwdriver;
function use(tool: SwissArmyKnife) {
  console.log("I can do anything!");
  tool.cut();
  tool.openBottle();
  tool.turnScrew();
}
const sak: SwissArmyKnife = {
  cut(): void {
    console.log("Cut.");
  },
  openBottle(): void {
    console.log("Opened bottle.");
  },
  turnScrew(): void {
    console.log("Turned screw.");
  }
};
use(sak);
