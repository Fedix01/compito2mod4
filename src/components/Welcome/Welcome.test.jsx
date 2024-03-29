import { render, screen } from "@testing-library/react";
import Welcome from "./Welcome";

test("Il componente viene renderizzato correttamente", () => {

    render(<Welcome />);

    const header = screen.getByRole("heading");

    expect(header).toBeInTheDocument()
})