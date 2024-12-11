import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  carts:[],
  
}

export const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {

    addToCart:(state, action)=>{
      const exitingItems = state.carts.find(item=> item.id === action.payload.id);

      if(exitingItems){
        state.carts = state.carts.map(item=> item.id === action.payload.id ? {...item, qty:item.qty+1}: item)
      }else{
        state.carts.push(action.payload);
      }        
    },

    deleteFromCart:(state, action)=>{
      state.carts = state.carts.filter(data=> data.id != action.payload)
    },

    removeFromCart:(state,action)=>{
      const exitingItems = state.carts.find(item=> item.id === action.payload);

      if(exitingItems){
        state.carts = state.carts.map(item=> {
          if(item.id === action.payload ){

            if(item.qty===1){
              return null;
            }else{
              return {...item, qty:item.qty-1}
            }
     
          }else{
            return item
          }
        }).filter(item => item !== null);
      }else{
        state.carts = state.carts.filter(data=> data.id != action.payload)
       
      }
    }

  },
})


export const {addToCart, deleteFromCart,removeFromCart} = CartSlice.actions;

export default CartSlice.reducer;
