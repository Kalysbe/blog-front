import React, { useState } from 'react';
import { TextField, Button, Select, MenuItem, FormControl, InputLabel, Grid, Typography, Box } from '@mui/material';


export const TaxCar = () => {

  const [vehicleType, setVehicleType] = useState('');
  const [engineVolume, setEngineVolume] = useState('');
  const [usagePeriod, setUsagePeriod] = useState('');
  const [taxResult, setTaxResult] = useState('');

  // без двигателя
  const [vehiclePrice, setVehiclePrice] = useState('')
  const [vehicleTaxRate, setVehicleTaxRate] = useState('')
  const [taxResult2, setTaxResult2] = useState('');

  const calculateTax = () => {

    const volume = parseFloat(engineVolume);
    const period = parseFloat(usagePeriod);

    if (!isNaN(volume) && !isNaN(period)) {
      const correctionCoefficient = calculateCorrectionCoefficient(vehicleType, period);
      const taxValue = correctionCoefficient * volume;
      setTaxResult(taxValue.toFixed(2));
    } else {
      setTaxResult('Введите корректные значения');
    }
  };
  //Без двигателя
  const calculateTax2 = () => {

    const price = parseFloat(vehiclePrice);
    const rate = parseFloat(vehicleTaxRate);

    if (!isNaN(price) && !isNaN(rate)) {

      const taxValue2 = (price / 100) * rate
      setTaxResult2(taxValue2.toFixed(2));
    } else {
      setTaxResult2('Введите корректные значения');
    }
  };

  const calculateCorrectionCoefficient = (type, period) => {
    switch (type) {
      case 'Легковые автомобили, фургоны и пикапы на базе легковых автомобилей':
        switch (true) {
          case period <= 5:
            return 0.90;
          case period <= 10:
            return 0.75;
          case period <= 15:
            return 0.60;
          default:
            return 0.45;
        }
      case 'Грузовые автомобили, автобусы, микроавтобусы':
        switch (true) {
          case period <= 5:
            return 0.75;
          case period <= 10:
            return 0.60;
          case period <= 15:
            return 0.45;
          default:
            return 0.30;
        }
      case 'Самоходные машины и механизмы: тракторы, комбайны, дорожно-строительные машины':
        return period <= 15 ? 0.30 : 0.15;
      case 'Самоходные машины и механизмы (тракторы и комбайны), используемые в селхоз производстве':
        return period <= 15 ? 0.10 : 0.05;
      case 'Мотоциклы, мотороллеры, мопеды, мотосани и моторные лодки, катера, корабли, теплоходы':
        return period <= 10 ? 0.15 : 0.09;
      case 'Яхты и водные мотоциклы':
        return period <= 5 ? 1.8 : 1.2;
      default:
        return 1.0;
    }
  };

  return (
    <>
      <section className="elementor-section elementor-inner-section elementor-element elementor-element-1cd676f elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="1cd676f" data-element_type="section">
        <div className="elementor-container elementor-column-gap-no">
        
            {/* <div className="contact-box">
                                        <h3 className="contact-box__title h4">Расчет налога на имущество на транспортное средство</h3>
                                        <p className="contact-box__text">a) Объекты, имеющие двигатель внутреннего сгорания</p>
                                        <div className="contact-box__form">
                                          <div className="row gx-20">
                                            <div className="col-md-6 form-group">
                                              <span className="wpcf7-form-control-wrap" data-name="text-69">
                                              <label>Объем двигателя</label>
                                                <input value={engineVolume} onChange={(e) => setEngineVolume(e.target.value)} size="40" className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required" aria-required="true" aria-invalid="false" placeholder="0" type="number" name="text-69" />
                                              </span>
                                            </div>
                                            <div className="col-md-6 form-group">
                                              <span className="wpcf7-form-control-wrap" data-name="email-564">
                                              <label>Вид транспорта</label>
                                                <select value={vehicleType} onChange={(e) => setVehicleType(e.target.value)} className="wpcf7-form-control wpcf7-select wpcf7-validates-as-required" aria-required="true" aria-invalid="false" name="menu-993">
                                                  <option value="">Выберите вид транспорта</option>
                                                  <option value="Легковые автомобили, фургоны и пикапы на базе легковых автомобилей">Легковые автомобили</option>
                                                  <option value="Грузовые автомобили, автобусы, микроавтобусы">Грузовые автомобили</option>
                                                  <option value="Самоходные машины и механизмы: тракторы, комбайны, дорожно-строительные машины">Самоходные машины</option>
                                                  <option value="Самоходные машины и механизмы (тракторы и комбайны), используемые в селхоз производстве">Сельхозтехника</option>
                                                  <option value="Мотоциклы, мотороллеры, мопеды, мотосани и моторные лодки, катера, корабли, теплоходы">Мототехника и водный транспорт</option>
                                                  <option value="Яхты и водные мотоциклы">Яхты и водные мотоциклы</option>
                                                </select>
                                              </span>
                                            </div>
                                            <div className="col-md-12 form-group">
                                              <span className="wpcf7-form-control-wrap" data-name="menu-993">
                                              <label>Срок эксплуатации</label>
                                                <select value={usagePeriod} onChange={(e) => setUsagePeriod(e.target.value)} className="wpcf7-form-control wpcf7-select wpcf7-validates-as-required" aria-required="true" aria-invalid="false" name="menu-993">
                                                  <option value="">Выберите срок эксплуатации</option>
                                                  <option value="5">До 5 лет</option>
                                                  <option value="10">C 5 до 10 лет</option>
                                                  <option value="15">C 10 до 15 лет</option>
                                                  <option value="999">Свыше 15 лет</option> 
                                                </select>
                                              </span>
                                            </div>

                                            <div className="col-12">
                                              <button onClick={calculateTax} className="vs-btn wpcf7-submit">Рассчитать<i className="far fa-arrow-right"></i></button>
                                            </div>
                                            <p>Исчисление налоговой стоимости (сом): {taxResult}</p>
                                          </div>
                                        </div>
                                        <p className="contact-box__text" style={{marginTop:'24px'}}>б) Транспортные средства, не имеющие двигателя внутреннего сгорания</p>
                                        <div className="contact-box__form">
                                          <div className="row gx-20">
                                            <div className="col-md-6 form-group">
                                              <span className="wpcf7-form-control-wrap" data-name="text-69">
                                                <label>Балансовая стоимость (сом)</label>
                                                <input value={vehiclePrice} onChange={(e) => setVehiclePrice(e.target.value)} size="40" className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required" aria-required="true" aria-invalid="false" placeholder="0" type="number" name="text-69" />
                                              </span>
                                            </div>
                                            <div className="col-md-6 form-group">
                                              <span className="wpcf7-form-control-wrap" data-name="text-69">
                                                <label>Ставка налога %</label>
                                                <input value={vehicleTaxRate} onChange={(e) => setVehicleTaxRate(e.target.value)} size="40" className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required" aria-required="true" aria-invalid="false" placeholder="0" type="number" name="text-69" />
                                              </span>
                                            </div>
                                 

                                            <div className="col-12">
                                              <button onClick={calculateTax2} className="vs-btn  а   wpcf7-submit">Рассчитать<i className="far fa-arrow-right"></i></button>
                                            </div>
                                            <p>Исчисление налоговой стоимости (сом): {taxResult2}</p>
                                          </div>
                                        </div>
                                      </div> */}
            <div className="contact-box">
              <h3 className="contact-box__title h4">Расчет налога на имущество на транспортное средство</h3>
              {/* <p className="contact-box__text">a) Объекты, имеющие двигатель внутреннего сгорания</p> */}
              <Typography variant="h6">a) Объекты, имеющие  Двигатель с внутренним сгоранием</Typography>
              <Grid container spacing={2}>

                <Grid item xs={12} md={6}>

                  <TextField
                    label="Объем двигателя"
                    value={engineVolume}
                    onChange={(e) => setEngineVolume(e.target.value)}
                    fullWidth
                    type="number"
                    margin="normal"
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <FormControl fullWidth margin="normal">
                    <InputLabel>Вид транспорта</InputLabel>
                    <Select
                      value={vehicleType}
                      onChange={(e) => setVehicleType(e.target.value)}
                    >
                      <MenuItem value="">Выберите вид транспорта</MenuItem>
                      <MenuItem value="Легковые автомобили, фургоны и пикапы на базе легковых автомобилей">Легковые автомобили</MenuItem>
                      <MenuItem value="Грузовые автомобили, автобусы, микроавтобусы">Грузовые автомобили</MenuItem>
                      <MenuItem value="Самоходные машины и механизмы: тракторы, комбайны, дорожно-строительные машины">Самоходные машины</MenuItem>
                      <MenuItem value="Самоходные машины и механизмы (тракторы и комбайны), используемые в селхоз производстве">Сельхозтехника</MenuItem>
                      <MenuItem value="Мотоциклы, мотороллеры, мопеды, мотосани и моторные лодки, катера, корабли, теплоходы">Мототехника и водный транспорт</MenuItem>
                      <MenuItem value="Яхты и водные мотоциклы">Яхты и водные мотоциклы</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={12}>
                  <FormControl fullWidth margin="normal">
                    <InputLabel>Срок эксплуатации</InputLabel>
                    <Select
                      value={usagePeriod}
                      onChange={(e) => setUsagePeriod(e.target.value)}
                    >
                      <MenuItem value="">Выберите срок эксплуатации</MenuItem>
                      <MenuItem value="5">До 5 лет</MenuItem>
                      <MenuItem value="10">C 5 до 10 лет</MenuItem>
                      <MenuItem value="15">C 10 до 15 лет</MenuItem>
                      <MenuItem value="999">Свыше 15 лет</MenuItem>

                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Button onClick={calculateTax} fullWidth variant="contained" style={{ backgroundColor: 'rgb(205, 179, 47)' }} className='vs-btn' >
                    Рассчитать
                  </Button>
                  <Typography variant="body1">Исчисление налоговой стоимости (сом): {taxResult}</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="h6">б) Транспортные средства, не имеющие двигателя внутреннего сгорания</Typography>
                  <TextField
                    label="Балансовая стоимость (сом)"
                    value={vehiclePrice}
                    onChange={(e) => setVehiclePrice(e.target.value)}
                    fullWidth
                    type="number"
                    margin="normal"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Ставка налога %"
                    value={vehicleTaxRate}
                    onChange={(e) => setVehicleTaxRate(e.target.value)}
                    fullWidth
                    type="number"
                    margin="normal"
                  />
                </Grid>
                <Grid item xs={12} md={4}>
                  <Button onClick={calculateTax2} variant="contained" style={{ backgroundColor: 'rgb(205, 179, 47)' }} className='vs-btn' fullWidth>
                    Рассчитать
                  </Button>
                  <Typography variant="body1">Исчисление налоговой стоимости (сом): {taxResult2}</Typography>
                 
                </Grid>
              </Grid>
            </div>
          </div>
      </section>
    </>
  );
};




