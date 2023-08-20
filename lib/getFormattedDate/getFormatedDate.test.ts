import { getFormattedDate } from "@/lib/getFormattedDate/getFormattedDate";

describe("getFormattedDate", () => {
  test("Возвращает отформатированную дату в ожидаемом формате", () => {
    const currentDate = getFormattedDate();
    const regex = /^\d{4}-\d{2}-\d{2}$/;
    expect(currentDate).toMatch(regex);
  });

  test("Возвращает актуальную дату", () => {
    const currentDate = getFormattedDate();
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");
    const expectedDate = `${year}-${month}-${day}`;
    expect(currentDate).toBe(expectedDate);
  });

  test("Месяц начинается с 1", () => {
    const currentDate = getFormattedDate();
    const now = new Date();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const regex = new RegExp(`^\\d{4}-${month}-\\d{2}$`);
    expect(currentDate).toMatch(regex);
  });
});
