import { useState, useEffect } from 'react';

export const TaxPlace = () => {
  const provinces = [
    {
      province: 'Баткенская область',
      cities: [
        { name: 'Баткенский район', krValue: 0.2 },
        { name: 'Ляйлякский район', krValue: 0.2 },
        { name: 'Кадамджайский район', krValue: 0.2 },
        { name: 'г.Кызыл-Кия', krValue: 0.1 },
        { name: 'г.Сулюкта', krValue: 0.1 },
      ],
    },
    {
      province: 'Джалал-Абадская область',
      cities: [
        { name: 'Аксыйский район', krValue: 0.2 },
        { name: 'Ала-Букинский район', krValue: 0.2 },
        { name: 'Базар-Коргонский район', krValue: 0.2 },
        { name: 'Ноокенский район', krValue: 0.2 },
        { name: 'Сузакский район ', krValue: 0.3 },
        { name: 'Тогуз-Тороуский район ', krValue: 0.2 },
        { name: 'Токтогульский район', krValue: 0.1 },
        { name: 'Чаткальский район', krValue: 0.1 },
        { name: 'г.Джалал-Абад', krValue: 0.8 },
        { name: 'г.Майлуу-Суу', krValue: 0.1 },
        { name: 'г.Кара-Куль', krValue: 0.1 },
        { name: 'г.Таш-Кумыр', krValue: 0.1 },
      ],
    },
    {
      province: 'Иссык-Кульская область ',
      cities: [
        { name: 'Ак-Суйский район', krValue: 0.3 },
        { name: 'Джети-Огузский район', krValue: 0.3 },
        { name: 'Иссык-Кульский район', krValue: 0.3 },
        { name: 'Тонский район', krValue: 0.2 },
        { name: 'Тюпский район', krValue: 0.2 },
        { name: 'г.Каракол', krValue: 0.6 },
        { name: 'г.Балыкчи', krValue: 0.3 },
      ],
    },
    {
      province: 'Таласская область',
      cities: [
        { name: 'Манасский район ', krValue: 0.1 },
        { name: 'Таласский район ', krValue: 0.2 },
        { name: 'г.Талас', krValue: 0.4 },
        { name: 'Бакай-Атинский район ', krValue: 0.2 },
        { name: 'Кара-Бууринский район ', krValue: 0.2 },
      ],
    },
    {
      province: 'Нарынская область',
      cities: [
        { name: 'г.Нарын ', krValue: 0.3 },
        { name: 'Ак-Талинский район ', krValue: 0.1 },
        { name: 'Ат-Башинский район  ', krValue: 0.1 },
        { name: 'Джумгальский район', krValue: 0.1 },
        { name: 'Кочкорский район ', krValue: 0.2 },
        { name: 'Нарынский район', krValue: 0.2 },
      ],
    },
    {
      province: 'Ошская область',
      cities: [
        { name: 'Алайский район ', krValue: 0.2 },
        { name: 'Араванский район', krValue: 0.3 },
        { name: 'Кара-Кульджинский район', krValue: 0.6 },
        { name: 'Ноокатский район', krValue: 0.3 },
        { name: 'Узгенский район', krValue: 0.3 },
        { name: 'Чон-Алайский район', krValue: 0.1 },
        { name: 'г.Ош ', krValue: 0.9 }
      ],
    },
    {
      province: 'Чуйская область',
      cities: [
        { name: 'Аламудунский район', krValue: 0.8 },
        { name: 'Жайылский район', krValue: 0.4 },
        { name: 'Ысык-Атинский район', krValue: 0.4 },
        { name: 'Кеминский район ', krValue: 0.3 },
        { name: 'Московский район', krValue: 0.4 },
        { name: 'Панфиловский район', krValue: 0.2 },
        { name: 'Сокулукский район', krValue: 0.7 },
        { name: 'Чуйский район', krValue: 0.4 },
        { name: 'г.Токмок', krValue: 0.6 },
        { name: 'г.Кара-Балта ', krValue: 0.6 }
      ],
    },
    {
      province: 'г.Бишкек',
      cities: [
        { name: 'Ленинский район', krValue: 1.0 },
        { name: 'Октябрьский район', krValue: 1.0 },
        { name: 'Первомайский район', krValue: 1.0 },
        { name: 'Свердловский район', krValue: 1.0 }
      ],
    },
  ];

  const Industries = [
    { name: "Под магазины, киоски, ларьки, павильоны и другие объекты торговли в зависимости от площади: до 10 кв.м", cost: 22.5 },
    { name: "Под магазины, киоски, ларьки, павильоны и другие объекты торговли в зависимости от площади: от 10 до 20 кв.м", cost: 16.5 },
    { name: "Под магазины, киоски, ларьки, павильоны и другие объекты торговли в зависимости от площади: от 20 до 35 кв.м", cost: 10.5 },
    { name: "Под магазины, киоски, ларьки, павильоны и другие объекты торговли в зависимости от площади: от 35 до 50 кв.м", cost: 7.5 },
    { name: "Под магазины, киоски, ларьки, павильоны и другие объекты торговли в зависимости от площади: от 50 и выше кв.м", cost: 6.0 },
    { name: "Под мини-рынки, рынки, торговые центры, комплексы, за исключением рынков, предназначенных для торговли животными, птицей, кормами для сельскохозяйственных животных", cost: 7.5 },
    { name: "Под рынки, предназначенные для торговли животными, птицей, кормами для сельскохозяйственных животных", cost: 4.5 },
    { name: "Под здания и помещения, предназначенные для организации общественного питания", cost: 3 },
    { name: "Под здания и помещения для гостиничной деятельности", cost: 7 },
    { name: "Под здания банков, ломбардов, обменных пунктов", cost: 5 },
    { name: "Под здания и помещения круглосуточных/ночных развлекательных учреждений", cost: 7 },
    { name: "Под здания бизнес-центров, бирж, с офисами", cost: 2.5 },
    { name: "Под здания и сооружения автозаправочных станций", cost: 10 },
    { name: "Под здания и сооружения нефтебаз", cost: 1.5 },
    { name: "Под платную стоянку/парковку легкового и грузового автотранспорта, здания, помещения и сооружения автосервиса", cost: 4.5 },
    { name: "Под сооружения рекламы", cost: 50 },
    { name: "Под здания, помещения и сооружения, предназначенные для сферы отдыха и развлечений, оказания оздоровительных услуг, предоставления индивидуальных услуг, за исключением указанных в настоящей части", cost: 1.5 },
    { name: "Под здания и помещения промышленности, транспорта, строительства, связи и энергетики, территории свободных экономических зон, за исключением указанных в настоящей части", cost: 0.5 },
    { name: "Под здания, помещения горнодобывающих предприятий, грузовые станции автомобильного и железнодорожного транспорта, транспортно-логистические центры, санитарно-защитные зоны предприятий железнодорожного и воздушного транспорта", cost: 0.3 },
    { name: "Под здания, помещения учреждений науки, образования, здравоохранения, культуры, физкультурно-спортивные, спортивные учреждения", cost: 0.3 },
    { name: "Под сельскохозяйственные производственные здания, помещения гаражи, ремонтные мастерские, зернотоки, зерноочистительные комплексы, овощекартофелехранилища, строительные и хозяйственные дворы и другие объекты сельскохозяйственного назначения", cost: 0.2 },
    { name: "Под разработку месторождений, карьеры, шахты, разрезы, золоотвалы", cost: 0.05 },
    { name: "Под воздушные линии связи и электропередачи, оборонно-спортивно-технические организации", cost: 0.01 },
    { name: "Для проведения геологоразведочных, проектно-изыскательских, разведочных и исследовательских работ", cost: 0.005 },
    { name: "Под административные здания для видов деятельности, не указанных в настоящей части", cost: 1.0 },
    { name: "Под здания и сооружения, принадлежащие сельскохозяйственному кооперативу и торгово-логистическому центру сельскохозяйственного назначения на праве собственности и используемые в целях их основной деятельности", cost: 0.1 }
  ]
  const [selectedProvince, setSelectedProvince] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState('')
  const [coefficient, setCoefficient] = useState('')
  const [zoneCoefficient, setZoneCoefficient] = useState('')
  const [price, setPrice] = useState('')
  const [quadrature, setQuadrature] = useState('')
  const [result, setResult] = useState('')

  const handleProvinceChange = (e) => {
    setSelectedProvince(e.target.value);
  };

  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
  };
  const handleIndustryChange = (e) => {
    setSelectedIndustry(e.target.value);
  };


  const calculateCost = () => {
   
   

    // Найдите выбранный город
    const selectedCityObj = provinces.find(province => province.province === selectedProvince).cities.find(city => city.name === selectedCity);



    // Умножьте стоимость материала на значение города
    setResult((quadrature * ( price * zoneCoefficient  * selectedIndustry * coefficient) * 1/100).toFixed(2));


  }; 


  return (

    <section className="elementor-section elementor-top-section elementor-element elementor-element-33b4740 elementor-section-full_width elementor-section-height-default elementor-section-height-default" data-id="33b4740" data-element_type="section" style={{ marginBottom: '20px' }}>
      <div className="elementor-container elementor-column-gap-no">
        <div className="elementor-row">
          <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-55f84ff" data-id="55f84ff" data-element_type="column">
            <div className="elementor-column-wrap elementor-element-populated">
              <div className="elementor-widget-wrap">
                <section className="elementor-section elementor-inner-section elementor-element elementor-element-1cd676f elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="1cd676f" data-element_type="section">
                  <div className="elementor-container elementor-column-gap-no">
                    <div className="elementor-row">

                      <div className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-0b1b19b" data-id="0b1b19b" data-element_type="column">
                        <div className="elementor-column-wrap elementor-element-populated">
                          <div className="elementor-widget-wrap">
                            <div className="elementor-element elementor-element-6fb1070 elementor-widget elementor-widget-shortcode" data-id="6fb1070" data-element_type="widget" data-widget_type="shortcode.default">
                              <div className="elementor-widget-container">
                                <div className="elementor-shortcode">
                                  <div className="wpcf7 js" id="wpcf7-f1639-p86-o1" lang="en-US" dir="ltr">
                                    <div className="screen-reader-response"><p role="status" aria-live="polite" aria-atomic="true"></p> </div>
                                    <div className="contact-box">
                                      <h3 className="contact-box__title h4">Расчет налога на имущество на земли населенных пунктов и земли несельскохозяйственного назначения</h3>
                                      <div className="contact-box__form">
                                        <div className="row gx-20">
                                       
                                          <div className="col-md-4 form-group">
                                            <label style={{fontSize:'13px'}}>
                                            Область
                                            </label>
                                              <select value={selectedProvince} onChange={handleProvinceChange}>
                                                <option value="">Выберите область</option>
                                                {provinces.map((province, index) => (
                                                  <option key={index} value={province.province}>{province.province}</option>
                                                ))}
                                              </select>
                                  
                                            </div>
                                            <div className="col-md-4 form-group">
                                            <label style={{fontSize:'13px'}}>
                                             Район
                                             </label>
                                              <select value={selectedCity} onChange={handleCityChange}>
                                                <option value="">Выберите район</option>
                                                {selectedProvince &&
                                                  provinces.find(province => province.province === selectedProvince).cities.map((city, index) => (
                                                    <option key={index} value={city.name}>{city.name}</option>
                                                  ))}
                                              </select>
                                   
                                            </div>
                                            <div className="col-md-4 form-group">
                                              <label style={{fontSize:'13px'}}>Коэффициент инфляции (Ки)</label>
                                              <span className="wpcf7-form-control-wrap" data-name="text-69">
                                                <input value={coefficient} onChange={(e) => setCoefficient(e.target.value)} size="40" className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required" aria-required="true" aria-invalid="false" placeholder="0" type="number" name="text-69" />
                                              </span>
                                            </div>
                                    
                                    
                                            <div className="col-md-4 form-group">
                                            <label style={{fontSize:'13px'}}>
                                            Функциональное назначение
                                              </label>
                                              <select value={selectedIndustry} onChange={handleIndustryChange}>
                                                <option value="">Выберите Функциональное назначение</option>
                                                {
                                                 Industries.map((data, index) => (
                                                    <option key={index} value={data.cost}>{data.name}</option>
                                                  ))}
                                              </select>
                                       
                                            </div>
                                            <div className="col-md-4 form-group">
                                              <label style={{fontSize:'13px'}}>Зональный коэффициент (Кз)</label>
                                              <span className="wpcf7-form-control-wrap" data-name="text-69">
                                                <input value={zoneCoefficient} onChange={(e) => setZoneCoefficient(e.target.value)} size="40" className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required" aria-required="true" aria-invalid="false" placeholder="0" type="number" name="text-69" />
                                              </span>
                                            </div>
                                            <div className="col-md-4 form-group">
                                              <label style={{fontSize:'13px'}}>Базовая налоговая стоимость (БНС) </label>
                                              <span className="wpcf7-form-control-wrap" data-name="text-69">
                                                <input value={price} onChange={(e) => setPrice(e.target.value)} size="40" className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required" aria-required="true" aria-invalid="false" placeholder="0" type="number" name="text-69" />
                                              </span>
                                            </div>
                                            <div className="col-md-4 form-group">
                                              <label style={{fontSize:'13px'}}>Налогооблагаемая площадь, кв. м</label>
                                              <span className="wpcf7-form-control-wrap" data-name="text-69">
                                                <input value={quadrature} onChange={(e) => setQuadrature(e.target.value)} size="40" className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required" aria-required="true" aria-invalid="false" placeholder="0" type="number" name="text-69" />
                                              </span>
                                            </div>
                                            <div className="col-12">
                                            <button className="vs-btn  а   wpcf7-submit" onClick={calculateCost}>Рассчитать стоимость <i className="far fa-arrow-right"></i></button>
                                            <p>Исчисление налоговой стоимости (сом): {result}</p>
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
  );
};
