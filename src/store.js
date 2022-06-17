import { configureStore, createSlice  } from "@reduxjs/toolkit";

{/*
    Redux 쓰는 이유?
    - 컴포넌트간 state 공유 편해짐

    컴포넌트간 공유가 필요없으면 그냥 useState()쓰자
*/}

// 이름과, 초기값을 지정해줌. 그리고 이러한 한개의 state를 slice라고 부름
let user = createSlice({
    // 여기다가 state를 만들어주면 됨.
    name: 'user',
    initialState: 'kim',
    /**
        Redux의 state 변경하는 법
        - state 수정해주는 함수 만들고
        - export
        - dispatch안에 state수정하는 함수를 넣어서 사용
    */
    reducers : {
        changeUserState(state) {
            return 'john' + state
        }
    }
})

// Redux의 state 변경 함수를 사용하려면 export해줘야한다.
export let { changeUserState } = user.actions;

let cart = createSlice({
    name : 'cart',
    initialState : [
        {id:0, name : 'White and Black', count : 2},
        {id:2, name : 'Grey Yordan', count : 1}
    ]
})

// 슬라이스를 만들었으면 reducer안에 넣어줘야함. 이제 모든 컴포넌트들이 이 state를 쓸 수 있음
export default configureStore({
    reducer: {
        user : user.reducer,
        cart : cart.reducer
    }
})