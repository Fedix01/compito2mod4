import React from 'react';
import SingleComment from '../SingleComment/SingleComment';

export default function CommentList(props) {
    const { key, comments } = props;
    return (
        <>
            <ol>
                {<SingleComment key={key} commenti={comments} />}
            </ol>
        </>
    )
}
