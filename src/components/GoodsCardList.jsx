import { useState } from "react";
import data from '../data';
import { Row, Col, Container } from 'react-bootstrap';
import axios from "axios";
import { Navigate, Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


{/**
        Ajax
        1. XMLHttpRequest
        2. fetch()
        3. 외부 라이브러리(ex. axios)
*/}

function GoodsCardList() {
    let [shoes, setShoes] = useState(data);
    let [moreGoodsCnt, setMoreGoodsCnt] = useState(2);
    // 1. 버튼을 첫번째 누르면 data2.json의 상품을 보여줌
    // 2. 버튼을 두번째 누르면 data3.json의 상품을 보여준다
    // 3. 버튼을 세번째 누르면 불러올 상품이 더이상 없다고 보여줌
    return(
        <Container>
            <button onClick={()=> {
                if(moreGoodsCnt < 4) {
                    setMoreGoodsCnt(moreGoodsCnt + 1);
                    
                    axios.get('https://codingapple1.github.io/shop/data'+ moreGoodsCnt +'.json').then((result) => {
                    // 복사본을 만들어서 shoes와 ajax 통신 결과의 data를 넣어줌
                    let shoesCopy = [...shoes, ...result.data]
                    // shoesCopy로 state 변경
                    setShoes(shoesCopy);
                    })
                    .catch(() => {
                        console.log('Ajax Fail');
                    })
                } else {
                    alert('더 불러올 상품이 없습니다.')
                }

                {/**
                    Ajax 요청을 한번에 여러곳으로 하고 싶다면
                   Promise.all([axios.get('/url1'), axios.get('/url2')])
                    .then(() => {
                        // promise.all 이 모든 axios통신이 성공하였을 경우 실행하는 코드
                    }) 
                */}

                {/**
                    기본적으로 서버와 문자만 주고받을 수 있는데,
                    "{"name" : "kim"}"과 같이 입력하면 array,object도 주고받기가 가능하다. (=json)

                    Axios의 경우 json으로 온 데이터를 array/object로 변환해주는데
                    fetch의 경우 따로 JSON -> array/object로 변환해줘야 한다.

                    fetch('https://codingapple1.github.io/shop/data2.json')
                        .then(결과 => 결과.json())
                        .then(data => {})
                */}

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
    let navigate = useNavigate();
    return(
        <Col md={4}
            onClick={() => {
            navigate('/detail/' + (props.idx - 1));
        }}
        >
            <img src={'https://codingapple1.github.io/shop/shoes' + props.idx + '.jpg'} width="80%" alt="Shoes" />
            <h4>{props.shoes.title}</h4>
            <p>{props.shoes.price}</p>
        </Col>
    );
}

export default GoodsCardList;