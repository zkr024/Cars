import axios from 'axios';

const SELLERS = 'country/country/SELLERS';

const api = 'http://localhost:3000/sellers/';

const initialState = [];
let Loading = false;

export function getSellersAPI(sellers) {
  const APICityData = sellers.map((seller) => ({
    id: seller.id,
    name: seller.name,
    phone: seller.phone,
  }));
  return {
    type: SELLERS,
    payload: APICityData,
  };
}

export const allSellers = () => async (dispatch) => {
  if (Loading) return;
  setTimeout(async () => {
    const response = await axios.get(api);
    dispatch(getSellersAPI(response));
  }, 1000);
  Loading = true;
};

const allSellersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELLERS:
      return action.payload;
    default:
      return state;
  }
};

export default allSellersReducer;
