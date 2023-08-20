import { DistanceLine } from "./DistanceLine";
import { render, screen } from "@testing-library/react";
import { MissDistanceUnit } from "@/components/AsteroidsList";

describe("DistanceLine", () => {
  it("Корректное отображения растояния в км", () => {
    render(
      <DistanceLine distance={"1000"} unit={MissDistanceUnit.KILOMETERS} />
    );
    const distanceBlock = screen.getByTestId("distance");
    expect(distanceBlock).toBeInTheDocument();
    expect(distanceBlock).toHaveTextContent("1000 км");
  });
  it("Корректное отображения растояния в луннных орбитах", () => {
    render(<DistanceLine distance={"10000"} unit={MissDistanceUnit.LUNAR} />);
    const distanceBlock = screen.getByTestId("distance");
    expect(distanceBlock).toBeInTheDocument();
    expect(distanceBlock).toHaveTextContent("10 000 лунных орбит");
  });
});
