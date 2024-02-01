import React, { useEffect, useState } from 'react';


export const SectionOne = (props) => {
  const [initModule, setInitModule] = useState(null);

  useEffect(() => {
    // Dynamically import Init.js after the page has loaded
    import('./Slides/Init.js')
      .then((module) => {
        // Store the imported module in the state
        setInitModule(module.default); // Access the default export of the module
      })
      .catch((error) => {
        console.error('Error importing Init.js:', error);
      });
  }, []); 
    return (
      <div>
<section className="elementor-section elementor-top-section elementor-element elementor-element-bd1d09e elementor-section-full_width elementor-section-height-default elementor-section-height-default" data-id="bd1d09e" data-element_type="section">
<div className="elementor-container elementor-column-gap-no">
  <div className="elementor-row">
    <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-cc3df22" data-id="cc3df22" data-element_type="column">
      <div className="elementor-column-wrap elementor-element-populated">
        <div className="elementor-widget-wrap">
          <div className="elementor-element elementor-element-f68a05a elementor-widget elementor-widget-layerslider" data-id="f68a05a" data-element_type="widget" data-widget_type="layerslider.default">
            <div className="elementor-widget-container">
 
              <link href="https://fonts.googleapis.com/css?family=Exo:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet" />
              <div id="layerslider_1_lto8j8x0zbu3" className="ls-wp-container fitvidsignore" style={{width: '1900px', height: '780px', margin: '0 auto', marginBottom: '0px'}}>
                <div className="ls-slide" data-ls="duration:12000;transition2d:5;kenburnszoom:in;kenburnsscale:1.1;">
                  <img loading="lazy" decoding="async" width={1920} height={850} src="images/hero-1-1.jpg" className="ls-bg" alt="" srcSet="images/hero-1-1.jpg 1920w, images/hero-1-1-600x266.jpg 600w, images/hero-1-1-300x133.jpg 300w, images/hero-1-1-1024x453.jpg 1024w, images/hero-1-1-768x340.jpg 768w, images/hero-1-1-1536x680.jpg 1536w" sizes="(max-width: 1920px) 100vw, 1920px" />
                  <div style={{width: '300px', height: '1558px', backgroundColor: 'rgb(204, 177, 46,.5)', top: '-473px', left: '51px'}} className="ls-l ls-text-layer" data-ls="offsetxin:-800;offsetyin:-800;durationin:1700;delayin:1200;easingin:easeOutQuint;rotatein:43.46;offsetxout:1200;offsetyout:1200;durationout:8000;startatout:slidechangeonly + 3000;easingout:easeOutQuint;scaleyout:5;rotation:43.46;">
                  </div>
                  <div style={{width: '589px', height: '1819.7px', top: '-485px', left: '406px', backgroundImage: 'linear-gradient(172deg, rgba(5, 26, 79, 0.35) 21%, rgba(0, 0, 0, 0) 54%)'}} className="ls-l ls-text-layer" data-ls="offsetxin:-800;offsetyin:-800;durationin:1500;delayin:1300;easingin:easeOutQuint;rotatein:43.46;offsetxout:1200;offsetyout:1200;durationout:8000;startatout:slidechangeonly + 3000;easingout:easeOutQuint;scaleyout:5;bgcolorout:transparent;colorout:transparent;rotation:43.46;">
                  </div>
                  <p style={{fontSize: '18px', fontWeight: 600, fontFamily: 'Exo', color: '#ffffff', borderWidth: '2px 2px 2px 2px', borderColor: '#ffffff', borderRadius: '5px 5px 5px 5px', paddingTop: '9px', paddingRight: '23.5px', paddingLeft: '23.5px', top: '220px', left: '345PX', paddingBottom: '9px'}} className="ls-l ls-hide-tablet ls-hide-phone ls-text-layer" data-ls="offsetxin:300;durationin:1500;delayin:400;easingin:easeOutQuint;offsetxout:300;durationout:1500;easingout:easeOutQuint;">
                    У НАС ЕСТЬ ЛУЧШИЕ СПЕЦИАЛИСТЫ</p>
                  <h1 style={{top: '292px', left: '345px', fontWeight: 700, backgroundSize: 'inherit', backgroundPosition: 'inherit', fontSize: '60px', color: '#ffffff', fontFamily: 'Exo'}} className="ls-l ls-hide-tablet ls-hide-phone ls-text-layer" data-ls="offsetxin:-200;durationin:1500;easingin:easeOutQuint;offsetxout:-100;durationout:1500;easingout:easeOutQuint;position:relative;">
                    ЛУЧШИЕ АУДИТ УСЛУГИ</h1>
                  <h1 style={{top: '378px', left: '345px', fontWeight: 700, backgroundSize: 'inherit', backgroundPosition: 'inherit', fontSize: '60px', fontFamily: 'Exo', color: '#ffffff', backgroundColor: 'transparent', cursor: 'auto'}} className="ls-l ls-hide-tablet ls-hide-phone ls-text-layer" data-ls="offsetxin:-200;durationin:1500;delayin:200;easingin:easeOutQuint;offsetxout:-100;durationout:1500;easingout:easeOutQuint;">
                    И РЕШЕНИЯ В 2024 - ГОДУ</h1>
                  <div style={{top: '505px', left: '350px', backgroundSize: 'inherit', backgroundPosition: 'inherit', fontSize: '24px'}} className="ls-l ls-hide-tablet ls-hide-phone ls-html-layer" data-ls="offsetyin:50;durationin:1500;delayin:900;easingin:easeOutQuint;offsetyout:50;durationout:1500;easingout:easeOutQuint;position:relative;">
                    <div className="ls-btn-group"><a className="vs-btn ls-hero-btn">ABOUT US<i className="far fa-arrow-right" /></a><a className="vs-btn style2 ls-hero-btn">READ
                        MORE<i className="far fa-arrow-right" /></a>
                    </div>
                  </div>
                  <p style={{fontSize: '32px', fontWeight: 600, fontFamily: 'Exo', color: '#ffffff', borderWidth: '2px 2px 2px 2px', borderColor: '#ffffff', borderRadius: '5px 5px 5px 5px', paddingTop: '18px', paddingRight: '44px', paddingLeft: '44px', top: '160px', left: '90px', paddingBottom: '18px'}} className="ls-l ls-hide-desktop ls-hide-phone ls-text-layer" data-ls="offsetxin:300;durationin:1500;delayin:400;easingin:easeOutQuint;offsetxout:300;durationout:1500;easingout:easeOutQuint;">
                    WE HAVE TOP IT EXPERT</p>
                  <h1 style={{top: '280px', left: '80px', fontWeight: 700, backgroundSize: 'inherit', backgroundPosition: 'inherit', fontSize: '80px', color: '#ffffff', fontFamily: 'Exo'}} className="ls-l ls-hide-desktop ls-hide-phone ls-text-layer" data-ls="offsetxin:-200;durationin:1500;easingin:easeOutQuint;offsetxout:-100;durationout:1500;easingout:easeOutQuint;position:relative;">
                    change the title</h1>
                  <h1 style={{top: '380px', left: '80px', fontWeight: 700, backgroundSize: 'inherit', backgroundPosition: 'inherit', fontSize: '80px', fontFamily: 'Exo', color: '#ffffff', backgroundColor: 'transparent', cursor: 'auto'}} className="ls-l ls-hide-desktop ls-hide-phone ls-text-layer" data-ls="offsetxin:-200;durationin:1500;delayin:200;easingin:easeOutQuint;offsetxout:-100;durationout:1500;easingout:easeOutQuint;">
                    SERVICE &amp; SOLUTION 2022</h1>
                  <div style={{top: '540px', left: '80px', backgroundSize: 'inherit', backgroundPosition: 'inherit', fontSize: '24px'}} className="ls-l ls-hide-desktop ls-hide-phone ls-html-layer" data-ls="offsetyin:50;durationin:1500;delayin:900;easingin:easeOutQuint;offsetyout:50;durationout:1500;easingout:easeOutQuint;position:relative;">
                    <div className="ls-btn-group"><a className="vs-btn ls-hero-btn">ABOUT US<i className="far fa-arrow-right" /></a><a className="vs-btn style2 ls-hero-btn">READ
                        MORE<i className="far fa-arrow-right" /></a>
                    </div>
                  </div>
                  <h1 style={{top: '76px', left: '50%', textAlign: 'center', fontWeight: 700, backgroundSize: 'inherit', backgroundPosition: 'inherit', fontSize: '130px', color: '#ffffff', fontFamily: 'Exo', width: '10000px'}} className="ls-l ls-hide-desktop ls-hide-tablet ls-text-layer" data-ls="offsetxin:-200;durationin:1500;easingin:easeOutQuint;offsetxout:-100;durationout:1500;easingout:easeOutQuint;position:relative;">
                    ЛУЧШИЕ АУДИТ УСЛУГИ</h1>
                  <h1 style={{top: '232px', left: '50%', textAlign: 'center', fontWeight: 700, backgroundSize: 'inherit', backgroundPosition: 'inherit', fontSize: '130px', fontFamily: 'Exo', color: '#ffffff', width: '10000px', backgroundColor: 'transparent', cursor: 'auto'}} className="ls-l ls-hide-desktop ls-hide-tablet ls-text-layer" data-ls="offsetxin:-200;durationin:1500;delayin:200;easingin:easeOutQuint;offsetxout:-100;durationout:1500;easingout:easeOutQuint;">
                    И РЕШЕНИЯ В 2024 - ГОДУ</h1>
                  <div style={{top: '486px', left: '50%', textAlign: 'center', backgroundSize: 'inherit', backgroundPosition: 'inherit', fontSize: '24px', width: '1920px'}} className="ls-l ls-hide-desktop ls-hide-tablet ls-html-layer" data-ls="offsetyin:50;durationin:1500;delayin:900;easingin:easeOutQuint;offsetyout:50;durationout:1500;easingout:easeOutQuint;position:relative;">
                    <div className="ls-btn-group"><a className="vs-btn ls-hero-btn">О НАС<i className="far fa-arrow-right" /></a><a className="vs-btn style2 ls-hero-btn">Читать<i className="far fa-arrow-right" /></a>
                    </div>
                  </div><a style={{}} className="ls-l ls-hide-tablet ls-hide-phone" href="#next" target="_self" data-ls="static:forever;">
                    <div style={{left: '1685px', top: '50%'}} className="ls-html-layer"><span className="icon-btn style2"><i className="far fa-arrow-right" /></span>
                    </div>
                  </a><a style={{}} className="ls-l ls-hide-tablet ls-hide-phone" href="#next" target="_self" data-ls="static:forever;">
                    <div style={{left: '150px', top: '50%'}} className="ls-html-layer"><span className="icon-btn style2"><i className="far fa-arrow-left" /></span>
                    </div>
                  </a>
                </div>
                <div className="ls-slide" data-ls="duration:12000;transition2d:5;kenburnszoom:out;kenburnsscale:1.1;">
                  <img loading="lazy" decoding="async" width={1920} height={850} src="images/hero-1-2.jpg" className="ls-bg" alt="" srcSet="images/hero-1-2.jpg 1920w, images/hero-1-2-600x266.jpg 600w, images/hero-1-2-300x133.jpg 300w, images/hero-1-2-1024x453.jpg 1024w, images/hero-1-2-768x340.jpg 768w, images/hero-1-2-1536x680.jpg 1536w" sizes="(max-width: 1920px) 100vw, 1920px" />
                  <div style={{width: '300px', height: '1558px', backgroundColor: 'rgb(204, 177, 46,.5)', top: '-473px', left: '51px'}} className="ls-l ls-text-layer" data-ls="offsetxin:-800;offsetyin:-800;durationin:1700;delayin:1200;easingin:easeOutQuint;rotatein:43.46;offsetxout:1200;offsetyout:1200;durationout:8000;startatout:slidechangeonly + 3000;easingout:easeOutQuint;scaleyout:5;rotation:43.46;">
                  </div>
                  <div style={{width: '589px', height: '1819.7px', top: '-485px', left: '406px', backgroundImage: 'linear-gradient(172deg, rgba(5, 26, 79, 0.35) 21%, rgba(0, 0, 0, 0) 54%)'}} className="ls-l ls-text-layer" data-ls="offsetxin:-800;offsetyin:-800;durationin:1500;delayin:1300;easingin:easeOutQuint;rotatein:43.46;offsetxout:1200;offsetyout:1200;durationout:8000;startatout:slidechangeonly + 3000;easingout:easeOutQuint;scaleyout:5;bgcolorout:transparent;colorout:transparent;rotation:43.46;">
                  </div>
                  <p style={{fontSize: '18px', fontWeight: 600, fontFamily: 'Exo', color: '#ffffff', borderWidth: '2px 2px 2px 2px', borderColor: '#ffffff', borderRadius: '5px 5px 5px 5px', paddingTop: '9px', paddingRight: '23.5px', paddingLeft: '23.5px', top: '220px', left: '345PX', paddingBottom: '9px'}} className="ls-l ls-hide-tablet ls-hide-phone ls-text-layer" data-ls="offsetxin:300;durationin:1500;delayin:400;easingin:easeOutQuint;offsetxout:300;durationout:1500;easingout:easeOutQuint;">
                    ПРЕДОСТАВЛЯЕМ БЕСПЛАТНУЮ КОНСУЛЬТАЦИЮ</p>
                  <h1 style={{top: '292px', left: '345px', fontWeight: 700, backgroundSize: 'inherit', backgroundPosition: 'inherit', fontSize: '60px', color: '#ffffff', fontFamily: 'Exo'}} className="ls-l ls-hide-tablet ls-hide-phone ls-text-layer" data-ls="offsetxin:-200;durationin:1500;easingin:easeOutQuint;offsetxout:-100;durationout:1500;easingout:easeOutQuint;position:relative;">
                    ЭКСПЕРТНОЕ РЕШЕНИЕ
                  </h1>
                  <div style={{top: '505px', left: '350px', backgroundSize: 'inherit', backgroundPosition: 'inherit', fontSize: '24px'}} className="ls-l ls-hide-tablet ls-hide-phone ls-html-layer" data-ls="offsetyin:50;durationin:1500;delayin:900;easingin:easeOutQuint;offsetyout:50;durationout:1500;easingout:easeOutQuint;position:relative;">
                    <div className="ls-btn-group"><a className="vs-btn ls-hero-btn">ABOUT US<i className="far fa-arrow-right" /></a><a className="vs-btn style2 ls-hero-btn">READ
                        MORE<i className="far fa-arrow-right" /></a>
                    </div>
                  </div>
                  <h1 style={{top: '378px', left: '345px', fontWeight: 700, backgroundSize: 'inherit', backgroundPosition: 'inherit', fontSize: '60px', fontFamily: 'Exo', color: '#ffffff', backgroundColor: 'transparent', cursor: 'auto'}} className="ls-l ls-hide-tablet ls-hide-phone ls-text-layer" data-ls="offsetxin:-200;durationin:1500;delayin:200;easingin:easeOutQuint;offsetxout:-100;durationout:1500;easingout:easeOutQuint;">
                    И УПРАВЛЕНИЕ</h1>
                  <p style={{fontSize: '32px', fontWeight: 600, fontFamily: 'Exo', color: '#ffffff', borderWidth: '2px 2px 2px 2px', borderColor: '#ffffff', borderRadius: '5px 5px 5px 5px', paddingTop: '18px', paddingRight: '44px', paddingLeft: '44px', top: '160px', left: '90px', paddingBottom: '18px'}} className="ls-l ls-hide-desktop ls-hide-phone ls-text-layer" data-ls="offsetxin:300;durationin:1500;delayin:400;easingin:easeOutQuint;offsetxout:300;durationout:1500;easingout:easeOutQuint;">
                    PROVIDE FREE CONSULTATION</p>
                  <h1 style={{top: '280px', left: '80px', fontWeight: 700, backgroundSize: 'inherit', backgroundPosition: 'inherit', fontSize: '80px', color: '#ffffff', fontFamily: 'Exo'}} className="ls-l ls-hide-desktop ls-hide-phone ls-text-layer" data-ls="offsetxin:-200;durationin:1500;easingin:easeOutQuint;offsetxout:-100;durationout:1500;easingout:easeOutQuint;position:relative;">
                    ЭКСПЕРТНОЕ РЕШЕНИЕ</h1>
                  <h1 style={{top: '380px', left: '80px', fontWeight: 700, backgroundSize: 'inherit', backgroundPosition: 'inherit', fontSize: '80px', fontFamily: 'Exo', color: '#ffffff', backgroundColor: 'transparent', cursor: 'auto'}} className="ls-l ls-hide-desktop ls-hide-phone ls-text-layer" data-ls="offsetxin:-200;durationin:1500;delayin:200;easingin:easeOutQuint;offsetxout:-100;durationout:1500;easingout:easeOutQuint;">
                    И УПРАВЛЕНИЕ</h1>
                  <div style={{top: '540px', left: '80px', backgroundSize: 'inherit', backgroundPosition: 'inherit', fontSize: '24px'}} className="ls-l ls-hide-desktop ls-hide-phone ls-html-layer" data-ls="offsetyin:50;durationin:1500;delayin:900;easingin:easeOutQuint;offsetyout:50;durationout:1500;easingout:easeOutQuint;position:relative;">
                    <div className="ls-btn-group"><a className="vs-btn ls-hero-btn">ABOUT US<i className="far fa-arrow-right" /></a><a className="vs-btn style2 ls-hero-btn">READ
                        MORE<i className="far fa-arrow-right" /></a>
                    </div>
                  </div>
                  <h1 style={{top: '76px', left: '50%', textAlign: 'center', fontWeight: 700, backgroundSize: 'inherit', backgroundPosition: 'inherit', fontSize: '130px', color: '#ffffff', fontFamily: 'Exo', width: '10000px'}} className="ls-l ls-hide-desktop ls-hide-tablet ls-text-layer" data-ls="offsetxin:-200;durationin:1500;easingin:easeOutQuint;offsetxout:-100;durationout:1500;easingout:easeOutQuint;position:relative;">
                    ЭКСПЕРТНОЕ РЕШЕНИЕ</h1>
                  <h1 style={{top: '232px', left: '50%', textAlign: 'center', fontWeight: 700, backgroundSize: 'inherit', backgroundPosition: 'inherit', fontSize: '130px', fontFamily: 'Exo', color: '#ffffff', width: '10000px', backgroundColor: 'transparent', cursor: 'auto'}} className="ls-l ls-hide-desktop ls-hide-tablet ls-text-layer" data-ls="offsetxin:-200;durationin:1500;delayin:200;easingin:easeOutQuint;offsetxout:-100;durationout:1500;easingout:easeOutQuint;">
                    И УПРАВЛЕНИЕ</h1>
                  <div style={{top: '486px', left: '50%', textAlign: 'center', backgroundSize: 'inherit', backgroundPosition: 'inherit', fontSize: '24px', width: '1920px'}} className="ls-l ls-hide-desktop ls-hide-tablet ls-html-layer" data-ls="offsetyin:50;durationin:1500;delayin:900;easingin:easeOutQuint;offsetyout:50;durationout:1500;easingout:easeOutQuint;position:relative;">
                    <div className="ls-btn-group"><a className="vs-btn ls-hero-btn">ABOUT US<i className="far fa-arrow-right" /></a><a className="vs-btn style2 ls-hero-btn">READ
                        MORE<i className="far fa-arrow-right" /></a>
                    </div>
                  </div>
                </div>
                <div className="ls-slide" data-ls="duration:12000;transition2d:5;kenburnszoom:in;kenburnsscale:1.1;">
                  <img loading="lazy" decoding="async" width={1920} height={850} src="images/hero-1-3.jpg" className="ls-bg" alt="" srcSet="images/hero-1-3.jpg 1920w, images/hero-1-3-600x266.jpg 600w, images/hero-1-3-300x133.jpg 300w, images/hero-1-3-1024x453.jpg 1024w, images/hero-1-3-768x340.jpg 768w, images/hero-1-3-1536x680.jpg 1536w" sizes="(max-width: 1920px) 100vw, 1920px" />
                  <div style={{width: '300px', height: '1558px', backgroundColor: 'rgb(204, 177, 46,.5)', top: '-473px', left: '51px'}} className="ls-l ls-text-layer" data-ls="offsetxin:-800;offsetyin:-800;durationin:1700;delayin:1200;easingin:easeOutQuint;rotatein:43.46;offsetxout:1200;offsetyout:1200;durationout:8000;startatout:slidechangeonly + 3000;easingout:easeOutQuint;scaleyout:5;rotation:43.46;">
                  </div>
                  <div style={{width: '589px', height: '1819.7px', top: '-485px', left: '406px', backgroundImage: 'linear-gradient(172deg, rgba(5, 26, 79, 0.35) 21%, rgba(0, 0, 0, 0) 54%)'}} className="ls-l ls-text-layer" data-ls="offsetxin:-800;offsetyin:-800;durationin:1500;delayin:1300;easingin:easeOutQuint;rotatein:43.46;offsetxout:1200;offsetyout:1200;durationout:8000;startatout:slidechangeonly + 3000;easingout:easeOutQuint;scaleyout:5;bgcolorout:transparent;colorout:transparent;rotation:43.46;">
                  </div>
                  <p style={{fontSize: '18px', fontWeight: 600, fontFamily: 'Exo', color: '#ffffff', borderWidth: '2px 2px 2px 2px', borderColor: '#ffffff', borderRadius: '5px 5px 5px 5px', paddingTop: '9px', paddingRight: '23.5px', paddingLeft: '23.5px', top: '220px', left: '345PX', paddingBottom: '9px'}} className="ls-l ls-hide-tablet ls-hide-phone ls-text-layer" data-ls="offsetxin:300;durationin:1500;delayin:400;easingin:easeOutQuint;offsetxout:300;durationout:1500;easingout:easeOutQuint;">
                    ВЫСОКОКВАЛИФИЦИРОВАННЫЕ ЭКСПЕРТЫ</p>
                  <div style={{top: '505px', left: '350px', backgroundSize: 'inherit', backgroundPosition: 'inherit', fontSize: '24px'}} className="ls-l ls-hide-tablet ls-hide-phone ls-html-layer" data-ls="offsetyin:50;durationin:1500;delayin:900;easingin:easeOutQuint;offsetyout:50;durationout:1500;easingout:easeOutQuint;position:relative;">
                    <div className="ls-btn-group"><a className="vs-btn ls-hero-btn">ABOUT US<i className="far fa-arrow-right" /></a><a className="vs-btn style2 ls-hero-btn">READ
                        MORE<i className="far fa-arrow-right" /></a>
                    </div>
                  </div>
                  <h1 style={{top: '292px', left: '345px', fontWeight: 700, backgroundSize: 'inherit', backgroundPosition: 'inherit', fontSize: '60px', color: '#ffffff', fontFamily: 'Exo'}} className="ls-l ls-hide-tablet ls-hide-phone ls-text-layer" data-ls="offsetxin:-200;durationin:1500;easingin:easeOutQuint;offsetxout:-100;durationout:1500;easingout:easeOutQuint;position:relative;">
                    КОМАНДА ПРОФЕССИОНАЛЬНЫХ </h1>
                  <h1 style={{top: '378px', left: '345px', fontWeight: 700, backgroundSize: 'inherit', backgroundPosition: 'inherit', fontSize: '60px', fontFamily: 'Exo', color: '#ffffff', backgroundColor: 'transparent', cursor: 'auto'}} className="ls-l ls-hide-tablet ls-hide-phone ls-text-layer" data-ls="offsetxin:-200;durationin:1500;delayin:200;easingin:easeOutQuint;offsetxout:-100;durationout:1500;easingout:easeOutQuint;">
                    АУДИТОРОВ</h1>
                  <p style={{fontSize: '32px', fontWeight: 600, fontFamily: 'Exo', color: '#ffffff', borderWidth: '2px 2px 2px 2px', borderColor: '#ffffff', borderRadius: '5px 5px 5px 5px', paddingTop: '18px', paddingRight: '44px', paddingLeft: '44px', top: '160px', left: '90px', paddingBottom: '18px'}} className="ls-l ls-hide-desktop ls-hide-phone ls-text-layer" data-ls="offsetxin:300;durationin:1500;delayin:400;easingin:easeOutQuint;offsetxout:300;durationout:1500;easingout:easeOutQuint;">
                    HIGHLY QUALIFIYED ENGINERS</p>
                  <h1 style={{top: '280px', left: '80px', fontWeight: 700, backgroundSize: 'inherit', backgroundPosition: 'inherit', fontSize: '80px', color: '#ffffff', fontFamily: 'Exo'}} className="ls-l ls-hide-desktop ls-hide-phone ls-text-layer" data-ls="offsetxin:-200;durationin:1500;easingin:easeOutQuint;offsetxout:-100;durationout:1500;easingout:easeOutQuint;position:relative;">
                    TEAM OF LEGENDS &amp;</h1>
                  <h1 style={{top: '380px', left: '80px', fontWeight: 700, backgroundSize: 'inherit', backgroundPosition: 'inherit', fontSize: '80px', fontFamily: 'Exo', color: '#ffffff', backgroundColor: 'transparent', cursor: 'auto'}} className="ls-l ls-hide-desktop ls-hide-phone ls-text-layer" data-ls="offsetxin:-200;durationin:1500;delayin:200;easingin:easeOutQuint;offsetxout:-100;durationout:1500;easingout:easeOutQuint;">
                    PROFESSINAL ENGINERS</h1>
                  <div style={{top: '540px', left: '80px', backgroundSize: 'inherit', backgroundPosition: 'inherit', fontSize: '24px'}} className="ls-l ls-hide-desktop ls-hide-phone ls-html-layer" data-ls="offsetyin:50;durationin:1500;delayin:900;easingin:easeOutQuint;offsetyout:50;durationout:1500;easingout:easeOutQuint;position:relative;">
                    <div className="ls-btn-group"><a className="vs-btn ls-hero-btn">ABOUT US<i className="far fa-arrow-right" /></a><a className="vs-btn style2 ls-hero-btn">READ
                        MORE<i className="far fa-arrow-right" /></a>
                    </div>
                  </div>
                  <h2 style={{top: '76px', left: '50%', textAlign: 'center', fontWeight: 700, backgroundSize: 'inherit', backgroundPosition: 'inherit', fontSize: '100px', color: '#ffffff', fontFamily: 'Exo', width: '10000px'}} className="ls-l ls-hide-desktop ls-hide-tablet ls-text-layer" data-ls="offsetxin:-200;durationin:1500;easingin:easeOutQuint;offsetxout:-100;durationout:1500;easingout:easeOutQuint;position:relative;">
                    КОМАНДА ПРОФЕССИОНАЛЬНЫХ</h2>
                  <h2 style={{top: '232px', left: '50%', textAlign: 'center', fontWeight: 700, backgroundSize: 'inherit', backgroundPosition: 'inherit', fontSize: '100px', fontFamily: 'Exo', color: '#ffffff', width: '10000px', backgroundColor: 'transparent', cursor: 'auto'}} className="ls-l ls-hide-desktop ls-hide-tablet ls-text-layer" data-ls="offsetxin:-200;durationin:1500;delayin:200;easingin:easeOutQuint;offsetxout:-100;durationout:1500;easingout:easeOutQuint;">
                    АУДИТОРОВ</h2>
                  <div style={{top: '486px', left: '50%', textAlign: 'center', backgroundSize: 'inherit', backgroundPosition: 'inherit', fontSize: '24px', width: '1920px'}} className="ls-l ls-hide-desktop ls-hide-tablet ls-html-layer" data-ls="offsetyin:50;durationin:1500;delayin:900;easingin:easeOutQuint;offsetyout:50;durationout:1500;easingout:easeOutQuint;position:relative;">
                    <div className="ls-btn-group"><a className="vs-btn ls-hero-btn">О нас<i className="far fa-arrow-right" /></a><a className="vs-btn style2 ls-hero-btn">Читать<i className="far fa-arrow-right" /></a>
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
{initModule && <initModule />} {/* Use initModule as a component */}
</div>
    )
}


