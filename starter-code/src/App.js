import React, { Component } from "react";
import LikeButton from "./LikeButton";
import ClickablePicture from "./ClickablePicture";
import Dice from "./Dice";
import NumbersTable from "./NumbersTable";
import Rating from "./Rating";
import CoolButton from "./CoolButton";

const IdCard = (props) => {
  console.log("this is the props from the id card component", props);
  return (
    <div className="IdCardBox">
      <img src={props.picture} alt="wtf" />
      <div className="right">
        <p>Name: {props.firstName} </p>
        <p>lastName: {props.lastName} </p>
        <p>gender: {props.gender}</p>
        <p>height: {props.height}</p>
        <p>birthday: {props.birth.toDateString()}</p>
      </div>
    </div>
  );
};

const Greetings = (props) => {
  let greeting = " ";

  if (props.lang === "de") {
    greeting = "Hallo";
  } else if (props.lang === "fr") {
    greeting = "Whatup";
  }

  return (
    <div className="greetingbox">
      <p>
        {greeting} {props.children}
      </p>
    </div>
  );
};

const Random = (props) => {
  let maths = Math.floor(Math.random() * props.max) + props.min;

  return (
    <div>
      <p>
        a random value between {props.min} and {props.max} {maths}{" "}
      </p>
    </div>
  );
};

const BoxColor = (props) => {
  let style = {
    backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`,
  };
  return (
    <div style={style}>
      rgb:{props.r}, {props.g}, {props.b}
    </div>
  );
};

let IdCardStuff = {
  lastName: "Doe",
  firstName: "John",
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>IdCard What the heeeeck?!</h1>
        {
          <IdCard
            lastName={IdCardStuff.lastName}
            firstName={IdCardStuff.firstName}
            gender="male"
            height={178}
            birth={new Date("1992-07-14")}
            picture="https://randomuser.me/api/portraits/men/44.jpg"
          ></IdCard>
        }
        {
          <IdCard
            lastName="Delores "
            firstName="Obrien"
            gender="female"
            height={172}
            birth={new Date("1988-05-11")}
            picture="https://randomuser.me/api/portraits/women/44.jpg"
          ></IdCard>
        }
        <h1>Greetings all right</h1>
        {
          <Greetings lang="de" name="">
            Ludwig
          </Greetings>
        }
        {
          <Greetings lang="fr" name="">
            Francois
          </Greetings>
        }
        <h1>Return of the Maths</h1>
        <Random min={1} max={6} />
        <Random min={1} max={100} />
        <h1>Box Fresh</h1>
        <BoxColor r={255} g={0} b={0} />
        <BoxColor r={128} g={255} b={0} />
        <h1>Like button</h1>
        <LikeButton starter={12} />
        <h1>Clickable Picture</h1>
        <ClickablePicture
          img="/img/persons/maxence.png"
          imgClicked="/img/persons/maxence-glasses.png"
        />
        <h1>Dice ting</h1>
        <Dice />
        <h1>Numbers Table</h1>
        <NumbersTable limit={12} />
        <h1>Rating</h1>
        <Rating>0</Rating>
        <Rating>1.49</Rating>
        <Rating>1.5</Rating>
        <Rating>3</Rating>
        <Rating>4</Rating>
        <Rating>5</Rating>
        <h1>Remembering state</h1>
        <CoolButton />
      </div>
    );
  }
}

export default App;
