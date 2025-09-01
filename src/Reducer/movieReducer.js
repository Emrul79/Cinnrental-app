const initialState = {
  movies: [],
  favorites: [],
  cartData: [],
  selectedCategory: "trending",
  searchQuery: "",
};

const movieReducer = (state, action) => {
  switch (action.type) {
    case "SET_MOVIES":
      return { ...state, movies: action.payload };
    case "ADD_TO_FAVORITES":
      return { ...state, favorites: [...state.favorites, action.payload] };
    case "REMOVE_FROM_FAVORITES":
      return {
        ...state,
        favorites: state.favorites.filter(
          (favorite) => favorite.id !== action.payload.id
        ),
      };
    case "SET_SELECTED_CATEGORY":
      return { ...state, selectedCategory: action.payload };
    case "SET_SEARCH_QUERY":
      return { ...state, searchQuery: action.payload };
    case "ADD_TO_CART":
      return { ...state, cartData: [...state.cartData, action.payload] };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cartData: state.cartData.filter(
          (item) => item.id !== action.payload.id
        ),
      };
    case "CLEAR_CART":
      return { ...state, cartData: [] };
    default:
      return state;
  }
};

export { initialState, movieReducer };
