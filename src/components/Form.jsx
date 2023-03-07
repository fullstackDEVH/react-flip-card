const Form = () => {
  
  const handleFormValue = (e) => {
    e.preventDefault();
    console.log(e.target["text-input"].value);
    console.log(e.target["todos"].value);

  };

  return (
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
  );
};


export default Form;