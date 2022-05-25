import {
  Grid,
  List,
  ListItemText,
  Typography,
  Box,
  ListItem,
  ListItemButton,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Colors } from "../../../../config/palette";

export default function Footer() {
  return (
    <Box
      sx={{
        background: Colors.dark,
        color: Colors.light,
        // p: { xs: 4, md: 10 },
        // pt: 12,
        // pb: 12,
        fontSize: { xs: "12px", md: "14px" },
      }}
    >
      <Grid container spacing={1} justifyContent="center">
        <Grid item xs={12} md={3}>
        <List>
<ListItem>
    <ListItemText primary="About Us" sx={{ color: Colors.light ,textAlign: { xs: "center" ,md:"left"}}} />
  </ListItem>
</List>
<List>
<ListItem>
    <ListItemText>
    <Typography
            lineHeight={2}
            variant="body1"
            sx={{ textAlign: { xs: "center" ,md:"left"} }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
            auctor nec at feugiat.
          </Typography>
          </ListItemText>

  </ListItem>
</List>
          {/* <Typography
            lineHeight={2}
            variant="body1"
            sx={{ textAlign: { xs: "center" }, paddingLeft: "30px" }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
            auctor nec at feugiat.
          </Typography> */}
        </Grid>
        <Grid item sm={4} md={3}>
          <List>
          <ListItem>
              <ListItemText primary="Website" sx={{ color: Colors.light }} />
            </ListItem>
            <ListItem component="a" href="/contactUs">
              <ListItemText primary="Contact Us" sx={{ color: Colors.light }} />
            </ListItem>
            <ListItem component="a" href="/aboutUs">
              <ListItemText primary="About Us" sx={{padding:"0" ,color: Colors.light ,textDecoration:'none'}} />
            </ListItem>
          </List>
        </Grid>
        <Grid item sm={4} md={3}>
          <List>
          <ListItem>
              <ListItemText primary="Search" sx={{ color: Colors.light }} />
            </ListItem>
              <ListItem>
              <ListItemText primary=" Browse Categories" sx={{ color: Colors.light }} />
            </ListItem>
            <ListItem component="a" href="/contactUs">
              <ListItemText primary=" Browse Courses" sx={{ color: Colors.light }} />
            </ListItem>
            <ListItem component="a" href="/">
              <ListItemText primary="Browse Products" sx={{padding:"0" ,color: Colors.light ,textDecoration:'none'}} />
            </ListItem>
          </List>
        </Grid>
        <Grid item sm={4} md={3}>
             <List>
              <ListItem>
              <ListItemText primary="Support" sx={{ color: Colors.light }} />
            </ListItem>
            <ListItem component="a" href="/contactUs">
              <ListItemText primary="Contact Us" sx={{ color: Colors.light }} />
            </ListItem>
            <ListItem component="a" href="/">
              <ListItemText primary="Share With Friends" sx={{padding:"0" ,color: Colors.light ,textDecoration:'none'}} />
            </ListItem>
          </List>
        </Grid>
      </Grid>
      <Box
        sx={{
          mt: "34px",
          color: Colors.dove_gray,
          paddingLeft: "20px",
        }}
      >
        <FacebookIcon sx={{ mr: 1 }} />
        <TwitterIcon sx={{ mr: 1 }} />
        <InstagramIcon />
      </Box>
      <Typography variant="body1" sx={{ textAlign: "center", mt: "34px" }}>
        © 2022 Evolove All Rights Reserved. Terms of Use | Privacy Policy
      </Typography>
    </Box>
  );
}

// <ListItem  >
// <ListItemButton component="a" href="/shop" selected={pathname==='/shop'?true:false}>
//   <ListItemIcon>
//     <ShoppingBasketRounded sx={{color:'#ff6699' , fontSize:'40px'}}/>
//   </ListItemIcon>
//   <ListItemText sx={{color:"purple"}} primary="Shop" />
// </ListItemButton>
// </ListItem>




