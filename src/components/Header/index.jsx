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
                        <div className="elementor-container elementor-column-gap-no">
                          <div className="elementor-row">
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
                        </div>
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
                        <div className="elementor-container elementor-column-gap-no">
                          <div className="elementor-row">
                            <div className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-b99aabf" data-id="b99aabf" data-element_type="column">
                              <div className="elementor-column-wrap elementor-element-populated">
                                <div className="elementor-widget-wrap">
                                  <div className="elementor-element elementor-element-28599e5 vs-logo elementor-widget elementor-widget-techbizimage" data-id="28599e5" data-element_type="widget" data-widget_type="techbizimage.default">
                                    <div className="elementor-widget-container">
                                      {/* Advertisement Image */}
                                      <div className="techbiz_img "><a href rel="nofollow" target="_blank"><img className src="images/logo.png" alt="logo5" /></a></div>
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
                                        <ul id="menu-primary-menu" className>
                                          <li id="menu-item-101" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-101">
                                            <a href>О
                                              Главная</a>
                                          </li>
                                          <li id="menu-item-97" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-97">
                                            <a href>О
                                              Нас</a>
                                          </li>
                                          <li id="menu-item-94" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-94">
                                            <a href>Новости</a>
                                            <ul className="sub-menu">
                                              <li id="menu-item-104" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-104">
                                                <a href>Blog</a>
                                              </li>
                                              <li id="menu-item-103" className="menu-item menu-item-type-post_type menu-item-object-post menu-item-103">
                                                <a href>Blog
                                                  Details</a>
                                              </li>
                                            </ul>
                                          </li>
                                          <li id="menu-item-105" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-105">
                                            <a href="#">Услуги</a>
                                            <ul className="sub-menu">
                                              <li id="menu-item-96" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-96">
                                                <a href>Service</a>
                                                <ul className="sub-menu">
                                                  <li id="menu-item-102" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-102">
                                                    <a href>Service</a>
                                                  </li>
                                                  <li id="menu-item-95" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-95">
                                                    <a href>Service
                                                      Details</a>
                                                  </li>
                                                </ul>
                                              </li>
                                              <li id="menu-item-90" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-90">
                                                <a href>Projects</a>
                                              </li>
                                              <li id="menu-item-89" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-89">
                                                <a href>Project
                                                  Details</a>
                                              </li>
                                              <li id="menu-item-92" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-92">
                                                <a href>Team</a>
                                              </li>
                                              <li id="menu-item-91" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-91">
                                                <a href>Team
                                                  Details</a>
                                              </li>
                                              <li id="menu-item-116" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-116">
                                                <a href>Pricing
                                                  Plan</a>
                                              </li>
                                              <li id="menu-item-118" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-118">
                                                <a href>404
                                                  Page</a>
                                              </li>
                                            </ul>
                                          </li>
                                          <li id="menu-item-8919" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-8919">
                                            <a href="#">Сервисы</a>
                                            <ul className="sub-menu">
                                              <li id="menu-item-8924" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-8924">
                                                <a href>Shop</a>
                                              </li>
                                              <li id="menu-item-8925" className="menu-item menu-item-type-post_type menu-item-object-product menu-item-8925">
                                                <a href>Shop
                                                  Details</a>
                                              </li>
                                              <li id="menu-item-8923" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-8923">
                                                <a href>Cart</a>
                                              </li>
                                              <li id="menu-item-8921" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-8921">
                                                <a href>My
                                                  Account</a>
                                              </li>
                                              <li id="menu-item-8922" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-8922">
                                                <a href>Checkout</a>
                                              </li>
                                              <li id="menu-item-8920" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-8920">
                                                <a href>Wishlist</a>
                                              </li>
                                            </ul>
                                          </li>
                                          <li id="menu-item-88" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-88">
                                            <a href>Контакты</a>
                                          </li>
                                        </ul>
                                      </nav>
                                    </div>
                                  </div>
                                  <div className="elementor-element elementor-element-d4956a1 elementor-widget-tablet__width-auto elementor-widget elementor-widget-techbizmobilemenu" 
                                   data-id="d4956a1" data-element_type="widget" 
                                  data-widget_type="techbizmobilemenu.default">
                                    <div className="elementor-widget-container">
                                      <button className="vs-menu-toggle d-inline-block d-lg-none"><i className="fal fa-bars" /></button>
                                      <div className="vs-menu-wrapper">
                                        <div className="vs-menu-area text-center">
                                          <button className="vs-menu-toggle"><i className="fal fa-times" /></button>
                                          <div className="mobile-logo"><a href><img src="images/logo.png" alt="logo5" /></a></div>
                                          <div className="vs-mobile-menu">
                                            <ul id="menu-mobile-menu" className>
                                              <li id="menu-item-131" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-131">
                                                <a href>Главная</a>
                                              </li>
                                              <li id="menu-item-135" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-135">
                                                <a href>О нас</a>
                                              </li>
                                              <li id="menu-item-136" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-136">
                                                <a href>Service</a>
                                                <ul className="sub-menu">
                                                  <li id="menu-item-137" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-137">
                                                    <a href>Service</a>
                                                  </li>
                                                  <li id="menu-item-138" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-138">
                                                    <a href>Service
                                                      Details</a>
                                                  </li>
                                                </ul>
                                              </li>
                                              <li id="menu-item-139" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-139">
                                                <a href>Blog</a>
                                                <ul className="sub-menu">
                                                  <li id="menu-item-140" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-140">
                                                    <a href>Blog</a>
                                                  </li>
                                                  <li id="menu-item-141" className="menu-item menu-item-type-post_type menu-item-object-post menu-item-141">
                                                    <a href>Blog
                                                      Details</a>
                                                  </li>
                                                </ul>
                                              </li>
                                              <li id="menu-item-142" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-142">
                                                <a href="#">Pages</a>
                                                <ul className="sub-menu">
                                                  <li id="menu-item-151" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-151">
                                                    <a href>Pricing
                                                      Plan</a>
                                                  </li>
                                                  <li id="menu-item-153" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-153">
                                                    <a href>Projects</a>
                                                  </li>
                                                  <li id="menu-item-154" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-154">
                                                    <a href>Project
                                                      Details</a>
                                                  </li>
                                                  <li id="menu-item-155" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-155">
                                                    <a href>Team</a>
                                                  </li>
                                                  <li id="menu-item-156" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-156">
                                                    <a href>Team
                                                      Details</a>
                                                  </li>
                                                  <li id="menu-item-160" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-160">
                                                    <a href>404
                                                      Page</a>
                                                  </li>
                                                </ul>
                                              </li>
                                              <li id="menu-item-161" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-161">
                                                <a href>Contact
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
                                      <div className="btn-wrapper left"><a className="vs-btn" href>Войти<i className="far fa-arrow-right" /></a>
                                      </div>{/* End Button */}
                                    </div>
                                  </div>
                                  <div className="elementor-element elementor-element-4fa0521 elementor-widget__width-auto elementor-hidden-tablet elementor-hidden-mobile elementor-widget elementor-widget-techbizoffcanvas" data-id="4fa0521" data-element_type="widget" data-widget_type="techbizoffcanvas.default">
                                    <div className="elementor-widget-container">
                                      <div className="header-btns"><button className="icon-btn style3 sideMenuToggler"><i className="far fa-bars" /></button>
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
                                          {/*  */}
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
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
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



