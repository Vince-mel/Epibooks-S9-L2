import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import books from "../data/fantasy.json";
import booksH from "../data/horror.json";
import { Col, Container, Row } from "react-bootstrap";

function AllTheBooks() {
  return (
    <Container fluid mt-5>
      <Row>
        {books.map((books) => {
          return (
            <Col xl={2} md={4} xs={12} className="mb-4 mt-4" key={books.asin}>
              <Card className="h-100">
                <Card.Img variant="top" src={books.img} className="h-75" />
                <Card.Body>
                  <Card.Title className="text-truncate text-nowrap fs-6">
                    {books.title}
                  </Card.Title>
                  <Card.Text className="fs-6 text-center">
                    {books.category}
                  </Card.Text>
                  <Card.Text className="fs-6 text-center">
                    {books.price}
                  </Card.Text>
                  <div className="text-center">
                    <Button variant="primary">buy</Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default AllTheBooks;
