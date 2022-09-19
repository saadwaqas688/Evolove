import React, { useEffect, useState } from "react";
import { List, ListItemButton } from "@mui/material";
import { useLocation } from "react-router";
import { ListItemTextContainer } from "./SideBarCategoriesLinks.style";
import { Colors } from "../../../config/palette";
// import { useNavigate } from "react-router-dom";
import { getService } from "./../../../services/services.js";
import { useDispatch } from "react-redux";
import { productsActions } from "./../../../redux/reducers/products.js";

const SideBarCategoriesLinks = () => {
  //   const categories = ["yoga", "awareness", "education", "music"];
  // let navigate = useNavigate();
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const [categoriesData, setCategoriesData] = useState([]);
  const [categories, setCategories] = useState([]);

  const getCategories = async () => {
    let allCategories = [];
    const categories = await getService("category");

    //   console.log('rough carte', categories);
    categories.forEach((doc) => {
      allCategories.push({ ...doc.data() });
    });
    //   console.log('categories', allCategories);
    setCategoriesData(allCategories);
  };

  function handleNavigation(name) {
    // navigate(`/home/categories/${name}`);

    dispatch(productsActions.setFilteredCategoryName({name: name, showCard: true}));
  }

  const categoriesHandler = (payload) => {
    payload.forEach((item) => {
      item.Categories.map((categoryList) => {
        return categoryList.Categories;
      });
      setCategories(item.Categories);
      //  console.log(item.Categories);
    });
  };
  useEffect(() => {
    categoriesHandler(categoriesData);
  }, [categoriesData]);
  useEffect(() => {
    getCategories();
  }, []);
  return (
    <>
      <List
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        {categories.map((category) => {
          return (
            <ListItemButton onClick={() => handleNavigation(category.name)}>
              <ListItemTextContainer
                sx={{
                  color:
                    pathname === `/home/categories/${category.name}`
                      ? "#E63369"
                      : Colors.grey,
                }}
                primary={category.name}
                disableTypography
              />
            </ListItemButton>
          );
        })}
      </List>
    </>
  );
};

export default SideBarCategoriesLinks;
