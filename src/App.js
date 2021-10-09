import React, {useEffect, useState} from "react";
import './App.css';

const App = () => {

  const APP_ID = "f709f755";
  const APP_KEY = "785db063f095be63f86696a16ff473dd";
  const example = `https://api.edamam.com/search?q=chiken&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log("i am calling the API");
    getData();
  },[counter])

  const getData = async () => {
    const responce = await fetch(example);
    const data = responce.json();
    console.log(data);
  }

  return(
    <div className = "App">
      <form className = "search-form">
        <input className = "search-bar" type = "text"/>
        <button className = "search-button" type = "submit">
          search
        </button>
      </form>
      <h1 onClick = {() => setCounter(counter + 1)}> 
        {counter}
      </h1>
    </div>

  );
}

export default App;
