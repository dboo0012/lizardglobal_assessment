import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import React from 'react';
// import Detail from './table/Detail';


  function App() {
  /**
 * Renders route components.
 */
  return(
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path='/details' element={<Detail/>} /> */}
    </Routes>
  )
}

export default App;
