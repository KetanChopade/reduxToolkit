import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
    name: 'user',
    initialState: [],
    reducers: {
      addUser (state, action) {
        state.push(action.payload);
      } ,
      removeUser (state, action) {
        let userIndexNum = state.indexOf(action.payload)
        state.splice(userIndexNum,1);
      } ,
      deleteUsers (state, action) {
        state.splice(action.payload);
      } ,
       
    },
  });
  console.log('kk',usersSlice.actions);
  export default usersSlice.reducer ;
  export const {addUser , removeUser , deleteUsers} = usersSlice.actions ;