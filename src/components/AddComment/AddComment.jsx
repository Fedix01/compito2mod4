import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function AddComment() {
    return (
        <div className='d-flex'>
            <Form.Control type="text" placeholder="Normal text" />
            <Button variant="outline-primary">Commenta</Button>
        </div>
    )
}
