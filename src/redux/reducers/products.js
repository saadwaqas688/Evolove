import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  products:[],
  productsLoading:false,
  productsError:false,
  filteredProducts:[],
  categoryName: '',
  showFilteredData: false
};

const products = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
      state.productsLoading=false;
      state.productsError=false;
      return state
    },
    setProductsLoading: (state) => {
      state.productsLoading = true;
      state.productsError=false;
      return state;
    },
    setProductsError: (state) => {
      state.productsLoading = false;
      state.productsError=true;
      return state;
    },
    setFilteredProducts: (state,action) => {
      state.filteredProducts = action.payload;
      return state;
    },
    setFilteredCategoryName: (state,action) => {
      
      const {name, showCard} = action.payload;
      state.categoryName = name;
      state.showFilteredData = showCard;
      return state;
    },
  

  },
});

// Action creators are generated for each case reducer function
export const productsActions = products.actions;

export const productsReducer = products.reducer;
