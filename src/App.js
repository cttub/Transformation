import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
import OutletNav from './Components/OutletNav';
import Homepage from './Components/Homepage';
import Services from './Components/Services';
import Gallery from './Components/Gallery';
import ContactUs from './Components/ContactUs';
import TermsOfUse from './Components/TermsOfUse';
import PrivacyPolicy from './Components/PrivacyPolicy';
function App() {
  return (
    <HashRouter>
    <Routes>
        <Route path="/" element={<OutletNav/>}>
        <Route index element={<Homepage/>} />
        <Route path="Services" element={<Services/>} />
        <Route path="Gallery" element={<Gallery/>} />
        <Route path="ContactUs" element={<ContactUs/>} />
        <Route path="TermsOfUse" element={<TermsOfUse/>} />
        <Route path="PrivacyPolicy" element={<PrivacyPolicy/>} />
        </Route>
    </Routes>
  </HashRouter>
  );
}

export default App;
