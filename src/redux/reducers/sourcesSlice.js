import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    sourcesLoading: false,
    sourcesData: [],
    sourcesError: "",
};

const SourcesSlice = createSlice({
    name: "Sources",
    initialState,
    reducers: {
        sourcesPending: (state) => {
            state.sourcesLoading = true;
        },
        sourcesSuccess: (state, { payload }) => {
            state.sourcesLoading = false;
            state.sourcesData = payload.data;
            state.sourcesError = "";
        },
        sourcesFailed: (state, { payload }) => {
            state.sourcesLoading = false;
            state.sourcesData = [];
            state.sourcesError = payload.message;
        },
    },
});

const { reducer, actions } = SourcesSlice;

export const {
    sourcesPending,
    sourcesSuccess,
    sourcesFailed,
} = actions;

export default reducer;
