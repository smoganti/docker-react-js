
import React from 'react';

class Option extends React.Component {
    render(){
      const jsx = (
      <div>
        <p>Here are your list of options todo</p>
        <ol>
        {
          this.props.options.map((str) =>{ return <li key={str}>{str}</li>})
        }
        </ol>
      </div>);
    return jsx;
  }
}

export default Option;