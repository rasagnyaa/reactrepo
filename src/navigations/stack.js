import React, { createContext, Suspense, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "../screens/homescreen";
import AboutScreen from "../screens/aboutscreen";
import ContactScreen from "../screens/contactscreen";
//import SettingScreen from "../screens/settingscreens";
import InvalidScreen from "../screens/invalidscreen";
import Productdetails from "../screens/productdetails";
import DoctorScreen from "../screens/doctorscreen";
import EngineerScreen from "../screens/engineerscreen";
import UseeffectEx1 from "../Components/functionalComponent/useeffect/useeffect";
const LazySetting=React.lazy(()=>import("../screens/settingscreens"))
export const profileWrapper= createContext()
function Stack() {
  const[profileInfo,setProfileinfo]=useState({
    name:"ram",
    salary:2000
})
/////////////
const[counter,setCounter]=useState(100)
const ChangeCounter=()=>{
  setCounter(counter+100)
}
////////
const changeName=(name)=>{
  setProfileinfo({...profileInfo,name:name})
}
const incrementHandler=()=>{
 setCounter(counter+100)
}
const decrementHandler=()=>{
  if(counter > 0){
  setCounter(counter-100)
  }
 }
return (
    <profileWrapper.Provider value={{profileInfo:profileInfo,changeName,counter:counter,ChangeCounter,incrementHandler:incrementHandler,decrementHandler:decrementHandler}}>
    <BrowserRouter>
      <Routes>
        {/* static routing */}
        <Route path="/" element={<HomeScreen/>} />
        <Route path="useeffect" element={<UseeffectEx1/>} />
        <Route/>
        <Route path="/about" element={<AboutScreen />} />
        <Route path="/contact" element={<ContactScreen/>}/>
          <Route path="doctors" element={<DoctorScreen/>} />
          <Route path="engineers" element={<EngineerScreen/>}/>
        <Route/>
        <Route path="/setting" element={<Suspense fallback={<div>loading</div>}><LazySetting/></Suspense>}/>

        <Route
          path="/:category/:productId/info"
          element={<Productdetails />}
        />
        {/* star is the path which is used to represnt the invalid screen */}
        <Route path="*" element={<InvalidScreen />} />
      </Routes>
    </BrowserRouter>
    </profileWrapper.Provider>
  );
}

export default Stack;
//app.js tp stack to(code created in stack)=>home and contact--->(code flow)
//task-->repeat the class ,
//differnce bewteen local state managment and global state managment 
//why we need to avoid the prop drilling,when to pass as a props
//give user input in the settin screen change globally using context 
//difference between the context api and prop drilling (advantage of context api)
