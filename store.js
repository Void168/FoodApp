import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './features/cartSlice.js'
import restaurantReducer from './features/restaurantSlice.js'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    restaurant: restaurantReducer,
  },
})
