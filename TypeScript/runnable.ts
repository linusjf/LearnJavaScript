#!/usr/bin/env ts-node
/* eslint-disable no-unused-vars */
interface IRunable {
  run(): void;
}
interface IRuner<T extends IRunable> {
  runSafe(runnable: T): void;
}
