import { Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import TopNavBar from '../components/TopNavBar';

function Cart() {

    {/*
        1. store.js(state 보관) 파일 생성
        2. 
    */}

    // 아래와 같이 쓰면 store.js에 있는 모든 state를 넣어둠
    let a = useSelector((state) => { return state })

    // 아래와 같이 필요한 부분만 꺼내 쓰는게 좋을듯?
    // let a = useSelector((state) => {return state.user})

    // 쓸 때는 필요한것만 꺼내서 쓰자
    // console.log(a.user);
    console.log(a.stock);
    
    return (
        <div>
            <TopNavBar></TopNavBar>
            <Table>
                <thead>
                    {/* 행 생성 */}
                    <tr>
                        {/* 열 생성 */}
                        <th>#</th>
                        <th>상품명</th>
                        <th>수량</th>
                        <th>변경하기</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>안녕</td>
                        <td>안녕</td>
                        <td>안녕</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
}

export default Cart;