import {
	FaGithub,
	FaHome,
	FaLinkedin,
	FaMailBulk,
	FaPhone,
	FaTwitter,
} from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
	return (
		<div className='footer'>
			<div className='footer-container'>
				<div className='footer-left'>
					<div className='location'>
						<div className='address'>
							<FaHome
								size={20}
								style={{ color: '#fff', marginRight: '2rem' }}
							/>
							<h4>Buenos Aires, Argentina</h4>
						</div>
						<div className='phone'>
							<div>
								<FaPhone
									size={20}
									style={{ color: '#fff', marginRight: '2rem' }}
								/>
							</div>
							<h4>+54 9 11 6233-3795</h4>
						</div>
						<div className='email'>
							<div>
								<FaMailBulk
									size={20}
									style={{ color: '#fff', marginRight: '2rem' }}
								/>
							</div>
							<h4>joel.j.mendez.m@gmail.com</h4>
						</div>
					</div>
				</div>
				<div className='footer-right'>
					<div className='footer-right__content'>
						<h4>
							<strong>More about me</strong>
						</h4>
						<p>
							If you want to know more about me, you can take a look my Github,
							LinkedIn, or Twiter
						</p>
					</div>

					<div className='social'>
						<FaLinkedin
							size={20}
							style={{ color: '#fff', marginRight: '1rem' }}
						/>
						<FaGithub
							size={20}
							style={{ color: '#fff', marginRight: '1rem' }}
						/>
						<FaTwitter
							size={20}
							style={{ color: '#fff', marginRight: '1rem' }}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
