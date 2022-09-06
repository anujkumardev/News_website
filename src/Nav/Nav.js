import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/esm/Button';
function Navigate() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="home">SamaChar</Navbar.Brand>
          <Nav className="me-auto">
          <Form className="mr-2 d-flex align-items-center" >
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2 h-75 "
              aria-label="Search"
              name="search_text"
               />
            <Button variant="outline-success" className="btn-sm" type='submit'>Search</Button>
          </Form>
            <Nav.Link href="home">Home</Nav.Link>
            <Nav.Link href="Business">Business</Nav.Link>
            <Nav.Link href="Technology">Technology</Nav.Link>
            <Nav.Link href="Entertainment">Entertainment</Nav.Link>
            <Nav.Link href="Science">Science</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

    </>
  );
}

export default Navigate;