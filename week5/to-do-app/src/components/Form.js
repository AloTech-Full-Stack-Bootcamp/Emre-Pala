import { useState, useEffect } from "react";
import { nanoid } from "nanoid";

function Form({ addWork, works }) {
  const [form, setForm] = useState({
    id: "",
    name: "",
    complated: false,
    editable: false,
  });

  const onChangeInput = (e) => {
    // this function makes input field dynamic
    setForm({ ...form, [e.target.name]: e.target.value, id: nanoid() });
  };
  const onSubmit = (e) => {
    e.preventDefault();

    if (form.name === "") {
      return false; // if input field is empty, do not add new work
    }

    addWork([...works, form]);
    console.log(form);
  };

  useEffect(() => {
    // clear the input field after form submit
    setForm({ name: "" });
  }, [works]);
  return (
    <form onSubmit={onSubmit}>
      <input
        name="name"
        value={form.name}
        className="new-todo"
        placeholder="What needs to be done?"
        onChange={onChangeInput}
        autoFocus
      />
    </form>
  );
}

export default Form;
