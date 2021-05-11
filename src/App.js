import React from 'react'
import Aside from './components/Aside'
import Main from './components/Main'
import 'bulma/css/bulma.css'
import './components/Aside.css'
import './components/Main.css'

import './App.css'

function App() {
	return (
		<div className='App'>
			<div className='container is-fluid'>
				<div className='columns'>
					<div className='column is-1'></div>
					<div className='column is-3 '>
						<Aside />
					</div>

					<div className='column is-7 '>
						<Main />
					</div>
					<div className='column is-1 '></div>
				</div>
			</div>
		</div>
	)
}

export default App
