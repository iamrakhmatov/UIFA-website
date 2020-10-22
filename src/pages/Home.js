import React from 'react'

import { NavigationBar } from '../components/Navigation'
import { Header } from '../components/Header'
import { Slide } from '../components/Carousel'
import { JumboContainer } from '../components/AboutUs'
import { Cards } from '../components/News'
import { Service } from '../components/Services'
import { Footer } from '../components/Footer'


export const Home = () => {
    return (
        <React.Fragment>
            <Header />
            <NavigationBar />
            <Slide />
            <JumboContainer />
            <Cards />
            <Service />
            <Footer />
        </React.Fragment>
    )
}
