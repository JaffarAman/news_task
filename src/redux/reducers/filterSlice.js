import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    apiSource: 'NewsAPI',
    selectedCategory: 'all',
    dateRange: [
        null,
        null
    ],
    searchQuery: '',
    currentPage: 1
};

const filterSlice = createSlice({
    name: "filters",
    initialState,
    reducers: {
        setCategory: (state, { payload }) => {
            state.selectedCategory = payload;
            state.currentPage = initialState.currentPage;
        },

        setDateRange: (state, { payload }) => {
            state.currentPage = initialState.currentPage;
            state.dateRange = payload;
        },
        setSearchQuery: (state, { payload }) => {
            state.currentPage = initialState.currentPage;
            state.searchQuery = payload;
        },
        setAPISource: (state, { payload }) => {
            state.apiSource = payload;
            state.currentPage = initialState.currentPage;
        },
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload;
        },

    },
});

const { actions } = filterSlice;

export const { setCategory, setDateRange, setSearchQuery, setAPISource, setCurrentPage } = actions;

export default filterSlice.reducer;