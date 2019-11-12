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
    this.state = {
      options : []
    };
  };

  handleRemoveAll() {
    this.setState(() =>{
      return {
        options : []
      };
    });
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

    this.setState((prevState) =>  {
        return {
            options : prevState.options.concat(option)
      }
    })
  }

  render (){

  const title = 'My Notes';
  const subtitle = 'Keep track of your errands using the aweosme app !';
  
   const jsx =( <div >
      <Header title={title} subtitle={subtitle}/>
      <Action 
      hasOptions={this.state.options && (this.state.options.length >0)}
      handlePick={this.handlePick}/>
      <Options 
      options={this.state.options} 
      handleRemoveAll={this.handleRemoveAll} />
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
  <h3>{props.subtitle}</h3>
      </div>);
    return jsx;
    };

/* Stateless Option Component
* which only uses props
*/
const Option = (props) =>{
      const jsx = (
      <div>
        <p>Here are your list of options todo</p>
        <ol>
        {
          props.options.map((str) =>{ return <li key={str}>{str}</li>})
        }
        </ol>
      </div>);
    return jsx;
  };


/* Stateless Options Component
* which only uses props
*/
const Options =(props) => {

    const jsx = (<div>
      <button onClick={props.handleRemoveAll}>Remove All</button>
    {(props.options.length && <Option options={props.options}/> ) || <p>No options to display currently</p>}
    </div>);
    return jsx;
  };


ReactDOM.render(<NotesApp/>,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();