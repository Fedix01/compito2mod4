import React, { useState, useEffect } from 'react';
import Select from '../Select/Select';
import MyNavbar from '../MyNavbar/MyNavbar';
import Welcome from '../Welcome/Welcome';
import MyFooter from '../MyFooter/MyFooter';
import SelectContextProvider from '../SelectedContextProvider/SelectContextProvider';

import horrorData from '../../data/horror.json';
import fantasyData from "../../data/fantasy.json";
import historyData from "../../data/history.json";
import sciFiData from "../../data/scifi.json";
import romanceData from "../../data/romance.json";

import AllTheBooks from '../AllTheBooks/AllTheBooks';

export default function AllTheBooksPage(props) {

    const { navForm, navDetails } = props;

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

    useEffect(() => {

        navDetails(true)
    }, [navForm])


    return (
        <>
            <MyNavbar input={inputName} setInput={setInputName} navForm={navForm} />
            <Welcome />
            <Select onGenreChange={handleGenreChange} />
            <SelectContextProvider >
                <AllTheBooks books={selectedData} input={inputName} />
            </SelectContextProvider>
            <MyFooter />
        </>
    )
}
