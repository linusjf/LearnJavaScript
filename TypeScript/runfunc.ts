#!/usr/bin/env ts-node
/* eslint-disable no-unused-vars */
interface IRushable {
  run(): void;
}
interface IRusher {
  runSafe<T extends IRushable>(runnable: T): void;
}
class Rusher implements IRusher {
  public runSafe<T extends IRushable>(runnable: T): void {
    try {
      runnable.run();
    } catch (e) {
    }
  }
}

function runSafe<T extends IRushable>(runnable: T): void {
  try {
    runnable.run();
  } catch (e) {
  }
}
