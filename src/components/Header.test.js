import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import AppHeader from "./Header";

test("render Nike Store from Header", () => {
  render(<AppHeader />);
  const headerElem = screen.getByText(/NIKE STORE/i);
  expect(headerElem).toBeInTheDocument();
});
