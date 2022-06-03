import React, { useState } from 'react'
import FilterIcon from '../../../../assets/icons/FilterIcon'
import SearchIcon from '../../../../assets/icons/SearchIcon'
import BoxCom from '../../BoxCom/BoxCom'
import { SearchBarWrapper, SearchField } from './SearchBar.style'

const SearchBar = () => {
    const [searchText,setSearchText]=useState("")


  return (
    <SearchBarWrapper >
    <SearchField 
    color="#6978A0"
    width="100%"
    value={searchText} 
    onChange={(e)=>setSearchText(e.target.value)}
    placeholder="search items"
     name="searchField" 
     icon={searchText.length>0?false:true}
     placeholderColor="#6978A0"
    />
    {
    searchText.length>0 ?
    <BoxCom sx={{marginLeft:"22px",marginTop:"12px"}}>
    <FilterIcon/>
    </BoxCom> :
    <></>
    }
    </SearchBarWrapper>
    

  )
}

export default SearchBar