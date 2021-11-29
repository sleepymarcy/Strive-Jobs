export const addToFav = (company) => ({
    type: "ADD_TO_FAV",
    payload: company,
});

export const removeFromFav = (company) => ({
    type: "REMOVE_FROM_FAV",
    payload: company,
});

export const fetchJobs = (url, query) => {
    return async (dispatch, getState) => {
        try {
            let response = await fetch(url + query + '&limit=20');
            if (response.ok) {
                const { data } = await response.json();
                dispatch({
                    type: "FETCH_JOBS",
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