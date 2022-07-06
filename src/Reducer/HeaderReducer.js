const SET_VALUES = "SET_VALUES";

let initialState = {
  rates: [],
};

const HeaderReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_VALUES: {
      return { ...state, rates: [...action.rates] };
    }
    default:
      return state;
  }
};

export const setValuesAC = (rates) => ({
  type: SET_VALUES,
  rates,
});

export default HeaderReducer;
