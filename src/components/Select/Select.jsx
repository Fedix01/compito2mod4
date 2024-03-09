import React, { useRef } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
export default function Select({ onGenreChange }) {
    const inputRef = useRef(null);

    function takeValue() {
        const sleectedValue = inputRef.current.value;
        console.log(sleectedValue)
        onGenreChange(sleectedValue)
    }
    return (
        <>
            <div className='d-flex'>
                <Form.Select aria-label="Default select example" ref={inputRef} style={{ width: "300px" }}>
                    <option>Select a book genre</option>
                    <option value="horror">Horror</option>
                    <option value="fantasy">Fantasy</option>
                    <option value="romance">Romance</option>
                    <option value="scifi">Sci-fi</option>
                    <option value="history">History</option>

                </Form.Select>
                <Button variant="outline-success" onClick={takeValue}>Success</Button>
            </div>
        </>
    );

}
