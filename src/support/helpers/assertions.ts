const expectEqual = (
  valueA: any,
  valueB: any,
  errorMessage: string = `Expected "${valueA}" to be equal to "${valueB}"`
): void => {
  if (valueA !== valueB) {
    throw new Error(errorMessage);
  }
};

export { expectEqual };
