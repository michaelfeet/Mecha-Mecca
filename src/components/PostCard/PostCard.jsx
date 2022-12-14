import React from 'react';
import { Card, Image, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom'

import * as postApi from '../../utils/postApi'

export default function PostCard({ post, isProfile, loggedUser, deletePost }) {


    return (
        <Card key={post._id} raised>
            {isProfile ? (
                ''
            ) : (
                <Card.Content textAlign='left'>
                    <Card.Header>
                        <Link to={`/${post.user.username}`}>
                            <Image
                                size='large'
                                avatar
                                src={
                                    post.user.photoUrl
                                        ? post.user.photoUrl
                                        : 'https://react.semantic-ui.com/images/wireframe/square-image.png'
                                }
                            />
                            {post.user.username}
                        </Link>
                    </Card.Header>
                </Card.Content>
            )}
            
            <Card.Content textAlign='center'>
                <Card.Description>
                    {post.title}
                </Card.Description>
            </Card.Content>
            <Image src={`${post?.photoUrl}`} wrapped ui={false} />
            
            <Card.Content>
            <Link to={`/post/${post._id}`}>
                <Button>Details</Button>
            </Link>
                {post.user.username === loggedUser.username
                    ? <Button onClick={() => deletePost(post._id)}>Delete</Button>
                    : ''
                }
            </Card.Content>
        </Card>
    )
}