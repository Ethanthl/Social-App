import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Post {
  id: number;
  name: string;
  message: string;
  file: string;
}

interface PostState {
  posts: Post[];
}

const initialState: PostState = {
  posts: [],
};

export const fetchPost = createAsyncThunk("post/fetch", async (thunkAPI) => {
  const response = await fetch("http://localhost:5000/posts/", {
    method: "GET",
  });
  const data = await response.json();
  console.log(data);
  return data;
});

export const savePost = createAsyncThunk(
  "post/save",
  async (message: string, thunkAPI) => {
    const response = await fetch("http://localhost:5000/posts/", {
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

export const PostSlice = createSlice({
  name: "title",
  initialState,
  reducers: {
    addPost: (state, action: PayloadAction<Post>) => {
      state.posts.push(action.payload);
    },
  },
  //Fetch requests
  //fetchall
  extraReducers: (builder) => {
    builder.addCase(fetchPost.fulfilled, (state, action) => {
      state.posts = action.payload;
    });
    //save post
    builder.addCase(savePost.fulfilled, (state, action) => {
      state.posts.push(action.payload);
    });
  },
});

export default PostSlice.reducer;
export const { addPost } = PostSlice.actions;
