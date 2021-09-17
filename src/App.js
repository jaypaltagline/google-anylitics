import { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import ContactUs from './components/ContactUs';
import AboutUs from './components/AboutUs';
import Home from './components/Home';
import ReactGA from 'react-ga';

function App() {
  useEffect(() => {
    ReactGA.initialize('UA-207892475-1', {
      // use for show console log in browser
      debug: false,
      titleCase: false,
      // gaOptions: {
      //   userId: 123
      // }
    });
  }, [])
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  })
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/header' component={Header} />
          <Route exact path='/footer' component={Footer} />
          <Route exact path='/contact-us' component={ContactUs} />
          <Route exact path='/about-us' component={AboutUs} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
