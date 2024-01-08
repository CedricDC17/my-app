// import logo from './logo.svg';
import './App.scss';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import FicheLogement from "./components/FicheLogement";
import NotFound from "./components/NotFound";
import Layout from './components/Layout';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/my-app" element={<Home />} />
          <Route path="/my-app/about" element={<About />} />
          <Route path="/my-app/fiche_logement/:logementId" element={<FicheLogement />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;