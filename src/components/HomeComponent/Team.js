import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';

export const SectionFive = (props) => {
    const itemsTeam = [
        { id: 1, name: 'Гульзада Базаркулова', post: 'Аудитор' },
        { id: 2, name: 'Алина Алина', post: 'Бухгалтер' },
        { id: 3, name: 'Рахманбердиев Калысбек', post: 'Программист' },
        { id: 4, name: 'Нурбек уулу Эмил', post: 'Программист' },
        { id: 5, name: 'Чынгыз', post: 'Программист' }
    ]
    return (
        <section className="elementor-section elementor-top-section elementor-element elementor-element-f1a6769 elementor-section-full_width elementor-section-height-default elementor-section-height-default" data-id="f1a6769" data-element_type="section">
            <div className="elementor-container elementor-column-gap-no">
                <div className="elementor-row">
                    <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-78daa79" data-id="78daa79" data-element_type="column">
                        <div className="elementor-column-wrap elementor-element-populated">
                            <div className="elementor-widget-wrap">
                                <section className="elementor-section elementor-inner-section elementor-element elementor-element-80be9ee elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="80be9ee" data-element_type="section">
                                    <div className="elementor-container elementor-column-gap-no">
                                        <div className="elementor-row">
                                            <div className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-833850b " data-id="833850b" data-element_type="column" data-settings="{' animation':'fadeinup','animation_delay':300}">
                                                <div className="elementor-column-wrap elementor-element-populated">
                                                    <div className="elementor-widget-wrap">
                                                        <div className="elementor-element elementor-element-b57259c elementor-widget-mobile__width-inherit elementor-widget elementor-widget-techbizsectiontitle" data-id="b57259c" data-element_type="widget" data-widget_type="techbizsectiontitle.default">
                                                            <div className="elementor-widget-container">
                                                                {/* Section Title */}
                                                                <div className="title-area">
                                                                    <h2 className="sec-subtitle subtitle-selector">
                                                                        ОТЛИЧНАЯ КОМАНДА</h2>
                                                                    <h3 className="sec-title3 title-selector h1">
                                                                        У НАС ЛУЧШАЯ КОМАНДА ЭКСПЕРТОВ
                                                                    </h3>
                                                                </div>{/* End Section Title */}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                <section className="elementor-section elementor-inner-section elementor-element elementor-element-8fc4aca elementor-section-full_width elementor-section-height-default elementor-section-height-default " data-id="8fc4aca" data-element_type="section" data-settings="{' animation':'fadeinup','animation_delay':400}">
                                    <div className="elementor-container elementor-column-gap-no">
                                        <div className="elementor-row">
                                            <div className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-cb508c1" data-id="cb508c1" data-element_type="column">
                                                <div className="elementor-column-wrap elementor-element-populated">
                                                    <div className="elementor-widget-wrap">
                                                        <div className="elementor-element elementor-element-1faffab elementor-widget elementor-widget-techbizteammember" data-id="1faffab" data-element_type="widget" data-widget_type="techbizteammember.default">
                                                            <div className="elementor-widget-container">
                                                                <section className="vs-team-wrapper">
                                                                    <div className="container">
                                                                        <Swiper
                                                                            slidesPerView={4}
                                                                            spaceBetween={30}
                                                                            freeMode={true}
                                                                            modules={[FreeMode]}
                                                                            className="mySwiper"
                                                                        >
                                                                            {itemsTeam.map((item, index) => (
                                                                                <SwiperSlide>
                                                                                    <div className="team-style1 ">
                                                                                        <div className="team-img">
                                                                                            <a><img decoding="async" src="images/default.jpg" alt="t 1 1" /></a>
                                                                                            <div className="team-social">
                                                                                                <a target="_blank" rel="nofollow" href="http://www.facebook.com"><i className="fab fa-facebook-f" /></a>
                                                                                                <a target="_blank" rel="nofollow" href="http://www.twitter.com"><i className="fab fa-twitter" /></a>
                                                                                                <a target="_blank" rel="nofollow" href="http://www.instagram.com"><i className="fab fa-instagram" /></a>
                                                                                                <a target="_blank" rel="nofollow" href="http://www.linkedin.com"><i className="fab fa-linkedin-in" /></a>
                                                                                                <a target="_blank" rel="nofollow" href="http://www.dribble.com"><i className="fab fa-dribbble" /></a>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className="team-content">
                                                                                            <h3 className="team-title">
                                                                                                <a className="text-inherit">{item.name}</a>
                                                                                            </h3>
                                                                                            <p className="team-degi">
                                                                                                {item.post}
                                                                                            </p>
                                                                                        </div>
                                                                                    </div>
                                                                                </SwiperSlide>
                                                                            ))}

                                                                        </Swiper>
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}