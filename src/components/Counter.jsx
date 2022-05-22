import React, { useState } from "react";
import styles from "./styles.module.css";

const Count = () => {
    const [counter, setCounter] = useState(0);

    const buttonClick = (e) =>{
        if(e.target.name == "dob"){
            setCounter(counter * 2);
        }
        else if(e.target.name == "inc"){
            setCounter(counter + 1);
        }
        else{
            setCounter(counter - 1);
        }
    };

    return(
        <div>
            <h2 className={counter % 2 === 0 ? styles.greenColor : styles.redColor}>COUNT : {counter}</h2>
            <button name="inc" onClick={buttonClick}>Increment</button>
            <button name="dec" onClick={buttonClick}>Decrement</button>
            <button name="dob" onClick={buttonClick}>Double</button>
        </div>
    );
}
export default Count;