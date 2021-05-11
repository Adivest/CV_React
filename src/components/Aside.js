import React from 'react'
import Toggle from './Toggle'
import profile from './profile.jpg'

function Aside() {
	return (
		<>
			<div className='container ' id='aside'>
				<div className='center'>
					<figure className='image is-64x64'>
						<img src={profile} alt='' className='is-rounded' />
					</figure>
				</div>
				<div className='center'>
					<h3 className='profileName'>Ciupe Adrian</h3>
				</div>
				<div className='line'></div>
				<div className='center'>
					<h6 className='headers'>FRONTEND WEB DEVELOPER</h6>
				</div>
				<section className='section'>
					<div className='block'>
						<h6 className='headers'>Details</h6>
						<p>Sibiu</p>
						<p>0741077791</p>
						<p>ciupe_adrian@yahoo.com</p>
					</div>
					<div className='block'>
						<h6 className='headers'>Links</h6>
						<a href='https://adrian-ciupe.netlify.app/' target='_blank'>
							Portofolio
						</a>
					</div>
					<div className='block'>
						<h6 className='headers'>Skills</h6>
						<p>HTML 5</p>
						<progress className='progress is-primary is-small' value='100'>
							100%
						</progress>
						<p>CSS 3</p>
						<progress
							className='progress is-primary is-small'
							value='80'
							max='100'
						>
							80%
						</progress>
						<p>Javascript</p>
						<progress
							className='progress is-primary is-small'
							value='75'
							max='100'
						>
							75%
						</progress>
						<p>Angular</p>
						<progress
							className='progress is-primary is-small'
							value='50'
							max='100'
						>
							50%
						</progress>
						<p>React</p>
						<progress
							className='progress is-primary is-small'
							value='50'
							max='100'
						>
							50%
						</progress>
						<Toggle />
					</div>
				</section>
			</div>
		</>
	)
}

export default Aside
