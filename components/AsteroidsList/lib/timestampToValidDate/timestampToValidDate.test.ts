import { formatDate } from "./timestampToValidDate";

describe("formatDate", () => {
  it("Корректный перевод timestamp в валидную дату", () => {
    expect(formatDate(1675238400000)).toBe("1 фев 2023");
    expect(formatDate(1669804800000)).toBe("30 янв 2023");
  });
});
