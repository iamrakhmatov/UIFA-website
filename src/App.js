import React from 'react'
import './App.scss'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Home } from './pages/Home'
import { AboutUs } from './pages/AboutUs'
import { Services } from './pages/Services'
import { News } from './pages/News'
import { Contacts } from './pages/Contacts'

// import { Layout } from './components/Layout'
// import { NavigationBar } from './components/Navigation'
// import { Header } from './components/Header'
// import { Slide } from './components/Carousel'
// import { JumboContainer } from './components/AboutUs'
// import { Cards } from './components/News'
// import { Service } from './components/Services'
// import { Footer } from './components/Footer'


function App() {
  return (
    <React.Fragment>
      {/* <Header />
      <NavigationBar />
      <Slide />
      <JumboContainer />
      <Cards />
      <Service />
      <Footer /> */}
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/news" component={News} />
            <Route exact path="/services" component={Services} />
            <Route exact path="/about_us" component={AboutUs} />
            <Route exact path="/contacts" component={Contacts} />
          </Switch>
        </Router>
    </React.Fragment>
  );
}

export default App;
