import './styles/index.css';

import Main from './pages/main';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  
    
    
  
  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/*" element={<Main />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
