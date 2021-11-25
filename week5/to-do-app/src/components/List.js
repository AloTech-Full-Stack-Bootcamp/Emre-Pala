import React from "react";

function List({ works, setWorks, filter }) {
  function tCompleted(e) {
    let index = works.findIndex(
      (element) => element.id === e.target.getAttribute("data-id")
    );
    let worksArray = [...works];
    worksArray[index].completed = !works[index].completed;
    setWorks(worksArray);
  }

  function editTodo(e) {
    let index = works.findIndex(
      (element) => element.id === e.target.getAttribute("data-id")
    );
    let worksArray = [...works];
    worksArray[index].name = e.target.value;
    setWorks(worksArray);
  }

  function onEditBlu(e) {
    let index = works.findIndex(
      (element) => element.id === e.target.getAttribute("data-id")
    );
    let worksArray = [...works];
    worksArray[index].editMode = false;
    setWorks(worksArray);
  }

  function editModeOnClick(e) {
    let index = works.findIndex(
      (element) => element.id === e.target.getAttribute("data-id")
    );
    let worksArray = [...works];
    worksArray[index].editMode = true;
    setWorks(worksArray);
  }

  function deleteTodo(e) {
    let deleteIndex = works.findIndex(
      (element) => element.id === e.target.getAttribute("data-id")
    );
    let newArray = works.filter((item, index) => {
      return index !== parseInt(deleteIndex);
    });
    setWorks(newArray);
  }
  return (
    <>
      <section className="main">
        <input className="toggle-all" type="checkbox" />
        <label htmlFor="toggle-all"> Mark all as complete </label>

        <ul className="todo-list">
          {works
            .filter((work) => {
              if (filter === "all") {
                return work;
              } else if (filter === "completed") {
                return work.completed === true;
              } else if (filter === "active") {
                return work.completed === false;
              } else {
                return work;
              }
            })
            .map((work) => {
              return (
                <li className={work.completed ? "completed" : ""} key={work.id}>
                  <div className="view">
                    <input
                      className="toggle"
                      type="checkbox"
                      checked={work.completed ? true : false}
                      data-id={work.id}
                      onClick={tCompleted}
                      readOnly
                    />
                    {work.editMode ? (
                      <input
                        id="editMode"
                        type="text"
                        name="todo"
                        value={work.name}
                        onChange={editTodo}
                        data-id={work.id}
                        onBlur={onEditBlu}
                      />
                    ) : (
                      <label
                        htmlFor="todo"
                        onClick={editModeOnClick}
                        data-id={work.id}
                      >
                        {work.name}
                      </label>
                    )}
                    <button
                      className="destroy"
                      data-id={work.id}
                      onClick={deleteTodo}
                    ></button>
                  </div>
                </li>
              );
            })}
        </ul>
      </section>
    </>
  );
}

export default List;
