import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';

export const Questions = (props) => {
  return (
    <section className="elementor-section elementor-top-section elementor-element elementor-element-8cf33c0 elementor-section-full_width elementor-section-height-default elementor-section-height-default" data-id="8cf33c0" data-element_type="section">
      <div className="elementor-container elementor-column-gap-no">
        <div className="elementor-row">
          <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-ad02da0" data-id="ad02da0" data-element_type="column">
            <div className="elementor-column-wrap elementor-element-populated">
              <div className="elementor-widget-wrap">
                <section className="elementor-section elementor-inner-section elementor-element elementor-element-13a0278 elementor-section-full_width elementor-section-height-default elementor-section-height-default" data-id="13a0278" data-element_type="section">
                  <div className="elementor-container elementor-column-gap-no">
                    <div className="elementor-row">
                      <div className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-b22700c" data-id="b22700c" data-element_type="column">
                        <div className="elementor-column-wrap elementor-element-populated">
                          <div className="elementor-widget-wrap">
                            <div className="elementor-element elementor-element-4ab0caf elementor-widget elementor-widget-techbizfaqarea" data-id="4ab0caf" data-element_type="widget">
                              <div className="elementor-widget-container">
                                <section className="faq-wrap1">
                                  <div className="faq-shape1" data-bg-src="./images/faq-bg-1-1.jpg">
                                  </div>
                                  <div className="faq-shape2" data-bg-src="./images/faq-bg-1-2.jpg">
                                  </div>
                                  <div className="container">
                                    <div className="row gx-60">
                                      <div className="col-lg-6 pb-20 pb-lg-0 wow fadeInUp" data-wow-delay="0.2s">
                                        <div className="img-box2">
                                          <div className="img-1">
                                            <img decoding="async" src="./images/rasp2.jpg" alt="faq 1 1" />
                                          </div>

                                        </div>
                                      </div>
                                      <div className="col-lg-6 align-self-center">
                                        <span className="sec-subtitle text-white"><i className="fas fa-bring-forward" />Давайте
                                          поговорим</span>
                                        <h2 className="sec-title text-white mb-4 pb-2 h1">
                                          КАК МЫ МОЖЕМ ВАМ
                                          ПОМОЧЬ?
                                        </h2>
                                    
                                        <Accordion defaultExpanded>
                                          <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel1-content"
                                            id="panel1-header"
                                          >
                                           <h6 className="accordion-header">
                                                Можете ли вы подтвердить точность нашей финансовой отчетности?
                                            </h6>
                                          </AccordionSummary>
                                          <AccordionDetails>
                                          Да, наши аудиторы проведут проверку и подтвердят точность вашей отчетности.
                                          </AccordionDetails>
                                        </Accordion>
                                        <Accordion>
                                          <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel2-content"
                                            id="panel2-header"
                                          >
                                            <h6 className="accordion-header">Сможете ли вы убедиться, что мы соответствуем всем законодательным стандартам?</h6>
                                         
                                          </AccordionSummary>
                                          <AccordionDetails>
                                          Да, мы гарантируем, что ваша отчетность будет соответствовать всем применимым законодательным стандартам.
                                          </AccordionDetails>
                                        </Accordion>
                                        <Accordion>
                                          <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel3-content"
                                            id="panel3-header"
                                          >
                                           <h6> Какие у вас предложения для улучшения наших внутренних процессов и контроля?</h6>
                                          </AccordionSummary>
                                          <AccordionDetails>
                                          Наши эксперты предоставят вам рекомендации по улучшению внутренних процессов и контроля.
                                          </AccordionDetails>
                                        </Accordion>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}