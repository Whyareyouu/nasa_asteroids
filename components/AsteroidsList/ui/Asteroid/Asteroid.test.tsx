import { Asteroid } from "./Asteroid";
import { MissDistanceUnit } from "@/components/AsteroidsList";
import { fireEvent, render, screen } from "@testing-library/react";

describe("Asteroid", () => {
  const mockAsteroidProps = {
    id: "123",
    unit: MissDistanceUnit.KILOMETERS,
    name: "123123 (322 SO)",
    estimatedDiameter: 100,
    isPotentiallyHazardousAsteroid: true,
    closeApproachDateFull: "2023-08-19",
    missDistance: "1000",
  };
  it("Корректное отображение названия и диаметра астероида", () => {
    render(<Asteroid {...mockAsteroidProps} />);
    const nameElement = screen.getByText("322 SO");
    const diameterElement = screen.getByText("Ø 100 м");
    expect(nameElement).toBeInTheDocument();
    expect(diameterElement).toBeInTheDocument();
  });
  it("Корректное отображение об опасности астероида", () => {
    render(<Asteroid {...mockAsteroidProps} />);
    const warningElement = screen.getByTestId("warning");
    expect(warningElement).toBeInTheDocument();
  });
  it("Корректное отображение если астероид не опасен", () => {
    const modifiedProps = {
      ...mockAsteroidProps,
      isPotentiallyHazardousAsteroid: false,
    };
    render(<Asteroid {...modifiedProps} />);
    const warningElement = screen.queryByTestId("warning");
    expect(warningElement).not.toBeInTheDocument();
  });
  it("Корректное отображение кнопки если астероид в корзине", () => {
    render(<Asteroid {...mockAsteroidProps} cart={[mockAsteroidProps]} />);
    const button = screen.getByRole("button");
    expect(button).toHaveTextContent(/в корзине/i);
  });
  it("Добавление астероида в корзину", () => {
    const handleAddToCart = jest.fn();
    render(
      <Asteroid {...mockAsteroidProps} handleAddToCart={handleAddToCart} />
    );
    const button = screen.getByRole("button", { name: /заказать/i });
    fireEvent.click(button);
    expect(handleAddToCart).toHaveBeenCalledTimes(1);
  });
  it("Отсутвие кнопки добавить, если астероид находится в корзине", () => {
    render(<Asteroid {...mockAsteroidProps} isCart={true} />);
    const button = screen.queryByRole("button", { name: /заказать/i });
    expect(button).not.toBeInTheDocument();
  });
});
