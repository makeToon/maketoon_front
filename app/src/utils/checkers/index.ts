export const checkStatus = (status: number, checkNumber: number) => {
  return status === checkNumber;
};

export const checkExcessStatus = (status: number, checkNumber: number) => {
  return status >= checkNumber;
};

export const checkHttpCode = (status: number): number => {
  return Math.floor(status / 100);
};

export const isNumberic = (data: number | string) => {
  return !isNaN(Number(data));
};

export const isTrueString = (target: string, word: string) => {
  return target === word;
};
