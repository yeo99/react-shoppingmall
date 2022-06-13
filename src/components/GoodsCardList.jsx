import { useState } from "react";
import data from '../data';
import { Row, Col, Container } from 'react-bootstrap';

function GoodsCardList() {
    let [shoes] = useState(data);

    return(
        <Container>
            <Row>
                {
                    shoes.map(function(arr, idx) {
                        return (<GoodsCard shoes={shoes[idx]} idx={idx+1} key={'GoodsCard' + idx}></GoodsCard>)
                    })
                }
            </Row>
        </Container>
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

export default GoodsCardList;