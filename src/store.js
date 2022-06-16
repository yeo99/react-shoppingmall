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
    initialState: 'kim'
})

let stock = createSlice({
    name: 'stock',
    initialState: [10, 11, 12]
})

// 슬라이스를 만들었으면 reducer안에 넣어줘야함. 이제 모든 컴포넌트들이 이 state를 쓸 수 있음
export default configureStore({
    reducer: {
        user : user.reducer,
        stock : stock.reducer,
    }
})