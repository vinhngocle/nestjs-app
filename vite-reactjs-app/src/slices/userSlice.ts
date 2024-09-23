// import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
// import axiosInstance from "../api/axiosInstance";

// type User = {
//   email: string;
//   password: string;
// };

// type NewUser = User & {
//   firstName: string;
//   lastName: string;
// };

// // type UserBasicInfo = {
// //   id: string;
// //   firstName: string;
// //   lastName: string;
// //   email: string;
// // };

// // type UserProfileData = {
// //   firstName: string;
// //   lastName: string;
// //   email: string;
// // };

// type UserApiState = {
//   // basicUserInfo?: UserBasicInfo | null;
//   // userProfileData?: UserProfileData | null;
//   status: "idle" | "loading" | "failed";
//   error: string | null;
// };

// const initialState: UserApiState = {
//   status: "idle",
//   error: null,
// };

// export const register = createAsyncThunk("register", async (data: NewUser) => {
//   const response = await axiosInstance.post("/users", data);
//   const resData = response.data;

//   localStorage.setItem("userInfo", JSON.stringify(resData));

//   return resData;
// });

// const userSlice = createSlice({
//   name: "user",
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(register.pending, (state) => {
//         state.status = "loading";
//         state.error = null;
//       })
//       .addCase(register.fulfilled, (state, action: PayloadAction<>) => {

//       })
//   },
// });

// export default userSlice.reducer;
