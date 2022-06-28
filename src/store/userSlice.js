import { createSlice } from "@reduxjs/toolkit";

// 이름과, 초기값을 지정해줌. 그리고 이러한 한개의 state를 slice라고 부름
let user = createSlice({
    // 여기다가 state를 만들어주면 됨.
    name: 'user',
    // initialState: 'kim',
    // state가 array/object인 경우
    initialState: {
        name : 'kim',
        age : 20,

    },
    /**
        Redux의 state 변경하는 법
        - state 수정해주는 함수(=action) 만들고
        - export
        - dispatch안에 state수정하는 함수를 넣어서 사용
    */
    reducers : {
        changeUserState(state) {
            // state가 array/object인 경우 직접 수정해도 state가 변경됨
            // immer.js가 알아서 복사본을 만들어줌
            state.name = 'park';
        },

        // 하드코딩하지 않고 파라미터를 받아서 변경
        increaseAgeState(state, action) {
            state.age += action.payload;
        },
    }
})

// Redux의 state 변경 함수(=action)를 사용하려면 export해줘야한다.
export let { changeUserState, increaseAgeState, incProductQunt } = user.actions;
export default user;