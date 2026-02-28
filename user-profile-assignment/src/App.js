import React from 'react';
import UserProfile from './UserProfile';
import sonicPhoto from './sonic.png';

function App() {
  return (
      <div className="App">
        <UserProfile
            name="Sonic Ogilvie Menace Hedgehog"
            email="sonic@hedgehog.com"
            photoURL={sonicPhoto}
        />
      </div>
  );
}

export default App;