import Login from './Pages/Login';
import ContextProvider from './context/contextProvider';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

function App() {
  return (
    <div>
      <ContextProvider>
        <Router>
          <Routes>
            <Route path='/' element={<Login />} />
          </Routes>
        </Router>

        <ToastContainer />  
      </ContextProvider>
    </div>
  );
}

export default App;
