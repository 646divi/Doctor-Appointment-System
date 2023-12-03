import { configureStore } from '@reduxjs/toolkit'
import alertReducer from "../store/features/alertSlice";

export const store = configureStore({
  reducer: {
    alerts:alertReducer,
  },
})