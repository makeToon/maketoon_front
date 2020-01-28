export const firstSeatChecker = (date: number) => {
  if (date < 10) {
    return `0${date}`;
  }

  return String(date);
};

export const returnAfterDateToFormattingDate = (afterDate: string) => {
  const newDate = new Date();
  const numberAfterDate = Number(afterDate.split("일")[0]);

  newDate.setDate(newDate.getDate() + numberAfterDate);

  const year = newDate.getFullYear();
  const month = firstSeatChecker(newDate.getMonth() + 1);
  const date = firstSeatChecker(newDate.getDate());

  return `${year}-${month}-${date}`;
};

export const splitHyphen = (value: string) => value.split("-");
