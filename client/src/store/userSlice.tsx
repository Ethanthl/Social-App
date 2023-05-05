import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface User {
  id: number;
  name: string;
  phone: number;
  password: string;
}

interface UserState {
  users: User[];
}

const initialState: UserState = {
  users: [],
};

// export const fetchPost = createAsyncThunk("post/fetch", async (thunkAPI) => {
//   const response = await fetch("http://localhost:5000/posts/", {
//     method: "GET",
//   });
//   const data = await response.json();
//   console.log(data);
//   return data;
// });

export const newUser = createAsyncThunk(
  "user/save",
  async (message: string, thunkAPI) => {
    const response = await fetch("http://localhost:5000/signup/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: message,
    });
    const data = await response.json();
    return data;
  }
);

export const UserSlice = createSlice({
  name: "title",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<User>) => {
      state.users.push(action.payload);
    },
  },
  //Fetch requests
  //fetchall
  extraReducers: (builder) => {
    // builder.addCase(fetchPost.fulfilled, (state, action) => {
    //   state.accounts = action.payload;
    // });
    //save post
    builder.addCase(newUser.fulfilled, (state, action) => {
      state.users.push(action.payload);
    });
  },
});

export default UserSlice.reducer;
export const { addUser } = UserSlice.actions;
