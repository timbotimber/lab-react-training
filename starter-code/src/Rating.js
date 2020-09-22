import React, { Component } from "react";

export default class Rating extends Component {
  render() {
    let rating = this.props.children;
    console.log(this.props.children);
    return (
      <>
        <div>
          {rating >= 0.5 ? "★" : "☆"}
          {rating >= 1.5 ? "★" : "☆"}
          {rating >= 2.5 ? "★" : "☆"}
          {rating >= 3.5 ? "★" : "☆"}
          {rating >= 4.5 ? "★" : "☆"}
        </div>
      </>
    );
  }
}
