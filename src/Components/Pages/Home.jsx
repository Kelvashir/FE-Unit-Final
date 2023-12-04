import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const Home = () => {
  return (
    <Container className="mt-4">
      <Row>
        <Col>
          <div className="bg-light p-5 rounded">
            <h1 className="display-4">Welcome to our Website</h1>
            <p className="lead">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              eget felis et quam vehicula dapibus. Integer sit amet felis
              auctor, tincidunt elit a, tristique libero.
            </p>
            <hr className="my-4" />
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </p>
            <Button variant="primary">Learn more</Button>
          </div>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col md={6}>
          <h2>Featured Services</h2>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </p>
          <Button variant="secondary">Explore Services</Button>
        </Col>
        <Col md={6}>
          <h2>Latest Projects</h2>
          <p>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt.
          </p>
          <Button variant="secondary">View Projects</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
