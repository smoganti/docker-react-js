
import React from 'react';

class Action extends React.Component { 
  handlePick(){
    return alert('Perform Action');
  }
    render(){
      return <button onClick={this.handlePick}>What Should I do ?</button>;
      }
  }

export default Action;