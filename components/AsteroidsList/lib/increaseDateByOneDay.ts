export function increaseDateByOneDay(dateString: string): string {
  const currentDate = new Date(dateString);
  const nextDate = new Date(currentDate);

  nextDate.setDate(currentDate.getDate() + 1);

  if (nextDate.getMonth() !== currentDate.getMonth()) {
    nextDate.setDate(1);
    nextDate.setMonth(currentDate.getMonth() + 1);
  }

  return nextDate.toISOString().split("T")[0];
}
