import './App.css';
import { useState } from 'react';
import BooksTemplate from './components/BooksTemplate/BooksTemplate';
import MyFooter from './components/MyFooter/MyFooter';
import MyNavbar from './components/MyNavbar/MyNavbar';
import Welcome from './components/Welcome/Welcome';
import horrorData from './data/horror.json';
import fantasyData from "./data/fantasy.json";
import historyData from "./data/history.json";
import sciFiData from "./data/scifi.json";
import romanceData from "./data/romance.json";

import Select from './components/Select/Select';
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
  return (
    <>
      <MyNavbar />
      <Welcome />
      <Select onGenreChange={handleGenreChange} />
      <BooksTemplate books={selectedData} />
      <MyFooter />
    </>
  );
}

export default App;
