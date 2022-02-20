import { combineReducers, createSlice } from '@reduxjs/toolkit';

const indexSlice = createSlice({
    name:"icecream",
    initialState: {
        icecreams:[{
            name: "vanilla",
            color: "#f8ec70",
            price: 6,
            id:1
        }],
        totalBill: 6,
        id:2
    },
    reducers: {
        addIcecream: (state,action) => {
            if (action.payload.type === 'vanilla') {
                state.icecreams = [...state.icecreams, { id:state.id, name: "vanilla", color: "#f8ec70", price: 6 }];
                state.id++;
                state.totalBill += 6;
            } else if (action.payload.type === 'mint') {
                state.icecreams = [...state.icecreams, { id:state.id, name: "mint", color: "#4fffa7", price: 5 }];
                state.totalBill += 5;
                state.id++;
            } else if (action.payload.type === 'strawberry') {
                state.icecreams = [...state.icecreams, { id:state.id, name: "strawberry", color: "#d9114a", price: 7 }];
                state.totalBill += 7;
                state.id++;
            }
        },
        removeIcecream: (state, action) => {
            state.icecreams = state.icecreams.filter(icecream => icecream.id !== action.payload.id);
            state.totalBill -= action.payload.price;
        }
    }
});

const { addIcecream,removeIcecream } = indexSlice.actions;

const indexReducer = combineReducers({
    icecream:indexSlice.reducer
});

export const addAIcecream = (icecreamtype) => (dispatch) => {
    dispatch({
        type: addIcecream.type,
        payload: {
            type:icecreamtype
        }
    })
}

export const removeAItem = (theId,thePrice) => (dispatch) => {
    dispatch({
        type: removeIcecream.type,
        payload: {
            id: theId,
            price:thePrice
        }
    })
}

export default indexReducer;