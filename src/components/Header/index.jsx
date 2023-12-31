import React from 'react';
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Drawer from '@mui/material/Drawer';
import Input from '@mui/material/Input';
import TextField from "@mui/material/TextField";


import styles from './Header.module.scss';
import Container from '@mui/material/Container';
import { useDispatch, useSelector ,useState} from 'react-redux';
import { logout, selectIsAuth } from '../../redux/slices/auth';

const drawerWidth = 240;
const navItems = [
  {value: 'В фокусе',path:''},
  {value: 'Услуги',path:''},
  {value: 'Новости',path:'/blog'},
  {value: 'Карьера',path:''},
  {value: 'О нас',path:''}
 
];


export const Header = (props) => {

  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);
  const { windowProps } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const onClickLogout = () => {

    if (window.confirm('Вы правда хотите выйти?')) {
      dispatch(logout());
      window.localStorage.removeItem('token')
    }
  };

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState)
  };

  

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item,index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item.value} />
            </ListItemButton>
          </ListItem>
        ))}

      </List>
      {isAuth ? (
              <>
                <Link to="/add-post">
                  <Button variant="contained">Написать статью</Button>
                </Link>
                <Button onClick={onClickLogout} variant="contained"  color="error">
                  Выйти
                </Button>
              </>
            ) : (
              <>
                <Link to="/login">
                  <Button variant="outlined" color="primary">Войти</Button>
                </Link>
                {/* <Link to="/register">
                  <Button variant="contained">Создать аккаунт</Button>
                </Link> */}
              </>
            )}
    </Box>
  );

  const container = windowProps !== undefined ? () => windowProps().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
 
      <AppBar component="nav" sx={{ background: '#fff' }}>
      <Container>
      <Toolbar sx={{p:0}}>
      <Box
           
            component="div"
            sx={{ m:0, flexGrow: 1,  display: 'flex',alignItems:'center' }}
          >
           <Link className={styles.logo} to="/">
            <img className={styles.logo_image} src="logo.png" alt="" />
          </Link>
          <img style={{marginLeft:'18px'}} src="location.svg" alt="" />
          <Typography variant='subtitle2' sx={{color:'rgba(85, 95, 105, 1)',ml:1,mr:2,fontWeight:'400',fontSize:'14px',display: { xs: 'none',sm:'block' }}}>г. Бишкек, ул. Раззакова, 112</Typography>
          <img src="call.png" alt="" />
          <Typography variant='subtitle2' sx={{color:'rgba(85, 95, 105, 1)',ml:1,fontWeight:'400',fontSize:'14px',display: { xs: 'none', sm:'block' }}}>(0312) 31 14 84;    (0551) 31 14 84</Typography>
          </Box>
          <Box>
            <Input sx={{display: { xs: 'none',sm:'block' }}} type="text" placeholder='Поиск по сайту' />
            <IconButton
            color="default"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
      
          </Box>
      </Toolbar>
        <Toolbar sx={{p:0,display: { xs: 'none',sm:'flex' }}}>
          <Box sx={{width:'100%', display: { xs: 'none', sm: 'flex' },justifyContent:'space-between' }}>
        <Box>
          <IconButton
            color="default"
            aria-label="open drawer"
            
            onClick={handleDrawerToggle}
            
          >
            <MenuIcon />
          </IconButton>


            {navItems.map((item,index) => (
                    <Link to={item.path}>
              <Button key={index} sx={{color:'#000'}} >
                {item.value} 
              </Button>
              </Link>
            ))}
            </Box>
            <Box sx={{ml:'auto'}}>
              {isAuth ? (
              <>
                <Link  to="/add-post">
                  <Button variant="contained">Написать статью</Button>
                </Link>
                <Button  sx={{ml:2,mr:2}}  onClick={onClickLogout} variant="contained"  color="error">
                  Выйти
                </Button>
              </>
            ) : (
              <>
                <Link to="/login">
                  <Button variant="outlined" sx={{color:'rgb(205,179,47)',borderColor:'rgb(205,179,47)'}}>Войти</Button>
                </Link>
                {/* <Link to="/register">
                  <Button variant="contained">Создать аккаунт</Button>
                </Link> */}
              </>
            )}
            </Box>
          </Box>
     
        </Toolbar>
        </Container>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
};



