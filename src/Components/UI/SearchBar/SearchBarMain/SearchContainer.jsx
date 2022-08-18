import React, { useEffect, useState } from "react";
import { SearchBarWrapper, SearchField } from "./SearchContainer.style";
import { useLocation } from "react-router";
import { useNavigate } from "react-router-dom";
import { Colors } from "../../../../config/palette";
import SearchBarPopup from "../SearchBarPopup/SearchBarPopup";
import RecentSearch from "../RecentSearch/RecentSearch";

const SearchContainer = () => {

  const [searchText, setSearchText] = useState("");
  const [status, setStatus] = useState("");
  const [type, setType] = useState("");
  const [sortBy, setSortBy] = useState("");


  let { pathname } = useLocation();

  let navigate = useNavigate();
  function onPressEnter() {
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
useEffect(()=>{
  alert("i am search")
},[])

  return (
    <>
      <SearchBarWrapper>
        <SearchField
          color="#6978A0"
          width="100%"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
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

      {pathname === "/home/search" && (
        <RecentSearch setSearchText={setSearchText} />
      )}
    </>
  );
};

export default SearchContainer;
