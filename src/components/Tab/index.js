import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';



import TextField from '@mui/material/TextField';


import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';

import { Container } from '@mui/material';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
 
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 0 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);
  const [age, setAge] = React.useState('');

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setAge(event.target.value);
  };



  return (
    <Container>
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Налог на авто" {...a11yProps(0)} />
          <Tab label="Налог на недвижимость" {...a11yProps(1)} />
          <Tab label="Налог на прибыль" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
      <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { p:0, mr: 2, width: '30%' },
      }}
      Validate
      autoComplete="off"
    >
       <TextField
          id="standard-number"
          label="Налоговая база (рабочий объем двигателя) куб.см"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="standard"
        />
           <FormControl >
  <InputLabel variant="standard" htmlFor="uncontrolled-native">
  Вид транспорта
  </InputLabel>
  <NativeSelect
    defaultValue={10}
    inputProps={{
      name: 'age',
      id: 'uncontrolled-native',
    }}
  >
    <option value={10}>Легковые автомобили, фургоны и пикапы на базе легковых автомобилей</option>
    <option value={20}>Грузовые автомобили, автобусы, микроавтобусы</option>
    <option value={30}>Самоходные машины и/или механизмы: тракторы, комбайны, дорожно-строительные машины</option>
  </NativeSelect>
</FormControl>

<FormControl >
  <InputLabel variant="standard" htmlFor="uncontrolled-native">
  Срок эксплуатации, включая год выпуска
  </InputLabel>
  <NativeSelect
    defaultValue={10}
    inputProps={{
      name: 'age',
      id: 'uncontrolled-native',
    }}
  >
    <option value={10}>До 5 лет</option>
    <option value={20}>Грузовые автомобили, автобусы, микроавтобусы</option>
    <option value={30}>Самоходные машины и/или механизмы: тракторы, комбайны, дорожно-строительные машины</option>
  </NativeSelect>
</FormControl>
        </Box>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
       Налог на недвижимость
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Налог на прибыль
      </CustomTabPanel>
    </Box>
    </Container>
  );
}