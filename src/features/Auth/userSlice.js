import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userAPI from "api/userApi";
import StorageKeys from "constants/storage-keys";

//Register
export const register = createAsyncThunk(
    'user/register',
    async (payload) => {
        //Call API to register
        const data = await userAPI.register(payload);
        //Save data to local storage
        localStorage.setItem(StorageKeys.TOKEN, data.jwt);
        localStorage.setItem(StorageKeys.USER, JSON.stringify(data.user));
        //Return user data
        return data.user;
    }
  )
//login
export const login = createAsyncThunk(
    'user/login',
    async (payload) => {
        //Call API to register
        const data = await userAPI.login(payload);
        //Save data to local storage
        localStorage.setItem(StorageKeys.TOKEN, data.jwt);
        localStorage.setItem(StorageKeys.USER, JSON.stringify(data.user));
        //Return user data
        return data.user;
    }
  )  

const userSlice = createSlice({
    name: 'user',
    initialState:{
        current:  localStorage.getItem(StorageKeys.USER) != null ? JSON.parse(localStorage.getItem(StorageKeys.USER)) : {},
        settings: {},
    },
    reducers:{
        logout(state){
            //clear local storage
            localStorage.removeItem(StorageKeys.USER);
            localStorage.removeItem(StorageKeys.TOKEN);
            state.current = {};
        },
    },
    // A "builder callback" function used to add more reducers, or
    // an additional object of "case reducers", where the keys should be other
    // action types
    extraReducers:{
        [register.fulfilled]: (state,action) =>{
            state.current = action.payload;
        },
        [login.fulfilled]: (state,action) =>{
            state.current = action.payload;
        },
    }
    
});

const {actions,reducer} = userSlice;
export const {logout} = actions;
export default reducer; // default export
