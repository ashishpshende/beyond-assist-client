import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
    name: string;
    email: string;
    photo: string | null;
    bio: string;
    isAuthenticated: boolean;
}

const initialState: UserState = {
    name: 'Ashish', // Default/Mock user
    email: 'ashish@example.com',
    photo: null,
    bio: 'React Native Developer',
    isAuthenticated: false, // Start as logged out for public pages demo
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<Partial<UserState>>) => {
            return { ...state, ...action.payload, isAuthenticated: true };
        },
        logout: (state) => {
            return { ...state, isAuthenticated: false };
        },
        updateProfile: (state, action: PayloadAction<Partial<UserState>>) => {
            return { ...state, ...action.payload };
        }
    },
});

export const { setUser, logout, updateProfile } = userSlice.actions;
export default userSlice.reducer;
