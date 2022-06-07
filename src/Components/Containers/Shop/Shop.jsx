import {
    Grid,
    Paper,
    Typography,
    } from "@mui/material";
    import IconButton from '@mui/material/IconButton';
    import FavoriteIcon from '@mui/icons-material/Favorite';
    import ShareIcon from '@mui/icons-material/Share';
    import { Colors } from "../../../config/palette";
    import Button from '@mui/material/Button';
    import { ExploreCourseShopPrice, ExploreShopImage, ExploreShopPriceText,PriceButton } from "./Shop.style";
    
    const ShopCourse = () => {
    return (
    <Paper elevation={0} square={true} style={{ background: Colors.secondary }}>
    <Typography sx={{ color: Colors.white, paddingTop: "40px", fontSize: "20px", fontFamily: '"Poppins", "sans-serif"', paddingLeft: "20px" }}>
    Products
    </Typography>
    <Grid container spacing={6} sx={{ paddingBottom: "50px", paddingLeft: { md: "20px", sm: "0px" } }}>
    <Grid item xs={12} lg={6} style={{ display: 'flex', justifyContent: 'flex-start', flexDirection: "column"}}>
    <ExploreShopImage src=""
    />
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
    
    <div style={{ display: "flex", flexDirection: "column" }}>
    <Typography style={{ paddingTop: "20px" ,color:"#8D98AF" }}>
    DR.John Kevin
    </Typography>
    
    <Typography style={{ paddingTop: "10px" ,color:"white" }}>
    Mastery of Spirituality
    </Typography>
    </div>
    <div>
    <IconButton aria-label="add to favorites" style={{ color: Colors.white, background: "#2A2A3F", boxShadow: "0px 3.39814px 6.79629px rgba(0, 0, 0, 0.05)" }}>
    <ShareIcon />
    </IconButton>
    <IconButton aria-label="share" style={{ color: Colors.white, background: "#2A2A3F", boxShadow: "0px 3.39814px 6.79629px rgba(0, 0, 0, 0.05)"}}>
    <FavoriteIcon />
    </IconButton>
    
    </div>
    
    </div>
    
    </Grid>
    <Grid item xs={12} lg={6} >
    <ExploreShopPriceText >
    <Typography sx={{color:"white", fontSize:"15px",fontFamily: "Poppins" ,fontWeight:'400px'}}>
    Price
    </Typography>
    <Typography sx={{color:"white", fontSize:"15px",fontFamily: "Poppins" ,fontWeight:'400px'}}>
    $59.99
    </Typography>
    </ExploreShopPriceText>
    
    <Typography sx={{ color: Colors.white, paddingTop: "20px", fontSize: "20px", fontFamily: '"Poppins", "sans-serif"' }}>
    Description
    </Typography>
    <ExploreCourseShopPrice>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis neque molestie elementum, id ut condimentum quis. Vitae nisi, sem facilisis sed fringilla. Nunc, aliquam nunc cras Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis neque molestie elementum, id ut condimentum quis. Vitae nisi, sem facilisis sed fringilla. Nunc, aliquam nunc cras
    </ExploreCourseShopPrice>
    <PriceButton variant="contained">Buy Now</PriceButton>
    
    </Grid>
    </Grid>
    </Paper>
    );
    };
    export default ShopCourse;