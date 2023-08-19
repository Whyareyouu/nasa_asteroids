import { declensionAsteroids } from "./declensionAsteroids";

describe("declensionAsteroids", () => {
  it("Правильное склонение при 1", () => {
    expect(declensionAsteroids(1)).toBe("1 астероид");
  });

  it("Правильное склонение при значениях 2,3,4", () => {
    expect(declensionAsteroids(2)).toBe("2 астероида");
    expect(declensionAsteroids(3)).toBe("3 астероида");
    expect(declensionAsteroids(4)).toBe("4 астероида");
  });

  it("Правильное склонение при остальных вариантах", () => {
    expect(declensionAsteroids(0)).toBe("0 астероидов");
    expect(declensionAsteroids(5)).toBe("5 астероидов");
    expect(declensionAsteroids(10)).toBe("10 астероидов");
  });
});
