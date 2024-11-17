import React, { useState, useEffect } from 'react'
import Header from './Header'
import Hero from './Hero'
import SpecialDishes from './SpecialDishes'
import FilteredDishes from './FilteredDishes'
import { AllMenus } from './AllMenuContext'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Checkout from './Checkout'

import { AppProvider } from "../context/AppProvider"

function Menu() {

    return (
        <div>
            <Router>
                <AppProvider>
                    <Header />
                    <Hero />
                    <Routes>

                        <Route path='/' element={
                            <AllMenus>
                                <SpecialDishes />
                                <FilteredDishes />
                            </AllMenus>
                        }>
                        </Route>

                        <Route path='/context' element={<Checkout />}> </Route>
                            
                    </Routes>
                </AppProvider>

            </Router>
        </div>
    )
}

export default Menu
