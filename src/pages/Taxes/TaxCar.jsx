import React, { useState } from 'react';
import Typography from '@mui/material/Typography';

import { Container } from '@mui/material';

export const TaxCar = () => {

  const [vehicleType, setVehicleType] = useState('');
  const [engineVolume, setEngineVolume] = useState('');
  const [usagePeriod, setUsagePeriod] = useState('');
  const [taxResult, setTaxResult] = useState('');

  const calculateTax = () => {

    const volume = parseFloat(engineVolume);
    const period = parseFloat(usagePeriod);

    if (!isNaN(volume) && !isNaN(period)) {
      const correctionCoefficient = calculateCorrectionCoefficient(vehicleType, period);
      const taxValue =  correctionCoefficient*volume;
      setTaxResult(taxValue.toFixed(2));
    } else {
      setTaxResult('Введите корректные значения');
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
  
      <Container>
        <Typography variant={'h4'} gutterBottom>
        Расчет налога на имущество на транспортное средство
        </Typography>
        <div>
      <h6> Объекты, имеющие двигатель внутреннего сгорания</h6>
      <label>
        Объем двигателя:
        <input type="number" value={engineVolume} onChange={(e) => setEngineVolume(e.target.value)} />
      </label>
      <br />
      <label>
        Вид транспорта:
        <select value={vehicleType} onChange={(e) => setVehicleType(e.target.value)}>
          <option value="">Выберите вид транспорта</option>
          <option value="Легковые автомобили, фургоны и пикапы на базе легковых автомобилей">Легковые автомобили</option>
          <option value="Грузовые автомобили, автобусы, микроавтобусы">Грузовые автомобили</option>
          <option value="Самоходные машины и механизмы: тракторы, комбайны, дорожно-строительные машины">Самоходные машины</option>
          <option value="Самоходные машины и механизмы (тракторы и комбайны), используемые в селхоз производстве">Сельхозтехника</option>
          <option value="Мотоциклы, мотороллеры, мопеды, мотосани и моторные лодки, катера, корабли, теплоходы">Мототехника и водный транспорт</option>
          <option value="Яхты и водные мотоциклы">Яхты и водные мотоциклы</option>
        </select>
      </label>
      
      <br />
   
      <label>
        Срок эксплуатации:
        <select value={usagePeriod} onChange={(e) => setUsagePeriod(e.target.value)}>
          <option value="">Выберите срок эксплуатации</option>
          <option value="5">До 5 лет</option>
          <option value="10">C 5 до 10 лет</option>
          <option value="15">C 10 до 15 лет</option>
          <option value="999">Свыше 15 лет</option> {/* Значение 999 вместо "бесконечности" */}
        </select>
      </label>
      <br />
      <button onClick={calculateTax}>Рассчитать</button>
      <br />
      <p>Исчисление налоговой стоимости: {taxResult}</p>
    </div>

        
      </Container>
    </>
  );
};
