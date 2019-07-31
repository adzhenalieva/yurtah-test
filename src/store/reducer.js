import {
    LISTING_REQUEST,
    LISTING_SUCCESS,
    LISTING_FAILURE
} from "./action";

const initialState = {
    listings: [],
    loading: false,
    error: null,

};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LISTING_SUCCESS:
            return {
                ...state,
                listings: action.response,
                loading: false
            };
        case LISTING_REQUEST:
            return {
                ...state,
                loading: true
            };
        case LISTING_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            };
        default:
            return state;
    }
};
export default reducer;