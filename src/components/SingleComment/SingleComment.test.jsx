import { render, screen } from "@testing-library/react";
import SingleComment from "./SingleComment";
import { BrowserRouter } from "react-router-dom";
import ThemeContextProvider from "../ThemeContextProvider/ThemeContextProvider";
import SelectContextProvider from "../SelectedContextProvider/SelectContextProvider";
import AlertCartProvider from "../AlertCartProvider/AlertCartProvider";

test("singleComment non renderizzato al caricamento della pagina", () => {
    render(
        <BrowserRouter>
            <ThemeContextProvider>
                <SelectContextProvider>
                    <AlertCartProvider>
                        <SingleComment />
                    </AlertCartProvider>
                </SelectContextProvider>
            </ThemeContextProvider>
        </BrowserRouter>

    );

    const showComments = screen.getByTestId("lista");

    expect(showComments).toBeInTheDocument()
})