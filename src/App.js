import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss';

import Layout from './components/Layout';
import Landing from './components/Landing';
import Scholarships from './components/pages/Scholarships';
import AboutUs from './components/pages/AboutUs';
import OurEvents from './components/pages/OurEvents';
import ContactUs from './components/pages/ContactUs';
import RegisterForm from './components/RegisterForm';
import ScholarViewTable from './components/ScholarViewTable';
import ScholarRegisterForm from './components/ScholarRegisterForm';
import UnderDevelopment from './components/UnderDevelopment'; // Assuming this is a placeholder for under-development pages

function App() {
  return (
    <Router>
      <Layout>
        <Routes>

          <Route path="/" element={<Landing />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/our-events" element={<OurEvents />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/scholarships" element={<Scholarships />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/admin" element={<ScholarViewTable />} />
          <Route path="/scholar-register" element={<ScholarRegisterForm />} />
          <Route path='/under-development' element={<UnderDevelopment />} />

        </Routes>
      </Layout>     
    </Router>
  );
}

export default App;
