import React from "react";
import { Accordion, Button } from "react-bootstrap";

const Welcome = () => (
  <Accordion>
    <Accordion.Header>Images Gallery</Accordion.Header>
    <Accordion.Body>
      This is a simple application that retrieves photos using Unsplash API.
      In order to start enter any search term in the input field.
    </Accordion.Body>
    <Accordion.Body>
      <Button bsStyle="primary" href="https://unsplash.com" 
      target="_blank">Learn more</Button>
    </Accordion.Body>
  </Accordion>
);

export default Welcome;