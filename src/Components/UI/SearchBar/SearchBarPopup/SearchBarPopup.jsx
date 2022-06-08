import React from "react";
import FilterIcon from "../../../../assets/icons/FilterIcon";
import BoxCom from "../../BoxCom/BoxCom";
import { PopoverWrappwer, PopupButtons } from "./SearchBarPopup.style";
import Typography from "@mui/material/Typography";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";
import Button from "../../Button/Button";
import { Colors } from "../../../../config/palette";
import { Grid } from "@mui/material";

const SearchBarPopup = ({checkSelectedTab,handleFilter}) => {

  return (

          <PopupState variant="popover" popupId="demo-popup-popover" >
            {(popupState) => (
              <div>
                <BoxCom
                  sx={{
                    display: "inline-block",
                    marginLeft: "22px",
                    marginTop: "12px",
                  }}
                  {...bindTrigger(popupState)}
                >
                  <FilterIcon />
                </BoxCom>
                <PopoverWrappwer
                  {...bindPopover(popupState)}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                >
                  <BoxCom
                    sx={{
                      width: { xs: "200px", sm: "260px" },
                      height: {xs:"360px",sm:"320px"},
                      padding: "20px",
                    }}
                  >
                    <Typography
                      sx={{
                        textAlign: "center",
                        fontFamily: '"Poppins", "sans-serif"',
                        color: Colors.light,
                        fontSize: "11px",
                        fontWeight: "bold",
                      }}
                    >
                      Filter
                    </Typography>
                    <Typography
                      sx={{
                        marginBottom: "5px",
                        marginTop:"10px",
                        fontFamily: '"Poppins", "sans-serif"',
                        color: Colors.light,
                        fontSize: "11px",
                        fontWeight: "bold",
                      }}
                    >
                      Item Type
                    </Typography>
                    <Grid container spacing={1}>
                      <Grid item xs={4} sm={3}>
                        <PopupButtons size="small" onClick={()=>handleFilter("type","courses")} sx={checkSelectedTab("courses")} variant="outlined">
                          Courses
                        </PopupButtons>
                      </Grid>
                      <Grid item xs={4} sm={3}>
                        <PopupButtons size="small" onClick={()=>handleFilter("type","articles")} sx={checkSelectedTab("articles")} variant="outlined">
                          Articles
                        </PopupButtons>
                      </Grid>
                      <Grid item xs={4} sm={3}>
                        <PopupButtons size="small" onClick={()=>handleFilter("type","eBooks")} sx={checkSelectedTab("eBooks")}  variant="outlined">
                          Ebooks
                        </PopupButtons>
                      </Grid>
                      <Grid item xs={4} sm={3}>
                        <PopupButtons size="small" onClick={()=>handleFilter("type","tickets")} sx={checkSelectedTab("tickets")} variant="outlined">
                          Tickets
                        </PopupButtons>
                      </Grid>
                    </Grid>
                    <Typography
                      sx={{
                        marginBottom: "5px",
                        marginTop:"10px",
                        fontFamily: '"Poppins", "sans-serif"',
                        color: Colors.light,
                        fontSize: "11px",
                        fontWeight: "bold",
                      }}
                    >
                      Status
                    </Typography>
                    <Grid container spacing={1}>
                      <Grid item  sm={4.5}>
                        <PopupButtons size="small" onClick={()=>handleFilter("status","accessTime")} sx={checkSelectedTab("accessTime")} variant="outlined">
                          Access Time
                        </PopupButtons>
                      </Grid>
                      <Grid item  sm={3}>
                        <PopupButtons size="small" onClick={()=>handleFilter("status","onSale")}  sx={checkSelectedTab("onSale")} variant="outlined">
                          On Sale
                        </PopupButtons>
                      </Grid>
                      <Grid item  sm={4.5}>
                        <PopupButtons size="small" onClick={()=>handleFilter("status","newCourses")} sx={checkSelectedTab("newCourses")} variant="outlined">
                          New Courses
                        </PopupButtons>
                      </Grid>
                      <Grid item  sm={4.5}>
                        <PopupButtons size="small" onClick={()=>handleFilter("status","hasOffers")} sx={checkSelectedTab("hasOffers")} variant="outlined">
                          Has Offers
                        </PopupButtons>
                      </Grid>
                    </Grid>
                    <Typography
                      sx={{
                        marginBottom: "5px",
                        marginTop:"10px",
                        fontFamily: '"Poppins", "sans-serif"',
                        color: Colors.light,
                        fontSize: "11px",
                        fontWeight: "bold",
                      }}
                    >
                      Sort By
                    </Typography>
                    <Grid container spacing={1}>
                      <Grid item  sm={6}>
                        <PopupButtons size="small" onClick={()=>handleFilter("sortBy","recentlyUploaded")} sx={checkSelectedTab("recentlyUploaded")} variant="outlined">
                          Recently uploaded
                        </PopupButtons>
                      </Grid>
                      <Grid item  sm={5}>
                        <PopupButtons size="small" onClick={()=>handleFilter("sortBy","mostenrolled")} sx={checkSelectedTab("mostenrolled")} variant="outlined">
                          Most Enrolled
                        </PopupButtons>
                      </Grid>
                      <Grid item  sm={4.5}>
                        <PopupButtons size="small" onClick={()=>handleFilter("sortBy","lowTohigh")} sx={checkSelectedTab("lowTohigh")} variant="outlined">
                          Low to High
                        </PopupButtons>
                      </Grid>
                      <Grid item  sm={4.5}>
                        <PopupButtons size="small" onClick={()=>handleFilter("sortBy","highToLow")} sx={checkSelectedTab("highToLow")} variant="outlined">
                          High to Low
                        </PopupButtons>
                      </Grid>
                      <Button variant="contained" sx={{height:"38px",width:"100%",marginTop:"10px",textTransform: 'none'}}>Apply</Button>

                    </Grid>

                  </BoxCom>
                </PopoverWrappwer>
              </div>
            )}
          </PopupState>
  );
};

export default SearchBarPopup;
