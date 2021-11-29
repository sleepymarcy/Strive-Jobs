export const REMOVE_FROM_FAV = 'REMOVE_FROM_FAV';
export const FETCH_JOBS = 'FETCH_JOBS';
export const ADD_TO_FAV = 'ADD_TO_FAV';

export const addToFav = (company) => ({
    type: ADD_TO_FAV,
    payload: company,
});

export const removeFromFav = (company) => ({
    type: REMOVE_FROM_FAV,
    payload: company,
});

export const fetchJobs = (url, query) => {
    return async (dispatch, getState) => {
        console.log(getState().company.data.length)
        try {
            const response = await fetch(url + query + '&limit=20');
            if (response.ok) {
                const data = await response.json();
                dispatch({
                    type: FETCH_JOBS,
                    payload: data,
                });
            } else {
                console.log("error");
            }
        } catch (error) {
            console.log(error);
        }
    };
};