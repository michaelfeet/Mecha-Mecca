import React, { useState } from 'react';
import { Button, Form, Segment, TextArea } from 'semantic-ui-react';

export default function AddComment(props) {
    const [state, setState] = useState({
        comment: ''
    })

    function handleChange(e) {
        setState({
            comment: e.target.value
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('comment', state.comment);
        console.log(formData)
        props.handleAddComment(formData); // formData is the data we want to send to the server!
    }



    return (
        <Segment>
            <Form onSubmit={handleSubmit}>
                <Form.Field
                    control={TextArea}
                    className="form-control"
                    name="comment"
                    value={state.comment}
                    placeholder="AddComment"
                    onChange={handleChange}
                    required
                />
                <Button type="submit" className="btn" color="red" onClick={handleSubmit}>Submit</Button>
            </Form>
        </Segment>
    )
}