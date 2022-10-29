interface IRunable { 
  run(): void; 
} 
interface IRuner<T extends IRunable> { 
  runSafe(runnable: T): void; 
}
