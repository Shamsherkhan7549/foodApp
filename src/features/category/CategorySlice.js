import { createSlice } from "@reduxjs/toolkit";

const initialState = {
     category :[]
};

export const categotySlice = createSlice({
    name:'category',
    initialState,

    reducers:{
        
        allData:(state,action)=>{
            state.category = action.payload;
        },

        categoryData:(state,action)=>{
            state.category = action.payload
        }
    }
});

export default categotySlice.reducer;
export const{allData, categoryData} = categotySlice.actions;

// const addData = {
//     id:"",
//     Image:"",
//     name:"",
//     price:0,
//     desc:"",
//     category:"",
//     rating:5
// }