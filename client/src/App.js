import logo from "./logo.svg";
import "./app.css";
import { Container, Grid } from "@mui/material";
import tweet from "./images/tweet.png";

function App() {
  return (
    <Container maxWidth="lg">
      <Grid container sx={{mt: "2rem"}}>
        <Grid xs={3} container direction="column">
          <img src={tweet} alt="tweet" height="32" width="32"></img>
          <h2>#Explore</h2>
        </Grid>
        <Grid xs={6}></Grid>
        <Grid xs={3}>
          <img src={tweet} alt="tweet" height="32"></img>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
