import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import PatientList from './components/PatientList';
import PatientInfo from './components/PatientInfo';

class App extends Component {
	render() {
		return (
			<Router>
				<div>
					<Route 
						exact 
						path='/' 
						component={PatientList} 
					/>

					<Route 
						path='/patients/:patientId'
						component={PatientInfo}
					/>
				</div>
			</Router>
		)
	}
}

export default App