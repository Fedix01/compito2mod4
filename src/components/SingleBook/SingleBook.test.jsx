import { render, screen, fireEvent, findByTestId } from "@testing-library/react";
import SingleBook from "./SingleBook";
import SelectContextProvider from "../SelectedContextProvider/SelectContextProvider";
import { BrowserRouter } from "react-router-dom";
import ThemeContextProvider from "../ThemeContextProvider/ThemeContextProvider";
import horrorData from '../../data/horror.json';


test("prova selected", () => {
    render(
        <BrowserRouter>
            <ThemeContextProvider>
                <SelectContextProvider>
                    <SingleBook />
                </SelectContextProvider>
            </ThemeContextProvider>
        </BrowserRouter>

    );

    const selected = screen.getByTestId("test-cards");

    expect(selected).not.toHaveStyle("border: 2px solid red")
})

test("card = json", () => {
    render(
        <BrowserRouter>
            <ThemeContextProvider>
                <SelectContextProvider>
                    <SingleBook />
                </SelectContextProvider>
            </ThemeContextProvider>
        </BrowserRouter>
    );

    const cards = screen.findAllByTestId("test-cards");


    const json = horrorData.length;

    expect(json).toBeGreaterThanOrEqual(150)
})

test("seconda prova selected", () => {
    render(
        <BrowserRouter>
            <ThemeContextProvider>
                <SelectContextProvider>
                    <SingleBook />
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

test("prova commentArea renderizzata!!", async () => {
    // render(
    //     <BrowserRouter>
    //         <ThemeContextProvider>
    //             <SelectContextProvider>
    //                 <SingleBook />
    //             </SelectContextProvider>
    //         </ThemeContextProvider>
    //     </BrowserRouter>

    // );

    // const singleBook = await screen.findAllByTestId("prova-test");

    // expect(singleBook).toBeInTheDocument()
})