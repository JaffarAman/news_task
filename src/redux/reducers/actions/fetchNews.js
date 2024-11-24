import { createAsyncThunk } from '@reduxjs/toolkit';
import NewsService from '../../../services/newsService';


export const fetchNewsThunk = createAsyncThunk("News/fetchNews", async (_, { getState, rejectWithValue }) => {
    const { filters } = getState();
    try {

        // Get source krne k bad apko source k hisab sy api call krni hogi  => filters.apiSource
        const response = await NewsService.getNews(
            {
                query: filters.searchQuery,
                category: filters.selectedCategory,
                fromDate: filters.dateRange[0],
                toDate: filters.dateRange[1],
                page: filters.currentPage,
                source: filters.apiSource
            }
        );
        return {
            data: response.articles,
            count: response.totalResults
        };
    } catch (error) {
        return rejectWithValue(error.message);
    }
}) 