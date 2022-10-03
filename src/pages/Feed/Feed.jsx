import React, { useState } from 'react';

import Header from '../../components/Header/Header';
import AddPost from '../../components/AddPost/AddPost';
import PostGallery from '../../components/PostGallery/PostGallery';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage'
import Loading from "../../components/Loader/Loader";
import * as postsAPI from '../../utils/postApi';

import { Grid } from 'semantic-ui-react';
import { useEffect } from 'react';

export default function Feed() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    async function handleAddPost(post) {
        try {
            setLoading(true);
            const response = await postsAPI.create(post);
            // console.log(response);
            setPosts([response.data, ...posts]);
            setLoading(false);
        } catch (err) {
            // console.log(err.message, 'error creating post');
            setError("Error creating post, please try again");
        }
    }

    useEffect(() => {
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
        getPosts();
    }, [])

    // return (
    //     <Grid centered>
    //         <Grid.Row>
    //             <Grid.Column>
    //                 <Header />
    //             </Grid.Column>
    //         </Grid.Row>
    //         <Grid.Row>
    //             <Grid.Column style={{ maxWidth: 450 }}>
    //                 <AddPost handleAddPost={handleAddPost} />
    //             </Grid.Column>
    //         </Grid.Row>
    //         <Grid.Row>
    //             <Grid.Column style={{ maxWidth: 450 }}>
    //                 <PostGallery
    //                     posts={posts}
    //                     numPhotosCol={1}
    //                     isProfile={false}
    //                     loading={loading}
    //                     // loading={loading}
    //                     // addLike={addLike}
    //                     // removeLike={removeLike}
    //                     // loggedUser={loggedUser}
    //                 />
    //             </Grid.Column>
    //         </Grid.Row>
    //     </Grid>
    // )
    if (error) {
        return (
            <>
                <Header /> 
                {/* handleLogout={handleLogout} loggedUser={loggedUser}  */}
                <ErrorMessage error={error} />;
            </>
        );
    }

    if (loading) {
        return (
            <>
                <Header  />
                <Loading />
            </>
        );
    }
    return (
        <Grid centered>
            <Grid.Row>
                <Grid.Column>
                    <Header  />
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
                        // addLike={addLike}
                        // removeLike={removeLike}
                        // loggedUser={loggedUser}
                    />
                </Grid.Column>
            </Grid.Row>
        </Grid>
    );
}