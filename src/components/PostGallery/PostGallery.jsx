import React, { useState } from 'react';
import { Card, Grid, Dimmer, Segment, Image } from 'semantic-ui-react';
import PostCard from '../PostCard/PostCard';
import Loader from '../Loader/Loader'

export default function PostGallery({ posts, numPhotosCol, isProfile, loading }) {
    const postCards = posts.map((post) => {
        return (
            <PostCard
                post={post}
                key={post._id}
            />
        );
    });

    return (
        <Card.Group itemsPerRow={numPhotosCol} stackable>
            {loading ? (
                <Segment>
                    <Dimmer active inverted>
                        <Loader size="small">Loading</Loader>
                    </Dimmer>
                    <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
                </Segment>
            ) : null}
            {posts.map((post) => {
                return (
                    <PostCard
                        post={post}
                        key={post._id}
                        isProfile={isProfile}
                        // removeLike={removeLike}
                        // addLike={addLike}
                        // loggedUser={loggedUser}
                    />
                );
            })}
        </Card.Group>
    );
}