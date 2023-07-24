import { useState } from "react";
import "./App.css";
import List from "./components/List/List";
import { ListItem } from "./components/ListItem/ListItem";

function App() {
  const localData = JSON.parse(localStorage.getItem("todo")) || [];
  const [todo, setTodo] = useState(localData);

  const handleTodoSubmit = (evt) => {
    if (evt.target.value) {
      if (evt.keyCode == 13) {
        const todoText = {
          id: Math.round(Math.random() * 1000),
          text: evt.target.value,
          isComplated: false,
        };

        setTodo([todoText, ...todo]);
        localStorage.setItem("todo", JSON.stringify([todoText, ...todo]));
        evt.target.value = "";
      }
    }
  };
  return (
    <div className="container justify-content-center">
      <h1 className="text-center">To Do App</h1>

      <input
        onKeyUp={handleTodoSubmit}
        className="form form-control w-25 d-block m-auto mt-3"
        type="text"
        placeholder="Text"
      />

      {todo.length > 0 && (
        <List>
          {todo.map((item) => (
            <ListItem
              key={item.id}
              todos={todo}
              allTodos={setTodo}
              todo={item}
            />
          ))}
        </List>
      )}
    </div>
  );
}

export default App;
