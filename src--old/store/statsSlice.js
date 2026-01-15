import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Replace the URL below with your real API endpoint
export const fetchStats = createAsyncThunk('stats/fetchStats', async (_, thunkAPI) => {
     // try {
          const res = await fetch('/api/stats');
          if (!res.ok) throw new Error('Network response was not ok');
          const data = await res.json();
          // Expecting { visitors: number, downloads: number }
          return data;
     // } catch (err) {
          // return thunkAPI.rejectWithValue(err.message || 'Fetch failed');
     // }
});

const statsSlice = createSlice({
     name: 'stats',
     initialState: {
          visitors: null,
          downloads: null,
          status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
          error: null,
     },
     reducers: {},
     extraReducers: (builder) => {
          builder
               .addCase(fetchStats.pending, (state) => {
                    state.status = 'loading';
                    state.error = null;
               })
               .addCase(fetchStats.fulfilled, (state, action) => {
                    state.status = 'succeeded';
                    state.visitors = action.payload.visitors ?? state.visitors;
                    state.downloads = action.payload.downloads ?? state.downloads;
               })
               .addCase(fetchStats.rejected, (state, action) => {
                    state.status = 'failed';
                    state.error = action.payload || action.error.message;
               });
     },
});

export default statsSlice.reducer;