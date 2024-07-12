import React, { useState } from "react";
import Recp from "./recep";



export default function RegisterForm() {
    //firstname
  const [firstname, setFirstname] = useState("");
  const [firstnameErr, setFirstnameErr] = useState(false);
//lastname
const[lastname,setLastname]=useState("")
const [lastnameErr, setlastnameErr] = useState(false);
//password
const[password,setPassword]=useState("")
const [passwordErr, setPasswordErr] = useState(false);
//success
const [submissionSuccess, setSubmissionSuccess] = useState(false);

//first name function
  const ValidfirstName = (firstname) => {
    let validfirstname = false;
    if (firstname.length > 10) {
      validfirstname = false;
    } else {
      validfirstname = true;
    }
    return validfirstname;
  };
//to collect the values from user we use this handler
  const firstnameHandler = (event) => {
    const userenterdFirstname = event.target.value;
    setFirstname(userenterdFirstname);
    console.log(userenterdFirstname);
    if (ValidfirstName(userenterdFirstname)) {
      setFirstnameErr(false);
    } else {
      setFirstnameErr(true);
    }
  };
  //function for the lastname
  const ValidLastName=(lastname)=>{
    let ValidlastName=false
    if(lastname.length > 10){
    ValidlastName=false
    }else{
        ValidlastName=true
    }
    return ValidlastName
  }
//for the lastname
const lastnameHandler=(event)=>{
const userenterdLastname=event.target.value 
setLastname(userenterdLastname)
if(ValidLastName(userenterdLastname)){
setlastnameErr(false)
}else{
    setlastnameErr(true)
}
} 
//validation function for pswd
const ValidPassword=(password)=>{
   let validpswd=false
if(password.length > 10){
 validpswd=false
}else{
    validpswd=true
}
return validpswd
}
//for the passwordhandler
const passwordHandler=(event)=>{
const userPassword=event.target.value 
setPassword(userPassword)
if(ValidPassword(userPassword)){
setPasswordErr(false)
}else{
    setPasswordErr(true)
}
}

const handleSubmit = (event) => {
    event.preventDefault();
    if (!lastnameErr && !firstnameErr && !passwordErr) {
      setSubmissionSuccess(true);
    } else {
      setSubmissionSuccess(false);
    }
  }
  return (
  <>
  {
    submissionSuccess ? <Recp/>:(
        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
        <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-rose-600/40 ring-2 ring-indigo-600 lg:max-w-xl">
          <h1 className="text-3xl font-semibold text-center text-indigo-700 underline uppercase decoration-wavy">
            Sign UP
          </h1>
          <form className="mt-6"onSubmit={handleSubmit}>
            <div className="mb-2">
              <label
                for="email"
                className="block text-sm font-semibold text-gray-800"
              >
                Firstname
              </label>
              <input
                value={firstname}
                onChange={firstnameHandler}
                type="text"
                className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
              {firstnameErr && (
                <span style={{ color: "red" }}>*firstname should not be greater than 10 </span>
              )}
            </div>
            <div className="mb-2">
              <label
                for="email"
                className="block text-sm font-semibold text-gray-800"
              >
                Lastname
              </label>
              <input
              value={lastname}
              onChange={lastnameHandler}
                type="text"
                className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
              {lastnameErr && <span style={{color:"red"}}>*lastname should not be greater than 10 </span>}
            </div>
            <div className="mb-2">
              <label
                for="email"
                className="block text-sm font-semibold text-gray-800"
              >
                Email
              </label>
              <input
                type="email"
                className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mb-2">
              <label
                for="password"
                className="block text-sm font-semibold text-gray-800"
              >
                Password
              </label>
              <input
              value={password}
              onChange={passwordHandler}
                type="password"
                className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
              {passwordErr&&<span style={{color:"red"}}>*password should not be greater than 10</span>}
            </div>
           
            <div className="mt-6">
              <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-indigo-700 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600">
                Login
              </button>
            </div>
          </form>
          
          <p className="mt-8 text-xs font-light text-center text-gray-700">
            {" "}
            Already have an account?{" "}
            <a href="./" className="font-medium text-indigo-600 hover:underline">
              Sign in
            </a>
          </p>
          {/* {submissionSuccess && (
              <Recp/>
          )} */}
        </div>
      </div>
    )

    
  }
  </>     
  );
}
