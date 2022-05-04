import { createSlice } from '@reduxjs/toolkit'

const bulletinSlice = createSlice({
    name: 'bulletin',
    initialState: {
        isFormOpen: false,
        isFormEdit: false,
        editId: '',
        bulletins: [],
        formData: {
            title: '',
            content: '',
        },
    },
    reducers: {
        setBulletins: (state, action) => {
            if (action?.payload && Array.isArray(action.payload)) {
                state.bulletins = action.payload;
            } else {
                console.error('invalid payload to setBulletins')
            }
        },
        setFormOpen: (state, action) => {
            state.isFormOpen = action.payload.isOpen;
            state.isFormEdit = action.payload.isEdit
            state.editId = action.payload.editId
        },
        addBulletin: (state, action) => {
            state.bulletins = [...state.bulletins, action.payload]
        },
        removeBulletin: (state, action) => {
            state.bulletins = state.bulletins.filter(value => value.id != action.payload)
        },
        updateBulletin: (state, action) => {
            state.bulletins = state.bulletins.map(value => {
                if (value.id != action.payload.id) return value;
                else return action.payload;
            })
        },
    }
})

export const { setBulletins, setFormOpen, addBulletin, removeBulletin, updateBulletin } = bulletinSlice.actions;

export default bulletinSlice.reducer;