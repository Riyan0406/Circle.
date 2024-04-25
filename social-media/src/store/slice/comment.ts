import { createSlice } from "@reduxjs/toolkit";

interface CommentState {
  comments: Comment[];
}

interface Comment {
  id: number;
  conten: string;
  image: string;
  threadId: number;
}

const initialState: CommentState = {
  comments: [],
};

const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    addComment: (state, action) => {
      state.comments.push(action.payload);
    },
  },
});

export const { addComment } = commentsSlice.actions;
export default commentsSlice.reducer;
