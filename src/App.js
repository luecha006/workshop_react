import React from 'react';
import Navbar from './Component/Navbar';
import './App.css';

const App = (props) => {
  const [text, setText] = React.useState('React Application');
  return (
    <>
      <h1>Hello {text}</h1>
    </>
    // <Navbar />
  );
}

export default App;