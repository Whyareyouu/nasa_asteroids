import { increaseDateByOneDay } from "./increaseDateByOneDay";

describe("increaseDateByOneDay", () => {
  it("Доллжен увеличить дату на один день в том же месяце", () => {
    expect(increaseDateByOneDay("2023-08-18")).toBe("2023-08-19");
    expect(increaseDateByOneDay("2022-02-28")).toBe("2022-03-01");
  });

  it("Должен правильно обрабатывать конец месяца", () => {
    expect(increaseDateByOneDay("2023-01-31")).toBe("2023-02-01");
    expect(increaseDateByOneDay("2023-03-31")).toBe("2023-04-01");
  });

  it("Должен правильно обрабатывать високосные годы", () => {
    expect(increaseDateByOneDay("2020-02-28")).toBe("2020-02-29");
    expect(increaseDateByOneDay("2020-02-29")).toBe("2020-03-01");
  });
});
