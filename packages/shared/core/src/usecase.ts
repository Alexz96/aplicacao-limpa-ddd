export default interface UseCase<IN, OUT> {
  execute(): Promise<OUT>;
}
