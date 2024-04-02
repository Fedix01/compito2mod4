import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllTheBooksPage from "./components/AllTheBooksPage/AllTheBooksPage";
import NotFound from "./components/NotFound/NotFound";
import BookDetails from "./components/BookDetails/BookDetails";
import ThemeContextProvider from "./components/ThemeContextProvider/ThemeContextProvider";
import { useState } from "react";
import AddToCart from "./components/AddToCart/AddToCart";
import CartContextProvider from "./components/CartContextProvider/CartContextProvider";
import AlertCartProvider from "./components/AlertCartProvider/AlertCartProvider";
import CartCounterContextProvider from "./components/CartCounterContextProvider/CartCounterContextProvider";


function App() {

  const [isDetails, setIsDetails] = useState(true);


  return (
    <>
      <ThemeContextProvider>
        <CartContextProvider>
          <CartCounterContextProvider>
            <AlertCartProvider>
              <BrowserRouter>
                <Routes>
                  <Route path="/" element={<AllTheBooksPage navForm={isDetails} navDetails={setIsDetails} />}></Route>
                  <Route path="/*" element={<NotFound />}></Route>
                  <Route path="/details/:asin" element={<BookDetails navDetails={setIsDetails} navForm={isDetails} />}></Route>
                  <Route path="/cart" element={<AddToCart />}></Route>
                </Routes>
              </BrowserRouter>
            </AlertCartProvider>
          </CartCounterContextProvider>
        </CartContextProvider>
      </ThemeContextProvider>
    </>
  );
}

export default App;
