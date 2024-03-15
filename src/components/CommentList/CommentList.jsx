import React from 'react';
import SingleComment from '../SingleComment/SingleComment';

export default function CommentList(props) {
    const { comments } = props;

    return (
        <>
            <ol>
                {comments.map((el) => <SingleComment comments={comments} />)}
            </ol>
        </>
    )
}
