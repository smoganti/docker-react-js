import React from 'react';
import ReactDOM from 'react-dom';
import AddOption from './AddOption';
import VisibilityToggle from './VisibilityToggle'

import * as serviceWorker from './serviceWorker';


class NotesApp extends React.Component {
 
  constructor(props){
    super(props);
    this.handleRemoveAll = this.handleRemoveAll.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.state = {
      options : []
    };
  };

  componentDidMount() {
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);

      if (options) {
        this.setState(() => ({ options }));
      }
    } catch (e) {
      // Do nothing at all
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
    }
  }

  componentWillUnmount(){
    console.log("Component will unmount");
  };

  handleRemoveAll() {
    this.setState(() =>({  options : []}));
  };

  handleDeleteOption(optionToRemove) {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => optionToRemove !== option)
    }));
  };

  handlePick() {
    if(this.state.options){
      // console.log(this.state.options+' '+this.state.options.length);
   let randomNumGen = Math.floor(Math.random() * this.state.options.length);
    alert(this.state.options[randomNumGen])
    }
  };

  handleAddOption(option){

    if(!option)
      return 'Please enter a value';
    else if(this.state.options.indexOf(option) > -1)
      return 'Option already exists!';

    this.setState((prevState) =>  ({  options : prevState.options.concat(option)  }))};

  render (){
  const subtitle = 'Keep track of your errands using the aweosme app !';
  
   const jsx =( <div >
      <Header subtitle={subtitle}/>
      <Action 
      hasOptions={this.state.options && (this.state.options.length >0)}
      handlePick={this.handlePick}/>
      <Options 
      options={this.state.options} 
      handleRemoveAll={this.handleRemoveAll} 
      handleDeleteOption={this.handleDeleteOption}/>
      <AddOption handleAddOption={this.handleAddOption}/>
      <VisibilityToggle />
    </div>);
    return jsx;
  }
}

/* Stateless Action Component
* which only uses props
*/
const Action = (props) => {
      return (<button 
                onClick={props.handlePick} 
                hidden={!props.hasOptions} >
                  What Should I do ?
      </button>);
      };

/* Stateless Header Component
* which only uses props
*/
const Header =(props)=> { 
 
  const jsx = ( <div><h1>{props.title}</h1>
  {props.subtitle && <h3>{props.subtitle}</h3>}
      </div>);
    return jsx;
    };

    Header.defaultProps = {
      title: "My Notes"
    }

/* Stateless Option Component
* which only uses props
*/
const Options = (props) => {
  return (
    <div>
      <button onClick={props.handleRemoveAll}>Remove All</button>
      {
        props.options.map((option) => (
          <Option
            key={option}
            optionText={option}
            handleDeleteOption={props.handleDeleteOption}
          />
        ))
      }
    </div>
  );
};


/* Stateless Options Component
* which only uses props
*/
const Option = (props) => {
  return (
    <div>
      {props.optionText}
      <button
        onClick={(e) => {
          props.handleDeleteOption(props.optionText);
        }}
      >
        remove
      </button>
    </div>
  );
};



ReactDOM.render(<NotesApp />,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();