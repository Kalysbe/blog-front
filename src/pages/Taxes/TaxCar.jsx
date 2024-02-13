import React, { useState } from 'react';
import { TextField, Button, Select, MenuItem, FormControl, InputLabel, Grid, Typography, Box ,Container} from '@mui/material';



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

  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <>
    
      <section className="elementor-section elementor-inner-section elementor-element elementor-element-1cd676f elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="1cd676f" data-element_type="section">
        <div className="elementor-container elementor-column-gap-no">
            <div >
              
              <h3 className="contact-box__title h4">Расчет налога на имущество на транспортное средство</h3>
              <Typography variant="h6">a) Объекты, имеющие  Двигатель с внутренним сгоранием</Typography>
              <Grid container spacing={2}>

                <Grid item xs={12} sm={12} md={6}>

                  <TextField
                    label="Объем двигателя"
                    value={engineVolume}
                    onChange={(e) => setEngineVolume(e.target.value)}
                    fullWidth
                    type="number"
                    margin="normal"
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                  <FormControl fullWidth margin="normal">
                    <InputLabel>Вид транспорта</InputLabel>
                    <Select
                      value={vehicleType}
                      label="Вид транспорта"
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
                <Grid item xs={12} sm={12} md={12}>
                  <FormControl fullWidth margin="normal">
                    <InputLabel>Срок эксплуатации</InputLabel>
                    <Select
                    label="Срок эксплуатации"
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
                <Grid item xs={12} sm={12} md={4}>
                  <Button onClick={calculateTax} fullWidth variant="contained" style={{ backgroundColor: 'rgb(205, 179, 47)' }} className='vs-btn' >
                    Рассчитать
                  </Button>
                  <Typography variant="body1">Исчисление налоговой стоимости (сом): {taxResult}</Typography>
                </Grid>
                <Grid item xs={12} sm={12} >
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
                <Grid item xs={12} sm={12}>
                  <TextField
                    label="Ставка налога %"
                    value={vehicleTaxRate}
                    onChange={(e) => setVehicleTaxRate(e.target.value)}
                    fullWidth
                    type="number"
                    margin="normal"
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={4}>
                  <Button onClick={calculateTax2} variant="contained" style={{ backgroundColor: 'rgb(205, 179, 47)' }} className='vs-btn' fullWidth>
                    Рассчитать
                  </Button>
                  <Typography variant="body1">Исчисление налоговой стоимости (сом): {taxResult2}</Typography>
                 
                </Grid>
              </Grid>
              <Box sx={{ minWidth: 120 }}>
    
    </Box>
            </div>
          </div>
      </section>
    </>
  );
};




