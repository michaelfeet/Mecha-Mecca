import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import {Link} from 'react-router-dom'

export default function PostCard({ post, isProfile, loggedUser }) {
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
            <Image src={`${post?.photoUrl}`} wrapped ui={false} />
            <Card.Content>
                <Card.Description>
                    {post.title}
                </Card.Description>
            </Card.Content>
            {/* <Card.Content extra textAlign='right'>
                    <Icon name={'heart'} size='large' color={'grey'} />
                    {post.likes.length} Likes
            </Card.Content> */}
        </Card>
    )
}