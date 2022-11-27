import './App.css';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Login from './components/login';
import Signup from './components/signup';


function App() {
  return (
    <BrowserRouter>
    <div className='container'>
        <Routes>
       <Route path="/login" element={<Login/>}/>
       <Route path="/signup" element={<Signup/>}/>
    </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
