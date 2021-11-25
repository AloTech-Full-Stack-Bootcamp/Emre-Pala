import { useState } from "react";

function Footer({ setFilter, works, setWorks }) {
  const [selected, setSelected] = useState("all");
  function clear(e) {
    let newArray = works.filter((item) => item.completed === false);
    setWorks(newArray);
  }
  return (
    <>
      <footer className="footer">
        <span className="todo-count">
          <strong>{works.length} </strong>
          items left
        </span>

        <ul className="filters">
          <li>
            <button
              className={selected === "all" ? "selected" : ""}
              onClick={(e) => {
                setFilter("all");
                setSelected("all");
              }}
            >
              All
            </button>
          </li>
          <li>
            <button
              className={selected === "active" ? "selected" : ""}
              onClick={(e) => {
                setFilter("active");
                setSelected("active");
              }}
            >
              Active
            </button>
          </li>
          <li>
            <button
              className={selected === "completed" ? "selected" : ""}
              onClick={(e) => {
                setFilter("completed");
                setSelected("completed");
              }}
            >
              Completed
            </button>
          </li>
        </ul>

        {works.every((item) => item.completed === false) || (
          <button onClick={clear} className="clear-completed">
            Clear completed
          </button>
        )}
      </footer>
    </>
  );
}

export default Footer;
