import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


function MainForm(){

    return(
        <>
        <Form>
            <Form.Group controlId="item">
                <Form.Label>To Do Item</Form.Label>
                <Form.Control type="text" placeholder="Add a task..." />
            </Form.Group>

            <Form.Group controlId="assignee">
                <Form.Label>Assigne To:</Form.Label>
                <Form.Control type="text" placeholder="Assigned To" />
            </Form.Group>
            
            <Form>
            <Form.Group controlId="formBasicRange">
                <Form.Label>Range</Form.Label>
                <Form.Control type="range" min="1" max="5" />
            </Form.Group>
            </Form>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
        </>
    )
}

export default MainForm;