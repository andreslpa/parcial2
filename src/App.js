import React from 'react';
import {IntlProvider} from 'react-intl';

import SeriesList from './components/SeriesList';

import localeEnMessages from "./locales/en";
import localeEsMessages from "./locales/es";


function App() {
  return (
    <IntlProvider locale="en" messages= {localeEnMessages} >
      <SeriesList></SeriesList>
    </IntlProvider>
  )
    
}

export default App;
