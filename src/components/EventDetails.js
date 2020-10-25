import React from 'react';
import logo from '../assets/home/logo.png';
import seth from '../assets/home/seth.jpg';
import donate from '../assets/home/donate.svg';
const EventDetails = () => {
	return (
		<div>
			<div style={{ width: '100%', height: '100%' }}>
				<div style={{ display: 'flex', flexFlow: 'row wrap' }}>
					<div style={{ flex: '1 50%' }}>
						<img src={logo} style={{ height: '50px', marginTop: '40px' }} />
						<br />
						<img src={seth} style={{ height: '175px' }} />
					</div>
					<div style={{ flex: '1 50%' }}>
						<h3 style={{ marginTop: '70px' }}>CURRENT WEIGHT</h3>
						<div
							style={{
								border: '1px solid black',
								width: '80%',
								marginRight: 'auto',
								marginLeft: 'auto',
								borderRadius: '5px',
								marginTop: '10px'
							}}
						>
							<h1 style={{ fontSize: '30pt' }} className="explore">
								999lbs
							</h1>
						</div>
						<h1 style={{ marginLeft: '-30px', marginTop: '20px' }}>Event Name</h1>
					</div>
					<div style={{ flex: '1 100%' }}>
						<hr style={{ width: '80%', marginLeft: 'auto', marginRight: 'auto', marginTop: '20px' }} />
					</div>
					<div style={{ flex: '1 100%' }}>
						<p
							style={{
								fontWeight: 300,
								fontSize: '14pt',
								marginLeft: '50px',
								marginRight: '50px',
								textAlign: 'left',
								marginTop: '20px'
							}}
						>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent dignissim id velit et
							euismod. Vestibulum blandit in leo a fringilla. Vivamus ornare risus pharetra maximus
							pharetra. Mauris tristique imperdiet orci ut iaculis. Mauris gravida est vel orci placerat
							lacinia. In consequat, enim sed rutrum rhoncus, mi dolor faucibus quam, eu accumsan urna
							neque ut tellus. Nam ut dapibus arcu. Sed luctus sapien nisl, at finibus ante posuere
							pulvinar. Proin aliquet venenatis mauris in euismod. Nam euismod luctus tortor, non cursus
							massa condimentum egestas. Quisque vitae velit at neque condimentum ullamcorper. Sed
							pulvinar ipsum id lacus feugiat, non posuere est placerat. Nunc mollis nisl et felis
							vulputate, rutrum aliquam nisl ultrices. Nunc hendrerit semper mi. Pellentesque luctus est
							neque, tempus hendrerit orci mollis a.
						</p>
					</div>
					<div style={{ flex: '1 100%' }}>
						<div
							style={{
								width: '80%',
								textAlign: 'left',
								marginLeft: '50px',
								marginRight: '50px',
								marginTop: '20px',
								backgroundColor: '#F4F4F4',
								borderRadius: '5px',
								paddingTop: '20px',
								paddingBottom: '20px',
								marginBottom: '30px'
							}}
						>
							<h3 style={{ marginLeft: '20px' }}>Details</h3>
							<h3 style={{ marginLeft: '20px' }}>Start:</h3>
							<h3 style={{ marginLeft: '20px' }}>End:</h3>
						</div>
					</div>
					<div style={{ flex: '1 30%' }}>
						<img src={seth} style={{ height: '100px' }} />
						<h4>Organizer</h4>
						<h5 style={{ fontWeight: 200 }}>USERNAME</h5>
					</div>
					<div style={{ flex: '1 70%', textAlign: 'left' }}>
						<h4>ABOUT USER</h4>
						<p style={{ marginRight: '55px', fontWeight: 200, fontSize: '10pt' }}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent dignissim id velit et
							euismod. Vestibulum blandit in leo a fringilla. Vivamus ornare risus pharetra maximus
							pharetra. Mauris tristique imperdiet orci ut iaculis. Mauris gravida est vel orci placerat
							lacinia.
						</p>
						<br />
						<h4>Email:</h4>
						<p style={{ marginRight: '55px', fontWeight: 200, fontSize: '10pt' }}>seth@seth.com</p>
					</div>
					<div style={{ flex: '1 100%', marginTop: '40px' }}>
						<img
							style={{ marginLeft: 'auto', marginRight: 'auto', height: '75px', width: '75px' }}
							src={donate}
						/>
						<h3>DONATE</h3>
					</div>
				</div>
			</div>
		</div>
	);
};

export default EventDetails;
