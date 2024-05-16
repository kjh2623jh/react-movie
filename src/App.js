import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function Hello () {
  useEffect(() => {
    console.log("Created");
    return () => console.log("Destroyed");
  }, [])
  return <h1>Hello</h1>;
}

function App() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");
  const [showing, setShowing] = useState(false);

  const onClick = () => setCounter((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);

  console.log("I run all the time");
  useEffect(() =>{
    console.log("Call the API");
  }, []);
  useEffect(() => {
    if (keyword !== "" && keyword.length > 5) {
      console.log("Search For", keyword);
    }
  }, [keyword]);

  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={() => setShowing((prev) => !prev)}>{showing ? "Hide" : "Show"}</button>

      <input value={keyword} onChange={onChange} type="text" placeholder="Search here"></input>
      <h1 className={styles.title}>Hello</h1>
      <button onClick={onClick}>{counter}</button>
      <Button text={"asd"}/>
    </div>
  );
}

export default App;
