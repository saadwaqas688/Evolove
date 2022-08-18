import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import BoxCom from "../../../UI/BoxCom/BoxCom";
import { LinkContainer, MainContainer, PopularCourseHeading } from "./AllCoaches.style";
import HomeTopCard from "../HomeTopCard/HomeTopCard";
import HomeCoachcom from "../HomeCoachCom/HomeCoachCom";
import { getService } from "../../../../services/services";
const AllCoaches = () => {

  const [coaches, setCoaches] = useState([]);

  const [loading, setLoading] = useState(false);

  const getCoaches = async () => {
    setLoading(true);

    let tempData = [];

    const usersData = await getService("Users");


    usersData.forEach((doc) => {
      if(doc.data().Coach===false)
      tempData.push({ id: doc.id, ...doc.data() });
    });
    


    setCoaches(tempData)
    setLoading(false);
  };

  useEffect(() => {
      getCoaches()

  }, []);

  return (
    <div>
    <BoxCom sx={{ marginTop: "60px" }}>
        <HomeTopCard />
        <MainContainer >
          <BoxCom sx={{ marginTop: "33px" }}>
            <PopularCourseHeading>Top Coaches</PopularCourseHeading>
          </BoxCom>
          <LinkContainer>13 Coaches</LinkContainer>
        </MainContainer>
      </BoxCom>
      <Grid container spacing={2}>
      <Grid container spacing={2}>

{ coaches?.map((coach)=>{
            
            return (<HomeCoachcom 
                 name={coach.FullName}
                image={coach.ProfileImage} 
                
                />)
          })
        }
              </Grid>
  </Grid>
  

    </div>
  );
};

export default AllCoaches;
