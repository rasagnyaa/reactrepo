
import './App.css';
import TableComponent from './functional components/general props/table/table';
import Img from './functional components/image';
import FunList from './functional components/list';

function App() {
  return (
    <div className="App">
     <FunList></FunList>
     <TableComponent></TableComponent>
     <Img></Img>
    </div>
  );
}

export default App;
