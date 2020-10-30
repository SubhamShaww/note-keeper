// Action creator

import axios from 'axios';

export const fetchUserAction = () => {
    return (dispatch) => {

        axios.get('/api/currentUser')
        .then((res) => {
            console.log(res.data);
            dispatch({type: 'GET_USER', payload: res.data});
        });
    }
}