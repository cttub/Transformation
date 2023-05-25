import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
import OutletNav from './Components/OutletNav';
import Homepage from './Components/Homepage';
import Services from './Components/Services';
import OurWork from './Components/OurWork';
function App() {
  return (
    <HashRouter>
    <Routes>
        <Route path="/" element={<OutletNav/>}>
        <Route index element={<Homepage/>} />
        <Route path="Services" element={<Services/>} />
        <Route path="OurWork" element={<OurWork/>} />

        
        
 
        </Route>
    </Routes>
  </HashRouter>
  );
}

export default App;
