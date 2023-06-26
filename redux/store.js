import { configureStore } from '@reduxjs/toolkit'
import hotelReducer from './reducers/hotelReducers';

const store = configureStore({
    reducer: hotelReducer
})

export default store;