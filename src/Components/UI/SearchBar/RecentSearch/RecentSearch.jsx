import { Typography } from '@mui/material'
import React from 'react'
import { ClockIcon } from '../../../../assets/icons/ClockIcon'
import { RecentSearchIcon } from '../../../../assets/icons/RecentSearchIcon'
import { Colors } from '../../../../config/palette'
import BoxCom from '../../BoxCom/BoxCom'
import { Wrapper } from './RecentSearch.style'

const RecentSearch = ({setSearchText,recentSearches}) => {
    function handleClick(event) {
        setSearchText(event.currentTarget.textContent)
      }
  return (
      <Wrapper>
             <Typography variant='body1' color={Colors.light} sx={{fontSize:"18px",marginTop:"30px"}}>
             Recent Search
      </Typography>
      {recentSearches.length>0 && recentSearches.map((item,index)=>{
        return(
            <BoxCom key={index} onClick={handleClick} sx={{display:"flex",alignItems:"center",justifyContent:"space-between",marginTop:"20px",cursor: "pointer"}}>
            <BoxCom  sx={{display:"flex"}}>
        <ClockIcon/>
        <Typography variant='body1' color="#6978A0"  sx={{marginLeft:"15px"}}>
        {item}
        </Typography>
            </BoxCom>
        <RecentSearchIcon/>
       </BoxCom>

        )
      })

      }
      </Wrapper>
  )
}

export default RecentSearch