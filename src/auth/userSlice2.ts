import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../interfaces/user.interface';

const user = createSlice({
  name: 'user',
  initialState: null as User | null,
  reducers: {
    setUser(state, { payload }: PayloadAction<User | null>) {
      return state = (payload != null) ? payload : null;
    },
    userLoggedOut: (state, action) => null
  },
});

export const { setUser, userLoggedOut } = user.actions;
export default user.reducer;
