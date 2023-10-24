import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import books from '../data/fantasy.json';
import booksH from '../data/horror.json';
import { Col, Container, Row } from 'react-bootstrap';


function AllTheBooks() {
  return (
    <Container fluid mt-5> 
        <Row>
    
    {
    books.map((books ) => {
        return (
    
            <Col xl={2} md={4} xs={12} className='mb-4 mt-4' >
    <Card  className='h-100' >
    <Card.Img variant="top" src={books.img} className='h-75' />
    <Card.Body>
      <Card.Title className='tex-nowrap '>{books.title}</Card.Title>
      <Card.Text>
        {books.category}
      </Card.Text>
      <Card.Text>
        {books.price}
      </Card.Text>
      <Button variant="primary">buy</Button>
    </Card.Body>
  </Card>
  </Col>
    )}) }
   
    </Row> 
  </Container>


  );
}

export default AllTheBooks;