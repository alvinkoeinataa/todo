export default function TodoList({ todos, onDeleteTodo }) {
  return (
    <ul>
      {todos.map((todo, index) => (
        <li className="ukuran">
          {todo}
          <button onClick={() => onDeleteTodo(index)} className="warna jarak">
            X
          </button>
        </li>
      ))}
    </ul>
  );
}
