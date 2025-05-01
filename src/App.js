import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './home/Home';
import CategoryHome from './category-home/CategoryHome';
import CaseStudiesList from './case-studies-list/CaseStudiesList';
import About from './about/About'

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/simulationcases/" element={<Home />} />
        <Route exact path="/simulationcases/home" element={<Home />} />
        <Route exact path="/simulationcases/about" element={<About />} />
        <Route exact path="/simulationcases/casescenarios" element={<CaseStudiesList />} />
        <Route exact path="/simulationcases/category" element={<CategoryHome />} />
      </Routes>
    </Router>
  );
}

export default App;
