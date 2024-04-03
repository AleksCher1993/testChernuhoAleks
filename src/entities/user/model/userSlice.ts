import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IUsers } from "../../../app/api";
import { userAPI } from "../api/userApi";
import { IUserInfo } from "./types";


export const fetchUserById = createAsyncThunk(
  "userSlice/fetchUserById",
  async (userId: number, { dispatch }) => {
    const response = await userAPI.fetchById(userId);
    dispatch(getUserInfo(response));
  }
);
export const fetchPutUserById = createAsyncThunk(
    "userSlice/fetchPutUserById",
    async (obj: IUsers, { dispatch }) => {
      const response = await userAPI.putUserById(obj);
        dispatch(setStatus())
    }
  );
  



const initialState: IUserInfo = {
  user: { id: 0, name: { first: "", last: "" }, age: 0, email: "" },
  isLoading:"pending",
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    getUserInfo: (state, action: PayloadAction<IUsers>) => {
      state.user = action.payload;
    },
    setStatus: (state)=>{
        state.isLoading="pending"
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUserById.fulfilled, (state) => {
        state.isLoading="fulfilled"
    })
    builder.addCase(fetchUserById.pending, (state) => {
        state.isLoading="pending"
    })
  },
});

export const { getUserInfo,setStatus } = userSlice.actions;
export const userReducer = userSlice.reducer;
