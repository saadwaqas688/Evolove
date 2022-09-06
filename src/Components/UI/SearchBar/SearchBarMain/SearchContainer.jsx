import React, { useEffect, useState } from "react";
import { SearchBarWrapper, SearchField } from "./SearchContainer.style";
import { useLocation } from "react-router";
import { useNavigate } from "react-router-dom";
import { Colors } from "../../../../config/palette";
import SearchBarPopup from "../SearchBarPopup/SearchBarPopup";
import RecentSearch from "../RecentSearch/RecentSearch";
import { useSelector, useDispatch} from "react-redux";
import { productsActions } from "../../../../redux/reducers/products";
import { coursesActions } from "../../../../redux/reducers/courses";
import { blogsActions } from "../../../../redux/reducers/blogs";

const SearchContainer = () => {

  const [searchText, setSearchText] = useState("");
  const [recentSearches, setRecentSearches] = useState("");
  const [inputFieldText, setInputFieldText] = useState("");
  const [status, setStatus] = useState("");
  const [type, setType] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [filterdProducts,setFilterdProducts]=useState([])
  const [filterdCourses,setFilterdCourses]=useState([])
  const [filterdBlogs,setFilterdBlogs]=useState([])


  // let recentSearches= localStorage.getItem("recentSearches")

  // if(recentSearches){
  //   recentSearches=JSON.parse(recentSearches)
  //   recentSearches.push(searchText)

  //   localStorage.setItem('recentSearches', JSON.stringify(recentSearches));
  // }



  let { pathname } = useLocation();

  let navigate = useNavigate();
  function onPressEnter() {
    if(inputFieldText){
      handleSearch(productsState.products,productsActions.setFilteredProducts)
      handleSearch(coursesState.courses,coursesActions.setFilteredCourses)
      handleSearch(blogsState.blogs,blogsActions.setFilteredBlogs)
    
    let recentSearches=[]

    recentSearches= localStorage.getItem("recentSearches")

    if(recentSearches){
      recentSearches=JSON.parse(recentSearches)
      if(recentSearches.length>8){

        recentSearches.pop()
        recentSearches.unshift(inputFieldText)
        // recentSearches[7]=inputFieldText
      }else{

        recentSearches.unshift(inputFieldText)
      }
      localStorage.setItem('recentSearches', JSON.stringify(recentSearches));
    }else{

      recentSearches=[]
      recentSearches.push(inputFieldText)
             localStorage.setItem('recentSearches', JSON.stringify(recentSearches));
    }
      // setSearchText("")
      setRecentSearches(recentSearches)
  }

      navigate("/home/search");

    
  }

  function handleFilter(buttonType,data){
    if(buttonType==="type"){
      setType(data)
    }else if(buttonType==="status"){
      setStatus(data)
    }else{
      setSortBy(data)
    }
  }

function checkSelectedTab(buttonLabel){
  if(status===buttonLabel || type===buttonLabel || sortBy===buttonLabel){
    return {background:Colors.light,color:Colors.dark,"&:hover": { backgroundColor:Colors.light,borderColor:"#6978A0" }}
  }else{
    return {background:"transparent",color:Colors.light,"&:hover": { backgroundColor:"transparent",borderColor:"#6978A0" }}
  }
}

const productsState = useSelector(
  (state) => state.products
);
const coursesState = useSelector(
  (state) => state.courses
);
const blogsState = useSelector(
  (state) => state.blogs
);

console.log("productsState",productsState)

// dispatch(learningResourcesHighlightActions.toggleHighlightState());
const dispatch = useDispatch();



function handleSearch(data,callBack){
  let filterData=[...data]
if(filterData.length>0){
  filterData = filterData.filter(product => product.title.toLowerCase().includes(inputFieldText.toLowerCase()));
}

    // if(status){
    //   filterData = filterData.filter(product => product.status === status);

    // }
    // if(type){
    //   filterData = filterData.filter(product => product.type === type); 
    // }

    // dispatch(productsActions.setFilteredProducts(filterData));
      dispatch(callBack(filterData));
}
useEffect(()=>{
    handleSearch([],productsActions.setFilteredProducts)
    handleSearch([],coursesActions.setFilteredCourses)
    handleSearch([],blogsActions.setFilteredBlogs)

  // if(searchText){
  //   handleSearch(productsState.products,productsActions.setFilteredProducts)
  //   handleSearch(coursesState.courses,coursesActions.setFilteredCourses)
  //   handleSearch(blogsState.blogs,blogsActions.setFilteredBlogs)
  // }
  // else{
  //   handleSearch([],productsActions.setFilteredProducts)
  //   handleSearch([],coursesActions.setFilteredCourses)
  //   handleSearch([],blogsActions.setFilteredBlogs)

  // }

},[inputFieldText])


useEffect(()=>{
  if (typeof window !== "undefined") {
    let recentSearches= localStorage.getItem("recentSearches")
    if(recentSearches){
      recentSearches=JSON.parse(recentSearches)

      setRecentSearches(recentSearches)

    }
     

  }

},[])

  return (
    <>
      <SearchBarWrapper>
        <SearchField
          color="#6978A0"
          width="100%"
          value={inputFieldText}
          onChange={(e) => setInputFieldText(e.target.value)}
          placeholder="search items"
          name="searchField"
          icon={searchText.length > 0 ? false : true}
          iconPosition="start"
          placeholderColor="#6978A0"
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === "NumpadEnter") {
              e.preventDefault();
              onPressEnter(e);
            }
          }}
        />
        {pathname === "/home/search" && (
        <SearchBarPopup checkSelectedTab={checkSelectedTab} handleFilter={handleFilter}/>
        )}
      </SearchBarWrapper>

      {
      (pathname === "/home/search" && !inputFieldText) &&
      
        <RecentSearch setSearchText={setInputFieldText} recentSearches={recentSearches}/>        
      }
    </>
  );
};

export default SearchContainer;
