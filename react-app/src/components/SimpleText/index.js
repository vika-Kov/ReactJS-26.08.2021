import React from "react";

export const SimpleText = ({ name, age, someObj }) => {
  const line = "??????";
  const sayHello = () => {
    alert('HELLO');
  }

  return (
    <section>
      <h3>HELLO REACT, {name}</h3>
      <Message question={line} onClick={sayHello} />
    </section>
  );
};


class Message extends React.Component {
  render() {
    const { question, onClick } = this.props;
    
    return <span onClick={onClick}>I am message, {question}</span>;
  }
}