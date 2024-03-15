import React from 'react'

export default function SingleComment(props) {

    const { comments } = props;
    return (
        <>
            <li>{comments}</li>
        </>
    )
}
