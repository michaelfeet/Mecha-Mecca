import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Grid } from 'semantic-ui-react';

import Header from '../../components/Header/Header';
import ProfileBio from "../../components/ProfileBio/ProfileBio";
import PostGallery from "../../components/PostGallery/PostGallery";
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import Loading from '../../components/Loader/Loader'

import userService from '../../utils/userService';
import * as postsAPI from '../../utils/postApi';


export default function ProfilePage({ loggedUser, handleLogout }) {
    const [posts, setPosts] = useState([]);
    const [profileUser, setProfileUser] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const { username } = useParams();

    async function getProfile() {
        try {
            const response = await userService.getProfile(username);
            console.log(response, '<<<user\'s posts');
            setLoading(false);
            setProfileUser(response.data.user);
            setPosts(response.data.posts);
        } catch (err) {
            console.log(err.message, 'profile>profilePage()');
            setError('These are not the droids you\'re looking for. Profile not found.');
        }
    }

    useEffect(() => {
        getProfile();
    }, [username]);

    async function deletePost(postId){
        try{
            setLoading(true);
            const response = await postsAPI.deletePost(postId);
            getProfile();
            setLoading(false);
        } catch(err){
            setError("Error deleting posts, try again.")
        }
    }

    if (error) {
        return (
            <>
                <Header loggedUser={loggedUser} handleLogout={handleLogout} />
                <ErrorMessage error={error} />
            </>
        )
    }

    if (loading) {
        return (
            <>
                <Header loggedUser={loggedUser} handleLogout={handleLogout} />
                <Loading />
            </>
        )
    }


    return (
        <Grid>
            <Grid.Row>
                <Grid.Column>
                    <Header loggedUser={loggedUser} handleLogout={handleLogout} />
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column>
                    <ProfileBio user={profileUser} />
                </Grid.Column>
            </Grid.Row>
            <Grid.Row centered>
                <Grid.Column style={{ maxWidth: 750 }}>
                    <PostGallery posts={posts}
                        numPhotosCol={3}
                        isProfile={true}
                        loading={loading}
                        loggedUser={loggedUser}
                        deletePost={deletePost}
                    />
                </Grid.Column>
            </Grid.Row>
        </Grid>
    );
}