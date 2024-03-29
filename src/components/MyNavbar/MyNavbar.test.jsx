import { render, screen, fireEvent } from "@testing-library/react";
import MyNavbar from "./MyNavbar";
import { BrowserRouter } from "react-router-dom";
import ThemeContextProvider from "../ThemeContextProvider/ThemeContextProvider";
import SelectContextProvider from "../SelectedContextProvider/SelectContextProvider";

test("verifica input navbar", () => {
    render(
        <BrowserRouter>
            <ThemeContextProvider>
                <SelectContextProvider>
                    <MyNavbar />
                </SelectContextProvider>
            </ThemeContextProvider>
        </BrowserRouter>

    );

    // const inputElement = screen.getByRole("textbox");
    // const buttonElement = screen.getByRole("button");

    // expect(buttonElement).toBeInTheDocument();

})