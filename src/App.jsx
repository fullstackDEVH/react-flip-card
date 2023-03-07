import Form from "./components/Form";
import List from "./components/List";
import { v4 as uuidv4 } from 'uuid';


function App() {
  // list
  // uuidv4();
  return (
    <div className="App">
      <header>
        <h1>Todo App</h1>
      </header>
      <Form />
      <List />
    </div>
  );
}

export default App;
