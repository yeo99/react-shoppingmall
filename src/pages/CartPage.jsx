import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useState, memo } from 'react';
import TopNavBar from '../components/TopNavBar';
import { addCount } from '../store';
import { increaseAgeState } from './../store/userSlice';

/**
 * memo를 이용하여 재 렌더링을 막을 수 있다.
 * - memo는 HOC(High Order Components, 컴포넌트를 인자로 받아 새로운 컴포넌트를 다시 return해주는 함수)
 * - props가 변할 때만 재렌더링 해주는 방식
 * - 기존props===기존props 비교한 후 재랜더링 여부를 결정해서 남용시 불필요한 연산이 발생한다.
 * - 위로 인해 props가 길고 복잡하면 안좋을 수도 있다.
 * - 꼭 필요한 무거운 컴포넌트에만 붙이기
 */

// let Child = memo(function() {
//     console.log('재랜더링됨')
//     return <div>자식임</div>
// })

// function whatIsUseMemo() {
//     console.log('do something..');
// }

function CartPage() {

    // 아래와 같이 쓰면 store.js에 있는 모든 state를 넣어둠
    let state = useSelector((state) => { return state })
    let dispatch = useDispatch()    // store.js에게 요청을 보내는? 함수
    // let [count, setCount] = useState(0);
    
    // 아래와 같이 필요한 부분만 꺼내 쓰는게 좋을듯?
    // let a = useSelector((state) => {return state.user})

    // 쓸 때는 필요한것만 꺼내서 쓰자
    // console.log(a.user);
    console.log(state.cart);
    
    return (
        <div>
            {/* 컴포넌트가 재렌더링시 자식들도 전부 재 렌더링된다. */}
            {/* <Child count={count}></Child>
            <button onClick={() => {setCount(count+1)}}>+</button> */}

            {/* CartPage 컴포넌트가 렌더링 될 때 한번만 랜더링함, 재 랜더링시 실행하지 않음 */}
            {/* 인자로 state를 넣어줄 경우, 해당 state변화시에만 재 랜더링됨 */}
            {/* {let result = useMemo(() => {return whatIsUseMemo()}, [state])} */}

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