import React from 'react';
import SingleComment from '../SingleComment/SingleComment';

export default function CommentList(props) {
    const { comments, rate, deleteComment, commentId, putForm } = props;
    return (
        <>
            <ul className='d-flex align-items-center justify-content-between' style={{ listStyle: "none" }}>
                {<SingleComment commenti={comments} rate={rate} deleteComment={deleteComment} commentId={commentId} putForm={putForm} />}
            </ul>
        </>
    )
}
