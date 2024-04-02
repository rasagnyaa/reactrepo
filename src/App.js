import './App.css';
import ButtonCom from './Components/Class components/button';
import FormCom from './Components/Class components/form/form';
import FunButton from './Components/functional components/button/button';
import FunForm from './Components/functional components/form/form';
import FunImage from './Components/functional components/image/image';
import FunList from './Components/functional components/list/list';
import FunTable from './Components/functional components/table/table';

function App() {
  return (
    <div className="App">
      <h1>Functional Components</h1>
      <FunButton></FunButton>
      <FunForm></FunForm>
      <FunImage></FunImage>
      <FunTable></FunTable>
      <FunList></FunList>
      <ButtonCom></ButtonCom>
      <FormCom></FormCom>
    </div>
  );
}

export default App;
