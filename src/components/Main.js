import React, { Component } from 'react'

export default class Main extends Component {
	state = {
		isSwitchOn: true,
	}
	render() {
		const isOn = this.state.isSwitchOn
		return (
			<div>
				<section className='section'>
					<h6 className='header'>Profile</h6>
					<p>
						Highly driven Line leader with 12 years of experience in managing a
						team of 30 peoples in order to achieve the company and personal
						targets. Strategic mindset that focuses on problem-solving tasks and
						maintaining priorities on strict deadlines.I am newly qualified as a
						Frontend web developer ,and I am eager to make a career change,ready
						to assume a role where I have the opportunity to develop myself and
						be challenged.
					</p>
				</section>
				<section className='section'>
					<h6 className='header'>Employment History</h6>
					<p className='strong'>
						Line Leader, Continental Automotive Sibiu, Sibiu
					</p>
					<p className='light'>MARCH 2008 - PRESENT</p>
					<p>
						Directly responsible for 9 production lines and a team of 30 people.
						Responsible with organising the production ,in order to reach the
						targets of quantity and quality, control and management of stocks
						materials, clocking and everything related to team motivation and
						management.
					</p>
				</section>
				<section className={isOn ? 'section' : 'hidden'}>
					<h6 className='header'>Education</h6>
					<p className='strong'>
						High School Diploma, "Korosi Csoma Sandor", Covasna
					</p>
					<p className='light'>SEPTEMBER 1995 - JUNE 1999</p>
					<p className='strong'>
						Facultatea de Inginerie "Hermann Oberth", Sibiu
					</p>
					<p className='light'>SEPTEMBER 2008 - JUNE 2012</p>
					<p className='strong'>Leadership and Management Esential, Sibiu</p>
					<p className='light'>MAY 2014 - MAY 2017</p>
					<p className='strong'>Frontend Web Developer,Azimut Vision, Sibiu</p>
					<p className='light'>NOVEMBER 2017-APRIL 2018</p>
					<p>HTML 5,CSS 3 and JAVASCRIPT Course</p>
				</section>
				<button
					className='button is-black'
					onClick={() => this.setState({ isSwitchOn: !isOn })}
				>
					{isOn ? 'Show' : 'Hide'}
				</button>
			</div>
		)
	}
}
