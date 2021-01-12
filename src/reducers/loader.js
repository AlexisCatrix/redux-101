const initialState = {
    isLoading: false
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "LOADER_ENABLE":
            return { ...state, isLoading: true };
        case "LOADER_DISABLE":
            return { ...state, isLoading: false };
        default:
            return state;
    }
}