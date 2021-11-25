import "./App.css";
import Form from "./components/Form";

import { useState, useEffect } from "react";
import List from "./components/List";
import Footer from "./components/Footer";

function App() {
  const [works, setWorks] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    // Update works
    console.log(works);
  }, [works]);

  return (
    <>
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <Form addWork={setWorks} works={works}></Form>
        </header>
        <List works={works} setWorks={setWorks} filter={filter}></List>
        <Footer
          setFilter={setFilter}
          works={works}
          setWorks={setWorks}
        ></Footer>
      </section>

      <footer className="info">
        <p>Click to edit a todo</p>
        <p>
          Created by{" "}
          <a href="https://www.linkedin.com/in/emrepala/">
            Emre Pala and Dmitry Sharabin
          </a>
        </p>
        <p>
          Part of <a href="http://todomvc.com">TodoMVC</a>
        </p>
      </footer>
    </>
  );
}

export default App;
