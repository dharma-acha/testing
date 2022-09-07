import React, { useState } from "react";
function App() {
    const [color, setColor] = useState("red")
    function ChangeColor() {
        setColor("blue")
        if (color === "blue") {
            setColor("red")
        }
    }
    window.onload=function(){
        const button= document.querySelector("button");
        const checkbox=document.querySelector("#check");
           let disableSubmit=function(e){
                button.disabled=this.checked
            }
        checkbox.addEventListener("change",disableSubmit);
    }
    return (
        <div>
            <button onClick={ChangeColor} style={{ backgroundColor: color }}>{color === "red" ? ("change to blue") : ("change to red")}</button>
            <br /><br />
            <input  type="checkbox" id="check" name="" />
        </div>
    )
}
export default App;