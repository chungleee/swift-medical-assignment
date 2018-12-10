import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import PatientList from './components/PatientList';
import PatientInfo from './components/PatientInfo';
import WoundForm from './components/WoundForm';

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

					<Route 
						path='/wounds/:woundId'
						component={WoundForm}
					/>
				</div>
			</Router>
		)
	}
}

export default App