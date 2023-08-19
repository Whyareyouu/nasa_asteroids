import { formatOrbits } from "./declensionUnit";

describe("formatOrbits", () => {
  it("Правильное склонение при 1", () => {
    expect(formatOrbits("1")).toBe("1 лунная орбита");
  });

  it("Правильное склонение при значениях 2,3,4", () => {
    expect(formatOrbits("2")).toBe("2 лунные орбиты");
    expect(formatOrbits("3")).toBe("3 лунные орбиты");
    expect(formatOrbits("4")).toBe("4 лунные орбиты");
  });

  it("Правильное склонение при остальных вариантах", () => {
    expect(formatOrbits("0")).toBe("0 лунных орбит");
    expect(formatOrbits("5")).toBe("5 лунных орбит");
    expect(formatOrbits("10")).toBe("10 лунных орбит");
  });
});
