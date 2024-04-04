import { render, screen } from "@testing-library/react";
import AllTheBooks from "./AllTheBooks";
import SelectContextProvider from "../SelectedContextProvider/SelectContextProvider";
import { BrowserRouter } from "react-router-dom";
import ThemeContextProvider from "../ThemeContextProvider/ThemeContextProvider";
import horrorData from '../../data/horror.json';
import AlertCartProvider from "../AlertCartProvider/AlertCartProvider";


test("cards renderizzate = json", async () => {
    render(
        <BrowserRouter>
            <ThemeContextProvider>
                <SelectContextProvider>
                    <AlertCartProvider>
                        <AllTheBooks />
                    </AlertCartProvider>
                </SelectContextProvider>
            </ThemeContextProvider>
        </BrowserRouter>
    );

    const cards = await screen.findAllByTestId("card-book");

    console.log("Numero di cards trovate:", cards.length);
    if (cards.length > 0) {
        cards.forEach(card => {
            expect(card).toBeInTheDocument();
        });
    } else {
        console.error("Nessuna card trovata nel DOM");
    }
    const json = horrorData.length
    expect(json).toBeGreaterThanOrEqual(150);
    expect(cards.length).toBeGreaterThanOrEqual(json);
})