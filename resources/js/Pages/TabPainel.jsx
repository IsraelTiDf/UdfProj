import * as React from 'react';
import PropTypes from 'prop-types';
import {Tabs, Tab, Typography, Box } from '@mui/material';
import Register from './Auth/Register.jsx';
import RegisterClinica from './Auth/RegisterClinica.jsx';
import GuestLayout from '@/Layouts/GuestLayout';
import NavBar from './NavBar.jsx';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
    // const props = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
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

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (

    <GuestLayout>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Usuario" {...a11yProps(0)} />
          <Tab label="Clinica" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
            <Register props = {value}/>

      </TabPanel>
      <TabPanel value={value} index={1}>
            <RegisterClinica props = {value}/>
      </TabPanel>

    </GuestLayout>

  );
}
