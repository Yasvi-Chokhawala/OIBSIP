import './App.css';
import {
	BrowserRouter as Router,
	Routes,
	Route
} from 'react-router-dom';
import Register from './components/Register/index.jsx';
import Login from './components/Login/index.jsx';
import SecuredPage from './components/SecuredPage/index.jsx';
import AlertBox from './components/AlertBox/index.jsx';
import { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
	height: 100vh;
	width: 100%;
	background: #BE93C5;
    background: -webkit-linear-gradient(to right, #7BC6CC, #BE93C5);
    background: linear-gradient(to right, #7BC6CC, #BE93C5);
`	

const App = () => {
	const [alert, setAlert] = useState(false)

	const showAlert = (type, message) => {
		setAlert({
			type: type,
			message: message
		})

		setTimeout(()=> {
			setAlert(false)
		}, 5000)
	}

	const closeAlert = () => {
		setAlert(false)
	}

	return (
		<>
		<Router>
			<Wrapper>
				<AlertBox alert={alert} closeAlert={closeAlert}/>
				<Routes>
					<Route exact path="/" element={<Register showAlert={showAlert}/>}/>
					<Route exact path="/register" element={<Register showAlert={showAlert}/>}/>
					<Route exact path="/login" element={<Login showAlert={showAlert}/>}/>
					<Route exact path="/secured" element={<SecuredPage showAlert={showAlert}/>}/>
				</Routes>
			</Wrapper>
		</Router>
		</>
	);
}

export default App;