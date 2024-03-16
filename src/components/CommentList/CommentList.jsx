import React from 'react';
import SingleComment from '../SingleComment/SingleComment';

export default function CommentList(props) {
    const { comments, rate } = props;
    return (
        <>
            <ul style={{ listStyle: "none" }}>
                {<SingleComment commenti={comments} rate={rate} />}
            </ul>
        </>
    )
}
