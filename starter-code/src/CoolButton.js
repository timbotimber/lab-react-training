// import React, { Component } from "react";

// const colorArr = ["purple", "blue", "green", "yellow", "orange", "red"];

// class CoolButton extends Component {
//   state = {
//     count: 0,
//   };

//   handleClick = () => {
//     if (this.state.count > 4) {
//       this.setState({
//         count: 0,
//       });
//     } else {
//       this.setState({
//         count: this.state.count + 1,
//       });
//     }
//   };

//   render() {
//     return (
//       <div
//         style={{
//           backgroundColor: `${colorArr[this.state.count]}`,
//         }}
//       >
//         <h1>{colorArr[this.state.count]}</h1>
//         <button onClick={this.handleClick}>
//           {this.state.count} this is the state updating{" "}
//         </button>
//       </div>
//     )
//   }
// }

//

import React, { useState } from "react";

const CoolButton = () => {
  const colorArr = ["purple", "blue", "green", "yellow", "orange", "red"];
  const [count, setCount] = useState(0);

  let handleClick = () => {
    if (count > 4) {
      setCount(0);
    } else {
      setCount(count + 1);
    }
  };

  return (
    <div
      style={{
        backgroundColor: `${colorArr[count]}`,
      }}
    >
      <h1>{colorArr[count]}</h1>
      <button onClick={handleClick}>{count} this is the state updating</button>
    </div>
  );
};
export default CoolButton;
