import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import AddOption from './AddOption';

import * as serviceWorker from './serviceWorker';

class NotesApp extends React.Component {
 
  render (){

  const title = 'My Notes';
  const subtitle = 'Keep track of your errands using the aweosme app !';
  const options = ['option one','option two'];

   const jsx =( <div>
      <Header title={title} subtitle={subtitle}/>
      <Action />
      <Options options={options} />
      <AddOption />
    </div>);
    return jsx;
  }
}

ReactDOM.render(<NotesApp/>,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();