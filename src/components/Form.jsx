import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, updateTodo } from "./features/todo/todoSlice";
import { update } from "./features/todo/todoService";

const Form = () => {
  const { edit } = useSelector((state) => state.todos);

  const dispatch = useDispatch();

  const [title, setTitle] = useState("");

  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    edit.isEdit
      ? dispatch(
          updateTodo({
            id: edit.todo._id,
            title,
            description,
          })
        )
      : dispatch(addTodo({ title, description }));

    setTitle("");
    setDescription("");
  };

  useEffect(() => {
    setTitle(edit.todo.title);
    setDescription(edit.todo.description);
  }, [edit]);

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter Title Here.."
        className="form-control rounded-0"
        required
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />

      <textarea
        className="form-control rounded-0 my-3"
        placeholder="Enter Description"
        required
        onChange={(e) => setDescription(e.target.value)}
        value={description}
      ></textarea>

      <button className="btn btn-success w-100 rounded-0 my-3">Save</button>
    </form>
  );
};

export default Form;
