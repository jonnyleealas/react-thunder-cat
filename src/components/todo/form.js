import React, {useState, useEffect} from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'





function MainForm(){

    const [itemObject, setItemObject] = useState({})

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(itemObject)
        e.target.reset()
    }

    const handleChange = (e) =>{
    setItemObject({...itemObject, [e.target.name]: e.target.value})
    console.log(itemObject)
    }

    return(
        <>
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="item">
                <Form.Label>To Do Item</Form.Label>
                <Form.Control name="text" type="text" onChange={handleChange} placeholder="Add a task..." />
            </Form.Group>

            <Form.Group controlId="assignee">
                <Form.Label>Assign To:</Form.Label>
                <Form.Control name="assignee" type="text" onChange={handleChange} placeholder="Assigned To" />
            </Form.Group>
            
            <Form>
            <Form.Group controlId="formBasicRange">
                <Form.Label>Range</Form.Label>
                <Form.Control name="difficulty" onChange={handleChange} type="range" min="1" max="5" />
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