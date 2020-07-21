const expectEqual = <T>(
  valueA: T,
  valueB: T,
  errorMessage: string = `Expected "${valueA}" to be equal to "${valueB}"`
): void => {
  if (valueA !== valueB) {
    throw new Error(errorMessage);
  }
};

export { expectEqual };
