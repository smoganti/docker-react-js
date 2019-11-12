import React from 'react';

class VisibilityToggle extends React.Component {

    constructor(props){
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {visibility : false};
    }

    handleToggleVisibility(){
            this.setState((prevState) =>{
                   return   { visibility : !prevState.visibility};

            });
        
    }
    render(){
        const jsx = ( <div>
            <button onClick={this.handleToggleVisibility}>Toggle</button>
            {this.state.visibility && <p>Visibility is present</p>}
            </div>
        ) ;

        return  jsx;
    }
}

export default VisibilityToggle;