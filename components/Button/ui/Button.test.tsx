import { Button, ButtonTheme } from "./Button";
import { screen, render } from "@testing-library/react";

describe("Button", () => {
  it("Button с темой primary", () => {
    render(<Button theme={ButtonTheme.PRIMARY}>123</Button>);
    const button = screen.getByText("123");
    expect(button).toHaveClass("primary");
  });
  it("Button с темой secondary", () => {
    render(<Button theme={ButtonTheme.SECONDARY}>123</Button>);
    const button = screen.getByText("123");
    expect(button).toHaveClass("secondary");
  });
});
