import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './home/Home';
import CategoryHome from './category-home/CategoryHome';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<CategoryHome />} />
      </Routes>
    </Router>
  );
}

export default App;
