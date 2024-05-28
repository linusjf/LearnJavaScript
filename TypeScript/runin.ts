#!/usr/bin/env ts-node
interface IRaceable<V, U> {
  run(parameter: U): V;
}
interface IRacer<T extends IRaceable<U, V>, U, V> {
  runSafe(runnable: T, parameter: U): V;
}
