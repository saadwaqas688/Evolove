import PropTypes from "prop-types";
import Grid from "@mui/material/Grid";

const GridComponent = ({ spacing, children, ...props }) => {
  return (
    <Grid spacing={spacing} {...props}>
      {children}
    </Grid>
  );
};

GridComponent.propTypes = {
  children: PropTypes.any,
};

GridComponent.defaultProps = {
  spacing: 2,
};

export default GridComponent;
