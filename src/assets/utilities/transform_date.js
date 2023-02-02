export const formatDate = (timeStamp) =>
	new Date(timeStamp).toJSON().slice(0, 10).split("-").reverse().join("/");

export const substractDay = (timeStampA, timeStampB) => {
  const dateA = new Date(timeStampA);
  const dateB = new Date(timeStampB);

  // Tính từ lúc 0 h
  dateA.setHours(0, 0, 0, 1);
  dateB.setHours(0, 0, 0, 0);

  const miliSecondsInOneDay = 86400000;

  return Math.floor((dateA - dateB) / miliSecondsInOneDay);
}
