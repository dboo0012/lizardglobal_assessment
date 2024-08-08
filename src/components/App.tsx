import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Detail from './Detail';
import React from 'react';


  function App() {
  /**
 * Renders route components.
 */
  return(
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/details' element={<Detail />} />
      {/* <Route path="/about" element={<About />} /> */}
    </Routes>
  )
}

export default App;
