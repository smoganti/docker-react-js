
import React from 'react';

class AddOption extends React.Component{

  constructor(props){
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
        error : undefined
    };
  }
  handleAddOption(e){
        e.preventDefault();
        console.log("OnForm is submitted ");

        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);
        e.target.elements.option.value = '';
        this.setState(()=>{
          return {error};
        });
  }
    render(){
      const option_form = (
        <div>
          {this.state.error && <p>{this.state.error}</p>}
          <form onSubmit={this.handleAddOption}>
     <input type="text" name="option" />
     <button>Add Option</button>
 </form></div>

      );
      return option_form;
    }
  }
  
  export default AddOption;