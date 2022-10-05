import React, { useState, useEffect } from 'react';
import { Grid } from 'semantic-ui-react';

import Header from '../../components/Header/Header';
import AddPost from '../../components/AddPost/AddPost';
import PostGallery from '../../components/PostGallery/PostGallery';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage'
import Loading from "../../components/Loader/Loader";

import * as postsAPI from '../../utils/postApi';

export default function Feed({ loggedUser, handleLogout, deletePost }) {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    async function handleAddPost(post) {
        try {
            setLoading(true);
            const response = await postsAPI.create(post);
            // console.log(response);
            // setPosts([response.data, ...posts]);
            getPosts();
            setLoading(false);
        } catch (err) {
            // console.log(err.message, 'error creating post');
            setError("Error creating post, please try again");
        }
    }

    async function getPosts() {
        try {
            const response = await postsAPI.getAll();
            // console.log(response, '<<<Data');
            setPosts([...response.data]);
            setLoading(false);
        } catch (err) {
            console.log(err.message, '<<< This is the error');
            setLoading(false);
        }
    }

    async function deletePost(postId){
        try{
            setLoading(true);
            const response = await postsAPI.deletePost(postId);
            getPosts();
            setLoading(false);
        } catch(err){
            setError("Error deleting posts, try again.")
        }
    }

    useEffect(() => {
        getPosts();
    }, [])

    if (error) {
        return (
            <>
                <Header loggedUser={loggedUser} handleLogout={handleLogout} />
                <ErrorMessage error={error} />;
            </>
        );
    }

    if (loading) {
        return (
            <>
                <Header loggedUser={loggedUser} handleLogout={handleLogout} />
                <Loading />
            </>
        );
    }
    return (
        <Grid centered>
            <Grid.Row>
                <Grid.Column>
                    <Header loggedUser={loggedUser} handleLogout={handleLogout} />
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column style={{ maxWidth: 450 }}>
                    <AddPost handleAddPost={handleAddPost} />
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column style={{ maxWidth: 450 }}>
                    <PostGallery
                        posts={posts}
                        numPhotosCol={1}
                        isProfile={false}
                        loading={loading}
                        deletePost={deletePost}
                        // addLike={addLike}
                        // removeLike={removeLike}
                        loggedUser={loggedUser}
                    />
                </Grid.Column>
            </Grid.Row>
        </Grid>
    );
}