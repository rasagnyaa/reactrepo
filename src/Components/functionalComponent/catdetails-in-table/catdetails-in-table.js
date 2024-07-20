import axios from "axios";
import { useEffect, useState } from "react";
const CatDetailsTable = () => {
  const [data, setData] = useState([]);
  const [fetching, setFetching] = useState(false);
  const [initialLoad, setInitialLoad] = useState(true);
  useEffect(() => {
    fetchData(true);
  }, []);
  const fetchData = async (isInitial = false) => {
    
    if (isInitial) {
      setInitialLoad(true);
    } else {
      setFetching(true);
    }
    try {
      const response = await axios.get(
        "https://api.thecatapi.com/v1/images/search?breed_id=abys"
      );
      console.log(response, "response");
      setData((previous) => [...previous, ...response.data]);
    } catch (err) {
      console.log("error", err);
    } finally {
      if (isInitial) {
        setInitialLoad(false);
      } else {
        setFetching(false);
      }
    }
  };
  const changedetailsHandler = () => {
    fetchData(false);
  };
  return (
    <center>
      <h1>cat details in the table</h1>
      <button onClick={changedetailsHandler}>click me</button>
      {initialLoad ? (
        <p1>loading........</p1>
      ) : (
        <>
          <table>
            <thead>
              <tr>
                <th>Id</th>
                <td>image</td>
              </tr>
            </thead>
            <tbody>
              {data.map((eachDetail) => {
                return (
                  <tr key={eachDetail.id}>
                    <td>{eachDetail.id}</td>
                    <td>
                      <img
                        src={eachDetail.url}
                        alt="cute pic of cat"
                        height={200}
                        width={200}
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          {fetching && <p>loading new cats</p>}
        </>
      )}
    </center>
  );
};
export default CatDetailsTable;
