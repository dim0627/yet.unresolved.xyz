import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {Helmet} from "react-helmet"
import registerServiceWorker from './registerServiceWorker'
import Frontmatters from './frontmatters'
import './styles.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Me from './components/Me'
import Projects from './components/Projects'
import Works from './components/Works'

ReactDOM.render(
  <React.Fragment>
    <Helmet>
      <title>Portfolio - Daisuke Tsuji</title>
      <link rel="canonical" href={Frontmatters.baseUrl} />
    </Helmet>
    <Header />
    <Hero />
    <Me />
    <Projects />
    <Works />
    <Footer />
  </React.Fragment>,
  document.getElementById('root')
)

registerServiceWorker()


// <Route exact path="/" component={Home} />
// <Route path="/projects" component={Projects} />
// <Route path="/nameCard" component={NameCard} />
