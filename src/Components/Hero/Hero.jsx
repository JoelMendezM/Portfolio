import './Hero.css';
import heroImage from '../../assets/20210824_101633.jpg';

const Hero = () => {
	return (
		<div className='hero'>
			<div className='hero-mask'>
				<img className='hero-image' src={heroImage} />
			</div>
			<div className='hero-content'>
				<h2>Hello I am</h2>
				<h1>Joel Mendez</h1>
				<p>
					<strong>And this is my DEVELOPER PORTFOLIO</strong>
				</p>
			</div>
		</div>
	);
};

export default Hero;
