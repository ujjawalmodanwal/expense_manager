import './App.css';
import Login from './Components/LoginPage/Login';
import Home from './Components/MainPage/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  	return (
    	<div className="App">
			<BrowserRouter>
				<Routes>
          			<Route path="/Login" element = {<Login/>} />
					<Route path="/Home" element = {<Home/>} />
        		</Routes>
      		</BrowserRouter>
    	</div>
  	);
}

export default App;
