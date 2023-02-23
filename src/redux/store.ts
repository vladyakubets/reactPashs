import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {filmReducer} from "./slices/filmSlice";
import {genreReducer} from "./slices/genreSlice";

let rootReducer = combineReducers({
    filmReducer,
    genreReducer

});

type RootState = ReturnType<typeof rootReducer>
type AppStore = ReturnType<typeof setupStore>
type AppDispatch = AppStore['dispatch']


const setupStore = () => configureStore({
    reducer: rootReducer
})

export type {
    RootState,
    AppStore,
    AppDispatch
}

export {
    setupStore
}

