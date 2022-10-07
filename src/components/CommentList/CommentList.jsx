import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Grid } from 'semantic-ui-react';

import Header from '../../components/Header/Header';
import ProfileBio from "../../components/ProfileBio/ProfileBio";
import PostGallery from "../../components/PostGallery/PostGallery";
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import Loading from '../../components/Loader/Loader'

import userService from '../../utils/userService';

import * as commentsApi from '../../utils/commentsApi';


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