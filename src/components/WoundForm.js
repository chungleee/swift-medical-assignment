import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { connect } from 'react-redux'
import { getWound, updateWound } from '../actions/woundsActions'

class WoundForm extends Component {
	state = {
		bodyLocation: '',
		type: '',
		inHouseAcquired: '',
		resolved: '',
		imageUrl: ''
	}

	handleOnChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	handleOnUpdate = () => {
		const { bodyLocation, type, inHouseAcquired, resolved, imageUrl } = this.state
		const data = {
			type: "wounds",
			id: this.props.match.params.woundId,
			attributes: {
				type,
				bodyLocation,
				inHouseAcquired,
				resolved,
				imageUrl
			}
		}

		axios
			.patch(`http://0.0.0.0:3000/wounds/${this.props.match.params.woundId}`, { data }, {
				headers: {
					"Accept": "application/json",
					"Content-Type": "application/json"
				}
			})
			.then(response => {
				console.log(response)
			})
			.catch(error => {
				console.log(error)
			})
	}
	
	componentDidMount() {
		this.props.getWound(this.props.match.params.woundId)
	}

	render() {
		const { bodyLocation, imageUrl, inHouseAcquired, resolved, type } = this.props.wound
		console.log(this.props.wound)
		return this.props.wound.length === 0
			? (
				<div>...Loading...</div>
			)
			: (
				<div className='container' style={{'padding': '3rem', 'maxWidth': '700px'}}>
					<div className="field">
						<div className="label">Wound type</div>
						<div className="control">
							<input onChange={this.handleOnChange} name='type' defaultValue={type} type="text" className="input"/>
						</div>
					</div>
					<div className="field">
						<div className="label">Body location</div>
						<div className="control">
							<input onChange={this.handleOnChange} name='bodyLocation' defaultValue={bodyLocation} type="text" className="input"/>
						</div>
					</div>
					<div className="field">
						<div className="label">Acquired in house</div>
						<div className="control">
							<div className="select">
								<select onChange={this.handleOnChange} name='inHouseAcquired' defaultValue={inHouseAcquired} name="inHouseAcquired">
									<option value='true'>true</option>
									<option value='false'>false</option>
								</select>
							</div>
						</div>
					</div>
					<div className="field">
						<div className="label">Resolved</div>
						<div className="control">
							<div className="select">
								<select onChange={this.handleOnChange} name='resolved' defaultValue={resolved} name="resolved">
									<option value="true">true</option>
									<option value="false">false</option>
								</select>
							</div>
						</div>
					</div>
					<div className="field">
						<div className="label">Image URL</div>
						<div className="control">
							<input onChange={this.handleOnChange} name='imageUrl' defaultValue={imageUrl} type="text" className="input"/>
						</div>
					</div>
					<button onClick={this.handleOnUpdate} className="button is-primary is-rounded">Save</button>
				</div>
			)
	}
}

const mapStateToProps = (state) => {
	return {
		wound: state.woundById.wound
	}
}


export default connect(mapStateToProps, { getWound })(WoundForm)