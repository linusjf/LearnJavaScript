interface IHasteable<T extends { 
  run(): void 
}> { 
  runSafe(runnable: T): void; 
}
