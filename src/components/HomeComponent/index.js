import React from 'react';
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

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { SectionOne } from './SectionOne';
import { SectionTwo } from './SectionTwo';
import { SectionThree } from './SectionThree';
import { SectionFour } from './SectionFour';
import { SectionFive } from './SectionFive';
import { SectionSix } from './SectionSix';
import { SectionSeven } from './SectionSeven';
import { SectionEight } from './SectionEight';
import { SectionNine } from './SectionNine';


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

  useEffect(() => {
    const scriptFiles = [
      'jquery.min.js',
      'layerslider.utils.js',
      'layerslider.kreaturamedia.jquery.js',
     'layerslider.transitions.js',
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
    'config.js',
    'frontend.min.js',
    'techbiz-frontend.js'
      // Добавьте остальные имена файлов скриптов
    ];
    const scriptElements = [];

    const loadScripts = () => {
      scriptFiles.forEach((fileName) => {
        const script = document.createElement('script');
        script.src = `./js/${fileName}`;
        script.setAttribute('data-nscript','afterInteractive')
        document.body.appendChild(script);
        scriptElements.push(script);
      });
    };

      loadScripts();



  }, []);

    const isMobile = useMediaQuery('(max-width:600px)');

    return (
        <div className="techbiz-fluid">
        <div className="builder-page-wrapper">
          <div data-elementor-type="wp-page" data-elementor-id={61} className="elementor elementor-61">
            <div className="elementor-inner">
              <div className="elementor-section-wrap">
               <SectionOne/>
               <SectionTwo/>
               <SectionThree/>
               <SectionFour/>
               <SectionFive/>
               <SectionSix/>
               <SectionSeven/>
               <SectionEight/>
               <SectionNine/>
               
                <section className="elementor-section elementor-top-section elementor-element elementor-element-209006e elementor-section-full_width elementor-section-height-default elementor-section-height-default" data-id="209006e" data-element_type="section">
                  <div className="elementor-container elementor-column-gap-no">
                    <div className="elementor-row">
                      <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-c338946" data-id="c338946" data-element_type="column">
                        <div className="elementor-column-wrap elementor-element-populated">
                          <div className="elementor-widget-wrap">
                            <section className="elementor-section elementor-inner-section elementor-element elementor-element-f18f4d2 elementor-section-full_width elementor-section-height-default elementor-section-height-default" data-id="f18f4d2" data-element_type="section">
                              <div className="elementor-container elementor-column-gap-no">
                                <div className="elementor-row">
                                  <div className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-f6a1ca9" data-id="f6a1ca9" data-element_type="column">
                                    <div className="elementor-column-wrap elementor-element-populated">
                                      <div className="elementor-widget-wrap">
                                        <div className="elementor-element elementor-element-10081f6 elementor-widget elementor-widget-techbiztestimonialslider" data-id="10081f6" data-element_type="widget" data-widget_type="techbiztestimonialslider.default">
                                          <div className="elementor-widget-container">
                                            <section className="testimonial-wrapper">
                                              <div className="container wow fadeInUp" data-wow-delay="0.2s">
                                                <div className="row justify-content-between">
                                                  <div className="col-lg-auto text-center text-lg-start">
                                                    <div className="title-area">
                                                      <span className="sec-subtitle"><i className="fas fa-bring-forward" />НАШИ
                                                        ЛУЧШИЕ
                                                        ОТЗЫВЫ</span>
                                                      <h2 className="sec-title h1">
                                                        ОТЗЫВЫ КЛИЕНТОВ
                                                      </h2>
                                                    </div>
                                                  </div>
                                                  <div className="col-auto d-none d-lg-block">
                                                    <div className="sec-btns">
                                                      <button className="vs-btn style4" data-slick-prev="#testislide1"><i className="far fa-arrow-left" />Назад</button><button className="vs-btn style4" data-slick-next="#testislide1">Вперед<i className="far fa-arrow-right" /></button>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div id="testislide1" className="row vs-carousel style-one" data-slide-to-show={3}>
                                                  <div className="col-xl-4">
                                                    <div className="testi-style1">
                                                      <div className="testi-icon">
                                                        <i className="fal fa-quote-right" />
                                                      </div>
                                                      <p className="testi-text">
                                                        ADB Solution - надежная аудиторская компания, обеспечивающая высококачественные услуги и профессиональную поддержку своим клиентам.</p>
                                                      <h3 className="testi-name h6">
                                                        Рахманбердиев
                                                        Калысбек</h3>
                                                      <div className="testi-degi">
                                                        Программист КФБ
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="col-xl-4">
                                                    <div className="testi-style1">
                                                      <div className="testi-icon">
                                                        <i className="fal fa-quote-right" />
                                                      </div>
                                                      <p className="testi-text">
                                                        “Engineer
                                                        resource
                                                        maximizing
                                                        whereas human
                                                        high quality
                                                        scenarios via
                                                        client
                                                        incentivize next
                                                        generatio”</p>
                                                      <h3 className="testi-name h6">
                                                        Vivi Marian</h3>
                                                      <div className="testi-degi">
                                                        Chef Leader
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="col-xl-4">
                                                    <div className="testi-style1">
                                                      <div className="testi-icon">
                                                        <i className="fal fa-quote-right" />
                                                      </div>
                                                      <p className="testi-text">
                                                        “There are many
                                                        variations of
                                                        passages of
                                                        Lorem Ipsum
                                                        available, but
                                                        the majority
                                                        have suffered
                                                        alteration”</p>
                                                      <h3 className="testi-name h6">
                                                        Customer</h3>
                                                      <div className="testi-degi">
                                                        Chef Leader
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="col-xl-4">
                                                    <div className="testi-style1">
                                                      <div className="testi-icon">
                                                        <i className="fal fa-quote-right" />
                                                      </div>
                                                      <p className="testi-text">
                                                        Contrary to
                                                        popular belief,
                                                        Lorem Ipsum is
                                                        not simply
                                                        random text over
                                                        2000 years old.
                                                        Richard
                                                        McClintock</p>
                                                      <h3 className="testi-name h6">
                                                        Jesper Karl</h3>
                                                      <div className="testi-degi">
                                                        SEO Customer
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
                                </div>
                              </div>
                            </section>
                            <section className="elementor-section elementor-inner-section elementor-element elementor-element-4be0ac1 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="4be0ac1" data-element_type="section">
                              <div className="elementor-container elementor-column-gap-no">
                                <div className="elementor-row">
                                  <div className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-3c61a29" data-id="3c61a29" data-element_type="column">
                                    <div className="elementor-column-wrap elementor-element-populated">
                                      <div className="elementor-widget-wrap">
                                        <div className="elementor-element elementor-element-e64f21e elementor-widget elementor-widget-text-editor" data-id="e64f21e" data-element_type="widget" data-widget_type="text-editor.default">
                                          <div className="elementor-widget-container">
                                            <div className="elementor-text-editor elementor-clearfix">
                                              <div className="sec-line-wrap">
                                                <div className="sec-line" />
                                                <h2 className="sec-title2">Наши постоянные клиенты</h2>
                                                <div className="sec-line" />
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
                            <section className="elementor-section elementor-inner-section elementor-element elementor-element-aa0bc2d elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="aa0bc2d" data-element_type="section">
                              <div className="elementor-container elementor-column-gap-no">
                                <div className="elementor-row">
                                  <div className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-8cb0d3f" data-id="8cb0d3f" data-element_type="column">
                                    <div className="elementor-column-wrap elementor-element-populated">
                                      <div className="elementor-widget-wrap">
                                        <div className="elementor-element elementor-element-146711d elementor-widget elementor-widget-image-carousel" data-id="146711d" data-element_type="widget" data-settings="{'slides_to_show':'5','slides_to_show_tablet':'3','slides_to_scroll':'1','navigation':'none','autoplay':'yes','pause_on_hover':'yes','pause_on_interaction':'yes','autoplay_speed':5000,'infinite':'yes','speed':500,'image_spacing_custom':{'unit':'px','size':20,'sizes':[]},'image_spacing_custom_tablet':{'unit':'px','size':','sizes':[]},'image_spacing_custom_mobile':{'unit':'px','size':','sizes':[]}}" data-widget_type="image-carousel.default">
                                          <div className="elementor-widget-container">
                                            <div className="elementor-image-carousel-wrapper swiper-container" dir="ltr">
                                              <div className="elementor-image-carousel swiper-wrapper" aria-live="off">
                                                <div className="swiper-slide" role="group" aria-roledescription="slide" aria-label="1 of 6">
                                                  <figure className="swiper-slide-inner">
                                                    <img decoding="async" className="swiper-slide-image" src="images/logo-4.svg" alt="logo-4" />
                                                  </figure>
                                                </div>
                                                <div className="swiper-slide" role="group" aria-roledescription="slide" aria-label="2 of 6">
                                                  <figure className="swiper-slide-inner">
                                                    <img decoding="async" className="swiper-slide-image" src="images/logo-5.svg" alt="logo-5" />
                                                  </figure>
                                                </div>
                                                <div className="swiper-slide" role="group" aria-roledescription="slide" aria-label="3 of 6">
                                                  <figure className="swiper-slide-inner">
                                                    <img decoding="async" className="swiper-slide-image" src="images/logo-6.svg" alt="logo-6" />
                                                  </figure>
                                                </div>
                                                <div className="swiper-slide" role="group" aria-roledescription="slide" aria-label="4 of 6">
                                                  <figure className="swiper-slide-inner">
                                                    <img decoding="async" className="swiper-slide-image" src="images/logo-1.svg" alt="logo-1" />
                                                  </figure>
                                                </div>
                                                <div className="swiper-slide" role="group" aria-roledescription="slide" aria-label="5 of 6">
                                                  <figure className="swiper-slide-inner">
                                                    <img decoding="async" className="swiper-slide-image" src="images/logo-2.svg" alt="logo-2" />
                                                  </figure>
                                                </div>
                                                <div className="swiper-slide" role="group" aria-roledescription="slide" aria-label="6 of 6">
                                                  <figure className="swiper-slide-inner">
                                                    <img decoding="async" className="swiper-slide-image" src="images/logo-3.svg" alt="logo-3" />
                                                  </figure>
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
                                                <div className="row vs-carousel" data-slick-arrows="true" data-slide-to-show={3}>
                                                  <div className="col-md-6">
                                                    <div className="vs-blog blog-style1">
                                                      <div className="blog-img">
                                                        <a><img loading="lazy" decoding="async" width={387} height={320} src="images/blog1-387x320.jpg" className="w-100 wp-post-image" alt="" /></a>
                                                        <div className="blog-content">
                                                          <div className="blog-meta">
                                                            <a><i className="far fa-calendar" /><time dateTime="2022-08-10T06:12:37+02:00">10
                                                                Aug,
                                                                2022</time></a><a><i className="fal fa-user" />Rodja
                                                              Hartmann</a>
                                                          </div>
                                                          <h3 className="blog-title">
                                                            <a>Richard
                                                              McClintock,
                                                              a
                                                              Latin
                                                              scholar
                                                              from</a>
                                                          </h3><a className="link-btn">Read
                                                            Deatils<i className="far fa-arrow-right" /></a>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="col-md-6">
                                                    <div className="vs-blog blog-style1">
                                                      <div className="blog-img">
                                                        <a><img loading="lazy" decoding="async" width={387} height={320} src="images/blog4-387x320.jpg" className="w-100 wp-post-image" alt="" /></a>
                                                        <div className="blog-content">
                                                          <div className="blog-meta">
                                                            <a><i className="far fa-calendar" /><time dateTime="2022-08-10T06:09:28+02:00">10
                                                                Aug,
                                                                2022</time></a><a><i className="fal fa-user" />Rodja
                                                              Hartmann</a>
                                                          </div>
                                                          <h3 className="blog-title">
                                                            <a>Latin
                                                              derived
                                                              from
                                                              Cicero’s
                                                              1st-century
                                                              BC</a>
                                                          </h3><a className="link-btn">Read
                                                            Deatils<i className="far fa-arrow-right" /></a>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="col-md-6">
                                                    <div className="vs-blog blog-style1">
                                                      <div className="blog-img">
                                                        <a><img loading="lazy" decoding="async" width={387} height={320} src="images/blog3-387x320.jpg" className="w-100 wp-post-image" alt="" /></a>
                                                        <div className="blog-content">
                                                          <div className="blog-meta">
                                                            <a><i className="far fa-calendar" /><time dateTime="2022-08-10T06:13:33+02:00">10
                                                                Aug,
                                                                2022</time></a><a><i className="fal fa-user" />Rodja
                                                              Hartmann</a>
                                                          </div>
                                                          <h3 className="blog-title">
                                                            <a>Global
                                                              Business
                                                              Goal
                                                              Make
                                                              Life
                                                              Easy
                                                              From</a>
                                                          </h3><a className="link-btn">Read
                                                            Deatils<i className="far fa-arrow-right" /></a>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="col-md-6">
                                                    <div className="vs-blog blog-style1">
                                                      <div className="blog-img">
                                                        <a><img loading="lazy" decoding="async" width={387} height={320} src="images/blog5-387x320.jpg" className="w-100 wp-post-image" alt="" /></a>
                                                        <div className="blog-content">
                                                          <div className="blog-meta">
                                                            <a><i className="far fa-calendar" /><time dateTime="2022-08-09T06:25:07+02:00">9
                                                                Aug,
                                                                2022</time></a><a><i className="fal fa-user" />Rodja
                                                              Hartmann</a>
                                                          </div>
                                                          <h3 className="blog-title">
                                                            <a>The
                                                              passage
                                                              experienced
                                                              a
                                                              surge
                                                              in
                                                              during</a>
                                                          </h3><a className="link-btn">Read
                                                            Deatils<i className="far fa-arrow-right" /></a>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>{/* .row END */}
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




