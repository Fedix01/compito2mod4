import { render, screen } from "@testing-library/react";
import AllTheBooks from "./AllTheBooks";
import SelectContextProvider from "../SelectedContextProvider/SelectContextProvider";
import { BrowserRouter } from "react-router-dom";
import ThemeContextProvider from "../ThemeContextProvider/ThemeContextProvider";
import horrorData from '../../data/horror.json';


test("cards renderizzate = json", async () => {
    render(
        <BrowserRouter>
            <ThemeContextProvider>
                <SelectContextProvider>
                    <AllTheBooks />
                </SelectContextProvider>
            </ThemeContextProvider>
        </BrowserRouter>
    );

    const cards = await screen.findAllByTestId("card-book");

    const json = horrorData.length;

    expect(json).toBeGreaterThanOrEqual(150);
    expect(cards.length).toBeGreaterThanOrEqual(json);
})