// import React from "react";

// class Dice extends React.Component {
//   state = {
//     diceState: "/img/dice-empty.png"
//   };

//   random = () => {
//     return Math.floor(Math.random() * 6) + 1;
//   };

//   toggleDice = () => {
//     // if (this.state.diceState === "/img/dice-empty.png") {
//     this.setState({
//       diceState: `/img/dice${this.random()}.png`
//     });
//   };

//   render() {
//     return (
//       <img
//         class="Dice"
//         onClick={this.toggleDice}
//         src={this.state.diceState}
//         alt=""
//       />
//     );
//   }
// }

// export default Dice;

import React, { useState } from "react";

const Dice = () => {
  const [dice, setDice] = useState("/img/dice-empty.png");
  const [random, setRandom] = useState(1);

  let toggleDice = () => {
    setRandom(Math.floor(Math.random() * 6) + 1);
    console.log(random);
    setDice(`/img/dice${random}.png`);
  };

  return (
    <>
      <img class="Dice" onClick={toggleDice} src={dice} alt="" />
    </>
  );
};

export default Dice;
