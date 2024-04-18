export const dateFormatted = (date: Date) => {
  const year = date.getFullYear().toString().slice(2, 4);
  const month = ("0" + (date.getMonth() + 1)).slice(-2);
  const day = ("0" + date.getDate()).slice(-2);
  return `${year}-${month}-${day}`;
};

export const dateTimeFormatted = (date: Date) => {
  const year = date.getFullYear().toString().slice(2, 4);
  const month = ("0" + (date.getMonth() + 1)).slice(-2);
  const day = ("0" + date.getDate()).slice(-2);
  const hour = (("0" + date.getHours()).slice(-2))
  const minutes = (("0" + date.getMinutes()).slice(-2))
  const seconds = (("0" + date.getSeconds()).slice(-2))
  return `${year}-${month}-${day}_${hour}${minutes}${seconds}`;
};

export const todaysSessionPath = () =>
  `./sessions/${dateFormatted(new Date())}.ts`;

export const todaysSessionPathWithTime = () =>
  `./sessions/${dateTimeFormatted(new Date())}.ts`;
