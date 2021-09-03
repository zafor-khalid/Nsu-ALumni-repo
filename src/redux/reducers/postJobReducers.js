const initial_state = [

]

const testReducers = (state = initial_state, action) => {
    switch (action.type) {
        case "post": {
            const newState = [
                ...state,
                action.payload
            ]
            return newState;
        }

        default: {
            return state;
        }
    }
}

export default testReducers;