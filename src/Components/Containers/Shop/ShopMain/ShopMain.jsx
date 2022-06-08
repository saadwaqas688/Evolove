import React from 'react'
import BoxCom from '../../../UI/BoxCom/BoxCom';
import ProductContainer from '../ProductContainer/ProductContainer';
import { ShopHeading} from './ShopMain.style';

const ShopMain = () => {
  return (
    < BoxCom sx={{marginTop:"36px",paddingRight:{lg:"20px",md:"0px"}}}>
    <ShopHeading>
      Shop
    </ShopHeading>
    <ProductContainer heading={"Recent Viewed Products"}/>
    <ProductContainer heading={"Tickets"}/>
    <ProductContainer heading={"New Products"}/>
    <ProductContainer heading={"Popular Products"}/>
     </BoxCom>
  )
}

export default ShopMain
