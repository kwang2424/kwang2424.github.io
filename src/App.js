// import './App.css';
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Podcasts from './components/Podcasts';
import Projects from './components/Projects';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/podcasts" element={<Podcasts />}/>
        <Route path="/projects" element={<Projects />}/>
      </Route>
    </Routes>
    </>
    )
}

export default App;
