import React, {useEffect, useState} from 'react'
import BoxCom from '../../../UI/BoxCom/BoxCom';
import ProductContainer from '../ProductContainer/ProductContainer';
import { ShopHeading} from './ShopMain.style';
import {getService}  from './../../../../services/services.js'

const ShopMain = () => {
  const[tickestList, setTicketList] = useState([])
  const[productList, setProductList] = useState([])

  const getProducts = async () => {
    let productArray = [];
   await getService("Product")
    .then((el) => {
      el.forEach((doc) => {
        productArray.push({ id: doc.id, ...doc.data() });
      });
      console.log('prodcut arr', productArray);
      setProductList(productArray)
      
    })
    .catch((error => console.log(error)))

  }
  const getTicket = async () => {
    let ticketList = [];
   await getService("Tickets")
    .then((el) => {
      el.forEach((doc) => {
        ticketList.push({ id: doc.id, ...doc.data() });
      });
      setTicketList(ticketList)
      
    })
    .catch((error => console.log(error)))

  }
  useEffect(() => {
    getTicket()
    getProducts()
  },[])
  
  return (
    < BoxCom sx={{marginTop:"36px",paddingRight:{lg:"20px",md:"0px"}}}>
    <ShopHeading>
      Shop
    </ShopHeading>
    <ProductContainer heading={"Products"} productList ={productList}/>
    <ProductContainer heading={"Tickets"} link={true} tickestList={tickestList}/>
    {/* <ProductContainer heading={"New Products"}/> */}
    {/* <ProductContainer heading={"Popular Products"}/> */}
     </BoxCom>
  )
}

export default ShopMain
