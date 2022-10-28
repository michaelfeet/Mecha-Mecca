import React, { useState, useEffect } from 'react';

export default function CommentList({ comments }) {

    return !comments ? null : (
        <>
            <div>
                <ul className={'list'}>{comments.map(c => {
                    return (
                        <>
                            <li className='listItem'>
                                <span>{c.comment}</span>
                                <span> - {c.user}</span>
                            </li>
                        </>
                    )
                })}</ul>
            </div>
        </>
    )
}