#!/usr/bin/env ts-node
/* eslint-disable no-unused-vars */
interface IHasteable < T extends {
  run(): void;
}
> { runSafe(runnable: T): void; }
