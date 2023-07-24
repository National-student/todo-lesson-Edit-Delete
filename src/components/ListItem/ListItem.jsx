import React from "react";

export const ListItem = ({ todo, todos, allTodos }) => {
  const handleDelete = (item) => {
    const filterTodo = todos.filter((todo1) => item != todo1.id);

    allTodos(filterTodo);
    localStorage.setItem("todo", JSON.stringify(filterTodo));
  };

  const handleEdit = (edit) => {
    const editTodo = prompt("Edit Todo", edit.text);
    todos.forEach((element) => {
      if (edit.id == element.id) {
        element.text = editTodo;
        allTodos([...todos]);
        localStorage.setItem("todo", JSON.stringify([...todos]));
      }
    });
  };

  return (
    <li className="list-group-item d-flex align-items-center">
      <input className="me-5" type="checkbox" />
      <h3 className="me-5">{todo.text}</h3>
      <button
        onClick={() => handleEdit(todo)}
        className="btn btn-outline-success me-5"
      >
        Edit
      </button>
      <button
        onClick={() => handleDelete(todo.id)}
        className="btn btn-outline-danger me-5"
      >
        Delete
      </button>
    </li>
  );
};
