// header
// specific post
// comment form
// comment list
// delete button build here

import React from 'react';
import './Show.css';
import Header from '../../components/Header/Header';
import ProfileBio from "../../components/ProfileBio/ProfileBio";
import PostGallery from "../../components/PostGallery/PostGallery";
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import Loading from '../../components/Loader/Loader';
import CommentList from '../../components/CommentList/CommentList';
import AddComment from '../../components/AddComment/AddComment'

import * as postsApi from '../../utils/postApi'
import * as commentsApi from '../../utils/commentsApi'

import { Link, useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect, useCallBack } from 'react';
import { Card, Dimmer, Segment, Image } from 'semantic-ui-react';


export default function ShowPage({ user, handleLogout }) {
    const [post, setPost] = useState({});
    const { id } = useParams();

    async function getOne() {
        try {
            const response = await postsApi.showPost(id);
            console.log(response, '<<<Data');
            setPost(response.data);
            // setLoading(false);
        } catch (err) {
            console.log(err.message, '<<< This is the error');
        }
    }

    useEffect(() => {
        getOne();
    }, [])

    async function handleAddComment(comment) {
        try {
            const response = await commentsApi.create(comment);
            getOne();
        } catch (err) {
            console.log(err.message, 'error creating post');
        }
    }

    return (
        <>
            <h2>test</h2>
            <Image src={post.photoUrl}/>
            <span>{post.title}</span>
            <AddComment postId={post._id} handleAddComment={handleAddComment}/>
            <CommentList comments={post.comments}/>
            
        </>

    )
}