const initialState = {
  favourites: {
    list: [],
  },
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_FAVOURITE":
      return {
        ...state,
        favourites: {
          ...state.favourites,
          // Aggiungiamo l'azienda alla lista esistente
          list: [...state.favourites.list, action.payload],
        },
      };
    case "REMOVE_FROM_FAVOURITE":
      return {
        ...state,
        favourites: {
          ...state.favourites,
          // Teniamo solo le aziende che NON hanno il nome che vogliamo rimuovere
          list: state.favourites.list.filter((fav) => fav != action.payload),
        },
      };
    default:
      return state;
  }
};

export default mainReducer;
