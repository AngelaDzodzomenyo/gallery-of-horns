import React from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import { Navbar } from 'react-bootstrap';


class HornForm extends React.Component {
  // handleChangle = event => {
  //   const selection = event.target.value;
  //   this.props.onSelect(selection);
  // }

  render() {
    return (
      <Container>
        <Navbar bg = 'purple' variant = 'purple'>
        <Navbar.Brand>How Many Horns?</Navbar.Brand>
        </Navbar>
        <Form>
        <Form.Control as="select" onChange={(event) => this.props.onSelect(event)}>
          <option value="all">All</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
          <option value="9000">Over 9000!</option>
        </Form.Control>
        </Form>
      </Container>
    );
  }
}

export default HornForm;
