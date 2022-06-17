import {Grid, styled} from "@mui/material";


        export const LeftSideGrid = styled(Grid)(( {theme}) => ({
            [theme.breakpoints.down("sm")]: {
              fontSize:"12px",
                },
            }));

            export const RightSideGrid = styled(Grid)(( {theme,marginLeft}) => ({
                marginLeft:marginLeft ,
                [theme.breakpoints.down("lg")]: {
                    marginLeft:"0px" ,
                    },
                }));