import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import styles from './HomeComponent.module.scss';
import Box from '@mui/material/Box';
import { useEffect } from 'react';

import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import DeleteIcon from '@mui/icons-material/Delete';
import AlarmIcon from '@mui/icons-material/Alarm';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Button from '@mui/material/Button';
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import { useMediaQuery } from '@mui/material';
import Paper from '@mui/material/Paper';
import CustomizedAccordions from '../ Questions/ Questions'
import BasicTabs from '../Tab';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { SectionOne } from './SectionOne';
import { SectionTwo } from './SectionTwo';
import { SectionThree } from './SectionThree';
import { SectionFour } from './SectionFour';
import { SectionFive } from './Team';
import { Questions } from './Questions';
import { SectionSeven } from './SectionSeven';
import { Consultation } from './Consultation';
import { SectionNine } from './SectionNine';
import { Clients } from './Clients';
import { Post } from '../Post';

import { fetchPosts, fetchTags } from '../../redux/slices/post';



const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};







export const HomeComponent = (props) => {
  const dispatch = useDispatch()
  const userData = useSelector(state => state.auth.data)

  const { posts, tags } = useSelector(state => state.posts)

  const isPostsLoading = posts.status === 'loading'
  const isTagsLoading = tags.status === 'loading'

  React.useEffect(() => {
    dispatch(fetchPosts())
    dispatch(fetchTags())
  }, [])

  const isMobile = useMediaQuery('(max-width:600px)');

  return (
    <div className="techbiz-fluid">
      <div className="builder-page-wrapper">
        <div data-elementor-type="wp-page" data-elementor-id={61} className="elementor elementor-61">
          <div className="elementor-inner">
            <div className="elementor-section-wrap">
              <SectionOne />
              <SectionTwo />
              <SectionThree />
              <SectionFour />
              <SectionFive />
              <Questions />
              {/* <SectionSeven /> */}
              <Consultation />
              <SectionNine />
               <Clients/>
 
              <section className="elementor-section elementor-top-section elementor-element elementor-element-9e9b957 elementor-section-full_width elementor-section-height-default elementor-section-height-default" data-id="9e9b957" data-element_type="section" data-settings="{' background_background':'classic'}">
                <div className="elementor-container elementor-column-gap-no">
                  <div className="elementor-row">
                    <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-5d999a7" data-id="5d999a7" data-element_type="column">
                      <div className="elementor-column-wrap elementor-element-populated">
                        <div className="elementor-widget-wrap">
                          <section className="elementor-section elementor-inner-section elementor-element elementor-element-a96fb1f elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="a96fb1f" data-element_type="section">
                            <div className="elementor-container elementor-column-gap-no">
                              <div className="elementor-row">
                                <div className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-19839d3" data-id="19839d3" data-element_type="column">
                                  <div className="elementor-column-wrap elementor-element-populated">
                                    <div className="elementor-widget-wrap">
                                      <div className="elementor-element elementor-element-0c74655 elementor-widget elementor-widget-techbizsectiontitle" data-id="0c74655" data-element_type="widget" data-widget_type="techbizsectiontitle.default">
                                        <div className="elementor-widget-container">
                                          {/* Section Title */}
                                          <div className="title-area">
                                            <h2 className="sec-subtitle subtitle-selector">
                                              ОБНОВЛЯЕТСЯ ЕЖЕНЕДЕЛЬНО</h2>
                                            <h3 className="sec-title3 title-selector h1">
                                              АКТУАЛЬНЫЕ НОВОСТИ</h3>
                                          </div>{/* End Section Title */}
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </section>
                          <section className="elementor-section elementor-inner-section elementor-element elementor-element-01e8ff9 elementor-section-full_width elementor-section-height-default elementor-section-height-default" data-id="01e8ff9" data-element_type="section">
                            <div className="elementor-container elementor-column-gap-no">
                              <div className="elementor-row">
                                <div className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-945242d" data-id="945242d" data-element_type="column">
                                  <div className="elementor-column-wrap elementor-element-populated">
                                    <div className="elementor-widget-wrap">
                                      <div className="elementor-element elementor-element-064086e elementor-widget elementor-widget-techbizblogpost" data-id="064086e" data-element_type="widget" data-widget_type="techbizblogpost.default">
                                        <div className="elementor-widget-container">
                                          {/* blog Area */}




                                          <section className="vs-blog-wrapper">
                                            <div className="container">
                                              <Swiper
                                                slidesPerView={3}
                                                spaceBetween={30}
                                                freeMode={true}
                                                modules={[FreeMode]}
                                                className="mySwiper"
                                              >
                                                {(isPostsLoading ? [...Array(5)] : posts.items).map((obj, index) =>
                                                  index < 6 ? (
                                                    isPostsLoading ? (
                                                        <Post key={index} isLoading={true} />
                                                    ) : (
                                                      <SwiperSlide key={index}>
                                                        <div className="col-md-12">
                                                          <div className="vs-blog blog-style1">
                                                            <div className="blog-img">
                                                              <a><img loading="lazy" decoding="async" width={387} height={320} src="images/blog4-387x320.jpg" className="w-100 wp-post-image" alt="" /></a>
                                                              <div className="blog-content">
                                                                <div className="blog-meta">
                                                                  <a><i className="far fa-calendar" />{obj.createdAt}</a>
                                                                  {/* <a>
                                                                  <i className="fal fa-user" />
                                                                  {obj.user}
                                                                </a> */}
                                                                </div>
                                                                <h3 className="blog-title">
                                                                  <Link to={`/posts/${obj._id}`}>{obj.title}</Link>
                                                                </h3><a className="link-btn">Открыть<i className="far fa-arrow-right" /></a>

                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </SwiperSlide>
                                                    )) : '')} </Swiper>
                                            </div>{/* .container END */}
                                          </section>{/* blog Area end */}
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
      </div>
    </div>

  )

}

// function Item(props) {
//     const isMobile = useMediaQuery('(max-width:600px)');
//     return (
//         <Box sx={{ height: isMobile ? '320px' : '610px', position: 'relative', backgroundImage: `url(${props.item.img})`, backgroundRepeat: 'no-repeat', backgroundPosition: '50% 50%', backgroundSize: 'cover' }}>
//             <Box sx={{ background: 'linear-gradient(transparent,rgba(0,0,0,0.75))', position: 'absolute', bottom: '0', left: '0', right: '0', top: '50%' }}></Box>
//             <Box sx={{ position: 'absolute', left: 0, right: 0, bottom: 0, p: 3.75 }}>
//                 <Typography sx={{ color: '#fff' }} variant={isMobile ? 'h6' : 'h6'} gutterBottom>
//                     {props.item.title}
//                 </Typography>
//                 <Typography sx={{ color: '#fff' }}>
//                     Читать далее
//                 </Typography>
//             </Box>
//         </Box>
//     )
// }




