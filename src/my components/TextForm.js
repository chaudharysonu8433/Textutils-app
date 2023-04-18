import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("UpperCase was clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!","Success");
  };
  const handleLowClick = () => {
    console.log("LowerCase was clicked");
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!","Success");
  };
  const handleOnChange = (event) => {
    console.log("On Change");
    setText(event.target.value);
    
  };
  const handleClearClick = () => {
    console.log("Clear was clicked");
    setText("");
  };
  const handleCopyClick = () => {
    console.log("Copy was clicked");
    var text = document.getElementById("my-box");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text copied!","Success");
  };
  const handleExtraSpaces = () => {
    console.log(" Remove Extra spaces was clicked");
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces has removed!","Success");
  };
  const [text, setText] = useState("Enter text here");
  return (
    <>
      <div className="container" style={{color: props.mode === "dark" ? "white" : "black"}}>
        <h2>{props.heading}</h2>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "black" : "white",
              color: props.mode === "dark" ? "white" : "black"
            }}
            id="my-box"
            rows="8"
          ></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button disabled={text.length===0}className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>
          Convert to Lowercase
        </button>
        <button disabled={text.length===0}className="btn btn-primary mx-1 my-1" onClick={handleCopyClick}>
          Copy Text
        </button>
        <button disabled={text.length===0}className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
        <button disabled={text.length===0}className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>
          Clear Text
        </button>
      </div>
      <div className="container my-3" style={{color: props.mode === "dark" ? "white" : "black"}} >
        <h2>Your Text Summary</h2>
        <p>
          {text.split(/\s+/).filter((element) =>{return element.length!==0}).length} words and {text.length} characters
        </p>
        <p>Average time to read {0.008 * text.length} minutes</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing to preview"}</p>
      </div>
    </>
  );
}