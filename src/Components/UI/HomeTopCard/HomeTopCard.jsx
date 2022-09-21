import { CardContainer, CourseImage, TagLine } from "./HomeTopCard.style";
import cardImage from "./../../../assets/images/homeOnBoarding/bannerImage.png";
import PropTypes from "prop-types";

const HomeTopCard = ({ image, tagline }) => {
  return (
    <CardContainer>
      <CourseImage src={image}>
        <TagLine>{tagline}</TagLine>
      </CourseImage>
    </CardContainer>
  );
};
HomeTopCard.propTypes = {
  image: PropTypes.any,
  tagline: PropTypes.string,
};

HomeTopCard.defaultProps = {
  image: cardImage,
  tagline: "",
};
export default HomeTopCard;
