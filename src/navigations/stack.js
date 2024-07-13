import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "../screens/homescreen";
import AboutScreen from "../screens/aboutscreen";
import ContactScreen from "../screens/contactscreen";
//import SettingScreen from "../screens/settingscreens";
import InvalidScreen from "../screens/invalidscreen";
import Productdetails from "../screens/productdetails";
import DoctorScreen from "../screens/doctorscreen";
import EngineerScreen from "../screens/engineerscreen";
const LazySetting=React.lazy(()=>import("../screens/settingscreens"))
function Stack() {
  return (
    <BrowserRouter>
      <Routes>
        {/* static routing */}
        <Route path="/" element={<HomeScreen />} />
        <Route path="/about" element={<AboutScreen />} />
        <Route path="/contact" element={<ContactScreen/>}>
          <Route path="doctors" element={<DoctorScreen/>} />
          <Route path="engineers" element={<EngineerScreen/>}/>
        </Route>
        <Route path="/setting" element={<Suspense fallback={<div>loading</div>}><LazySetting/></Suspense>}/>

        <Route
          path="/:category/:productId/info"
          element={<Productdetails />}
        />
        {/* star is the path which is used to represnt the invalid screen */}
        <Route path="*" element={<InvalidScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Stack;
