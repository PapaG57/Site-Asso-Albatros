import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import About from './pages/About';
import Missions from './pages/Missions';
import Blog from './pages/Blog';
import PostDetail from './pages/PostDetail';
import Donations from './pages/Donations';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/a-propos" element={<About />} />
          <Route path="/missions" element={<Missions />} />
          <Route path="/actualites" element={<Blog />} />
          <Route path="/actualites/:id" element={<PostDetail />} />
          <Route path="/faire-un-don" element={<Donations />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
