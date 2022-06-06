import { CardContainer, CourseImage } from "./HomeTopCard.style";
import cardImage from "../../../../assets/images/homeOnBoarding/HomeTopCardImage.png";

  
  const HomeTopCard = () => {
    return (

  <CardContainer >
    <CourseImage src={cardImage} alt="Paris" />
    </CardContainer>

  );
  };
  
  export default HomeTopCard;
  
  
  