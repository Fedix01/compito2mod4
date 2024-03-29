import { render, screen } from "@testing-library/react";
import CommentArea from "./CommentArea";
import { BrowserRouter } from "react-router-dom";
import ThemeContextProvider from "../ThemeContextProvider/ThemeContextProvider";
import SelectContextProvider from "../SelectedContextProvider/SelectContextProvider";

test("prova commentArea", async () => {
    render(
        <BrowserRouter>
            <ThemeContextProvider>
                <SelectContextProvider>
                    <CommentArea />
                </SelectContextProvider>
            </ThemeContextProvider>
        </BrowserRouter>

    );
    const elements = await screen.findAllByTestId("test-comment");

    expect(elements.length).toBeGreaterThan(0);
});

test("test se ce commentarea", () => {
    render(
        <BrowserRouter>
            <ThemeContextProvider>
                <SelectContextProvider>
                    <CommentArea />
                </SelectContextProvider>
            </ThemeContextProvider>
        </BrowserRouter>
    );


    const element = screen.queryByTestId("lista");

    expect(element).not.toBeInTheDocument();



})