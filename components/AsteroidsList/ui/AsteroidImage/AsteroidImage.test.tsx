import { AsteroidImage } from "./AsteroidImage";
import { render, screen } from "@testing-library/react";

describe("AsteroidImage", () => {
  it("Ожидается большой размер астероида при size >= 100", () => {
    render(<AsteroidImage size={100} />);
    const bigAsteroid = screen.getByTestId("bigAsteroid");
    expect(bigAsteroid).toBeInTheDocument();
  });
  it("Ожидается маленький размер размер астероида при size < 100", () => {
    render(<AsteroidImage size={99} />);
    const smallAsteroid = screen.getByTestId("smallAsteroid");
    expect(smallAsteroid).toBeInTheDocument();
  });
});
