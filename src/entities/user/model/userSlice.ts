import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IUserInfo, IUsers } from "./types";
import { fetchUserAPI } from "../api/userApi";


export const fetchUserById = createAsyncThunk(
  "userSlice/fetchUserById",
  async (userId: number, { dispatch }) => {
    const response = await fetchUserAPI.fetchById(userId);
    dispatch(getUserInfo(response));
  }
);
export const fetchPutUserById = createAsyncThunk(
    "userSlice/fetchPutUserById",
    async (obj: IUsers, { dispatch }) => {
      const response = await fetchUserAPI.putUserById(obj);
        dispatch(setStatus())
    }
  );
  



const initialState: IUserInfo = {
  user: { id: 0, name: { first: "", last: "" }, age: 0, email: "" },
  isLoading:"pending",
  isSave:false,
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
    },
    changeDisabled:(state,action:PayloadAction<boolean>)=>{
      state.isSave=action.payload
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

export const { getUserInfo,setStatus,changeDisabled } = userSlice.actions;
export const userReducer = userSlice.reducer;
