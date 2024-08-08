import { Route, Routes } from 'react-router-dom';
import Home from './Home';

  function App() {
  /**
 * Renders route components.
 */
  return(
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/about" element={<About />} /> */}
    </Routes>
  )
}

export default App;
