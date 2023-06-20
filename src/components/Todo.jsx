import { useState } from "react";
import TodoList from "./TodoList";

function Todo() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const tambahData = () => {
    if (inputText !== "") {
      setTodos([...todos, inputText]);
      setInputText("");
    }
  };

  const hapusData = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  return (
    <div className="tengah">
      <h2>Todo App</h2>
      <input type="text" value={inputText} onChange={handleInputChange} className="ukuran" />
      <button onClick={tambahData} className="ukuran">
        Simpan
      </button>
      <TodoList todos={todos} onDeleteTodo={hapusData} />
    </div>
  );
}

export default Todo;
