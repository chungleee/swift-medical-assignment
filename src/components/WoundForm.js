import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getWound } from '../actions/woundsActions'

class WoundForm extends Component {
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
							<input defaultValue={type} type="text" className="input"/>
						</div>
					</div>
					<div className="field">
						<div className="label">Body location</div>
						<div className="control">
							<input defaultValue={bodyLocation} type="text" className="input"/>
						</div>
					</div>
					<div className="field">
						<div className="label">Acquired in house</div>
						<div className="control">
							<div className="select">
								<select defaultValue={inHouseAcquired} name="inHouseAcquired">
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
								<select defaultValue={resolved} name="resolved">
									<option value="true">true</option>
									<option value="false">false</option>
								</select>
							</div>
						</div>
					</div>
					<div className="field">
						<div className="label">Image URL</div>
						<div className="control">
							<input defaultValue={imageUrl} type="text" className="input"/>
						</div>
					</div>
					<button className="button is-primary is-rounded">Save</button>
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