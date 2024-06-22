import './App.css';
import ButtonComponent from './Components/functionalComponent/button/button';
import Form from './Components/functionalComponent/form/form';
import ImageComponent from './Components/functionalComponent/image/image';
import { ListParentOrderd, ListParentUnorderd } from './Components/functionalComponent/list/listparent';
import Table from './Components/functionalComponent/table/table';

function App() {
  return (
    <div className="App">
     <Form></Form>
    <Table></Table>
    <ListParentOrderd></ListParentOrderd>
    <ListParentUnorderd></ListParentUnorderd>
    <ButtonComponent></ButtonComponent>
    <ImageComponent></ImageComponent>
    </div>
  );
}

export default App;
