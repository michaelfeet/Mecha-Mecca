import React, { useState } from 'react';
import { Button, Form, Grid, Segment } from 'semantic-ui-react';

export default function AddPost(props) {
    const [state, setState] = useState({
        title: ''
    })
    const [selectedFile, setSelectedFile] = useState('');

    function handleSubmit(e) {
        e.preventDefault(); 
        const formData = new FormData();
        formData.append('photo', selectedFile);
        formData.append('title', state.title)
        props.handleAddPost(formData); // formData is the data we want to send to the server!

    }

    function handleChange(e) {
        setState({
            title: e.target.value
        });
    }

    function handleFileInput(e) {
        console.log(e.target.files, 'e.target.files');
        setSelectedFile(e.target.files[0]);
    }

    return (
        <Grid centered>
            <Segment>
            <Form onSubmit={handleSubmit}>
                <Form.Input
                    className="form-control"
                    name="title"
                    value={state.title}
                    placeholder="Title"
                    onChange={handleChange}
                    required
                />
                <Form.Field>
                    <Form.Input
                        type="file"
                        name="photo"
                        placeholder="upload image"
                        onChange={handleFileInput}
                    />
                </Form.Field>
                <Button type="submit" className="btn" color="red">Submit</Button>
            </Form>
        </Segment>
        </Grid>
        
    )
}