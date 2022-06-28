import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import TopNavBar from '../components/TopNavBar';
import { addCount } from '../store';
import { increaseAgeState } from './../store/userSlice';

function CartPage() {

    // 아래와 같이 쓰면 store.js에 있는 모든 state를 넣어둠
    let state = useSelector((state) => { return state })
    let dispatch = useDispatch()    // store.js에게 요청을 보내는? 함수
    
    // 아래와 같이 필요한 부분만 꺼내 쓰는게 좋을듯?
    // let a = useSelector((state) => {return state.user})

    // 쓸 때는 필요한것만 꺼내서 쓰자
    // console.log(a.user);
    console.log(state.cart);
    
    return (
        <div>
            <TopNavBar></TopNavBar>
            <h6>{state.user.name} {state.user.age}의 장바구니</h6>
            <button onClick={() => {
                dispatch(increaseAgeState(1));
            }}>버튼</button>
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
                    {
                        state.cart.map((array, i) => {
                            return (<tr>
                            <td>{state.cart[i].id}</td>
                            <td>{state.cart[i].name}</td>
                            <td>{state.cart[i].count}</td>
                            <td><button onClick={ () => {
                                dispatch(addCount(state.cart[i].id));
                                // 작성하였던 state 변경 함수를 dispatch()로 감싸서 사용
                                
                                // 1. 수량 추가를 누르면 이 id와 동일한 id가진 상품을 + 1해주자
                                // 2. 주문하기 버튼 누르면 장바구니에 상품 추가하기
                            }}>+</button></td>
                        </tr>);
                        })
                    }
                </tbody>
            </Table>
        </div>
    );
}

export default CartPage;