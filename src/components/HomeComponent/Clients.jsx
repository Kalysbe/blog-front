import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper/core';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { FreeMode, Pagination, Navigation } from 'swiper/modules';

SwiperCore.use([Navigation]);

export const Clients = (props) => {
    const itemsReview = [
        { id: 1, name: 'Рахманбердиев Калысбек', post: 'Разработка ПО - ИП', text: 'ADB Solution - профессионалы высшего класса! Они быстро и эффективно выполнили аудит нашей компании, обнаружив и предотвратив потенциальные финансовые риски. Мы ценим их индивидуальный подход к каждому клиенту и их стремление к достижению наилучших результатов. Очень рекомендуем ADB Solution для всех финансовых потребностей вашего бизнеса!' },
        { id: 2, name: 'Нурбек уулу Эмил', post: 'Разработка ПО - ОсОО', text: 'Профессиональный и надежный сервис от ADB Solution! Мы сотрудничаем с этой компанией уже несколько лет, и мы всегда довольны результатами их работы. Их аудиторы проявляют высокий уровень компетентности и всегда готовы ответить на наши вопросы. Рекомендуем ADB Solution как надежного партнера в финансовой сфере' },
        { id: 3, name: 'Рыскулов Чынгыз', post: 'Разработка ПО - ИП', text: 'Отличная работа ADB Solution! Мы обратились к ним для проведения аудита нашего бизнеса, и результаты превзошли наши ожидания. Их команда проявила высокий профессионализм и внимание к деталям. Мы оцениваем их открытость и предложения по оптимизации наших финансовых процессов. Очень рекомендуем!' },
        { id: 4, name: 'Кадыкеев Азирет', post: 'Разработка ПО - ИП', text: 'ADB Solution - лучший выбор для нашей компании! Мы работали с несколькими аудиторскими компаниями, прежде чем обратиться к ADB Solution, и мы не могли быть более довольными нашим выбором. Их эксперты обладают глубоким пониманием нашей отрасли и всегда предоставляют ценные рекомендации для улучшения наших финансовых процессов.' },
    ]

    const companies = [
        'logo-1.svg', 'logo-2.svg', 'logo-3.svg', 'logo-4.svg'
    ]
    return (
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
                                                                                    <button className="vs-btn style4 swiper_back" id='swiper_back' data-slick-prev="#testislide1"><i className="far fa-arrow-left" />Назад</button>
                                                                                    <button className="vs-btn style4 swiper_next" id='swiper_next' data-slick-next="#testislide1">Вперед<i className="far fa-arrow-right" /></button>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <Swiper
                                                                            slidesPerView={3}
                                                                            spaceBetween={30}
                                                                            freeMode={true}
                                                                            modules={[FreeMode]}
                                                                            navigation={{
                                                                                prevEl: '.swiper_back',
                                                                                nextEl: '.swiper_next'
                                                                            }}
                                                                            className="mySwiper"
                                                                        >
                                                                            {itemsReview.map((item, index) => (
                                                                                <SwiperSlide key={index}>
                                                                                    <div className="testi-style1">
                                                                                        <div className="testi-icon">
                                                                                            <i className="fal fa-quote-right" />
                                                                                        </div>
                                                                                        <p className="testi-text">{item.text}</p>
                                                                                        <h3 className="testi-name h6">{item.name}</h3>
                                                                                        <div className="testi-degi">
                                                                                            {item.post}
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
                                                                    <Swiper
                                                                        slidesPerView={2}
                                                                        spaceBetween={30}
                                                                        freeMode={true}
                                                                        modules={[FreeMode]}
                                                                        className="mySwiper"
                                                                    >
                                                                        {companies.map((item, index) => (
                                                                            <SwiperSlide key={index}>
                                                                                <figure className="swiper-slide-inner">
                                                                                    <img decoding="async" className="swiper-slide-image" src={`images/${item}`} alt="logo-4" />
                                                                                </figure>
                                                                            </SwiperSlide>
                                                                        ))}
                                                                    </Swiper>
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
    )
}