import React from "react";

export class Square extends React.Component {
  render() {
    let length = this.props.children.length - 1;
    var squareStyle = {
      height: "100%",
    };
    return (
      <div style={squareStyle}>
        {this.props.children.map((data, index) => {
          if (length !== index) {
            return this.props.children[index];
          }
          return false;
        })}
      </div>
    );
  }
}

export class Label extends React.Component {
  render() {
    let length = this.props.children.length - 1;
    var labelStyle = {
      fontFamily: "sans-serif",
      fontWeight: "bold",
      padding: 13,
      backgroundColor: "#203647",
      margin: 0,
    };

    return <p style={labelStyle}>{this.props.children[length]}</p>;
  }
}

export default class Card extends React.Component {
  render() {
    var cardStyle = {
      height: "100%",
      width: "100%",
      padding: 0,
    };
    return (
      <div style={cardStyle}>
        <Square>{this.props.children}</Square>
        <Label>{this.props.children}</Label>
      </div>
    );
  }
}
