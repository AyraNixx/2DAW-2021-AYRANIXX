import React from 'react';
import ReactDOM from 'react-dom';
import {NavBar} from '../src/App';

class ProfilePage extends React.Component {
  render() {
    return (
      
      <div>
        <NavBar />
      </div>
    );
  }
}

ReactDOM.render(
<React.StrictMode>
  <ProfilePage />
</React.StrictMode>,
  document.getElementById('root')
);


