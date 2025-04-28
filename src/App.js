import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './home/Home';
import CategoryHome from './category-home/CategoryHome';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/simulationcases/" element={<Home />} />
        <Route path="/simulationcases/category" element={<CategoryHome />} />
      </Routes>
    </Router>
  );
}

export default App;
