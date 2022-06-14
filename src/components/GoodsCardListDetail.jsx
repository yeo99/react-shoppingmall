import { useParams } from "react-router-dom";
import { StyledComponent } from "styled-components";

function GoodsCardListDetail(props) {

    let {id} = useParams();   // useParams Hook을 이용하여 파라미터 받아옴
    // 배열 순서가 바뀌어도 문제가 없도록
    let goods = props.shoes.find(function(x){
        return x.id == id;
    })

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" alt="Goods" />
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