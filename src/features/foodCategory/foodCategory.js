import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    foodCategory :'All'
};

export const foodCategorySlice = createSlice({
    name:'foodCategory',
    initialState,

    reducers:{
        addFoodCategory:(state,action)=>{
            state.foodCategory = action.payload
        }
    }
});

export const{addFoodCategory} = foodCategorySlice.actions;
export default foodCategorySlice.reducer;

