import { findByTestId, render, screen } from "@testing-library/react";
import AllTheBooks from "./AllTheBooks";
import { BrowserRouter } from "react-router-dom";
import ThemeContextProvider from "../ThemeContextProvider/ThemeContextProvider";
import SelectContextProvider from "../SelectedContextProvider/SelectContextProvider";

// test("al click commenta vengono renderizzati i commenti relativi al libro", async () => {
//     render(
//         <BrowserRouter>
//             <ThemeContextProvider>
//                 <SelectContextProvider>
//                     <AllTheBooks />
//                 </SelectContextProvider>
//             </ThemeContextProvider>
//         </BrowserRouter>
//     );

//     const singleBook = await screen.findByTestId("test-cards")

//     expect(singleBook).toBeInTheDocument();
// })