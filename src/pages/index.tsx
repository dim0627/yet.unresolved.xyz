import React from 'react'
import Head from '../components/head'
import Nav from '../components/nav'
import Hero from '../components/hero'
import Me from '../components/me'
import Projects from '../components/projects'
import Works from '../components/works'
import Footer from '../components/footer'

const Home = () => (
  <div>
    <Head title="Home" />
    <Nav />
    <Hero />
    <Me />
    <Projects />
    <Works />
    <Footer />
  </div>
)

export default Home
