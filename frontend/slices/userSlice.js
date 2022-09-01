import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { setMessage } from "./message";

// const initialState = {
//   value: 0,
// }

export const userSlice = createSlice({
  name: "user",
  initialState:{
    user: null,
  },
  reducers: {
    login: (state = initialState, action) => {
      switch (action.type) {
        case "CHANGE_USERNAME":
          return {
            ...state,
            user: action.payload,
          }
          
      
        default:
          return state
      }
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
  actions: {
    changeuser: (name) =>{
      return {
        type: "CHANGE_USERNAME",
        payload: name
      }
    }
  }
});

// export const changeUserName = (name) => {
//   return {
//    type: "CHANGE_USERNAME",
//    payload: name
//   }
//  }
 

// Action creators are generated for each case reducer function
export const { login, logout } = userSlice.actions;

export const selectUser = (state) => state.user.user;

export default userSlice.reducer;

