import { createSlice} from '@reduxjs/toolkit';

interface dashboardState {
  value: number;
}

const initialState: dashboardState = {
  value: 0,
};

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {},
});

export const {} = dashboardSlice.actions;
export default dashboardSlice.reducer;