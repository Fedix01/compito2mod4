import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllTheBooksPage from "./components/AllTheBooksPage/AllTheBooksPage";
import NotFound from "./components/NotFound/NotFound";
import BookDetails from "./components/BookDetails/BookDetails";
function App() {



  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AllTheBooksPage />}></Route>
          <Route path="/*" element={<NotFound />}></Route>
          <Route path="/details/:asin" element={<BookDetails />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
