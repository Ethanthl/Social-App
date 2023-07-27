import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export interface User {
  email: string;
  password: string;
}

export interface AuthState {
  user: User | null;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  loading: false,
  error: null,
};

export const signIn = createAsyncThunk(
  "user/signin",
  async (message: string, thunkAPI) => {
    const response = await fetch("http://localhost:5000/users/signin/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: message,
    });
    const data = await response.json();
    console.log(response)
    if (response.status ===200) {
      console.log('success')
    }
    if (response.status ===404) {
      console.log('invalid')
    }
    return data;
  }
);

const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(signIn.fulfilled, (state, action) => {
      state.user = action.payload;
    });
  },
});

// export const {  } =
//   AuthSlice.actions;

export default AuthSlice.reducer;
