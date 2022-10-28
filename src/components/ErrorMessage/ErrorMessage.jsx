import React from 'react';
import { Message } from 'semantic-ui-react'

export default function ErrorMessage({ error }) {
    return (
        <Message negative>
            <Message.Header>{error}</Message.Header>
        </Message>
    )
}