import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Admissions } from './pages/Admissions';
import { Academics } from './pages/Academics';
import { Facilities } from './pages/Facilities';
import { News } from './pages/News';
import { Contact } from './pages/Contact';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="admissions" element={<Admissions />} />
        <Route path="academics" element={<Academics />} />
        <Route path="facilities" element={<Facilities />} />
        <Route path="news" element={<News />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}
