import axios from "axios";
import { useEffect, useState } from "react";
import CardforCat from "./card";
import CustomSpinnner2 from "../spinner/spinner";


const CatDetails = () => {
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoader(true);
    try {
      const response = await axios.get("https://api.thecatapi.com/v1/images/search?breed_id=abys");
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoader(false);
    }
  };

  const changeCatDetails = () => {
    fetchData();
  };

  return (
    <>
      <h1>Cat Details</h1>
      {
        loader ? (
      <CustomSpinnner2/>
        ) : (
          data.map((eachCatDetails) => (
            <CardforCat key={eachCatDetails.id} details={eachCatDetails} changeCatDetails={changeCatDetails} />
          ))
        )
      }
    </>
  );
};

export default CatDetails;
