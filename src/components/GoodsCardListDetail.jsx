import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { Nav } from "react-bootstrap";
import { addGoodsToCart } from '../store';
import { useDispatch } from 'react-redux';
{/*
    styled-components를 통해 만든 스타일을 변수에 저장하여 사용 가능
    
    장점1. CSS파일 열지 않아도 됨
    장점2. 스타일이 다른 js파일로 오염되지 않음
        +)오염을 방지하기위한 추가적인 방법으로는 [컴포넌트명].module.css와 같이 해당 컴포넌트에게 종속시키는 방법도 있다.
    장점3. 페이지 로딩 시간 단축
        +)<style>태그 안에 포함됨. 렌더링이 필요한 코드만 렌더링
    장점4. 새로운 변수를 만들며 버튼을 다시 만들지 않아도, props를 이용하여 속성을 변경할 수 있다.

    단점1. JS파일이 매우 복잡해진다. (styled-components인지.. css인지.. 아니면 다른 프레임워크인지..)
    단점2. 중복 스타일은 컴포넌트간 import하는데, CSS와의 차이가..?
*/}
let YellowBtn = styled.button`
    background : ${props => props.background};
    color : ${props => props.bg == 'blue' ? 'white' : 'black'};
    padding : 10px;
`

{/*
  컴포넌트의 Life cycle
  - 페이지가 보이는 순간을 컴포넌트가 장착(Mount)된다.
  - 컴포넌트에서 state 조작을 하게 되면 컴포넌트가 update되기도 한다. 
  - 컴포넌트가 더이상 필요가 없으면 제거가 된다(Unmount).
  - 위 과정들을 컴포넌트의 라이프사이클이라고 한다.
*/}

{/*
  왜 배워야 하나?
  - 각 동작 중간중간마다 특정 코드를 실행할 수 있다.
  - ex) 마운트될 때, 업데이트 될 때, 언마운트 될 때,

  useEffect()밖에 해도 똑같은데?
  - useEffect()블럭 내부의 코드는 html 렌더링을 마친 후 이루어진다.(= html 런더링 속도 단축)

  어떤 코드를 쓰나?
  - 어려운 연산, 서버에서 데이터를 가져오는 작업, 타이머 붙일 때,, etc
  
  이름은 왜 effect?
  - side effect(함수의 핵심기능과 상관없는 부가기능)의 effect의 느낌을 따온 듯
  - 함수(Component)의 핵심기능(html 렌더링) 외의 effect
*/}


// 기존 스타일을 복사하고, 커스터마이징도 가능
// let YellowBtnCp = styled.button(YellowBtn)`
// `
let Box = styled.div`
    background: grey;
    padding: 20px;
`

function GoodsCardListDetail(props) {
    let [tab, setTab] = useState(0);
    let dispatch = useDispatch();
    // 컴포넌트가 mount시, 재 렌더링 시 update시 여기 코드가 실행된다.
    // return() => {} 와 같이 useEffect 내부에 리턴문을 두면 리턴문 먼저 실행된다.
    useEffect(() => {
        let twoSecTimer = setTimeout(()=>{
            document.querySelector('.alert.alert-warning').remove();
        }, 2000);

        return () => {
            // 기존 코드를 제거하는 용도로 자주 쓰인다(cleanup function)
            // 만약 useEffect에 서버로 데이터를 요청하는 코드가 있고, 넘어오는중 재렌더링이 되어버린다면
            // 서버로 같은 요청을 다시 날리게 될것이다. 그럴 때 기존 데이터 요청을 제거하도록 return()하위에 작성해서 문제를 해결한다.
            // cleanup function은 mount시 실행되지 않고, unmount시 실행된다.
        }
        {/*
            - 위 방법 외에도, useState로 "2초이내구매할인"의 상태를 boolean으로 줘서 분기하는 방법도 있다.
            - 아래 대괄호에 useEffect가 실행될 조건을 넣을 수 있다.
            - 빈 괄호로 두면 컴포넌트가 mount시에만 실행된다. (= 코드가 마운트시 1회만 실행시키고 싶다면)
        */}
    }, [])

    {/*
        정리)
        useEffect(() => { }) 1. 재랜더링마다 코드 실행하고 싶으면

        useEffect(() => { }, []) 2. mount시 1회 코드 실행하고 싶으면([]에 state명을 넣어 변경(=재렌더링 발생)시 코드 실행하도록 하는것도 가능)

        useEffect(() => {
            return ()=> {
                3. unmount시 1회 코드 실행하고 싶으면
            }
        }, [])
    */}

    let {id} = useParams();   // useParams Hook을 이용하여 파라미터 받아옴
    // 배열 순서가 바뀌어도 문제가 없도록
    let goods = props.shoes.find(function(x){
        return x.id == id;
    })

    return (
        <>
            <div className="container">
                <div className="alert alert-warning">2초 이내 구매시 할인</div>
                {/* <Box>
                    <YellowBtn background="blue">버튼</YellowBtn>
                </Box> */}
                <div className="row">
                    <div className="col-md-6">
                        <img src={"https://codingapple1.github.io/shop/shoes" + (goods.id+ Number(1)) + ".jpg"} width="100%" alt="Goods" />
                    </div>
                    <div className="col-md-6">
                        <h4 className="pt-5">{goods.title}</h4>
                        <p>{goods.content}</p>
                        <p>{goods.price}</p>
                        <button className="btn btn-danger" onClick={() => {
                            dispatch(addGoodsToCart( { id: 1, name : 'Red Knit', count : 1}))
                            alert('장바구니에 추가되었습니다!')
                        }}>주문하기</button>
                    </div>
                </div>
                
                {/*
                    defaultActiveKey는 기본적으로 눌려있을 버튼을 의미함
                */}
                <Nav variant="tabs" defaultActiveKey="link0">
                    <Nav.Item>
                        <Nav.Link onClick={() => {setTab(0)}} eventKey="link0">버튼0</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link onClick={() => {setTab(1)}} eventKey="link1">버튼1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link onClick={() => {setTab(2)}} eventKey="link2">버튼2</Nav.Link>
                    </Nav.Item>
                </Nav>
                <TabContent tab={tab}></TabContent>
            </div>
        </>
    );
}

{/*
    props.blah가 귀찮다면
    - 전달 되어야할 props가 여러개라면
    - function TabContent({tab, props2})
 */}

// tab을 tab state값에 따라 return
function TabContent({tab}) {
    let [fade, setFade] = useState('');

    // tab state가 변할 때 end를 땠다가 다시 붙여야함
    useEffect(() => {
        setTimeout(() => { setFade('end') }, 100)

        return () => {
            setFade('')
        }
    // tab이 변화할 때 마다 코드가 실행됨
    }, [tab])

    // if(tab == 0){
    //     return <div>내용0</div>
    // } else if(tab == 1){
    //     return <div>내용1</div>
    // } else if(tab ==2) {
    //     return <div>내용2</div>
    // }
    return(
        <div className={'start ' + fade}>
            {/**
                Single Page Application 단점
                - 컴포넌트간 state 공유 어려움(부모=> 자식으로 props 전송해서 써야함)
                - 부모 -> ... -> state사용 할 컴포넌트 이렇게 계속 전달해주는건 복잡해진다.

                이런게 싫으면
                - 1. Context API (리액트 기본문법)
                    성능이슈, 컴포넌트 재활용이 어려운 단점들로 인해 실무에서는 잘 사용되지 않는다 함 
                    단점1. state변경시 쓸데없는 것까지 재렌더링. 사이즈가 커질경우 성능이슈 가능성O
                    단점2. 나중에 컴포넌트 재사용이 어려움

                     
                - 2. Redux 등 외부 라이브러리
            */}
            {[<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][tab]}
        </div>
    );
}

export default GoodsCardListDetail;

{/*
    전환 애니메이션
    1. 애니메이션 동작 전 className 만들기
    2. 애니메이션 동작 후 className 만들기
    3. className에 transition 속성 추가
    4. 원할 때 클래스명 추가해줌
*/}