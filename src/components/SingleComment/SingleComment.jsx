import React from 'react';
import { FaTrash } from "react-icons/fa";
import { FaPen } from "react-icons/fa";

export default function SingleComment(props) {

    const { commenti, rate, deleteComment, commentId, putForm, setId } = props;

    function handleId(commentId) {
        putForm()
        setId(commentId)
    }

    return (
        <>
            <li>{commenti}</li >
            <span className='ms-4' style={rate >= 3 ? { backgroundColor: "green", borderRadius: "10px" } : { backgroundColor: "red", borderRadius: "10px" }}>{`Voto ${rate}`}</span>
            <div>
                <FaTrash onClick={() => deleteComment(commentId)} style={{ cursor: "pointer" }} />
                <FaPen onClick={() => handleId(commentId)} className='ms-3' style={{ cursor: "pointer" }} />
            </div>
        </>
    )
}
