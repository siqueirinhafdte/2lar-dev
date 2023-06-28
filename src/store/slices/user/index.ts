import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface InitialState {
  tempEmail?: string;
  email?: string;
  name?: string;
  sub?: string;
  resettingPassword?: boolean;
  code?: string;
  newPassword?: string;
}

const initialState: InitialState = {
  tempEmail: undefined,
  email: undefined,
  name: undefined,
  sub: undefined,
  resettingPassword: undefined,
  code: undefined,
  newPassword: undefined
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setBasicInfosUser: (state, action: PayloadAction<{ email: string }>) => {
      state.email = action.payload.email;
    },
    setTempEmail: (state, action: PayloadAction<string>) => {
      state.tempEmail = action.payload;
    },
    setResettingPassword: (state, action: PayloadAction<string>) => {
      state.tempEmail = action.payload;
      state.resettingPassword = true;
    },
    setCode: (state, action: PayloadAction<string>) => {
      state.code = action.payload;
    },
    setNewPassword: (state, action: PayloadAction<string | undefined>) => {
      state.newPassword = action.payload;
    },
    resetTempEmail: (state) => {
      state.tempEmail = initialState.tempEmail;
    },
    resetUser: (state) => {
      state.email = initialState.email;
    }
  }
});

// Action creators are generated for each case reducer function
export const {
  setBasicInfosUser,
  resetTempEmail,
  resetUser,
  setResettingPassword,
  setTempEmail,
  setNewPassword
} = userSlice.actions;

export default userSlice.reducer;
