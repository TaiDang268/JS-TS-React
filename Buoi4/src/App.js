import React from 'react';
import useRoute from './hooks/useRoute';
import './App.css';

function App() {
  const elements=useRoute();
  return (
    <>{elements}</>
  );
}

export default App;
