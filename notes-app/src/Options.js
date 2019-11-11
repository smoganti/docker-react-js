
import React from 'react';
import Option from './Option.js';


class Options extends React.Component{

  constructor(props){
    super(props);
    this.handleRemoveAll = this.handleRemoveAll.bind(this);
  }
   handleRemoveAll(){
    alert('Remove All');
    console.log('props options ' + this.props.options);
  }
    render(){
      const jsx = (<div>
        <button onClick={this.handleRemoveAll}>Remove All</button>
      {(this.props.options.length && <Option options={this.props.options}/> ) || <p>No options to display currently</p>}
      </div>);
      return jsx;
    }
  } 

  export default Options;