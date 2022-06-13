import { useState } from 'react';
import { Navbar, Container, Nav, Row, Col } from 'react-bootstrap';
import './App.css';
import data from './data';

function App() {

  let [shoes] = useState(data);
  
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className="main-bg"></div>
      
      {/* 상품 부분 */}
      <Container>
        <Row>
          {
            shoes.map(function(arr, idx){
              return (<GoodsCard shoes={shoes[idx]} idx={idx+1} key={'GoodsCard' + idx}></GoodsCard>);
            })
          }
        </Row>
      </Container>
    </div>
  );
}

function GoodsCard(props) {
  return(
    <Col md={4}>
      <img src={'https://codingapple1.github.io/shop/shoes' + props.idx + '.jpg'} width="80%" alt="Shoes" />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.price}</p>
    </Col>
  );
}

export default App;
