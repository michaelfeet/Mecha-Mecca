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

    // const [posts, setPosts] = useState([]);
    // const [profileUser, setProfileUser] = useState({});
    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState('');

    // const { username } = useParams();

    // const [comments, setComments] = useState([]);


    // async function getComment() {

    //     try {
    //         console.log(postId, 'psot id')
    //         const response = await commentsApi.getAll();
    //         console.log(response, '<<<user\'s posts');
    //         setLoading(false);
    //         setProfileUser(response.data.user);
    //         setComments(response.data.comments);
    //     } catch (err) {
    //         console.log(err.message);
    //         setError('These are not the droids you\'re looking for. Profile not found.');
    //     }
    // }


    // useEffect(() => {
    //     getComment();
    // }, [username]);

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