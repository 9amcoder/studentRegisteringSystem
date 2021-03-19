import logo from './logo.svg';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import Student from './components/showStudent/showStudent'
import CreateStudent from './components/createStudent/createStudent'
import useStyles from './style'
import './App.css';

function App() {
  const classes = useStyles()
  return (
    <div className="App">
      <Container maxWidth="lg">
        <AppBar className={classes.appBar} position="static" color="inherit">
          <Typography className={classes.heading} variant="h5" align="center">Student Information</Typography>

        </AppBar>
        <Grow in>
          <Container>
            <Grid container justify="space-between" alignItems="stretch">
              <Grid item xs={20} sm={7}>
                <AppBar className={classes.appBar} position="static" color="inherit">
                  <Student/>
                </AppBar>
              </Grid>
              <Grid item xs={12} sm={4}> 
                <AppBar className={classes.appBar} position="static" color="inherit">
                  <CreateStudent />
                </AppBar>
              </Grid>

            </Grid>
          </Container>
        </Grow>
      </Container>

    </div>
  );
}

export default App;
