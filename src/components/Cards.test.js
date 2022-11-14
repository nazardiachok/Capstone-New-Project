import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Cards from "./Cards";

const dataItems = [
  {
    id: 1,
    title: "Schuhe 1",
    price: 123,
    amount: 2,
  },
  {
    id: 2,
    title: "Schuhe 2",
    price: 134,
    amount: 3,
  },
];

test("renders the prop array correctly", () => {
  render(<Cards shoppingCard={dataItems} />);

  const firstTitle = screen.getByText(/schuhe 1/i);
  const secondTitle = screen.getByText(/schuhe 2/i);
  expect(firstTitle).toBeInTheDocument();
  expect(secondTitle).toBeInTheDocument();

  const firstPrice = screen.getByText(/123/i);
  const secondPrice = screen.getByText(/134/i);
  expect(firstPrice).toBeInTheDocument();
  expect(secondPrice).toBeInTheDocument();

  const firstAmount = screen.getByText("2");
  const secondAmount = screen.getByText("3");
  expect(firstAmount).toBeInTheDocument();
  expect(secondAmount).toBeInTheDocument();
});
