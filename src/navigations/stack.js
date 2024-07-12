import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import HomeScreen from '../screens/homescreen'
import AboutScreen from '../screens/aboutscreen'
import ContactScreen from '../screens/contactscreen'
import SettingScreen from '../screens/settingscreens'
import InvalidScreen from '../screens/invalidscreen'
import Productdetails from '../screens/productdetails'
function Stack() {
  return (
   <BrowserRouter>
   <Routes>
    {/* stactic routing */}
    <Route path="/"Component={HomeScreen}/>
    <Route path="/about"Component={AboutScreen}/>
    <Route path="/contact"Component={ContactScreen}/>
    <Route path='/setting'Component={SettingScreen}/>

    <Route path='/:location/:resturantId/info'Component={Productdetails}/>
    {/* star is the path which is used to represnt the invalid screen */}
    <Route path='*'Component={InvalidScreen}/>

   </Routes>
   </BrowserRouter>
  )
}

export default Stack
