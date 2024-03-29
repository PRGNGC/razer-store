import { configureStore } from '@reduxjs/toolkit'
import menuReducer from '@/features/store/menu/menuSlice'
import countryReducer from './country/countrySlice'

export const store = configureStore({
  reducer: {
    menuReducer,
    countryReducer
  },
  devTools: process.env.NODE_ENV !== "production",
})