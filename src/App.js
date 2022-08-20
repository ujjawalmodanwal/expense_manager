import './App.css';
import Welcome from './Components/LoginPage/Welcome';
import Home from './Components/MainPage/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Components/LoginPage/Login';
import Register from './Components/LoginPage/Register';

function App() {
  	return (
    	<div className="App">
			<BrowserRouter>
				<Routes>
          			<Route path="/Welcome" element = {<Welcome/>} />
					<Route path="/Login" element = {<Login/>} />
					<Route path="/Register" element = {<Register/>} />
					<Route path="/Home" element = {<Home/>} />
        		</Routes>
      		</BrowserRouter>
    	</div>
  	);
}

export default App;
