import React, { Component } from 'react'

class WoundForm extends Component {
	render() {
		return (
			<div className='container' style={{'padding': '3rem', 'maxWidth': '700px'}}>
				<div className="field">
					<div className="label">Wound type</div>
					<div className="control">
						<input type="text" className="input"/>
					</div>
				</div>
				<div className="field">
					<div className="label">Body location</div>
					<div className="control">
						<input type="text" className="input"/>
					</div>
				</div>
				<div className="field">
					<div className="label">Acquired in house</div>
					<div className="control">
						<div className="select">
							<select name="inHouseAcquired">
								<option value="true">true</option>
								<option value="false">false</option>
							</select>
						</div>
					</div>
				</div>
				<div className="field">
					<div className="label">Resolved</div>
					<div className="control">
						<div className="select">
							<select name="inHouseAcquired">
								<option value="true">true</option>
								<option value="false">false</option>
							</select>
						</div>
					</div>
				</div>
				<div className="field">
					<div className="label">Image URL</div>
					<div className="control">
						<input type="text" className="input"/>
					</div>
				</div>
				<button className="button is-primary is-rounded">Save</button>
			</div>
		)
	}
}

export default WoundForm