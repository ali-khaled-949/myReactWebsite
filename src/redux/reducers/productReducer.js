// src/redux/reducers/productReducer.js

const initialState = {
    products: [],
    // Add more product related state here
  };
  
  const productReducer = (state = initialState, action) => {
    switch (action.type) {
      // Handle actions here
      default:
        return state;
    }
  };
  
  export default productReducer;
  