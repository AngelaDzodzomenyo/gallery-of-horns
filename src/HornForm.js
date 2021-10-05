import React from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import { Navbar } from 'react-bootstrap';


class HornForm extends React.Component {
  handleChangle = event => {
    const selection = event.target.value;
    this.props.onSelect(selection);
  }

  render() {
    return (
      <Container>
        <Navbar bg = 'purple' variant = 'purple'>
        <Navbar.Brand>How Many Horns?</Navbar.Brand>
        </Navbar>
        <Form>
        <Form.Select onChange={this.handleChange}>
          <option value="all">All</option>
          <option value="one">One</option>
          <option value="two">Two</option>
          <option value="three">Three</option>
          <option value="9000">Over 9000!</option>
        </Form.Select>
        </Form>
      </Container>
    );
  }
}

export default HornForm;
