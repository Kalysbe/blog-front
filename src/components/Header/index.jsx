import React, { useContext, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
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
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import Drawer from '@mui/material/Drawer';
import MailIcon from '@mui/icons-material/Mail';
import Input from '@mui/material/Input';
import TextField from "@mui/material/TextField";


import styles from './Header.module.scss';
import Container from '@mui/material/Container';
import { useDispatch, useSelector, useState } from 'react-redux';
import { logout, selectIsAuth } from '../../redux/slices/auth';
import MobileMenu from './mobileMenu';

const drawerWidth = 240;
const navItems = [
  { value: 'Написать статью', path: '/add-post' },
  { value: 'Услуги', path: '' },
  { value: 'Новости', path: '/blog' },
  { value: 'Карьера', path: '' },
  { value: 'О нас', path: '' }

];


export const Header = (props) => {
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem disablePadding>
          <ListItemButton primary="warning" onClick={onClickLogout}>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Выйти" />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton to='add-post'>
            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>
            <ListItemText primary="Написать статью" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  const navigate = useNavigate();

  const goToHome = () => {
    navigate('/');
  };

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

  const location = useLocation();
  useEffect(() => {
    const scriptFiles = [
      'init.js',
      'index.js',
      'index_1.js',
      'slick.min.js',
      'jquery.magnific-popup.min.js',
      'bootstrap.min.js',
      'imagesloaded.min.js',
      'main.js',
      'webpack.runtime.min.js',
      'frontend-modules.min.js',
      'core.min.js',
      'swiper.min.js',
      'config.js',
      'frontend.min.js',
      'techbiz-frontend.js'
      // Add the names of the remaining script files
    ];

    const removeScripts = () => {
      const dynamicScripts = document.querySelectorAll('.dynamic-script');
      dynamicScripts.forEach((script) => {
        script.remove();
      });
    };

    const loadScript = (src) => {
      return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = `./js/${src}`;
        script.async = true;
        script.classList.add('dynamic-script'); // Add a class to identify dynamically added scripts
        script.onload = resolve;
        script.onerror = reject;
        document.body.appendChild(script);
      });
    };

    const loadScriptsAsync = async () => {
      removeScripts(); // Remove dynamically added scripts before adding new ones
      const scriptPromises = scriptFiles.map((fileName) => loadScript(fileName));
      await Promise.all(scriptPromises);
    };

    loadScriptsAsync();
  }, [location.pathname]);


  // const drawer = (
  //   <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
  //     <Typography variant="h6" sx={{ my: 2 }}>
  //       MUI
  //     </Typography>
  //     <Divider />
  //     <List>
  //       {navItems.map((item, index) => (
  //         <ListItem key={index} disablePadding>
  //           <ListItemButton sx={{ textAlign: 'center' }}>
  //             <ListItemText primary={item.value} />
  //           </ListItemButton>
  //         </ListItem>
  //       ))}

  //     </List>
  //     {isAuth ? (
  //       <>
  //         <Link to="/add-post">
  //           <Button variant="contained">Написать статью</Button>
  //         </Link>
  //         <Button onClick={onClickLogout} variant="contained" color="error">
  //           Выйти
  //         </Button>
  //       </>
  //     ) : (
  //       <>
  //         <Link to="/login">
  //           <Button variant="outlined" color="primary">Войти</Button>
  //         </Link>
  //         {/* <Link to="/register">
  //                 <Button variant="contained">Создать аккаунт</Button>
  //               </Link> */}
  //       </>
  //     )}
  //   </Box>
  // );

  const container = windowProps !== undefined ? () => windowProps().document.body : undefined;

  return (

    <header className="header">

      <div data-elementor-type="wp-post" data-elementor-id={2106} className="elementor elementor-2106">
        <div className="elementor-inner">
          <div className="elementor-section-wrap">
            <section className="elementor-section elementor-top-section elementor-element elementor-element-8a246b1 elementor-section-full_width header-layout3 elementor-section-height-default elementor-section-height-default" data-id="8a246b1" data-element_type="section">
              <div className="elementor-container elementor-column-gap-no">
                <div className="elementor-row">
                  <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-aaf515f" data-id="aaf515f" data-element_type="column">
                    <div className="elementor-column-wrap elementor-element-populated">
                      <div className="elementor-widget-wrap">
                        <section className="elementor-section elementor-inner-section elementor-element elementor-element-e48c633 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="e48c633" data-element_type="section" data-settings="{' background_background':'classic'}">
                          <Container>
                            <div className="elementor-row ds">
                              <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-7031ac8" data-id="7031ac8" data-element_type="column">
                                <div className="elementor-column-wrap elementor-element-populated">
                                  <div className="elementor-widget-wrap">
                                    <div className="elementor-element elementor-element-6cca13f elementor-widget elementor-widget-text-editor" data-id="6cca13f" data-element_type="widget" data-widget_type="text-editor.default">
                                      <div className="elementor-widget-container">
                                        <div className="elementor-text-editor elementor-clearfix">
                                          <div className="header-links style-white">
                                            <ul>
                                              <li className="d-none d-xxl-inline-block">
                                                <i className="fal fa-map-marker-alt" />Раззакова
                                                32, Бишкек
                                              </li>
                                              <li><i className="far fa-clock" />Пн
                                                – Пт: 9:00 – 18:00</li>
                                              <li><i className="far fa-envelope" /><a href="mailto:example@TechBiz.com">adbsolution@gmail.com</a>
                                              </li>
                                            </ul>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-55d5c69 elementor-hidden-mobile" data-id="55d5c69" data-element_type="column">
                                <div className="elementor-column-wrap elementor-element-populated">
                                  <div className="elementor-widget-wrap">
                                    <div className="elementor-element elementor-element-6c082ea elementor-widget__width-auto elementor-widget-tablet__width-auto elementor-widget elementor-widget-heading" data-id="6c082ea" data-element_type="widget" data-widget_type="heading.default">
                                      <div className="elementor-widget-container">
                                        <span className="elementor-heading-title elementor-size-default">
                                          Подпишитесь на нас:</span>
                                      </div>
                                    </div>
                                    <div className="elementor-element elementor-element-6a6b52a elementor-widget__width-auto elementor-shape-rounded elementor-grid-0 e-grid-align-center elementor-widget elementor-widget-social-icons" data-id="6a6b52a" data-element_type="widget" data-widget_type="social-icons.default">
                                      <div className="elementor-widget-container">
                                        <div className="elementor-social-icons-wrapper elementor-grid">
                                          <span className="elementor-grid-item">
                                            <a className="elementor-icon elementor-social-icon elementor-social-icon-facebook-f elementor-repeater-item-f6ef4b2" href="http://www.facebook.com" target="_blank">
                                              <span className="elementor-screen-only">Facebook-f</span>
                                              <i className="fab fa-facebook-f" />
                                            </a>
                                          </span>
                                          <span className="elementor-grid-item">
                                            <a className="elementor-icon elementor-social-icon elementor-social-icon-twitter elementor-repeater-item-fd80941" href="http://www.twitter.com" target="_blank">
                                              <span className="elementor-screen-only">Twitter</span>
                                              <i className="fab fa-twitter" />
                                            </a>
                                          </span>
                                          <span className="elementor-grid-item">
                                            <a className="elementor-icon elementor-social-icon elementor-social-icon-youtube elementor-repeater-item-b6261d7" href="http://www.youtube.com" target="_blank">
                                              <span className="elementor-screen-only">Youtube</span>
                                              <i className="fab fa-youtube" />
                                            </a>
                                          </span>
                                          <span className="elementor-grid-item">
                                            <a className="elementor-icon elementor-social-icon elementor-social-icon-linkedin-in elementor-repeater-item-a7ac71f" href="http://www.linkedin.com" target="_blank">
                                              <span className="elementor-screen-only">Linkedin-in</span>
                                              <i className="fab fa-linkedin-in" />
                                            </a>
                                          </span>
                                          <span className="elementor-grid-item">
                                            <a className="elementor-icon elementor-social-icon elementor-social-icon-youtube elementor-repeater-item-69025a1" href="http://www.youtube.com" target="_blank">
                                              <span className="elementor-screen-only">Youtube</span>
                                              <i className="fab fa-youtube" />
                                            </a>
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Container>
                        </section>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="elementor-section elementor-top-section elementor-element elementor-element-8edf5e6 elementor-section-full_width elementor-section-height-default elementor-section-height-default" data-id="8edf5e6" data-element_type="section">
              <div className="elementor-container elementor-column-gap-no">
                <div className="elementor-row">
                  <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-fa9d704" data-id="fa9d704" data-element_type="column">
                    <div className="elementor-column-wrap elementor-element-populated">
                      <div className="elementor-widget-wrap">
                        <section className="elementor-section elementor-inner-section elementor-element elementor-element-be813d9 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="be813d9" data-element_type="section">
                          <Container>
                            <div className="elementor-row">
                              <div className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-b99aabf" data-id="b99aabf" data-element_type="column">
                                <div className="elementor-column-wrap elementor-element-populated">
                                  <div className="elementor-widget-wrap">
                                    <div className="elementor-element elementor-element-28599e5 vs-logo elementor-widget elementor-widget-techbizimage" data-id="28599e5" data-element_type="widget" data-widget_type="techbizimage.default">
                                      <div className="elementor-widget-container">
                                        {/* Advertisement Image */}
                                        <div className="techbiz_img "><a href="/"><img src="images/logo.png" alt="logo5" /> </a></div>
                                        {/* End Advertisement Image */}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-db87129" data-id="db87129" data-element_type="column">
                                <div className="elementor-column-wrap elementor-element-populated">
                                  <div className="elementor-widget-wrap">
                                    <div className="elementor-element elementor-element-052837e elementor-widget elementor-widget-techbizmegamenu" data-id="052837e" data-element_type="widget" data-widget_type="techbizmegamenu.default">
                                      <div className="elementor-widget-container">
                                        <nav className="main-menu menu-style1 d-none d-lg-block">
                                          <ul id="menu-primary-menu">
                                            <li id="menu-item-101" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-101">
                                              <Link to='/'>Главная</Link>
                                            </li>
                                            <li id="menu-item-105" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-105">
                                              <a href="#">Сервисы</a>
                                              <ul className="sub-menu">
                                                <li id="menu-item-96" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-96">
                                                  <a>Расчет налога</a>
                                                  <ul className="sub-menu">
                                                    <li id="menu-item-102" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-102">
                                                      <Link to="taxhome">Жилое здание, сооружение и помещение</Link>
                                                    </li>
                                                    <li id="menu-item-102" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-102">
                                                      <Link to="taxnohome">Нежилое здание, сооружение и помещение</Link>
                                                    </li>
                                                    <li id="menu-item-102" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-102">
                                                      <Link to="taxplace">Земли насел. пунктов и несельхоз назнач.</Link>
                                                    </li>
                                                    <li id="menu-item-102" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-102">
                                                      <Link to="taxcar">Транспортное средство</Link>
                                                    </li>
                                                    {/* <li id="menu-item-95" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-95">
                                                      <a>Service
                                                        Details</a>
                                                    </li> */}
                                                  </ul>
                                                </li>
                                                <li id="menu-item-90" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-90">
                                                  <a>Заполнению декларации</a>
                                                </li>
                                                {/* <li id="menu-item-89" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-89">
                                                  <a>Project
                                                    Details</a>
                                                </li>
                                                <li id="menu-item-92" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-92">
                                                  <a>Team</a>
                                                </li>
                                                <li id="menu-item-91" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-91">
                                                  <a>Team
                                                    Details</a>
                                                </li>
                                                <li id="menu-item-116" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-116">
                                                  <a>Pricing
                                                    Plan</a>
                                                </li>
                                                <li id="menu-item-118" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-118">
                                                  <a>404
                                                    Page</a>
                                                </li> */}
                                              </ul>
                                            </li>
                                            
                                            <li id="menu-item-94" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-94">
                                              <Link to='blog'>Новости</Link>
                                              {/* <ul className="sub-menu">
                                                <li id="menu-item-104" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-104">
                                                  <a>Blog</a>
                                                </li>
                                                <li id="menu-item-103" className="menu-item menu-item-type-post_type menu-item-object-post menu-item-103">
                                                  <a>Blog
                                                    Details</a>
                                                </li>
                                              </ul> */}
                                            </li>
                                            {/* <li id="menu-item-97" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-97">
                                              <a>О
                                                Нас</a>
                                            </li> */}

                                            {/* <li id="menu-item-8919" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-8919">
                                              <a href="#">Сервисы</a>
                                              <ul className="sub-menu">
                                          
                                                <li id="menu-item-8925" className="menu-item menu-item-type-post_type menu-item-object-product menu-item-8925">
                                                  <Link to="taxhome">Расчет налога на имущество на жилое здание, сооружение и помещение</Link>
                                                </li>
                                                <li id="menu-item-8923" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-8923">
                                                  <Link to="taxnohome">Расчет налога на имущество на нежилое здание, сооружение и помещение</Link>
                                                </li>
                                                <li id="menu-item-8921" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-8921">
                                                  <Link to="taxplace">Расчет налога на имущество на земли населенных пунктов и земли несельскохозяйственного назначения</Link>
                                                </li>
                                                <li id="menu-item-8922" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-8922">
                                                  <Link to={'taxcar'}>Расчет налога на имущество на транспортное средство</Link>
                                                </li>

                                              </ul>
                                            </li> */}
                                            <li id="menu-item-88" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-88">
                                              <a>Контакты</a>
                                            </li>
                                          </ul>
                                        </nav>
                                      </div>
                                    </div>
                                    <div className="elementor-element elementor-element-d4956a1 elementor-widget-tablet__width-auto elementor-widget elementor-widget-techbizmobilemenu"
                                      data-id="d4956a1" data-element_type="widget"
                                      data-widget_type="techbizmobilemenu.default">
                                      <div className="elementor-widget-container">
                                        {/* <MobileMenu/> */}
                                        <button className="vs-menu-toggle d-inline-block d-lg-none"><i className="fal fa-bars" /></button>

                                        <div className="vs-menu-wrapper ">

                                          <div className="vs-menu-area text-center">
                                            <button className="vs-menu-toggle"><i className="fal fa-times" /></button>
                                            <div className="mobile-logo"> <Link to='/'><img src="images/logo.png" alt="logo5" /></Link></div>
                                            <div className="vs-mobile-menu">
                                              <ul id="menu-mobile-menu">
                                                <li onClick={goToHome} id="menu-item-131" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-131">
                                                  <Link to='/'>Главная</Link>
                                                </li>
                                                <li id="menu-item-135" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-135">
                                                  <a>О нас</a>
                                                </li>
                                                <li id="menu-item-136" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-136">
                                                  <a>Расчет налога</a>
                                                  <ul className="sub-menu">
                                                    <li id="menu-item-8925" className="menu-item menu-item-type-post_type menu-item-object-product menu-item-8925">
                                                      <Link to='taxhome'>Жилое здание, сооружение и помещение</Link>
                                                    </li>
                                                    <li id="menu-item-8923" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-8923">
                                                      <Link to="taxnohome">Нежилое здание, сооружение и помещение</Link>
                                                    </li>
                                                    <li id="menu-item-8921" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-8921">
                                                      <Link to="taxplace">Земли насел. пунктов и несельхоз назнач.</Link>
                                                    </li>
                                                    <li id="menu-item-8922" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-8922">
                                                      <Link to={'taxcar'}>Транспортное средство</Link>
                                                    </li>
                                                  </ul>
                                                </li>
                                                <li id="menu-item-139" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-139">
                                                  <a>Blog</a>
                                                  <ul className="sub-menu">
                                                    <li id="menu-item-140" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-140">
                                                      <a>Blog</a>
                                                    </li>
                                                    <li id="menu-item-141" className="menu-item menu-item-type-post_type menu-item-object-post menu-item-141">
                                                      <a>Blog
                                                        Details</a>
                                                    </li>
                                                  </ul>
                                                </li>
                                                <li id="menu-item-142" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-142">
                                                  <a href="#">Pages</a>
                                                  <ul className="sub-menu">
                                                    <li id="menu-item-151" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-151">
                                                      <a>Pricing
                                                        Plan</a>
                                                    </li>
                                                    <li id="menu-item-153" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-153">
                                                      <a>Projects</a>
                                                    </li>
                                                    <li id="menu-item-154" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-154">
                                                      <a>Project
                                                        Details</a>
                                                    </li>
                                                    <li id="menu-item-155" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-155">
                                                      <a>Team</a>
                                                    </li>
                                                    <li id="menu-item-156" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-156">
                                                      <a>Team
                                                        Details</a>
                                                    </li>
                                                    <li id="menu-item-160" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-160">
                                                      <a>404
                                                        Page</a>
                                                    </li>
                                                  </ul>
                                                </li>
                                                <li id="menu-item-161" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-161">
                                                  <a>Contact
                                                    Us</a>
                                                </li>
                                                
                                              </ul>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-dfe9be1 elementor-hidden-tablet elementor-hidden-mobile" data-id="dfe9be1" data-element_type="column">
                                <div className="elementor-column-wrap elementor-element-populated">
                                  <div className="elementor-widget-wrap">
                                    <div className="elementor-element elementor-element-99562d2 elementor-widget__width-auto d-none d-xxl-inline-block elementor-widget elementor-widget-techbizbutton" data-id="99562d2" data-element_type="widget" data-widget_type="techbizbutton.default">
                                      <div className="elementor-widget-container">
                                        {/* Button */}
                                        <div className="btn-wrapper left">
                                          {/* <a className="vs-btn">Войти<i className="far fa-arrow-right" /></a> */}
                                      
                                      
                                              {isAuth ? (
                                                <>
                                                  <Button onClick={onClickLogout} variant="contained" color="error">
                                                    Выйти
                                                  </Button>
                                                </>
                                              ) : (
                                                <>
                                                  <Link to='login' className="vs-btn">Войти<i className="far fa-arrow-right" /></Link>
                                                </>
                                              )}
                                           </div>{/* End Button */}
                                      </div>
                                    </div>
                                    <div className="elementor-element elementor-element-4fa0521 elementor-widget__width-auto elementor-hidden-tablet elementor-hidden-mobile elementor-widget elementor-widget-techbizoffcanvas" data-id="4fa0521" data-element_type="widget" data-widget_type="techbizoffcanvas.default">
                                      <div className="elementor-widget-container">
                                        <div className="header-btns">
                                          {/* <button className="icon-btn style3 sideMenuToggler">
                                          
                                          </button> */}
                                          {isAuth ? (
                                            ['right'].map((anchor) => (
                                              <React.Fragment key={anchor}>
                                                <button onClick={toggleDrawer(anchor, true)} className="icon-btn style3 "><i className="far fa-bars" /></button>
                                                <Drawer
                                                  anchor={anchor}
                                                  open={state[anchor]}
                                                  onClose={toggleDrawer(anchor, false)}
                                                >
                                                  {list(anchor)}
                                                </Drawer>
                                              </React.Fragment>
                                            ))
                                          ) : (``)}
                                        </div>
                                        <div className="sidemenu-wrapper d-none d-lg-block">
                                          <div className="sidemenu-content">
                                            <button className="closeButton sideMenuCls"><i className="far fa-times" /></button>
                                            <div id="block-13" className="widget widget_block">
                                              <div className="wp-block-group is-layout-flow wp-block-group-is-layout-flow">
                                                <div className="wp-block-group__inner-container">
                                                  <figure className="wp-block-image size-full footer-logo">
                                                    <img decoding="async" src="images/logo.png" alt="" className="wp-image-1902" />
                                                  </figure>
                                                  <p>Исключаются новые
                                                    передовые сценарии,
                                                    которые
                                                    переопределяют линию
                                                    спроса на
                                                    перспективные
                                                    электронные рынки.
                                                  </p>
                                                </div>
                                              </div>
                                            </div>
                                            {/* <div id="block-14" className="widget widget_block">
        <div className="wp-block-group is-layout-flow wp-block-group-is-layout-flow"><div className="wp-block-group__inner-container">
            <h3 className="widget_title wp-block-heading">Gallery Posts</h3>
            <figure className="wp-block-gallery has-nested-images columns-default is-cropped wp-block-gallery-1 is-layout-flex wp-block-gallery-is-layout-flex">
              <figure className="wp-block-image size-large is-style-default"><img decoding="async" width={89} height={89} src="https://wordpress.vecurosoft.com/techbiz/wp-content/uploads/2022/09/gal-1-1.jpg" alt="" className="wp-image-738" /></figure>
              <figure className="wp-block-image size-large"><img decoding="async" width={89} height={89} src="https://wordpress.vecurosoft.com/techbiz/wp-content/uploads/2022/09/gal-1-2.jpg" alt="" className="wp-image-737" /></figure>
              <figure className="wp-block-image size-large"><img decoding="async" width={89} height={89} src="https://wordpress.vecurosoft.com/techbiz/wp-content/uploads/2022/09/gal-1-3.jpg" alt="" className="wp-image-736" /></figure>
              <figure className="wp-block-image size-large"><img loading="lazy" decoding="async" width={89} height={89} src="https://wordpress.vecurosoft.com/techbiz/wp-content/uploads/2022/09/gal-1-4.jpg" alt="" className="wp-image-735" /></figure>
              <figure className="wp-block-image size-large"><img loading="lazy" decoding="async" width={89} height={89} src="https://wordpress.vecurosoft.com/techbiz/wp-content/uploads/2022/09/gal-1-5.jpg" alt="" className="wp-image-734" /></figure>
              <figure className="wp-block-image size-large"><img loading="lazy" decoding="async" width={89} height={89} src="https://wordpress.vecurosoft.com/techbiz/wp-content/uploads/2022/09/gal-1-6.jpg" alt="" className="wp-image-733" /></figure>
            </figure>
          </div></div>
      </div> */}
                                            <div id="block-15" className="widget widget_block">
                                              <div className="wp-block-group is-layout-flow wp-block-group-is-layout-flow">
                                                <div className="wp-block-group__inner-container">
                                                  <h3 className="widget_title wp-block-heading">
                                                    График Работы</h3>
                                                  <div className="footer-schedule">
                                                    <table>
                                                      <tbody>
                                                        <tr>
                                                          <th>Пн
                                                            -
                                                            Пт:
                                                          </th>
                                                          <td>9:00
                                                            -
                                                            18:00
                                                          </td>
                                                        </tr>
                                                        <tr>
                                                          <th>Суббота:
                                                          </th>
                                                          <td>9:00
                                                            -
                                                            16:00
                                                          </td>
                                                        </tr>
                                                      </tbody>
                                                    </table>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div className={styles.buttons}>
                                              {isAuth ? (
                                                <>
                                                  <Link to="/add-post">
                                                    <Button variant="contained">Написать статью</Button>
                                                  </Link>
                                                  <Button onClick={onClickLogout} variant="contained" color="error">
                                                    Выйти
                                                  </Button>
                                               
                                                </>
                                              ) : (
                                                <>
                                                  <Link to="/login">
                                                    <Button variant="outlined">Войти</Button>
                                                  </Link>
                                                  <Link to="/register">
                                                    <Button variant="contained">Создать аккаунт</Button>
                                                  </Link>
                                                </>
                                              )}
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Container>
                        </section>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </header>

  );
};



