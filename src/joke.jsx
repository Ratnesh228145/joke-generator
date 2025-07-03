import { useState } from "react";
import Button from "./Button";
import "./joke.css";

function Joke(){
  const [joke, setJoke] = useState("");
    const fetchApi=()=>{
        fetch("https://v2.jokeapi.dev/joke/Any")
        .then((res)=>res.json())
        .then((data)=>setJoke(data.joke));
    };
    return (
        <div className="joke">
            <Button callApi={fetchApi} />  
            <p>{joke}</p>    
        </div>
    );
}

export default Joke;