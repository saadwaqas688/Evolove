import React from 'react'
import {ActivityContainer,ActivityDate,Activity} from './WalletActivity.style';

const WalletActivity = () => {
  return ( 
    <ActivityContainer>
    <Activity>
    You have withdraw $49.99 from your wallet
    </Activity>
    <ActivityDate>
    10-02-2022
    </ActivityDate>
    </ActivityContainer>  
  )
}

export default WalletActivity
