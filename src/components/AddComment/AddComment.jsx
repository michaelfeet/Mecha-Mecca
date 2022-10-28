import React, { useState } from 'react';
import { Button, Form, Segment, TextArea } from 'semantic-ui-react';

export default function AddComment({postId, handleAddComment}) {
    const [state, setState] = useState({
        comment: ''
    })
    function handleChange(e) {
        setState({
            ...state,
            comment: e.target.value
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        handleAddComment({
            comment: state.comment,
            postId: postId
        });
    }

    return (
        <Segment>
            <Form onSubmit={handleSubmit}>
                <Form.Field
                    control={TextArea}
                    className="form-control"
                    name="comment"
                    value={state.comment}
                    placeholder="Add Comment"
                    onChange={handleChange}
                    required
                />
                <Button type="submit" className="btn" color="red" onClick={handleSubmit}>Submit</Button>
            </Form>
        </Segment>
    )
}