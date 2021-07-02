import { Container, Row, Col, Button} from "react-bootstrap";
import Card from 'react-bootstrap/Card'

import ModalTest from "./Modal";

const Child = () => {
  //   const input1 = document.querySelector("#text1");
  //   input1.value = "2 of 1";

  return (
    <Container>
      <Container>
        <Row>
          <Col>1 of 2</Col>
          <Col>
            <input id="text1" type="text" value=""></input>
          </Col>
        </Row>
        <Row>
          <Col>1 of 3</Col>
          <Col>2 of 3</Col>
          <Col>3 of 3</Col>
        </Row>
      </Container>

      <Container>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </Container>

      <ModalTest/>

    </Container>
  );
};

export default Child;
