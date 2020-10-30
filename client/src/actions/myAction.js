// Action creator

export const fetchUserAction = () => {
    return (dispatch) => {

        fetch('/api/currentUser')
        .then(res1 => res1.json())
        .then((res) => {
            console.log('in myAction.js', res.data);
            dispatch({type: 'GET_USER', payload: res.data});
        });
    }
}