import { useState, useEffect } from 'react';
import { Grid, Typography, FormControl, InputLabel, Select, MenuItem, TextField, Button, Container } from '@mui/material';

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
    { name: 'Гостиницы, ломбарды, обменные пункты ', cost: 1.6 },
    { name: 'Автозаправочные станции', cost: 1.4 },
    { name: 'Мини-рынки, рынки, торгово-рыночные центры, комплексы ', cost: 1.0 },
    { name: 'Предприятия общественного питания, торговли, сферы услуг', cost: 0.8 },
    { name: 'Железнодорожные вокзалы и автовокзалы, автостанции, грузовые станции железнодорожного транспорта', cost: 0.7 },
    { name: 'Административные, офисные здания, бизнес-центры, банки ', cost: 0.6 },
    { name: 'Предприятия транспорта, предприятия автосервиса, связи и энергетики', cost: 0.5 },
    { name: 'Оборонно-спортивно-технические организации', cost: 0.3 },
    { name: 'Сельскохозяйственные производственные здания', cost: 0.3 },
    { name: 'Санатории, пансионаты, дома отдыха', cost: 0.2 },
    { name: 'Предприятия промышленности, строительства', cost: 0.2 }
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
    setResult((quadrature * (selectedAgeRangeObj.cost * selectedCityObj.krValue * coefficient * selectedIndustry) * 0.8 / 100).toFixed(2));


  };


  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h5">Расчет налога на имущество на нежилое здание, сооружение и помещение</Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <FormControl fullWidth margin="normal">
            <InputLabel>Область</InputLabel>
            <Select label="Область" value={selectedProvince} onChange={handleProvinceChange}>
              <MenuItem value="">Выберите область</MenuItem>
              {provinces.map((province, index) => (
                <MenuItem key={index} value={province.province}>{province.province}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={4}>
          <FormControl fullWidth margin="normal">
            <InputLabel>Район</InputLabel>
            <Select label="Район" value={selectedCity} onChange={handleCityChange}>
              <MenuItem value="">Выберите район</MenuItem>
              {selectedProvince &&
                provinces.find(province => province.province === selectedProvince).cities.map((city, index) => (
                  <MenuItem key={index} value={city.name}>{city.name}</MenuItem>
                ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={4}>
          <FormControl fullWidth margin="normal">
            <InputLabel>Материал стен</InputLabel>
            <Select label="Материал стен" value={selectedMaterial} onChange={handleMaterialChange}>
              <MenuItem value="">Выберите материал</MenuItem>
              {materialsArray.map((material, index) => (
                <MenuItem key={index} value={material.title}>{material.title}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={4}>
          <FormControl fullWidth margin="normal">
            <InputLabel>Срок эксплуатации</InputLabel>
            <Select label="Срок эксплуатации" value={selectedAgeRange} onChange={handleAgeRangeChange}>
              <MenuItem value="">Выберите возрастной диапазон</MenuItem>
              {selectedMaterial &&
                materialsArray.find(mat => mat.title === selectedMaterial).data.map((data, index) => (
                  <MenuItem key={index} value={data.ageRange}>{data.ageRange}</MenuItem>
                ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={4}>
          <FormControl fullWidth margin="normal">
            <InputLabel>Коэффициент функционального назначения (Кн)</InputLabel>
            <Select label="Коэффициент функционального назначения (Кн)" value={selectedIndustry} onChange={handleIndustryChange}>
              <MenuItem value="">Выберите Кн</MenuItem>
              {
                Industries.map((data, index) => (
                  <MenuItem key={index} value={data.cost}>{data.name}</MenuItem>
                ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            label="Зональный коэффициент"
            value={coefficient}
            onChange={(e) => setCoefficient(e.target.value)}
            fullWidth
            type="number"
            margin="normal"
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            label="Налогооблагаемая площадь, кв. м"
            value={quadrature}
            onChange={(e) => setQuadrature(e.target.value)}
            fullWidth
            type="number"
            margin="normal"
          />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Button onClick={calculateCost} variant="contained" style={{ backgroundColor: 'rgb(205, 179, 47)', marginLeft: 'auto' }} className='vs-btn' fullWidth>
            Рассчитать
          </Button>
          <p>Исчисление налоговой стоимости (сом): {result}</p>
        </Grid>
      </Grid>
    </Container>
  );
};
