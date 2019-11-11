
import React from 'react';

class AddOption extends React.Component{
  onFormSubmit(e){
    e.preventDefault();
console.log("OnForm is submitted ");

const option = e.target.elements.option.value.trim();

if(option){
  //  app.options.push(option);
    e.target.elements.option.value = '';
}
  }
    render(){
      const option_form = (
        <div>
          <form onSubmit={this.onFormSubmit}>
     <input type="text" name="option" />
     <button>Add Option</button>
 </form></div>

      );
      return option_form;
    }
  }
  
  export default AddOption;