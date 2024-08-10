import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import React from 'react';
import PostDetails from './table/PostDetails';


  function App() {
  /**
 * Renders route components.
 */
  return(
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details/:id" element={<PostDetails />} />
    </Routes>
  )
}

export default App;
