import React from 'react';
import { FaTrash } from "react-icons/fa";
import { FaPen } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import Button from 'react-bootstrap/Button';

export default function SingleComment(props) {

    const { commenti, rate, deleteComment, commentId, putForm, setId } = props;

    function handleId(commentId, commenti) {
        putForm(commenti)
        setId(commentId)
    }

    return (
        <>
            <div className='d-flex align-items-center justify-content-between'>
                <div className='d-flex align-items-center'>
                    <FaUser />
                    <div className='ms-3'>
                        <li data-testid="lista" >{commenti}</li >
                        <span>{`Voto ${rate}`}</span>
                    </div>
                </div>
                <div>
                    <Button variant="danger" onClick={() => deleteComment(commentId)}>
                        <FaTrash />
                    </Button>
                    <Button variant='primary' className='ms-2' onClick={() => handleId(commentId, commenti)}>
                        <FaPen />
                    </Button>
                </div>
            </div>
        </>
    )
}
