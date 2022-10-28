import React from 'react';
import './Show.css';
import Header from '../../components/Header/Header';
import CommentList from '../../components/CommentList/CommentList';
import AddComment from '../../components/AddComment/AddComment'

import * as postsApi from '../../utils/postApi'
import * as commentsApi from '../../utils/commentsApi'

import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Grid, Image } from 'semantic-ui-react';

import './Show.css';

export default function ShowPage({ loggedUser, handleLogout }) {
    const [post, setPost] = useState({});
    const { id } = useParams();

    async function getOne() {
        try {
            const response = await postsApi.showPost(id);
            setPost(response.data);
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
        }
    }

    return (

        <Grid textAlign='center' columns={1} >
            <Grid.Row>
                <Grid.Column>
                    <Header loggedUser={loggedUser} handleLogout={handleLogout} />
                </Grid.Column>
            </Grid.Row>
            <Grid.Row >
                <Grid.Column>
                    <h1>{post.title}</h1>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column style={{ maxWidth: 450 }}>
                    <Image className='image' src={post.photoUrl} />
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column style={{ maxWidth: 450 }}>
                    <AddComment postId={post._id} handleAddComment={handleAddComment} />
                </Grid.Column>
                <Grid.Column>
                    <CommentList className={'list'} comments={post.comments} />
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
}