import axios from "axios";
import React, { useEffect, useState } from "react";
import CustomComment from "./spinnerss";


function DogFacts() {
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoader(true);
    try {
      const response = await axios.get("https://dog-api.kinduff.com/api/facts");
      console.log(response, "response");
      const response1 = response.data.facts;
      setData(response1);
    } catch (error) {
      console.log("error");
    } finally {
      setLoader(false);
    }
  };

  const factHandler = () => {
    fetchData();
  };

  return (
    <center style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100vh', justifyContent: 'center'} }>
      <h1 style={{color:"orange"}}>Dog Facts</h1>
      {loader ? (
        <CustomComment style={{marginTop:"100px"}}/>
        //<p style={{marginTop:"100px"}}>loading a dog fact...........</p>
      ) : (
        data.map((eachFact, index) => {
          return <h1 key={index} style={{fontFamily:"cursive",fontSize:"20px",color:"blue",marginTop:"100px"}}>{eachFact}</h1>;
        })
      )}
      <div style={{ marginTop: '50px' }}>
  
  <button onClick={factHandler}style={{color:"white",backgroundColor:"black",marginTop:"200px",padding: '10px 20px', border: 'none', cursor: 'pointer'}}>
        click here to know the facts about dogs
      </button>
  
  
  </div>
    
    </center>



   
  );
}

export default DogFacts;
