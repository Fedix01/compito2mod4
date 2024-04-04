import { render, screen, fireEvent } from "@testing-library/react";
import SingleBook from "./SingleBook";
import SelectContextProvider from "../SelectedContextProvider/SelectContextProvider";
import { BrowserRouter } from "react-router-dom";
import ThemeContextProvider from "../ThemeContextProvider/ThemeContextProvider";
import AlertCartProvider from "../AlertCartProvider/AlertCartProvider";


test("prova selected non deve esserci", () => {
    render(
        <BrowserRouter>
            <ThemeContextProvider>
                <SelectContextProvider>
                    <AlertCartProvider>
                        <SingleBook />
                    </AlertCartProvider>
                </SelectContextProvider>
            </ThemeContextProvider>
        </BrowserRouter>

    );

    const selected = screen.getByTestId("test-cards");

    expect(selected).toBeInTheDocument()
    expect(selected).not.toHaveStyle("border: 2px solid red")
})



test("seconda prova selected", () => {
    render(
        <BrowserRouter>
            <ThemeContextProvider>
                <SelectContextProvider>
                    <AlertCartProvider>
                        <SingleBook />
                    </AlertCartProvider>
                </SelectContextProvider>
            </ThemeContextProvider>
        </BrowserRouter>

    );

    const button = screen.getByText("Commenta");
    const card = screen.getByTestId("test-cards");

    fireEvent.click(button);

    expect(card).toHaveStyle("border: 2px solid red");

    fireEvent.click(button);

    expect(card).not.toHaveStyle("border: 2px solid red");
})

