import logo from './logo.svg';
import { HashRouter as Router, Route, Routes, Redirect } from 'react-router-dom'
import './App.css';
import Home from './routers/Home'
import Search from './routers/Search'
function App() {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/search/:id' element={<Search/>} exact/>
        </Routes>
    </Router>
  );
}

export default App;
