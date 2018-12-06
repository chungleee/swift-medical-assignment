import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import PatientList from './components/PatientList';
import PatientDetail from './components/PatientDetails';

class App extends Component {
	render() {
		return (
			<Router>
				<div>
					<Route 
						exact 
						path='/patients' 
						component={PatientList} 
					/>

					<Route 
						path='/patients/:patientId'
						component={PatientDetail}
					/>
				</div>
			</Router>
		)
	}
}

export default App