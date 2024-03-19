import React, { useContext, useRef } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { ThemeContext } from '../ThemeContextProvider/ThemeContextProvider';
export default function Select({ onGenreChange }) {
    const inputRef = useRef(null);

    function takeValue() {
        const selectedValue = inputRef.current.value;
        console.log(selectedValue);
        onGenreChange(selectedValue);
    }

    const { theme } = useContext(ThemeContext)
    return (
        <>
            <div className={theme === "dark" ? "d-flex justify-content-around bg-dark" : "d-flex justify-content-around bg-light"} style={{ backgroundColor: "#212529", padding: "30px" }}>
                <Form.Select aria-label="Default select example" ref={inputRef} style={{ width: "300px" }}>
                    <option value="horror">Horror</option>
                    <option value="fantasy">Fantasy</option>
                    <option value="romance">Romance</option>
                    <option value="scifi">Sci-fi</option>
                    <option value="history">History</option>

                </Form.Select>
                <Button variant="outline-warning" onClick={takeValue}>Cerca per categoria</Button>
            </div>
        </>
    );

}
