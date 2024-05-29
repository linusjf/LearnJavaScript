#!/usr/bin/env ts-node
/* eslint-disable no-unused-vars */
interface ISprintable<U> {
  run(): U;
}
interface ISprinter<T extends ISprintable<U>, U> {
  runSafe(runnable: T): U;
}
