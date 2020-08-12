import React from 'react'
import Layout from "../components/layout"
import 'bootstrap/dist/css/bootstrap.min.css';
import SEO from "../components/seo"
import {Form,Button} from "react-bootstrap";


const contact = () =>  {
    return (
        <Layout>
        <SEO title="contact" />
        <div>
            <h1>Contact Here</h1>

            <Form>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Name:</Form.Label>
              <Form.Control type="name" placeholder="name" />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email:</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows="3" />
        </Form.Group>
    
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
        </div>
        </Layout>
    )
}
export default contact