import React, { useEffect, useState } from "react";
import BoxCom from "../../../UI/BoxCom/BoxCom";
import ProductContainer from "../ProductContainer/ProductContainer";
import { ShopHeading } from "./ShopMain.style";
import { getService } from "./../../../../services/services.js";
import Loader from "../../../UI/Loader/Loader";

const ShopMain = () => {
  const [tickestList, setTicketList] = useState([]);
  const [productList, setProductList] = useState([]);
  const [limitedProductList, setLimitedProductList] = useState([]);
  const [limitedTicketList, setLimitedTicketList] = useState([]);
  const [showLoader, setShowLoader] = useState(true);

  const getProducts = async () => {
    let productArray = [];
    await getService("Product")
      .then((el) => {
        el.forEach((doc) => {
          productArray.push({ id: doc.id, ...doc.data() });
        });
        setShowLoader(false);
        const limitedProduct = productArray.slice(0, 4);
        setLimitedProductList(limitedProduct);
        setProductList(productArray);
      })
      .catch((error) => console.log(error));
  };
  const getTicket = async () => {
    let ticketList = [];
    await getService("Tickets")
      .then((el) => {
        el.forEach((doc) => {
          ticketList.push({ id: doc.id, ...doc.data() });
        });
        setShowLoader(false);
        const limitedTicketList = ticketList.slice(0, 4);
        setLimitedTicketList(limitedTicketList);
        setTicketList(ticketList);
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    getTicket();
    getProducts();
  }, []);

  return (
    <BoxCom sx={{ marginTop: "36px", paddingRight: { lg: "20px", md: "0px" } }}>
      <ShopHeading>Shop</ShopHeading>
      {showLoader ? (
        <Loader />
      ) : (
        <>
          <ProductContainer
            heading={"Products"}
            productList={productList}
            limitedProductList={limitedProductList}
          />
          <ProductContainer
            heading={"Tickets"}
            link={true}
            tickestList={tickestList}
            limitedTicketList={limitedTicketList}
          />
        </>
      )}
      {/* <ProductContainer heading={"New Products"}/> */}
      {/* <ProductContainer heading={"Popular Products"}/> */}
    </BoxCom>
  );
};

export default ShopMain;
