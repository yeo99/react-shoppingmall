import { useState } from "react";
import data from '../data';
import { Row, Col, Container } from 'react-bootstrap';
import axios from "axios";

{/**
        Ajax
        1. XMLHttpRequest
        2. fetch()
        3. 외부 라이브러리(ex. axios)
*/}

axios.get('https://codingapple1.github.io/shop/data2.json')
      .then((result) => {
        console.log(result.data);
      })
      .catch(() => {
        console.log('Ajax Fail');
      })

function GoodsCardList() {
    let [shoes, setShoes] = useState(data);
    return(
        <Container>
            <button onClick={()=> {
                axios.get('https://codingapple1.github.io/shop/data2.json').then((result) => {
                    // 복사본을 만들어서 shoes와 ajax 통신 결과의 data를 넣어줌
                    let shoesCopy = [...shoes, ...result.data]
                    // shoesCopy로 state 변경
                    setShoes(shoesCopy);
                })
                .catch(() => {
                  console.log('Ajax Fail');
                })
            }}>상품 더 불러오기</button>
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