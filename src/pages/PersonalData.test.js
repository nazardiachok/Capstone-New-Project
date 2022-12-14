import "@testing-library/jest-dom";
import "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event/";
import PersonalData from "./PersonalData";

describe("PersonalData", () => {
  test("check the rendering of form", async () => {
    render(<PersonalData />);

    const form = screen.getByTestId("form");
    const submitbtn = screen.getByRole("button", { name: "Submit" });

    const getNameInputfield = screen.getByRole("textbox", { name: /name/i });
    const getEmailInputfield = screen.getByRole("textbox", { name: /email/i });

    await userEvent.type(getNameInputfield, "Nazar");
    await userEvent.type(getEmailInputfield, "jjj@sd.sd");

    expect(form).toBeInTheDocument();
    expect(submitbtn).toBeInTheDocument();

    expect(getNameInputfield.value).toBe("Nazar");
    expect(getEmailInputfield.value).toBe("jjj@sd.sd");
  });

  test("requires the input", async () => {
    render(<PersonalData />);

    const getNameInputfield = screen.getByTestId("name");
    const getEmailInputfield = screen.getByTestId("email");
    const getAddressInputfield = screen.getByTestId("address");

    expect(getNameInputfield).toBeRequired();
    expect(getEmailInputfield).toBeRequired();
    expect(getAddressInputfield).toBeRequired();
  });
});
