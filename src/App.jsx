import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllTheBooksPage from "./components/AllTheBooksPage/AllTheBooksPage";
import NotFound from "./components/NotFound/NotFound";
import BookDetails from "./components/BookDetails/BookDetails";
import ThemeContextProvider from "./components/ThemeContextProvider/ThemeContextProvider";
import { useState } from "react";


function App() {

  const [isDetails, setIsDetails] = useState(true);


  return (
    <>
      <ThemeContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<AllTheBooksPage navForm={isDetails} navDetails={setIsDetails} />}></Route>
            <Route path="/*" element={<NotFound />}></Route>
            <Route path="/details/:asin" element={<BookDetails navDetails={setIsDetails} navForm={isDetails} />}></Route>
          </Routes>
        </BrowserRouter>
      </ThemeContextProvider>
    </>
  );
}

export default App;
