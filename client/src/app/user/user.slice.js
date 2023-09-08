import { createSlice } from "@reduxjs/toolkit";
import jwt_decode from 'jwt-decode'

import { CURRENT_USER } from '../../dummy_date/currentUser'

// const getCurrentUser = (token = localStorage.getItem('token')) => {
//     if(token){
//         const user = jwt_decode(token || '') || null
//                     const {
//                         _id,
//                         username,
//                         email,
//                     } = user
//                     return {
//                         _id,
//                         username,
//                         email,
//                     }
//     }
//     return null
// }


const initialState = {
    // token: localStorage.getItem('token') || null,
    // currentUser: getCurrentUser(),
    currentUser: CURRENT_USER,
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // setToken: (state, action) => {
    //     state.token = action.payload
    //     state.currentUser = getCurrentUser(action.payload)
    // },
    setCurrentUser: (state, action) => {
        state.currentUser = action.payload
    },
  },
});

export const { 
    // setToken,
    setCurrentUser,
} = userSlice.actions;
export default userSlice.reducer;