import React from 'react'

export default function SingleComment(props) {

    const { commenti } = props;
    return (
        <>
            <li>{commenti}</li>
        </>
    )
}
