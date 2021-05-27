import React, { useState, useEffect } from "react";
import { IntlProvider, FormattedMessage } from "react-intl";

import SeriesList from "./components/SeriesList";
import SerieDetail from "./components/SerieDetail";
import Visualization from "./components/Visualization";

import localeEnMessages from "./locales/en";
import localeEsMessages from "./locales/es";

const language = window.navigator.language || navigator.browserLanguage;
function App() {
  const seriesURLen =
    "https://gist.githubusercontent.com/josejbocanegra/c55d86de9e0dae79e3308d95e78f997f/raw/a467415350e87c13faf9c8e843ea2fd20df056f3/series-es.json";
  const seriesURLes =
    "https://gist.githubusercontent.com/josejbocanegra/c55d86de9e0dae79e3308d95e78f997f/raw/a467415350e87c13faf9c8e843ea2fd20df056f3/series-es.json";

  const seriesURL = language.startsWith("es") ? seriesURLes : seriesURLen;
  const [series, setSeries] = useState([]);
  const [selectedSerie, setSelectedSerie] = useState({});

  useEffect(() => {
    
    if(!navigator.onLine){
      console.log("From Storage",JSON.parse(localStorage.getItem("series")));
      setSeries(JSON.parse(localStorage.getItem("series") || "[]"));
      setSelectedSerie(series[0]);
    } 

    fetch(seriesURL)
      .then((response) => response.json())
      .then((data) => {
        console.log("From internet", data);
        setSeries(data);
        setSelectedSerie(data[0]);
        localStorage.setItem("series", JSON.stringify(data));
      });

  }, [seriesURL]);

  return (
    <IntlProvider
      locale={language}
      messages={language.startsWith("es") ? localeEsMessages : localeEnMessages}
    >
      <div className="container">
        <div className="row">
          <h1>
            <FormattedMessage id="title" />
          </h1>
        </div>
        <hr></hr>
        <div className="row">
          <div className="col-8">
            <SeriesList series={series} handle={setSelectedSerie}></SeriesList>
          </div>
          <div className="col-4">
            <SerieDetail {...selectedSerie}></SerieDetail>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <Visualization series={series}></Visualization>
          </div>
        </div>
      </div>
    </IntlProvider>
  );
}

export default App;
