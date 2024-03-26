import React, { useState } from 'react';
import Select from '../Select/Select';
import MyNavbar from '../MyNavbar/MyNavbar';
import Welcome from '../Welcome/Welcome';
import MyFooter from '../MyFooter/MyFooter';
import ThemeContextProvider from '../ThemeContextProvider/ThemeContextProvider';
import SelectContextProvider from '../SelectedContextProvider/SelectContextProvider';

import horrorData from '../../data/horror.json';
import fantasyData from "../../data/fantasy.json";
import historyData from "../../data/history.json";
import sciFiData from "../../data/scifi.json";
import romanceData from "../../data/romance.json";

import AllTheBooks from '../AllTheBooks/AllTheBooks';

export default function AllTheBooksPage() {

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
    )
}
