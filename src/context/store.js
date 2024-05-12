import { configureStore  } from '@reduxjs/toolkit'
import wishlistSlice from './wishlistSlice'
import cartSlice from './cartSlice'


export const store = configureStore({
    reducer: {
     wishslice: wishlistSlice,
     cart:cartSlice
    }
})