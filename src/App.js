import './App.css';
import DataFetch from './Components/data-fetch-component';
import UserList from './Components/user-list';
//import CounterExample from './Components/counter-example';
//import UsecallbackEx from './Components/functionalComponent/usecallback/usecallbackex';
//import UsememoEx from './Components/functionalComponent/usememo/usememoex';
//import Stack from './navigations/stack';
//import WeatherApi from './Components/functionalComponent/weatherapi/weatherapi';
//import Card from './Components/functionalComponent/card/card';
//import Stack from './navigations/stack';

function App() {
  return (
    <div className="App">
 {/* <Stack/>  */}
{/* <WeatherApi/> */}
{/* <Stack/> */}
{/* <UsememoEx/> */}
{/* <UsecallbackEx/> */}
{/* <CounterExample/> */}
<UserList/>
<DataFetch/>
  </div>
  );
}

export default App;
