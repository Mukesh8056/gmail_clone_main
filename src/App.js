import {BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import Home from './Components/Home/Home'
import Login from './Components/login/Login';
import Register from "./Components/Register/Register";

function App() {
  return (
    <div className="App">
    <Router>
		  <Routes>
			<Route path="/"  element={<Login/>} />
      <Route path="/reg" element={ <Register />} />
			<Route path="/home"  element={<Home />} />
		</Routes>
    </Router>
    </div>
  );
}

export default App;
