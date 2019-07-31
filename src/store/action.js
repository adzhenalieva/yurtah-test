import axios from '../axios';
import {NotificationManager} from 'react-notifications';

export const LISTING_REQUEST = 'LISTING_REQUEST';
export const LISTING_SUCCESS = 'LISTING_SUCCESS';
export const LISTING_FAILURE = 'LISTING_FAILURE';

export const listingRequest = () => ({type: LISTING_REQUEST});
export const listingSuccess = response => ({type: LISTING_SUCCESS, response});
export const listingFailure = error => ({type: LISTING_FAILURE, error});


export const fetchListings = number => {
    return async dispatch => {
        if (parseInt(number) <= 0 || parseInt(number) > 10) {
            NotificationManager.warning("Enter number from 1 to 10");
        } else {
            dispatch(listingRequest());
            try {
                const response = await axios.get('/listings?size=' + number);
                dispatch(listingSuccess(response.data.results));
            } catch (e) {
                dispatch(listingFailure(e));
            }
        }
    }
};
