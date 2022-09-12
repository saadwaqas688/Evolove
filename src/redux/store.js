import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./reducers/auth";
import { productsReducer } from "./reducers/products";
import { blogsReducer } from "./reducers/blogs";
import { coursesReducer } from "./reducers/courses";
import { recentSearchesReducer } from "./reducers/recentSearches";


export default configureStore({
  reducer: {
    auth: authReducer,
    products: productsReducer,
    courses: coursesReducer,
    blogs: blogsReducer,
    recentSearches: recentSearchesReducer,

  },
});
