#!/usr/bin/env ts-node
interface ISprintable<U> {
  run(): U;
}
interface ISprinter<T extends ISprintable<U>, U> {
  runSafe(runnable: T): U;
}
