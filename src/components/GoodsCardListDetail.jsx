import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useEffect, useState } from "react";

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
  => 위 과정들을 컴포넌트의 라이프사이클이라고 한다.

  => 왜 배워야 하나?
  - 각 동작 중간중간마다 특정 코드를 실행할 수 있다.
    - ex) 마운트될 때, 업데이트 될 때, 언마운트 될 때,
  => useEffect()밖에 해도 똑같은데?
    - useEffect()블럭 내부의 코드는 html 렌더링을 마친 후 이루어진다.(= html 런더링 속도 단축)
  => 어떤 코드를 쓰나?
    - 어려운 연산, 서버에서 데이터를 가져오는 작업, 타이머 붙일 때,, etc
  => 이름은 왜 effect?
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

    // useEffect 훅 사용
    useEffect(() => {
        // 컴포넌트가 mount시, update시 여기 코드가 실행된다.
        
        // 2초 후에 코드를 실행
        setTimeout(()=>{
            document.querySelector('.alert.alert-warning').remove();
        }, 2000);
    })

    let [count, setCount] = useState(0);

    let {id} = useParams();   // useParams Hook을 이용하여 파라미터 받아옴
    // 배열 순서가 바뀌어도 문제가 없도록
    let goods = props.shoes.find(function(x){
        return x.id == id;
    })

    console.log(goods);

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
                        <button className="btn btn-danger">주문하기</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default GoodsCardListDetail;