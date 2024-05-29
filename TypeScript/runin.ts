#!/usr/bin/env ts-node
/* eslint-disable no-unused-vars */
interface IRaceable<V, U> {
  run(parameter: U): V;
}
interface IRacer<T extends IRaceable<U, V>, U, V> {
  runSafe(runnable: T, parameter: U): V;
}
