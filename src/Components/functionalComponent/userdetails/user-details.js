import axios from "axios";
import { useEffect, useState } from "react";
import CardforUsers from "./cardforuses";
import CustomSpinnner2 from "../spinner/spinner";

const UserDetails = () => {
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );

      console.log(response, "response");
      setData(response.data);
    } catch (error) {
      console.log(error, "error");
    } finally {
      setLoader(false);
    }
  };
  const searchHandler = (event) => {
    setSearch(event.target.value);
  };
  const filteredData = data.filter((eachUser) =>
    eachUser.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <center>
      <input
        type="text"
        placeholder="search...."
        value={search}
        onChange={searchHandler}
      />

      <h1 style={{ fontFamily: "sans-serif" }}>Alumnus of Law College</h1>
      {loader ? (
        <CustomSpinnner2/>
      ) : (
        filteredData.map((eachUser) => {
          return <CardforUsers key={eachUser.id} details={eachUser} />;
        })
      )}
    </center>
  );
};
export default UserDetails;
