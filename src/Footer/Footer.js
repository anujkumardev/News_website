import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer() {
  return (
    <Container fluid className='bg-dark text-white'>
      <Row>
        <Col>&copy; {new Date().getFullYear()}</Col>
      </Row>
    </Container>
  );
}

export default Footer;