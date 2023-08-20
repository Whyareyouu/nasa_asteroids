import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Cart } from "./Cart";
import { useCartState } from "@/hooks/useCartState";
import { MissDistanceUnit } from "@/components/AsteroidsList";

jest.mock("../../../../hooks/useCartState", () => ({
  useCartState: jest.fn(),
}));
jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));
describe("Cart Component", () => {
  const mockCart = [
    {
      id: "123",
      unit: MissDistanceUnit.KILOMETERS,
      name: "123123 (322 SO)",
      estimatedDiameter: 100,
      isPotentiallyHazardousAsteroid: true,
      closeApproachDateFull: "2023-08-19",
      missDistance: "1000",
    },
  ];
  it("Корректное отображение корзины", () => {
    //@ts-ignore
    useCartState.mockReturnValueOnce(["asteroid1", "asteroid2"]);

    render(<Cart />);

    const cartTitle = screen.getByText("Корзина");
    const asteroidCount = screen.getByText("2 астероида");
    const sendButton = screen.getByText("Отправить");

    expect(cartTitle).toBeInTheDocument();
    expect(asteroidCount).toBeInTheDocument();
    expect(sendButton).toBeInTheDocument();
  });

  it("Кнопка 'Отправить' выключена, когда в корзине <1 астероида ", () => {
    //@ts-ignore
    useCartState.mockReturnValueOnce([]);

    render(<Cart />);

    const sendButton = screen.getByText("Отправить");

    expect(sendButton).toBeDisabled();
  });

  it("Кнопка 'Отправить' включена, когда корзина не пустая", () => {
    //@ts-ignore
    useCartState.mockReturnValueOnce(["asteroid1"]);

    render(<Cart />);

    const sendButton = screen.getByText("Отправить");

    expect(sendButton).not.toBeDisabled();
  });

  it("Навигация на страницу с корзиной, при клике на кнопку отправить", () => {
    const routerMock = { push: jest.fn() };
    jest.spyOn(require("next/router"), "useRouter").mockReturnValue(routerMock);
    //@ts-ignore
    useCartState.mockReturnValueOnce(mockCart);
    render(<Cart />);

    const sendButton = screen.getByText("Отправить");
    fireEvent.click(sendButton);

    expect(routerMock.push).toHaveBeenCalledWith("/cart");
  });
});
