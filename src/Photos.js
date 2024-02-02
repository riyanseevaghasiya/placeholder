import { useEffect, useState } from "react";
import { Card, Button,Container,Row,Col } from "react-bootstrap";
import axios from "axios";
import Home from './Home';

function Photos() {
  let [data, setdata] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then(function (response) {
        // handle success
        console.log(response.data);
        setdata(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  });
  return (
    <>
      <Home></Home>
      <Container fluid>
        <Row>
          {data.map((ele, ind) => {
            return (
              <>
              <Col>
                <Card key={ind} style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={ele.url} />
                  <Card.Body>
                    <Card.Title>{ele.albumId}</Card.Title>
                    <Card.Title>{ele.id}</Card.Title>
                    <Card.Title>{ele.title}</Card.Title>
                    <Button variant="primary"> 
                      <a href={ele.thumbnailUrl} target="_blank"> readmore</a>
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
              </>
            );
          })}
        </Row>
      </Container>
    </>
  );
}
export default Photos;
