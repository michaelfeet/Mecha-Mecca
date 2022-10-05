import React from 'react';
import { Link } from 'react-router-dom'
import { Header, Segment, Image } from 'semantic-ui-react';
import './Header.css'

export default function PageHeader({ loggedUser, handleLogout }) {
    // console.log(loggedUser, '<<< loggedUser in header')
    // console.log(loggedUser)
    return (
        <Segment clearing>
            <Header as="h2" floated="right">
                <Link to={`/${loggedUser?.username}`}>
                    <Image
                        src={
                            loggedUser?.photoUrl
                                ? loggedUser?.photoUrl
                                : "https://react.semantic-ui.com/images/wireframe/square-image.png"
                        }
                        avatar
                    ></Image>
                    <span className="header-username">{loggedUser?.username}</span>
                </Link>
                <Link to="" onClick={handleLogout}>
                    Logout
                </Link>
            </Header>
            <Header as="h2" floated="left">
                <Link to="/">
                    <Image src='https://i.imgur.com/TAtWfEl.png' avatar></Image>
                    <span>Home</span>
                </Link>
            </Header>
        </Segment>
    )
}