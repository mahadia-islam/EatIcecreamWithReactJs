import { configureStore } from '@reduxjs/toolkit';
import indexReducer from '.';

const store = configureStore({
    reducer: indexReducer
});

export default store;