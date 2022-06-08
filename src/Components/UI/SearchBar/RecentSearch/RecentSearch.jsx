import { Typography } from '@mui/material'
import React from 'react'
import { ClockIcon } from '../../../../assets/icons/ClockIcon'
import { RecentSearchIcon } from '../../../../assets/icons/RecentSearchIcon'
import { Colors } from '../../../../config/palette'
import BoxCom from '../../BoxCom/BoxCom'
import { Wrapper } from './RecentSearch.style'

const RecentSearch = ({setSearchText}) => {
    function handleClick(event) {
        setSearchText(event.currentTarget.textContent)
      }
  return (
      <Wrapper>
             <Typography variant='body1' color={Colors.light} sx={{fontSize:"18px",marginTop:"30px"}}>
             Recent Search
      </Typography>
      <BoxCom onClick={handleClick} sx={{display:"flex",alignItems:"center",justifyContent:"space-between",marginTop:"20px",cursor: "pointer"}}>
          <BoxCom  sx={{display:"flex"}}>
      <ClockIcon/>
      <Typography variant='body1' color="#6978A0"  sx={{marginLeft:"15px"}}>
      Psychology
      </Typography>
          </BoxCom>
      <RecentSearchIcon/>
      </BoxCom>
      <BoxCom  onClick={handleClick} sx={{display:"flex",alignItems:"center",justifyContent:"space-between",marginTop:"20px",cursor: "pointer"}}>
          <BoxCom  sx={{display:"flex"}}>
      <ClockIcon/>
      <Typography variant='body1' color="#6978A0" sx={{marginLeft:"15px"}}>
      Business
      </Typography>
          </BoxCom>
      <RecentSearchIcon/>
      </BoxCom>
      <BoxCom onClick={handleClick} sx={{display:"flex",alignItems:"center",justifyContent:"space-between",marginTop:"20px",cursor: "pointer"}}>
          <BoxCom  sx={{display:"flex"}}>
      <ClockIcon/>
      <Typography variant='body1' color="#6978A0" sx={{marginLeft:"15px"}}>
      Self Improvement
      </Typography>
          </BoxCom>
      <RecentSearchIcon/>
      </BoxCom>
      </Wrapper>
  )
}

export default RecentSearch