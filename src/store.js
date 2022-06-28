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
    ],
    reducers : {
        // reducer를 이렇게 작성하면 0번째 항목을 더해줘야할 때 함수 인자에 0을 담아서 보내준다.
        addCount(state, action) {
            // findIndex를 통해 array에서 원하는 항목을 찾음. array를 다 꺼내서 조건식에 대입해보는데, 조건식이 참이면 그게 몇번째 자료인지 알려줌
            let addCountLet = state.findIndex((wholeArray) => {return wholeArray.id === action.payload})
            state[addCountLet].count++;
        },

        addGoodsToCart(state, action) {
            state.push(action.payload);
        }
    }
})

// 슬라이스를 만들었으면 reducer안에 넣어줘야함. 이제 모든 컴포넌트들이 이 state를 쓸 수 있음
export default configureStore({
    reducer: {
        user : user.reducer,
        cart : cart.reducer
    }
})

export let { addCount } = cart.actions;
export let { addGoodsToCart } = cart.actions;