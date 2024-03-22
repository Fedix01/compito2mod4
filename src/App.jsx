import './App.css';
import { useState } from 'react';
import AllTheBooks from './components/AllTheBooks/AllTheBooks';
import MyFooter from './components/MyFooter/MyFooter';
import MyNavbar from './components/MyNavbar/MyNavbar';
import Welcome from './components/Welcome/Welcome';
import horrorData from './data/horror.json';
import fantasyData from "./data/fantasy.json";
import historyData from "./data/history.json";
import sciFiData from "./data/scifi.json";
import romanceData from "./data/romance.json";

import Select from './components/Select/Select';
import ThemeContextProvider from './components/ThemeContextProvider/ThemeContextProvider';
import SelectContextProvider from './components/SelectedContextProvider/SelectContextProvider';
function App() {
  const [selectedGenre, setSelectedGenre] = useState("horror")
  let selectedData = horrorData;

  if (selectedGenre === "fantasy") {
    selectedData = fantasyData;
  }
  else if (selectedGenre === "history") {
    selectedData = historyData
  } else if (selectedGenre === "scifi") {
    selectedData = sciFiData
  } else if (selectedGenre === "romance") {
    selectedData = romanceData
  }

  const handleGenreChange = (genre) => setSelectedGenre(genre);


  const [inputName, setInputName] = useState("");



  return (
    <>
      <ThemeContextProvider>
        <MyNavbar input={inputName} setInput={setInputName} />
        <Welcome />
        <Select onGenreChange={handleGenreChange} />
        <SelectContextProvider >
          <AllTheBooks books={selectedData} input={inputName} />
        </SelectContextProvider>
        <MyFooter />
      </ThemeContextProvider>
    </>
  );
}

export default App;
