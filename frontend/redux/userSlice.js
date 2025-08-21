import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    logIn: false,
    user: null,
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setLogIn: (state, action) => {
            state.logIn = true;
            state.user = action.payload;
        },
        setLogOut: (state, action) => {
            state.logIn = false;
            state.user = null;
        },
        updateUserPremium: (state, action) => {
            if(state.user) {
                state.user.isPremium = action.payload;
            }
        }
    }
})

export const {setLogIn, setLogOut, updateUserPremium} = userSlice.actions;
export default userSlice.reducer;