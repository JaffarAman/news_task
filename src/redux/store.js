import { configureStore } from "@reduxjs/toolkit";
import NewsReducer from "./reducers/newsSlice.js";
import SourcesReducer from "./reducers/sourcesSlice.js";
import filterSlice from "./reducers/filterSlice.js"

export const store = configureStore({
    reducer: {
        News: NewsReducer,
        Sources: SourcesReducer,
        filters: filterSlice
    },
},
    +window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());