import React, { useEffect, useState } from "react";
import BoxCom from "../../../UI/BoxCom/BoxCom";
import ProductContainer from "../ProductContainer/ProductContainer";
import { ShopHeading } from "./ShopMain.style";
import { getService } from "./../../../../services/services.js";
import Loader from "../../../UI/Loader/Loader";
import FilteredCourse from "./../../../UI/FilteredCards/FilteredCards";
import { useSelector, useDispatch } from "react-redux";
import { productsActions } from "./../../../../redux/reducers/products.js";
import TopBanner from './../../../UI/HomeTopCard/HomeTopCard'

const ShopMain = () => {
  const dispatch = useDispatch();
  const [tickestList, setTicketList] = useState([]);
  const [productList, setProductList] = useState([]);
  const [limitedProductList, setLimitedProductList] = useState([]);
  const [limitedTicketList, setLimitedTicketList] = useState([]);
  const [showLoader, setShowLoader] = useState(true);
  const [categoryFilter, setCategoryFilter] = useState([]);
  const [allCategories, setAllCategories] = useState([]);
  const [productType, setProductType] = useState("");
  const [loading, setLoading] = useState(true);
  const [bannerTagline, setBannerTagline] = useState('');
  const [bannerImage, setBannerImage] = useState('');
  

  const { categoryName, showFilteredData } = useSelector(
    (state) => state.products
  );

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
  const getProduct = async () => {
    // setLoading(true);
    let courseList = [];
    const courseData = await getService("Product");
    courseData.forEach((doc) => {
      courseList.push({ id: doc.id, ...doc.data() });
    });

    setAllCategories(courseList);

    // setLoading(false);
  };
  const getBanners = async() => {
    const courseData = await getService("Advertisment");
    const bannersArray = []
    courseData.forEach((doc) => {
      bannersArray.push({ ...doc.data() });
    });
    const _shopBanner = bannersArray.filter((el) => el.screenData === 'Shop')
    _shopBanner.forEach((el) => {
      setBannerTagline(el.tagline)
      setBannerImage(el.bannerUrl)
    })
    
  }
  const categoryProduct = () => {
    let tempData = [...allCategories];
    tempData = tempData.filter((course) => course.Category === categoryName);
    setCategoryFilter(tempData);
    tempData.forEach((item) => {
      setProductType(item.Type);
    });
    setLoading(false);
  }
  useEffect(() => {
    categoryProduct()
  }, [categoryName, allCategories]);

  useEffect(() => {
    getTicket();
    getProducts();
    getProduct();
    getBanners();
    dispatch(productsActions.setFilteredCategoryName({ showCard: false }));
  }, []);

  return (
    <BoxCom sx={{ marginTop: "36px", paddingRight: { lg: "20px", md: "0px" } }}>
      {showFilteredData ? (
        <>
        <TopBanner tagline={bannerTagline} image={bannerImage}/>
        <FilteredCourse
          categoryName={categoryName}
          specificCategory={categoryFilter}
          productType={productType}
          loading={loading}
        />
        </>
      ) : (
        <>
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
        </>
      )}
    </BoxCom>
  );
};

export default ShopMain;
