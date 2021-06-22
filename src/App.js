import React from 'react';
import Home from './components/Home/Home/Home';
import { Switch, Route, HashRouter } from 'react-router-dom';
import MobileALL from './components/Offers/MobileALL/MobileAll';
import Contact from './components/Contact/Contact';
// import Services from './components/Services/Services';
import Internet from './components/Offers/Internet/Internet';
import InternetTV from './components/Offers/InternetTV/InternetTV';
import InternetTVTelephone from './components/Offers/InternetTVTelephone/InternetTVTelephone';
import MobileInternet from './components/Offers/MobileInternet/MobileInternet';
import PageNotFound from '../src/components/PageNotFound/PageNotFound';

// import ReactGA from 'react-ga';
// import auth from './auth.ts'; // Sample authentication provider

// const trackingId = "G-B0W08H32YZ"; // Replace with your Google Analytics tracking ID
// ReactGA.initialize(trackingId);
// ReactGA.set({
//   userId: auth.currentUserId(),
//   // any data that is relevant to the user session
//   // that you would like to track with google analytics
// })
import ReactGA from 'react-ga';
ReactGA.initialize('UA-168021262-1');

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Oferty" component={MobileALL} />
        <Route path="/Kontakt" component={Contact} />
        {/* <Route path="/Uslugi" component={Services} /> */}
        <Route path="/Internet" component={Internet} />
        <Route path="/InternetTelewizja" component={InternetTV} />
        <Route path="/TelefonStacjonarny" component={InternetTVTelephone} />
        <Route path="/TelefonKomorkowy" component={MobileInternet} />
        <Route component={PageNotFound} />
      </Switch>
    </HashRouter>
  );
}

export default App;
