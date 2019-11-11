import React from 'react';

class Header extends React.Component { 
    render(){
    const jsx = ( <div><h1>{this.props.title}</h1>
    <h3>{this.props.subtitle}</h3>
        </div>);
      return jsx;
      }
  }

export default Header;