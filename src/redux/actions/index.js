export const ADD_TO_FAVOURITE = "ADD_TO_FAVOURITE";
export const REMOVE_FROM_FAVOURITE = "REMOVE_FROM_FAVOURITE";
export const GET_JOBS = "GET_JOBS";
export const GET_JOBS_ERROR = "GET_JOBS_ERROR";
export const GET_JOBS_LOADING = "GET_JOBS_LOADING";

// le due action per rimuovere ed aggiungere
export const addToFavouriteAction = (company) => ({
  type: ADD_TO_FAVOURITE,
  payload: company,
});

export const removeFromFavouriteAction = (company) => ({
  type: REMOVE_FROM_FAVOURITE,
  payload: company,
});

// l'action per la fetch asincrona per la ricerca
export const getJobAction = (query) => {
  const endPoint = "https://strive-benchmark.herokuapp.com/api/jobs?search=";
  return async (dispatch) => {
    try {
      dispatch({ type: GET_JOBS_LOADING, payload: true }); // inizia il dispatch per il caricamento
      const response = await fetch(endPoint + query + "&limit=20");
      if (response.ok) {
        const { data } = await response.json();
        dispatch({ type: GET_JOBS, payload: data }); // invio i dati
        dispatch({ type: GET_JOBS_LOADING, payload: false });
      } else {
        throw new Error("errore nel recupero dati");
      }
    } catch (error) {
      // attivo i controlli
      dispatch({ type: GET_JOBS_ERROR, payload: error.message });
      dispatch({ type: GET_JOBS_LOADING, payload: false });
    }
  };
};
