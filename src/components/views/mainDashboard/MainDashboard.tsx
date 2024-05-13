import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Stack,
} from "@mui/material";
import styled from "@mui/system/styled";
import { Link } from "react-router-dom";
// import { Pets } from "../../../utils/interfaces";
import Pupper from "../../../assets/pupper.jpg";
import PetCards from "./dashboardComponents/PetCards";
import SavedArticlesCard from "./dashboardComponents/SavedArticlesCard";
import CalendarMin from "./dashboardComponents/CalendarMin";
// import NewPetCard from "./dashboardComponents/NewPetCard";

import { useNavigate } from "react-router-dom";

interface Props {
  user: any;
}

function MainDashboard({ user }: Props) {
  const navigate = useNavigate();
  return (
    <>
      {user.id ? (
        <Box
          padding={10}
          sx={{
            backgroundColor: "rgba(255, 146, 98, 0.03)",
            border: "1px solid #ced7e0",
          }}
        >
          <Grid container spacing={2} columns={2}>
            <PetCards />
            <CalendarMin />
            <SavedArticlesCard />
          </Grid>
        </Box>
      ) : (
        navigate("/account/signin")
      )}
    </>
  );
}

export default MainDashboard;
