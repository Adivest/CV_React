import React, { Component } from 'react'

export default class Toggle extends Component {
	state = {
		on: false,
	}
	toggle = () => {
		this.setState({
			on: !this.state.on,
		})
	}
	render() {
		return (
			<div>
				{this.state.on && (
					<h1 style={{ fontSize: '32px', fontWeight: '500' }}>
						Hello!This is my CV!!!
					</h1>
				)}
				<button className='button is-primary' onClick={this.toggle}>
					Hello
				</button>
			</div>
		)
	}
}
