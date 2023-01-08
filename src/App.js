import "./styles.css";
import React, { useState } from "react";
var appName = "Food Interpreter";
var color = "blue";
var userName = "Anshu Kumar";
// var likeCounter = 0;

export default function App() {
  const emojiDict = {
    "❤️": "love",
    "😘": "kiss",
    "😂": "Laugh",
    "🏋️": "Person lifting weights",
    "😒": "Unamused face",
    "🤦‍♂️": "Man facepalming"
  };
  const [likeCounter, setLikeCounter] = useState(0);
  var [userInput, setUserInput] = useState("");
  const [emoji, setEmoJiMeaning] = useState("");
  function likeClickHandler() {
    // console.log("Yes clicked");
    // likeCounter = likeCounter + 1;
    var newLikeCounter = likeCounter + 1;
    setLikeCounter(newLikeCounter);
    console.log("Liked", likeCounter);
  }

  function handleChange(event) {
    console.log(event.target.value);
    setUserInput(event.target.value);
  }
  function emojiHandler(event) {
    var userInput = event.target.value;
    console.log(event.target.value);
    setEmoJiMeaning(emojiDict[userInput]);
  }
  return (
    <div className="App">
      <h1 style={{ backgroundColor: color }}>Emoji Interpreter </h1>
      {/* <h1 style={{ backgroundColor: color }}>{appName}</h1> */}
      {/* <button style={{ color: "red" }} onClick={likeClickHandler}>
        Like me !
      </button>
      {likeCounter} */}
      {/* <input onChange={handleChange}></input> <br></br> */}
      <input onChange={emojiHandler}></input> <br></br>
      <span>{emoji} </span>
      <div>{Object.keys(emojiDict)}</div>
    </div>
  );
}
