const initialState = [];

const addedProducts = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PRODUCT':
      return action.payload
    default:
      return state
  }
}

export default addedProducts;
