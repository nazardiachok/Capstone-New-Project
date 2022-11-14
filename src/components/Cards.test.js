import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Cards from "./Cards";

const dataItems = [
  {
    id: 1,
    title: "Schuhe 1",
    category: "Herrenschue",
    price: 123,
    amount: 2,
  },
  {
    id: 2,
    title: "Schuhe 2",
    category: "Damenschuh",
    price: 134,
    amount: 2,
  },
  {
    id: 3,
    title: "Schuhe 3",
    category: "Herrenschue",
    price: 163,
    amount: 2,
  },
];

test("Tests the render of the array", () => {
  render(<Cards shoppingCard={dataItems} />);

  const cardHeadings = screen.getAllByRole("heading", { level: 5 });
  expect(cardHeadings.length).toBe(dataItems.length);
});
