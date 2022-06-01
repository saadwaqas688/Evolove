import React, { useState } from 'react'
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
     icon={true}
     placeholderColor="#6978A0"
    />
    </SearchBarWrapper>
    

  )
}

export default SearchBar