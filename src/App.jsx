import Form from "./components/Form";
import List from "./components/List";
import { v4 as uuidv4 } from "uuid";

function App() {
  // list
  // uuidv4();

  const handleFormValue = (e) => {
    e.preventDefault();
  };
  return (
    <div className="App">
      <header>
        <h1>Todo App</h1>
      </header>
      
      <form onSubmit={handleFormValue}>
        <input type="text" name="text-input" class="todo-input" />
        <button className="todo-button" type="submit">
          <i className="fas fa-plus-square"></i>
        </button>
        <div className="select">
          <select name="todos" className="filter-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>

      <div class="todo-container">
        {/* todo list là cái để hiện thị danh sách */}
        <ul class="todo-list">

          {/* item todo */}
          <div className="todo">
            <li className="todo-item completed">abc</li>
            {/* complete-btn là nút thay đổi trạng thái thành done (0 hoặc 1) */}
            <button className="complete-btn">
              <i className="fas fa-check"></i>{" "}
            </button>

             {/* trash-btn là nút để xoá 1 todo trong danh sách */}
            <button className="trash-btn">
              <i className="fas fa-trash"></i>{" "}
            </button>
          </div>

        </ul>
      </div>
    </div>
  );
}

export default App;
