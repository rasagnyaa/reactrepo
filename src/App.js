import './App.css';
import ButtonCom from './Components/Class components/button/button';
import FormCom from './Components/Class components/form/form';
import ImageCom from './Components/Class components/image/image';
import ListCom from './Components/Class components/list/list';
import TableCom from './Components/Class components/table/table';
import FunButton from './Components/functional components/button/button';
import FunForm from './Components/functional components/form/form';
import FunImage from './Components/functional components/image/image';
import FunList from './Components/functional components/list/list';
import FunTable from './Components/functional components/table/table';

function App() {
  return (
    <div className="App">
      <h2>Class based Components</h2>
      <h1>Functional Components</h1>
      <FunButton></FunButton>
      <FunForm></FunForm>
      <FunImage></FunImage>
      <FunTable></FunTable>
      <FunList></FunList>
      <ButtonCom></ButtonCom>
      <FormCom></FormCom>
      <ImageCom></ImageCom>
      <TableCom></TableCom>
      <ListCom></ListCom>
      
    </div>
  );
}

export default App;
