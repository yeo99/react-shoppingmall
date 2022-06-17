import { configureStore, createSlice  } from "@reduxjs/toolkit";
/**
 * 코드가 너무 길어져서 ../store/userSlice.js에 슬라이스와 액션을 담은 후 export
 */
import user from "./store/userSlice";

{/*
    Redux 쓰는 이유?
    - 컴포넌트간 state 공유 편해짐

    컴포넌트간 공유가 필요없으면 그냥 useState()쓰자
*/}

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