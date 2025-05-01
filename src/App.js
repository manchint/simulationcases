import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './home/Home';
import CategoryHome from './category-home/CategoryHome';
import CaseStudiesList from './case-studies-list/CaseStudiesList';
import About from './about/About'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/simulationcases/" element={<Home />} />
        <Route path="/simulationcases/home" element={<Home />} />
        <Route path="/simulationcases/about" element={<About />} />
        <Route path="/simulationcases/casescenarios" element={<CaseStudiesList />} />
        <Route path="/simulationcases/category" element={<CategoryHome />} />
      </Routes>
    </Router>
  );
}

export default App;
