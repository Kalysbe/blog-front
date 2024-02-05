import { useState, useEffect } from 'react';

export const TaxNoHome = () => {
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
  const materialsArray = [
    {
      title: 'Кирпич', data: [
        { ageRange: 'До 5 лет', cost: 15000 },
        { ageRange: '5-15 лет', cost: 14000 },
        { ageRange: '15-30 лет', cost: 13000 },
        { ageRange: '30-45 лет', cost: 12000 },
        { ageRange: 'Более 45 лет', cost: 10000 },
      ]
    },

    {
      title: 'Дерево', data: [
        { ageRange: 'До 5 лет', cost: 13000 },
        { ageRange: '5-15 лет', cost: 12000 },
        { ageRange: '15-30 лет', cost: 11000 },
        { ageRange: '30-45 лет', cost: 10000 },
        { ageRange: 'Более 45 лет', cost: 8000 },
      ]
    },

    {
      title: 'Сборный и монолитный бетон и железобетон, бетонные блоки, пескоблок, пеноблок, пенобетон, стекло', data: [
        { ageRange: 'До 5 лет', cost: 14000 },
        { ageRange: '5-15 лет', cost: 13000 },
        { ageRange: '15-30 лет', cost: 12000 },
        { ageRange: '30-45 лет', cost: 11000 },
        { ageRange: 'Более 45 лет', cost: 10000 },
      ]
    },

    {
      title: 'Сырцовая глина (саман, гуваляк, сокмо)', data: [
        { ageRange: 'До 5 лет', cost: 10000 },
        { ageRange: '5-15 лет', cost: 9000 },
        { ageRange: '15-30 лет', cost: 8000 },
        { ageRange: '30-45 лет', cost: 6000 },
        { ageRange: 'Более 45 лет', cost: 5000 },
      ]
    },

    {
      title: 'Шлакоблок, полистирольный строительный блок', data: [
        { ageRange: 'До 5 лет', cost: 9000 },
        { ageRange: '5-15 лет', cost: 8000 },
        { ageRange: '15-30 лет', cost: 7000 },
        { ageRange: '30-45 лет', cost: 6000 },
        { ageRange: 'Более 45 лет', cost: 5000 },
      ]
    },

    {
      title: 'Металл', data: [
        { ageRange: 'До 30 лет', cost: 10000 },
        { ageRange: 'Более 30 лет', cost: 8000 },
      ]
    },

    {
      title: 'Прочие материалы и материалы для временных помещений', data: [
        { ageRange: 'Вне зависимости от срока эксплуатации', cost: 4000 },
      ]
    },
  ];
  const Industries = [
    {name:'Гостиницы, ломбарды, обменные пункты ', cost:1.6} ,
    {name:'Автозаправочные станции',cost:1.4},
    {name:'Мини-рынки, рынки, торгово-рыночные центры, комплексы ',cost:1.0},
    {name:'Предприятия общественного питания, торговли, сферы услуг',cost:0.8},
    {name:'Железнодорожные вокзалы и автовокзалы, автостанции, грузовые станции железнодорожного транспорта', cost:0.7},
    {name:'Административные, офисные здания, бизнес-центры, банки ',cost:0.6},
    {name:'Предприятия транспорта, предприятия автосервиса, связи и энергетики',cost:0.5},
    {name:'Оборонно-спортивно-технические организации',cost: 0.3},
    {name:'Сельскохозяйственные производственные здания',cost: 0.3},
    {name:'Санатории, пансионаты, дома отдыха',cost: 0.2},
    {name:'Предприятия промышленности, строительства',cost: 0.2}
  ]
  const [selectedProvince, setSelectedProvince] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedMaterial, setSelectedMaterial] = useState('');
  const [selectedAgeRange, setSelectedAgeRange] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState('')
  const [coefficient, setCoefficient] = useState('')
  const [quadrature, setQuadrature] = useState('')
  const [result, setResult] = useState('')

  const handleProvinceChange = (e) => {
    setSelectedProvince(e.target.value);
  };

  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
  };

  const handleMaterialChange = (e) => {
    setSelectedMaterial(e.target.value);
  };

  const handleAgeRangeChange = (e) => {
    setSelectedAgeRange(e.target.value);
  };

  const handleIndustryChange = (e) => {
    setSelectedIndustry(e.target.value);
  };


  const calculateCost = () => {
    // Найдите выбранный материал
    const selectedMaterialObj = materialsArray.find(mat => mat.title === selectedMaterial);

    // Найдите выбранный город
    const selectedCityObj = provinces.find(province => province.province === selectedProvince)
      .cities.find(city => city.name === selectedCity);

    // Найдите выбранный возрастной диапазон
    const selectedAgeRangeObj = selectedMaterialObj.data.find(data => data.ageRange === selectedAgeRange);

    // Умножьте стоимость материала на значение города
    setResult((quadrature * ( selectedAgeRangeObj.cost *selectedCityObj.krValue * coefficient * selectedIndustry) * 0.8/100).toFixed(2));


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
                                      <h3 className="contact-box__title h4">Расчет налога на имущество на нежилое здание, сооружение и помещение</h3>
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
                                            <label style={{fontSize:'13px'}}>
                                            Материал стен
                                            </label>
                                              <select value={selectedMaterial} onChange={handleMaterialChange}>
                                                <option value="">Выберите материал</option>
                                                {materialsArray.map((material, index) => (
                                                  <option key={index} value={material.title}>{material.title}</option>
                                                ))}
                                              </select>
                                       
                                            </div>
                                            <div className="col-md-4 form-group">
                                            <label style={{fontSize:'13px'}}>
                                            Срок эксплуатации
                                              </label>
                                              <select value={selectedAgeRange} onChange={handleAgeRangeChange}>
                                                <option value="">Выберите возрастной диапазон</option>
                                                {selectedMaterial &&
                                                  materialsArray.find(mat => mat.title === selectedMaterial).data.map((data, index) => (
                                                    <option key={index} value={data.ageRange}>{data.ageRange}</option>
                                                  ))}
                                              </select>
                                       
                                            </div>
                                            <div className="col-md-4 form-group">
                                            <label style={{fontSize:'13px'}}>
                                            Коэффициент функционального назначения (Кн)
                                              </label>
                                              <select value={selectedIndustry} onChange={handleIndustryChange}>
                                                <option value="">Выберите коэффициент функционального назначения (Кн)</option>
                                                {
                                                 Industries.map((data, index) => (
                                                    <option key={index} value={data.cost}>{data.name}</option>
                                                  ))}
                                              </select>
                                       
                                            </div>
                                            <div className="col-md-4 form-group">
                                              <label style={{fontSize:'13px'}}>Зональный коэффициент</label>
                                              <span className="wpcf7-form-control-wrap" data-name="text-69">
                                                <input value={coefficient} onChange={(e) => setCoefficient(e.target.value)} size="40" className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required" aria-required="true" aria-invalid="false" placeholder="0" type="number" name="text-69" />
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
