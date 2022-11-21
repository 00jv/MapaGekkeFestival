/* eslint-disable jsx-a11y/alt-text */
import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MainListItems from '../Components/listitems';
// import Chart from '../Components/Chart';
// import Deposits from '../Components/Deposits';
// import Orders from '../Components/Orders';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import ImageAndares from '../image/imageAndares.png'
import ImgLogo from '../image/logo.png'
import ImageAndar from '../image/imageAndar.png'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Gekke Festival
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);

const mdTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});




function DashboardContent() {
  const [open, setOpen] = React.useState(true);
  const [Typeevent, setTypeevent] = React.useState("")
  const toggleDrawer = () => {
    setOpen(!open);
  };


  function nameEvent(item) {
    setTypeevent(item)
  }

  function GoBackAndares(){
    setTypeevent("")
  }

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="absolute" open={open} >
          <Toolbar
            sx={{
              pr: '24px', // keep right padding when drawer closed
              background: "linear-gradient(101.05deg, #1F8EBE -5.36%, #440495 29.46%, #440495 56.03%, #B102CD 81.92%)"
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{

                marginRight: '36px',
                ...(open && { display: 'none' }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              Gekke Map
            </Typography>
            {/* <IconButton color="inherit">
              <Badge badgeContent={4} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton> */}
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={true} sx={{ backgroundColor: 'red' }}>
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
              background: "linear-gradient(101.05deg, #1F8EBE -5.36%, #440495 29.46%, #440495 56.03%, #B102CD 81.92%)",
              height: '35%'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <img src={ImgLogo} width="35%" />
            </div>

          </Toolbar>
          <Divider />
          <List component="nav" sx={{ background: "rgba(255, 255, 255, 0.08)", height: "100%" }}>
            <MainListItems nameEvent={nameEvent} />
            {/* <Divider sx={{ my: 1 }} />
            {secondaryListItems} */}
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Card>
                  <CardContent>
                    {Typeevent !== "" ? (
                    <div>
                      <IconButton onClick={() => GoBackAndares()}>
                        <ArrowBackIcon sx={{ color: 'white' }} />
                      </IconButton>
                      Voltar aos Andares
                    </div>
                    ):(
                      ""
                    )}
                    <Box sx={{ display: 'flex', justifyContent: 'left', flexDirection: 'column' }}>
                      {Typeevent === "" ? (
                        <CardMedia
                          component="img"
                          alt="map elevador"
                          sx={{ height: { xs: 150, md: 600 } }}
                          image={ImageAndares}
                        />
                      ) : (
                        <CardMedia
                          component="img"
                          alt="map elevador"
                          sx={{ height: { xs: 150, md: 600 } }}
                          image={ImageAndar}
                        />
                      )}


                    </Box>
                  </CardContent>
                </Card>
              </Grid>

              {/* Recent Orders */}
              {/* <Grid item xs={12}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                  <Orders />
                </Paper>
              </Grid> */}
            </Grid>
            <Copyright sx={{ pt: 4 }} />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}