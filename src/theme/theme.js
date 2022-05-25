import { createTheme } from "@mui/material/styles";
import { Colors } from "../config/palette";
export const DrawerWidth = 250;


const theme = createTheme({
    palette: {
      primary: {
        main: Colors.primary,
      },
      secondary: {
        main: Colors.secondary,
      },
    },
  
    // components: {
    //   MuiButton: {
    //     defaultProps: {
    //       disableRipple: true,
    //       disableElevation: true,
    //     },
    //   },
      // MuiTooltip: {
      //   defaultProps: {
      //     arrow: true,
      //   },
      //   styleOverrides: {
      //     tooltip: {
      //       background: Colors.primary,
      //     },
      //     arrow: {
      //       color: Colors.primary,
      //     },
      //   },
      // },
      // MuiDrawer: {
      //   styleOverrides: {
      //     paper: {
      //       width: DrawerWidth,          
      //       background: Colors.primary,
      //       color: Colors.secondary,
      //       borderRadius: '0px 100px 0px 0px',
      //       borderRight: `1px solid ${Colors.primary}`
      //     }
      //   }
      // },
      // MuiDivider: {
      //   styleOverrides: {
      //     root: {
      //       borderColor: `${Colors.primary}`
      //     }
      //   }
      // },
      // MyShopButton: {
      //   styleOverrides: {
      //     root: {
      //       color: Colors.white,
      //     },
      //     primary: {
      //       background: Colors.primary,
      //       "&:hover": {
      //         background: `${Colors.primary}`,
      //       },
      //     },
      //     secondary: {
      //       background: `${Colors.secondary}`,
      //       "&:hover": {
      //         background: `${Colors.primary}`,
      //       },
      //     },
      //   },
      // },
    },
  );
  
  export default theme;