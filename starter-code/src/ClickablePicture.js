// import React from "react";

// class ClickablePicture extends React.Component {
//   state = {
//     imageSrc: "/img/persons/maxence.png"
//   };

//   toggleImg = () => {
//     if (this.state.imageSrc === "/img/persons/maxence.png") {
//       this.setState({
//         imageSrc: "/img/persons/maxence-glasses.png"
//       });
//     } else if (this.state.imageSrc === "/img/persons/maxence-glasses.png") {
//       this.setState({
//         imageSrc: "/img/persons/maxence.png"
//       });
//     }
//   };

//   render() {
//     return <img onClick={this.toggleImg} src={this.state.imageSrc} alt="" />;
//   }
// }

// export default ClickablePicture;

import React, { useState } from "react";

function ClickablePicture() {
  const [pic, setPic] = useState("/img/persons/maxence.png");

  const toggleImg = () => {
    if (pic === "/img/persons/maxence.png") {
      setPic("/img/persons/maxence-glasses.png");
    } else if (pic === "/img/persons/maxence-glasses.png") {
      setPic("/img/persons/maxence.png");
    }
  };

  return (
    <div>
      <img onClick={toggleImg} src={pic} alt="" />;
    </div>
  );
}

export default ClickablePicture;
