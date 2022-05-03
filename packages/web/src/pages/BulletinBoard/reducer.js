import { createSlice } from '@reduxjs/toolkit'

const bulletinSlice = createSlice({
    name: 'bulletin',
    initialState: {
        loading: false,
        bulletins: [],
    },
    reducers: {
        setBulletins: (state, action) => {
            console.log('payload: ' + JSON.stringify(action.payload))
            if (action?.payload && Array.isArray(action.payload)) {
                state.bulletins = action.payload;
            } else {
                console.error('invalid payload to setBulletins')
            }
        },
    }
})

export const { setBulletins } = bulletinSlice.actions;

export default bulletinSlice.reducer;