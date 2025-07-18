import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components';
import { HomePage, AboutPage, PricingPage, DocumentationPage, ContactPage } from './pages';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="pricing" element={<PricingPage />} />
          <Route path="documentation" element={<DocumentationPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
