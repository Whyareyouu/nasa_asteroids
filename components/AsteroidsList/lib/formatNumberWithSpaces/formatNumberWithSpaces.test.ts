import { numberWithSpaces } from "./formatNumberWithSpaces";

describe("numberWithSpaces", () => {
  it("Проверка с корректными данными ", () => {
    expect(numberWithSpaces(1000)).toBe("1 000");
    expect(numberWithSpaces(12345)).toBe("12 345");
    expect(numberWithSpaces(987654321)).toBe("987 654 321");
    expect(numberWithSpaces("1234567890")).toBe("1 234 567 890");
  });

  it("Проверка на дробных числах", () => {
    expect(numberWithSpaces(1234.5678)).toBe("1 235");
    expect(numberWithSpaces("9876543.21")).toBe("9 876 543");
  });

  it("Проверка на отрицательных числах", () => {
    expect(numberWithSpaces(-12345)).toBe("-12 345");
    expect(numberWithSpaces("-987654321")).toBe("-987 654 321");
  });

  it("Неверные входные данные", () => {
    expect(numberWithSpaces("abc")).toBe("NaN");
    expect(numberWithSpaces("")).toBe("0");
  });
});
