import React from 'react'

export default function SingleComment(props) {

    const { commenti, rate } = props;
    return (
        <>
            <li>{commenti}<span className='ms-4' style={rate >= 3 ? { backgroundColor: "green", borderRadius: "10px" } : { backgroundColor: "red", borderRadius: "10px" }}>{`Voto ${rate}`}</span></li >
        </>
    )
}
